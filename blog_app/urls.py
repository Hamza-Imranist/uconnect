from django.urls import path, re_path
from .views import profile, PostListView, PostDetailView, PostCreateView,\
    PostUpdateView, PostDeleteView, UserPostListView, UserProfileView
from Uconnect_app.views import index


app_name = 'blog_app'

urlpatterns = [
    re_path(r'^$', PostListView.as_view(), name='blog_index'),
    path('index/', PostListView.as_view(), name='blog_index'),
    path('user_posts/<str:username>/', UserPostListView.as_view(), name='user_posts'),
    path('post_detail/<int:pk>/', PostDetailView.as_view(), name='post_detail'),
    path('post/new/', PostCreateView.as_view(), name='post_create'),
    path('post_detail/<int:pk>/update/', PostUpdateView.as_view(), name='post_update'),
    path('post_detail/<int:pk>/delete/', PostDeleteView.as_view(), name='post_delete'),
    path('login/', index, name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]
