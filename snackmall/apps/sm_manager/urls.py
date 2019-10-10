from django.urls import path
import apps.sm_manager.views as views

urlpatterns = [
    path('forget_psw/', views.forget_psw),
    path('add_address/<path:route>/', views.add_address),
    path('check_add_address/', views.check_add_address),
    path('user_home/', views.user_home),
    path('address_list_from_pay/', views.address_list_from_pay),
    path('address_list_from_homepage/', views.address_list_from_homepage),
    path('select_recv_infos/', views.select_recv_infos),
    path('delete_recv_infos/', views.delete_recv_infos),
    path('edit_address/<int:id>/<path:route>/', views.edit_address),
    path('check_edit_address/', views.check_edit_address),
]