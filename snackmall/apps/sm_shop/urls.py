from django.urls import path
import apps.sm_shop.views as views

urlpatterns = [
    path('', views.index),
    path('index/', views.index),
    path('check_user/', views.check_user),
    path('pay/', views.pay),
    path('check_pay/', views.check_pay)
]