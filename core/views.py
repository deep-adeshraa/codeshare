from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.status import *

import codeshare.views
import core.models
import core.serializers


class TestView(codeshare.views.AuthRequiredView, viewsets.ModelViewSet):
    """
    Test view created to test various rest framework functionalities
    """

    queryset = core.models.TestModel.objects.all()
    serializer_class = core.serializers.TestSerializer


class SignUpView(codeshare.views.BaseAPIView):
    permission_classes = [AllowAny]
    http_method_names = ['post']
    serializer_class = core.serializers.SignUpSerializer

    def post(self, request, **kwargs):
        """
        Endpoint to create new user
        """

        super(SignUpView, self).post(request, **kwargs)
        token = self.serializer.save()
        res = {'message': 'success', 'token': token.key}

        return Response(res, HTTP_201_CREATED)


class LoginView(codeshare.views.BaseAPIView):
    permission_classes = [AllowAny]
    http_method_names = ['post']
    serializer_class = core.serializers.LoginSerializer

    def post(self, request, **kwargs):
        """
        Gives auth token to user if credentials are valid
        """

        super(LoginView, self).post(request, **kwargs)
        token, _ = Token.objects\
            .get_or_create(user__email=self.serializer.validated_data['email'])

        return Response({'token': token.key}, HTTP_200_OK)


class LogOutView(codeshare.views.AuthRequiredView, codeshare.views.BaseAPIView):
    http_method_names = ['get']

    def get(self, request, **kwargs):
        try:
            request.user.auth_token.delete()
        except (AttributeError, ObjectDoesNotExist):
            pass

        return Response({"success": "Successfully logged out."},
                        status=HTTP_200_OK)

