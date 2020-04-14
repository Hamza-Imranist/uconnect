from django import forms
from django.contrib.auth.models import User


# SignUp Form
class SignupForm(forms.ModelForm):
    email = forms.EmailField(required=True)
    password = forms.CharField(widget=forms.PasswordInput())
    confirm_password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def clean(self):
        cleaned_data = super(SignupForm, self).clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get("confirm_password")
        email = cleaned_data.get('email')

        if password != confirm_password:
            self.add_error("confirm_password", 'passwords do not match!')
        elif User.objects.filter(email__iexact=email).exists():
            self.add_error("email", "This email is already registered")
