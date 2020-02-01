from django.shortcuts import render
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from .forms import SignupForm
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
import os
from pathlib import Path
from Uconnect import settings
from email.mime.image import MIMEImage
from django.core.mail import EmailMultiAlternatives, EmailMessage

# Create your views here.


def index(request):
    context_dict = {}
    if request.method == "POST":
        print(request.POST)
        if request.POST.get('submit') == "signup":                     # Signup Form
            print("In signup")
            form = SignupForm(request.POST)
            context_dict.update({'form': form})
            if form.is_valid():
                user = form.save()
                user.set_password(user.password)
                send_email(user)
                user.save()
                # return HttpResponseRedirect(reverse("Uconnect_app:index"))
                return JsonResponse({'user_created': True})
            else:
                # errors = form.errors.as_json()
                errors = dict(form.errors.items())
                print(errors)
                return JsonResponse({'errors': errors})

        elif request.POST.get('submit') == "login":                    # Login Form
            print("In login")
            username = request.POST.get('username')
            password = request.POST.get('password')
            print(username)
            print(password)
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    login(request, user)
                    print('logged in')
                    return JsonResponse({'is_valid': True})
                else:
                    print('acc not active')
                    return JsonResponse("user not active")
            else:
                print('invalid credentials')
                return JsonResponse({'is_valid': False})

    else:
        # form = SignupForm()
        context_dict.update({'form': SignupForm()})
    response = render(request, 'index.html', context_dict)
    return response


@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse("Uconnect_app:index"))


# def signup_form_view(request):
#     print(request.method)
#     if request.method == 'POST':
#         print("In post")
#         form = SignupForm(data=request.POST)
#         # print(form.username.errors)
#         if form.is_valid():
#             form.save()
#             print("Form is saved")
#             return HttpResponseRedirect(reverse('Uconnect_app:index'))
#     else:
#         form = SignupForm()
#         print("U r in else")
#     response = render(request, 'index.html', {'form': form})
#     return response

@login_required
def user_profile_view(request):
    context_dict = {}
    response = render(request, 'user_profile.html', context_dict)
    return response


def validate_username(request):
    """function to validate entered username in signup form"""
    username = request.GET.get('username')
    print(username)
    data = {
        'is_taken': User.objects.filter(username__iexact=username).exists(),
    }
    # print(data['is_taken'])
    # test = User.objects.filter(username__iexact='Fakhar').exists()
    # print(test)
    if data['is_taken']:
        # print("is taken")
        data['message'] = 'user already exists!'
    return JsonResponse(data)


def send_email(form):
    subject = "Uconnect Signup Successful"
    html_message = render_to_string('signup_email.html', {'form': form})
    plain_message = strip_tags(html_message)
    from_email = 'uconnect786@gmail.com'
    to_email = [form.email]

    msg = EmailMultiAlternatives(subject=subject, body=plain_message, from_email=from_email, to=to_email)
    msg.attach_alternative(html_message, 'text/html')
    msg.content_subtype = 'html'
    msg.mixed_subtype = 'related'
    images = [
        settings.BASE_DIR + '/static/images/blogsImage.png',
        settings.BASE_DIR + '/static/images/logo.png',
        settings.BASE_DIR + '/static/images/facebook2x.png',
        settings.BASE_DIR + '/static/images/linkedin2x.png',
        settings.BASE_DIR + '/static/images/twitter2x.png',
    ]

    for img_path in images:
        print(img_path)
        with open(img_path, 'rb') as image:
            print(image)
            image_name = Path(img_path).name
            print(image_name)
            banner_image = MIMEImage(image.read())
            print(banner_image)
            banner_image.add_header('Content-ID', f'<{image_name}>')
            msg.attach(banner_image)
    msg.send()
