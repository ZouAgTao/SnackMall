from django.urls import path
import apps.sm_manager.views as views

urlpatterns = [
    path('forget_psw/', views.forget_psw),
    path('add_address/<path:route>/', views.add_address),
    path('check_add_address/', views.check_add_address),
]