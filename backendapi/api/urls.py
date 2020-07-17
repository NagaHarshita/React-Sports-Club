from django.urls import path
from django.conf.urls import include
from django.contrib import admin
from rest_framework import routers
from .views import UserViewSet, SportViewSet

router = routers.DefaultRouter()    
router.register('users', UserViewSet)
router.register('sports', SportViewSet)


urlpatterns = [
    path('', include(router.urls)),
]