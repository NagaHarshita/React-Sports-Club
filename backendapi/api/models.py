from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4
import datetime 

# Create your models here.
class Sport(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

class client(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    userName = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)

class Company(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    country_code = models.CharField(max_length=10)
    website = models.CharField(max_length=50)

class slot(models.Model):
    user_id = models.ForeignKey(client,on_delete=models.CASCADE)
    sport_id = models.IntegerField(primary_key=True)
    date = models.DateField(default=datetime.now)
    time = models.TimeField(default=datetime.now)
    num_spaces = models.IntegerField(max_length=3)
    spaces_booked = models.IntegerField(max_length=3)
    spaces_left = models.IntegerField(max_length=3)

class resource(models.Model):
    sport_id = models.ForeignKey(slot,on_delete=models.CASCADE)
    nameOfTheGround = models.CharField(max_length=50)
    description = 