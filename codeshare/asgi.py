"""
ASGI config for tic_tac_toe project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from codeshare.middlewares import TokenAuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import core.urls

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'codeshare.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": TokenAuthMiddlewareStack(
        URLRouter(
            core.urls.websocket_urlpatterns
        )
    ),
})
