from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, SportSerializer
from .models import Sport

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SportViewSet(viewsets.ModelViewSet):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

# Create your views here.
