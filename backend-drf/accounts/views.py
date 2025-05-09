from typing import Type
from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from django.db.models.query import QuerySet
from rest_framework.permissions import BasePermission, AllowAny, IsAuthenticated
from rest_framework.serializers import Serializer
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class RegisterView(generics.CreateAPIView):
    queryset: 'QuerySet[User]' = User.objects.all()
    serializer_class: Type[Serializer] = UserSerializer
    permission_classes: list[Type[BasePermission]] = [AllowAny]

class ProtectedView(APIView):
    permission_classes: list[Type[BasePermission]] = [IsAuthenticated]

    def get(self, request) -> Response:
        response: dict[str, str] = {
            'status': 'Request was permitted'
        }
        return Response(response)
