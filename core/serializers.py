from django.db import transaction
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from rest_framework import serializers

import core.models


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = core.models.TestModel
        fields = ('test_text', )


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, data):
        self.user = User.objects.filter(email=data['email']).first()

        if not self.user:
            raise serializers.ValidationError({
                "user": "User does not exists"
            })

        is_valid_pass = check_password(data['password'], self.user.password)

        if not is_valid_pass:
            raise serializers.ValidationError({
                'password': "Incorrect credentials"
            })

        return data


class SignUpSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, min_length=6)
    confirm_password = serializers.CharField(required=True, min_length=6)

    def validate(self, data):
        """
        Used for object wide validation
        """

        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({
                'confirm_password': "This should be same as password"
            })

        return data

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError('Email already exists')

        return value

    @transaction.atomic()
    def create(self, validated_data):
        """
        Creates user instance and Token instance.
        """

        user = User()
        user.username = validated_data['email']
        user.email = validated_data['email']
        user.set_password(validated_data['password'])
        user.save()

        token = Token.objects.create(user=user)

        return token
