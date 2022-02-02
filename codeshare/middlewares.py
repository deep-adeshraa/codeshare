from django.contrib.auth.models import AnonymousUser
from rest_framework.authtoken.models import Token
from channels.middleware import BaseMiddleware
from channels.db import database_sync_to_async


class TokenAuthMiddlewareStack(BaseMiddleware):
    def __init__(self, inner):
        super().__init__(inner)

    @staticmethod
    @database_sync_to_async
    def get_user(token_key):
        try:
            token = Token.objects.get(key=token_key)
            return token.user
        except Token.DoesNotExist:
            return AnonymousUser()

    async def __call__(self, scope, receive, send):
        headers = dict(scope['headers'])

        if headers.get(b'Authorization'):
            token_name, token_key = headers[b'Authorization'].decode().split()

            if token_name == 'Token':
                scope['user'] = await self.get_user(token_key)
        else:
            scope['user'] = AnonymousUser()

        return await self.inner(scope, receive, send)
