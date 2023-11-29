from . import views
from django.urls import path

urlpatterns = [
    path('first_page/', views.first_page, name='first_page'),
    path('first_page/login/', views.login, name='login'),
    path('first_page/register/', views.register, name='register'),
    path('home_page/', views.home, name='home_page'),
]