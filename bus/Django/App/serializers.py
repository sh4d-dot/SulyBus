# myapp/serializers.py
from rest_framework import serializers
from .models import Users

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
