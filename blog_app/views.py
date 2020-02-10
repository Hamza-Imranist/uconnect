from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import Post
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

# Create your views here.


@login_required
def blog_index(request):
    context_dict = {'posts': Post.objects.all()}
    response = render(request, 'blog_app/blog_index.html', context_dict)
    return response


class PostListView(LoginRequiredMixin, ListView):
    model = Post
    template_name = 'blog_app/blog_index.html'
    ordering = ['-date_posted']
    context_object_name = 'posts'
    paginate_by = 6


class UserPostListView(LoginRequiredMixin, ListView):
    model = Post
    template_name = 'blog_app/user_posts.html'
    context_object_name = 'posts'
    paginate_by = 6

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')


class PostDetailView(LoginRequiredMixin, DetailView):
    model = Post


class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/blog_app/'

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False


@login_required
def profile(request):
    context_dict = {}
    response = render(request, 'blog_app/profile.html', context_dict)
    return response


class UserProfileView(LoginRequiredMixin, ListView):
    model = Post
    template_name = 'blog_app/profile.html'
    context_object_name = 'posts'
    paginate_by = 6

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user).order_by('-date_posted')
