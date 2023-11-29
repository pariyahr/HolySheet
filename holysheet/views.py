from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import Customer


# Create your views here.
def first_page(request):
    template = loader.get_template('first_page.html')
    return HttpResponse(template.render())


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if the username exists in the database
        try:
            customer = Customer.objects.get(first_name=username)
        except Customer.DoesNotExist:
            # Handle the case where the username doesn't exist
            # You can add appropriate error handling or redirect the user to an error page
            return redirect('first_page')

        # Perform any additional authentication logic here (e.g., comparing passwords)

        # If the authentication is successful, you can redirect the user to a success page
        return redirect('register')

    return render(request, 'login.html')


def register(request):
    template = loader.get_template('register.html')
    return HttpResponse(template.render())
