from django.shortcuts import render, redirect

def order_detail(request):
    return render(request, 'info/order_detail.html')