from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=24)
    email = models.EmailField(blank=True, null=True)
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, unique=True)
    age = models.IntegerField()