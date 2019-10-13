from django.urls import path
import apps.sm_info.views as views

urlpatterns = [
    path('order_detail/<str:order_id>/<str:route>/', views.order_detail),
    path('my_orders/<str:route>/', views.my_orders),
    path('get_orders_list_info/', views.get_orders_list_info)
]