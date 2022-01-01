from django.conf.urls import url
from rest_framework.routers import DefaultRouter

import core.views as views
from core.consumers import CodeConsumer
router = DefaultRouter()


websocket_urlpatterns = [
    url(r'^ws/code/(?P<session_code>\w+)/$', CodeConsumer.as_asgi()),
]

# ViewSet items can be set like this.
router.register(r'test', views.TestView, basename='test')


# APIView items needs to be set as `as_view()`.
url_patterns = [
    url(r'login/$', views.LoginView.as_view(), name='login-view'),
    url(r'signup/$', views.SignUpView.as_view(), name='signup-view'),
    url(r'logout/$', views.LogOutView.as_view(), name='logout-view')
]

url_patterns += router.urls
