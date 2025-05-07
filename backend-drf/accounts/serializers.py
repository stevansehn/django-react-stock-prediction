from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password: str = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model: User = User
        fields: list[str] = ['username', 'email', 'password']

    def create(self, validated_data) -> User:
        # User.objects.create = save the password in a plain text 
        # User.objects.create_user = automatically hash the password
        user: User = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        # or, if I only have required fields,
        # user = User.objects.create_user(**validated_data)
        return user