from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import Customer
from .models import Seller
from django.contrib import messages
from django.utils.translation import get_language
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import *
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View


# Create your views here.
def first_page(request):
    template = loader.get_template('first_page.html')
    return HttpResponse(template.render())


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = None
        try:
            customer = Customer.objects.get(username=username)
            user = customer
        except Customer.DoesNotExist:
            try:
                seller = Seller.objects.get(username=username)
                user = seller
            except Seller.DoesNotExist:
                print("poop")
                return JsonResponse({'message': 'User does not exist'}, status=401)

        if user is not None:

            if user.password == password:
                request.session['user_id'] = user.username
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'message': 'Wrong username or password'}, status=401)
        else:
            return JsonResponse({'message': 'User does not exist'}, status=401)
    print("hello")
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
        print(request.POST.get('seller'))
        is_seller = request.POST.get('seller') == 'on'
        if (
            first_name and last_name and email and username and password and
            confirm_password and phone_number and gender
        ):
            if password == confirm_password:
                if not is_seller:
                    customer = Customer.objects.create(
                        first_name=first_name,
                        last_name=last_name,
                        email=email,
                        username=username,
                        password=password,
                        contact_number=phone_number,
                        gender=gender
                    )
                else:
                    seller = Seller.objects.create(
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

def component_list(request):
    component = Seller.objects.get(username=request.session.get('user_id'))
    data = [{'username': component.username, 'followers': component.followers_num, 'followings': component.followings_num}]
    print(data)
    return JsonResponse(data, safe=False)


def handle(request):
    # if request.method == 'GET':
    #     print("llllll")
    #     customer = get_object_or_404(Seller, pk=component_id)
    #     data = {'username': customer.username, 'followers': customer.followers_num,
    #             'followings': customer.followings_num}
    #     return JsonResponse(data)
    if request.method == 'POST':
        component = Seller.objects.get(username=request.POST.get('pre_username'))
        component.username = request.POST.get('username')
        component.password = request.POST.get('password')
        component.save()
        return JsonResponse({'message': 'Component updated successfully'})






