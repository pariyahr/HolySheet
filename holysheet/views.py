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
            customer = Customer.objects.get(username=username)
            if customer.password == password:
                return redirect('home_page')
        except Customer.DoesNotExist:
            # Handle the case where the username doesn't exist
            # You can add appropriate error handling or redirect the user to an error page
            return redirect('login')

        # Perform any additional authentication logic here (e.g., comparing passwords)

        # If the authentication is successful, you can redirect the user to a success page

    return render(request, 'login.html')


def register(request):
    if request.method == 'POST':
        firstname = request.POST.get('username')
        lastname = request.POST.get('username')
        gender = request.POST.get('username')
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirm_password = request.POST.get('password')
        email = request.POST.get('email')
        user = Customer.objects.create(username=username, password=password, email=email, first_name=firstname,
                                       last_name=lastname, gender=gender)

        # Perform any additional actions (e.g., login the user automatically)
        return redirect('login')  # Redirect to the login page after successful registration

    return render(request, 'register.html')

def home(request):
    template = loader.get_template('home_page.html')
    return HttpResponse(template.render())