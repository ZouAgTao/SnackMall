from django.urls import path
import apps.sm_auth.views as views

urlpatterns = [
    path('login/', views.login),
    path('relogin/', views.relogin),
    path('register/', views.register),
    path('register_err_phone/', views.register_err_phone),
    path('register_err_code/', views.register_err_code),
    path('check_login/', views.check_login),
    path('send_check_code/<str:phone>/', views.send_check_code),
    path('send_check_register/', views.send_check_register)
]