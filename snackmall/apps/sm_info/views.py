from django.shortcuts import render, redirect

def order_detail(request, route):
    if route == 'from_pay':
        pass
    elif route == 'from_index':
        pass
    elif route == 'from_homepage':
        pass
    else:
        return redirect('/index/')


    return render(request, 'info/order_detail.html')

def my_orders(request, route):

    return_url = '/index/'

    if route == 'from_index':
        return_url = '/index/'
    elif route == 'from_homepage':
        return_url = '/manager/user_home/'
    else:
        return redirect('/index/')

    return render(request, 'info/my_orders.html', context={'data_return_url' : return_url})