from django.shortcuts import render
from .forms import SignupForm
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

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
    test = User.objects.filter(username__iexact='Fakhar').exists()
    # print(test)
    if data['is_taken']:
        # print("is taken")
        data['message'] = 'user already exists!'
    return JsonResponse(data)
