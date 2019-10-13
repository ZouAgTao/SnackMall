from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Config
from apps.sm_info.models import Table

import json
import datetime

def dashboard(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return redirect('/index/')

    return render(request, 'bins/order_list_toB.html')

def get_A_list_fixed(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return HttpResponse(json.dumps({'updated': False}))

    data_order_list = []

    tables = Table.objects.filter(status='A').order_by('dt')

    # if len(tables) == 0:
    #     return HttpResponse(json.dumps({'updated': False}))

    for table_item in tables:
        data_order_list.append({
            'id': table_item.id,
            'dt': datetime.datetime.strftime(table_item.dt, '%Y-%m-%d %H:%M:%S'),
            'status': table_item.get_status_display(),
            'recv_method': table_item.recv_method,
            'recv_info': json.loads(table_item.recv_info),
            'shopList': json.loads(table_item.goods)
        })

    return HttpResponse(json.dumps({
        'updated': True,
        'list': data_order_list
    }))

def get_A_list(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return HttpResponse(json.dumps({'updated' : False}))

    data_order_list = []

    A_orders_updated = Config.objects.get(key='A_orders_updated')
    if A_orders_updated.value == 'true':
        A_orders_updated.value = 'false'
        A_orders_updated.save()

        tables = Table.objects.filter(status='A').order_by('dt')

        # if len(tables) == 0:
        #     return HttpResponse(json.dumps({'updated': False}))

        for table_item in tables:
            data_order_list.append({
                'id' : table_item.id,
                'dt' : datetime.datetime.strftime(table_item.dt,'%Y-%m-%d %H:%M:%S'),
                'status' : table_item.get_status_display(),
                'recv_method' : table_item.recv_method,
                'recv_info' : json.loads(table_item.recv_info),
                'shopList' : json.loads(table_item.goods)
            })

        return HttpResponse(json.dumps({
            'updated': True,
            'list' : data_order_list
        }))
    else:
        return HttpResponse(json.dumps({'updated' : False}))

def get_S_list(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return HttpResponse(json.dumps({'updated': False}))

    data_order_list = []

    tables = Table.objects.filter(status='S').order_by('-dt')

    # if len(tables) == 0:
    #     return HttpResponse(json.dumps({'updated': False}))

    for table_item in tables:
        data_order_list.append({
            'id': table_item.id,
            'dt': datetime.datetime.strftime(table_item.dt, '%Y-%m-%d %H:%M:%S'),
            'status': table_item.get_status_display(),
            'recv_method': table_item.recv_method,
            'recv_info': json.loads(table_item.recv_info),
            'shopList': json.loads(table_item.goods)
        })

    return HttpResponse(json.dumps({
        'updated': True,
        'list': data_order_list
    }))

def get_C_list(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return HttpResponse(json.dumps({'updated': False}))

    data_order_list = []

    tables = Table.objects.filter(status='C').order_by('-dt')

    # if len(tables) == 0:
    #     return HttpResponse(json.dumps({
    #         'updated': True,
    #     }))

    for table_item in tables:
        data_order_list.append({
            'id': table_item.id,
            'dt': datetime.datetime.strftime(table_item.dt, '%Y-%m-%d %H:%M:%S'),
            'status': table_item.get_status_display(),
            'recv_method': table_item.recv_method,
            'recv_info': json.loads(table_item.recv_info),
            'shopList': json.loads(table_item.goods)
        })

    return HttpResponse(json.dumps({
        'updated': True,
        'list': data_order_list
    }))

def order_cancel(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return HttpResponse(json.dumps({'result': False}))

    order_id = request.POST.get('id', None)
    data_json = {
        'result': False
    }

    if order_id == None:
        return HttpResponse(json.dumps(data_json))

    from apps.sm_info.models import Table

    tables = Table.objects.filter(id=order_id)

    if len(tables) > 0:
        Table.objects.filter(id=order_id).update(status='C')
        data_json = {
            'result': True
        }

    return HttpResponse(json.dumps(data_json))

def order_detail(request, order_id):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return redirect('/index/')

    from apps.sm_info.models import Table
    import datetime

    tables = Table.objects.filter(id=order_id)

    data_order = {
        'id': tables[0].id,
        'user_id' : tables[0].user_id.id,
        'dt': datetime.datetime.strftime(tables[0].dt, '%Y-%m-%d %H:%M:%S'),
        'status': tables[0].get_status_display(),
        'recv_method': tables[0].recv_method,
        'recv_info': json.loads(tables[0].recv_info),
        'shopList': json.loads(tables[0].goods)
    }

    data_order = json.dumps(data_order)

    return render(request, 'bins/order_detail_toB.html', context={
        'data_order': data_order
    })

def order_confirm(request):
    buser_id = request.session.get('buser', None)
    if not buser_id:
        return HttpResponse(json.dumps({'result': False}))

    order_id = request.POST.get('id', None)
    data_json = {
        'result': False
    }

    if order_id == None:
        return HttpResponse(json.dumps(data_json))

    from apps.sm_info.models import Table

    tables = Table.objects.filter(id=order_id)

    if len(tables) > 0:
        Table.objects.filter(id=order_id).update(status='S')
        data_json = {
            'result': True
        }

    return HttpResponse(json.dumps(data_json))