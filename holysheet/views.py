import json

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
import fitz  # Import PyMuPDF
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from django.conf import settings
from django.core.files.temp import NamedTemporaryFile


# Create your views here.
def first_page(request):
    template = loader.get_template('first_page.html')
    return HttpResponse(template.render())


def add(request):
    if request.method == 'POST':
        print("meow")
        name = request.POST.get('name')
        genre = request.POST.get('genre')
        price = request.POST.get('price')
        file = request.POST.get('file')
        score = request.POST.get('score')
        composer = request.POST.get('composer')

        concerto = Concerto.objects.create(name=name, composer=composer, genre=genre, price=price, concerto_file=file, score=score, owner=Seller.objects.get(username=request.session.get('user_id')))
        user = Seller.objects.get(username=request.session.get('user_id'))
        user.posted_concertos.add(concerto)
        return JsonResponse({'message': 'submit successful'}, status=201)

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = None
        try:
            customer = Customer.objects.get(username=username)
            request.session['is_seller'] = False
            user = customer
        except Customer.DoesNotExist:
            try:
                seller = Seller.objects.get(username=username)
                request.session['is_seller'] = True
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




@api_view(['GET'])
def getData(request):
    return Response()

class customerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class sellerViewSet(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer

class convertoViewSet(viewsets.ModelViewSet):
    queryset = Concerto.objects.all()
    serializer_class = ConcertoSerializer

def component_list(request):
    if request.session.get('is_seller'):
        component = Seller.objects.get(username=request.session.get('user_id'))
        data = [{'username': component.username, 'followers': component.followers_num, 'followings': component.followings_num, 'posts': component.posts_num, 'is_seller': True}]
    else:
        component = Customer.objects.get(username=request.session.get('user_id'))
        data = [{'username': component.username, 'is_seller': False}]
    print(request.session.get('is_seller'))
    return JsonResponse(data, safe=False)


def handle(request):
    if request.session.get('is_seller'):
        component = Seller.objects.get(username=request.session.get('user_id'))
    else:
        component = Customer.objects.get(username=request.session.get('user_id'))

    component.username = request.POST.get('username')
    component.password = request.POST.get('password')
    component.save()
    return JsonResponse({'message': 'Component updated successfully'})


@api_view(('GET',))
def get_saved_sheets(request):
    if request.session.get('is_seller'):
        user = Seller.objects.get(username=request.session.get('user_id'))
    else:
        user = Customer.objects.get(username=request.session.get('user_id'))
    print("eshhghhhh")
    saved_sheets = user.saved_concertos

    serializer = ConcertoSerializer(saved_sheets, many=True)
    return Response(serializer.data)

def saved_list(request):
    if request.session.get('is_seller'):
        component = Seller.objects.get(username=request.session.get('user_id'))
    else:
        component = Customer.objects.get(username=request.session.get('user_id'))
    data = [{'saved': component.saved_concerto}]
    print(data)
    return JsonResponse(data, safe=False)

def save_sheet(request):
    data = json.loads(request.body)
    user = None
    try:
        user = Seller.objects.get(username=request.session.get('user_id'))
    except Seller.DoesNotExist:
        user = Customer.objects.get(username=request.session.get('user_id'))
    sheet_id = data.get('sheetId')
    try:
        concerto = Concerto.objects.get(id=sheet_id)
        user.saved_concertos.add(concerto)
        return JsonResponse({'status': 'success'})
    except Seller.DoesNotExist:
        return JsonResponse({'error': 'Seller not found'}, status=404)
    except Concerto.DoesNotExist:
        return JsonResponse({'error': 'Concerto not found'}, status=404)


def pdf_first_page(request, concerto_id):
    # Fetch the Concerto object by its ID
    print("poopoo")
    concerto = get_object_or_404(Concerto, pk=concerto_id)
    pdf_path = concerto.concerto_file.path  # Get the path of the PDF file

    # Open the PDF and extract the first page
    doc = fitz.open(pdf_path)
    new_doc = fitz.open()  # Create a new empty PDF
    new_doc.insert_pdf(doc, from_page=0, to_page=0)  # Insert the first page

    # Instead of saving to a static file, use a temporary file
    temp_file = NamedTemporaryFile(delete=False, suffix='.pdf', dir=settings.MEDIA_ROOT)
    new_doc.save(temp_file.name)
    new_doc.close()
    doc.close()

    # Serve the new PDF
    response = FileResponse(open(temp_file.name, 'rb'), content_type='application/pdf')
    response['Content-Disposition'] = 'inline; filename="first_page.pdf"'

    return response




@method_decorator(csrf_exempt, name='dispatch')
class ComponentDetailView(View):
    def get(self, request, component_id):

        customer = get_object_or_404(Seller, pk=component_id)
        data = {'username': customer.username, 'followers': customer.followers_num,
                'followings': customer.followings_num}
        return JsonResponse(data)
    def put(self, request, component_id):
        component = get_object_or_404(Seller, pk=component_id)

        data = json.loads(request.body.decode('utf-8'))

        component.username = data.get('username', component.username)
        component.password = data.get('password', component.password)

        component.save()

        return JsonResponse({'message': 'Component updated successfully'})






