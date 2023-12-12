from . import views
from django.urls import include, path
from rest_framework import routers
from .views import customerViewSet

router = routers.DefaultRouter()
router.register(r'customer', customerViewSet)

urlpatterns = [
    path('first_page/', views.first_page, name='first_page'),
    path('first_page/login/', views.login, name='login'),
    path('first_page/register/', views.register, name='register'),
    path('home_page/', views.home, name='home_page'),
    path('', views.getData),
    path('api/', include(router.urls)),

]
