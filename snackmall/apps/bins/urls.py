from django.urls import path

import apps.bins.views as views

urlpatterns = [
    path('dashboard/', views.dashboard),
    path('get_A_list/', views.get_A_list),
    path('get_A_list_fixed/', views.get_A_list_fixed),
    path('get_S_list/', views.get_S_list),
    path('get_C_list/', views.get_C_list),
    path('order_cancel/', views.order_cancel),
    path('order_detail/<str:order_id>/', views.order_detail),
    path('order_confirm/', views.order_confirm)
]