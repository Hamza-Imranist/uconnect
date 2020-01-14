from django.urls import path
from .views import home

app_name = 'blog_app'
urlpatterns = [
    path('', home, name='blog_home')
]
