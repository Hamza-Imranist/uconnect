from django.shortcuts import render

# Create your views here.


def home(request):
    context_dict = {}
    response = render(request, 'blog_app/Home.html', context_dict)
    return response
