from channels.generic.websocket import AsyncJsonWebsocketConsumer


class BaseJsonWebSocketConsumer(AsyncJsonWebsocketConsumer):
    """
    Base class for websocket consumer to be inherited in entire application
    with out custom authentication check.
    """

    async def connect(self, group_name):
        """
        Before opening websocket connection check user is valid or not

        TODO: check if there is any existing connection for this user.
        """
        user = self.scope['user']

        if not user.is_authenticated:
            self.send({"close": True})
        else:
            await self.channel_layer.group_add(group_name, self.channel_name)
            await self.accept()
