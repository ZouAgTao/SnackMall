from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from django.http import HttpResponse

import json

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

def get_orders_list_info(request):
    user_id = request.session.get('user', None)
    page_num = request.POST.get('page', None)

    if not user_id:
        return redirect('/auth/login/')

    if not page_num:
        return redirect('/index/')

    page_num = int(page_num)

    data_page_info = {}

    from .models import Table
    from apps.sm_auth.models import User
    import datetime

    users = User.objects.filter(id=user_id)
    tables = Table.objects.filter(user_id=users[0]).order_by('-dt')
    paginator = Paginator(tables, 8)

    print(paginator.num_pages)

    if paginator.count == 0 or page_num > paginator.num_pages:
        data_page_info['result'] = False
    else:
        data_page_info['result'] = True
        temp_list = []
        data_page_info['list'] = temp_list

        page_content = paginator.get_page(page_num)
        for page_content_item in page_content:

            shop_list = json.loads(page_content_item.goods)

            temp_list.append({
                'status' : page_content_item.get_status_display(),
                'dt' : datetime.datetime.strftime(page_content_item.dt,'%Y-%m-%d %H:%M:%S'),
                'shopList' : shop_list
            })

    data_page_info = json.dumps(data_page_info)

    return HttpResponse(data_page_info)