from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password

from .serializers import UserSerializer
from . models import User

@api_view(['POST'])
def signup(request):
    data = request.data.copy()
    data['password'] = make_password(data['password'])

    serializer = UserSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=201)

    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login(request):
    phone = request.data.get('phone')
    password = request.data.get('password')

    try:
        user = User.objects.get(phone=phone)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)

    # Check password
    if check_password(password, user.password):
        return Response({
            "message": "Login successful",
            "user": {
                "name": user.name,
                "email": user.email,
                "phone": user.phone,
                "age": user.age
            }
        })
    else:
        return Response({"error": "Invalid password"}, status=400)