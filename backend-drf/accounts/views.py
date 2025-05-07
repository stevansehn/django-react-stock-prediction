from typing import Type
from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from django.db.models.query import QuerySet
from rest_framework.permissions import AllowAny, BasePermission
from rest_framework.serializers import Serializer
from .serializers import UserSerializer

class RegisterView(generics.CreateAPIView):
    queryset: 'QuerySet[User]' = User.objects.all()
    serializer_class: Type[Serializer] = UserSerializer
    permission_classes: list[Type[BasePermission]] = [AllowAny]