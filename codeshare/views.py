from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class AuthRequiredView(object):
    """
    Parent class to require authentication for APIs.
    To be inherited in entire application to remove redundant code.
    """

    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]


class BaseAPIView(APIView):
    """
    Parent APIView class to be inherited in entire application with some
    custom modification and removal of redundant code
    """

    def __init__(self):
        self.serializer = None

    def validate_request(self, request, **kwargs):
        """
        Validates the request data from making its serializer object
        """

        if getattr(self, 'serializer_class') is None:
            return

        self.serializer = self.serializer_class(data=request.data)
        self.serializer.is_valid(raise_exception=True)

    def post(self, request, **kwargs):
        """
        Validates the request data before executing code and returns serializer
        object
        """

        return self.validate_request(request, **kwargs)
