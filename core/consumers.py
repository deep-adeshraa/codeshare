import json

from codeshare.consumers import BaseJsonWebSocketConsumer


class CodeConsumer(BaseJsonWebSocketConsumer):
    async def connect(self):
        self.session_code = self.scope['url_route']['kwargs']['session_code']
        await super(CodeConsumer, self).connect(group_name=self.session_code)

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.session_code,
            self.channel_name
        )

    async def receive(self, text_data):
        """
        Receive message from WebSocket.
        Get the event and send the appropriate event
        """
        response = json.loads(text_data)
        event = response.get("event", None)
        code = response.get("code", None)
        language = response.get("language", None)

        await self.channel_layer.group_send(self.room_group_name, {
            'type': 'send_message',
            'code': code,
            'language': language,
            })

    async def send_message(self, res):
        """ Receive message from room group """
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            "payload": res,
        }))
