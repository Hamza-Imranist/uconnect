"""
Uconnect_app's urls file
"""

from django.urls import path, re_path
from .views import index, user_profile_view, user_logout, validate_username, mb_signup, mb_login

app_name = 'Uconnect_app'
urlpatterns = [
    re_path(r'^$', index, name='index'),
    path('index/', index, name='index'),
    path('user_profile/', user_profile_view, name='user_profile'),
    path('login/', index, name='login'),
    path('logout/', user_logout, name='logout'),
    path('validate-username/', validate_username, name='validate_username'),
    path('mb_signup/', mb_signup, name='mobile_signup'),
    path('mb_login', mb_login, name='mobile_login'),
]
