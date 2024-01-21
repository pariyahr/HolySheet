from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import Customer
from django.contrib import messages
from django.utils.translation import get_language
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import *


# Create your views here.
def first_page(request):
    template = loader.get_template('first_page.html')
    return HttpResponse(template.render())


def login(request):
    if request.method == 'POST':
        print("pif pif")
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if the username exists in the database
        try:
            customer = Customer.objects.get(username=username)
            if customer.password == password:
                messages.info(request, 'Successfully logged in')
                print("hoora")
                return JsonResponse({'message': 'login successful'})

            else:
                messages.info(request, 'Wrong username of password')
        except Customer.DoesNotExist:
            # Handle the case where the username doesn't exist
            # You can add appropriate error handling or redirect the user to an error page
            return JsonResponse({'message': 'login not successful'})

        # Perform any additional authentication logic here (e.g., comparing passwords)

        # If the authentication is successful, you can redirect the user to a success page

    return JsonResponse({'message': 'poop'})


def register(request):
    print("koskhole khar")
    return JsonResponse({'message' : 'Registration successful'})


def home(request):
    print("home ")
    return JsonResponse({'message': 'in home page'})


@api_view(['GET'])
def getData(request):
    return Response()

class customerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class sellerViewSet(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer










