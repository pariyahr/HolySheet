from . import views
from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'customer', customerViewSet)
router.register(r'seller', sellerViewSet)

urlpatterns = [
    path('first_page/', views.first_page, name='first_page'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('home_page/', views.home, name='home_page'),
    path('', views.getData),
    path('api/', include(router.urls)),
    path('api/components/', component_list, name='component-list'),
    path('api/components/<int:component_id>/', ComponentDetailView.as_view(), name='component-detail'),

]
