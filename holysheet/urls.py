from . import views
from django.urls import path

urlpatterns = [
    path('first_page/', views.first_page, name='first_page'),
    path('first_page/login/', views.login, name='login'),
]