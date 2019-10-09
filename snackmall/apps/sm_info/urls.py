from django.urls import path
import apps.sm_info.views as views

urlpatterns = [
    path('order_detail/', views.order_detail)
]