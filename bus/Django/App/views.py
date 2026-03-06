from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

# backend/views.py
from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST'])
def google_login(request):
    # handle Google token here
    return JsonResponse({"message": "Received token"})