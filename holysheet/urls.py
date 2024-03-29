from . import views
from django.urls import include, path
from rest_framework import routers
from .views import *
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'customer', customerViewSet)
router.register(r'seller', sellerViewSet)
router.register(r'concerto', convertoViewSet)

urlpatterns = [
    path('first_page/', views.first_page, name='first_page'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('Add/', views.add, name='Add'),
    path('', views.getData),
    path('api/', include(router.urls)),
    path('components/', views.component_list, name='component-list'),
    path('components/new/', views.handle, name='component-detail'),
    path('saved/', views.saved_list),
    path('api/components/', component_list, name='component-list'),
    path('api/components/<int:component_id>/', ComponentDetailView.as_view(), name='component-detail'),
    path('api/save_sheet/', views.save_sheet, name='save_sheet'),
    path('api/follow/', views.follow, name='save_sheet'),
    path('concerto/', views.get_saved_sheets, name='saved_sheets'),
    path('concerto/posted/', views.get_posted_sheets, name='saved_sheets'),
    path('concerto/bought/', views.get_bought_sheets, name='saved_sheets'),
    path('concerto/<int:concerto_id>/', views.pdf_first_page, name='pdf_first_page'),
    path('seller/<int:seller_id>', views.seller_pic, name="seller_pic"),
    path('buySheet/<int:sheet_id>', views.buySheet, name="buySheet"),
    path('download_concerto/<int:concerto_id>/', views.download_concerto, name='download_concerto'),



] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
