"""
Uconnect_app's urls file
"""

from django.urls import path
from .views import index, user_profile_view, user_logout, validate_username

app_name = 'Uconnect_app'
urlpatterns = [
    path('index/', index, name='index'),
    path('user_profile/', user_profile_view, name='user_profile'),
    path('login/', index, name='login'),
    path('logout/', user_logout, name='logout'),
    path('validate-username', validate_username, name='validate_username'),
]
