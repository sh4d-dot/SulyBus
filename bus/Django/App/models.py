from django.db import models

# Create your models here.

class Users(models.Model):
    firstName = models.CharField(max_length=12)
    lastName = models.CharField(max_length=12)
    phoneNumber = models.IntegerField
    email = models.EmailField
    password = models.CharField(max_length=25)