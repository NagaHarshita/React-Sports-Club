from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4
import datetime, django.utils.timezone  as timezone

# Create your models here.
class Sport(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Company(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    country_code = models.CharField(max_length=10)
    website = models.CharField(max_length=50)

class Client(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    company_id = models.ForeignKey(Company,on_delete=models.CASCADE)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)

class Resource(models.Model):
    sport_id = models.ForeignKey(Sport,on_delete=models.CASCADE)
    nameOfTheGround = models.CharField(max_length=50)
    description = models.CharField(max_length=30)
    disabled = models.BooleanField(blank=False)

class Slot(models.Model):
    id = models.IntegerField(primary_key=True, default=0)
    resource_id = models.CharField(max_length=30)
    date = models.CharField(max_length=30)
    start_time = models.CharField(max_length=30)
    end_time = models.CharField(max_length=30)
    min_spaces = models.IntegerField(default=2)
    max_spaces = models.IntegerField(default=2)
    spaces_booked = models.IntegerField(default=0)

# class ShiftPattern(models.Model):
#     id = models.IntegerField(primary_key=True)
#     start_date = models.DateField()
#     end_date = models.DateField()
#     start_time = models.DateTimeField()
#     end_time = models.DateTimeField()
#     repeat_count = models.IntegerField()
#     frequency = models.CharField(max_length=30)

# class Shift(models.Model):
#     date = models.DateField()
#     start = models.IntegerField()
#     end = models.IntegerField()

# class Booking(models.Model):
#     id = models.IntegerField(primary_key=True)
#     client_id = models.OneToOneField(Client, on_delete=models.CASCADE, default=0)
#     slot_id = models.ForeignKey(Slot, on_delete=models.CASCADE, default=0)
#     status = models.CharField(max_length=20)

# class Schedule(models.Model):
#     id = models.IntegerField(primary_key=True)
