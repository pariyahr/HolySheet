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
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            customer = Customer.objects.get(username=username)

            if customer.password == password:
                return JsonResponse({'message': 'login successful'}, status=200)
            else:
                return JsonResponse({'message': 'Wrong username or password'}, status=401)
        except Customer.DoesNotExist:
            return JsonResponse({'message': 'User does not exist'}, status=401)

    return JsonResponse({'message': 'Invalid request'}, status=400)


def register(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        phone_number = request.POST.get('phone_number')
        gender = request.POST.get('gender')

        if (
            first_name and last_name and email and username and password and
            confirm_password and phone_number and gender
        ):
            if password == confirm_password:
                customer = Customer.objects.create(
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    username=username,
                    password=password,
                    contact_number=phone_number,
                    gender=gender
                )
                return JsonResponse({'message': 'Registration successful'}, status=201)
            else:

                return JsonResponse({'message': 'Password and confirm password do not match'}, status=401)
        else:
            return JsonResponse({'message': 'Missing required fields'}, status=402)

    return JsonResponse({'message': 'Invalid request'}, status=400)


def home(request):
    print("home")
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










