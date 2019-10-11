from django.urls import path
import apps.sm_info.views as views

urlpatterns = [
    path('order_detail/<str:route>/', views.order_detail),
    path('my_orders/<str:route>/', views.my_orders)
]