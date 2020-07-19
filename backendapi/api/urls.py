from django.urls import path
from django.conf.urls import include
from django.contrib import admin
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()    
router.register('users', UserViewSet)
router.register('sports', SportViewSet)
router.register('company', CompanyViewSet)
router.register('client', ClientViewSet)
router.register('resource', ResourceViewSet)
router.register('slot', SlotViewSet)
router.register('slot', SlotCreateView, base_name='create')

urlpatterns = [
    path('', include(router.urls)),
    # path('create/', SlotCreateView.as_view())
]