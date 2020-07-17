from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ 'id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = ['id', 'name']

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'country_code', 'website']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields =['user_id', 'company_id', 'email', 'phone_number']

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ['sport_id', 'nameOfTheGround', 'description', 'disabled']
        def destroy(self, request, pk=None):
            pass

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = ['id', 'resource_id', 'date', 'start_time', 'end_time', 'min_spaces', 'spaces_booked', 'max_spaces']
        

    
