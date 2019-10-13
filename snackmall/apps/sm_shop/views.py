from django.shortcuts import render, redirect
from django.views.decorators.gzip import gzip_page
from django.views.decorators.cache import cache_page

import json

from .models import Types
from .models import Goods

@gzip_page
# @cache_page(60 * 15)
def index(request):
    #【debug】用于测试的代码，一定要记得删掉
    if not request.session.get('user', None):
        request.session['user'] = '13680721923'

    data_navs = []
    data_goods = []

    types = Types.objects.all()

    for t_type in types:
        data_navs.append(t_type.name)

        good = {}
        good['title'] = t_type.name
        good_item = []
        good['items'] = good_item

        items = Goods.objects.filter(type = t_type.id)

        for i_item in items:
            item = {}

            item['id'] = i_item.id
            item['src'] = 'com_img/goods/' + i_item.image
            item['name'] = i_item.name
            item['price'] = float(i_item.price)
            item['tag'] = '' #【debug】初版没有tag
            item['num'] = 0
            item['type'] = t_type.name

            good_item.append(item)

        data_goods.append(good)

    return render(request, 'shop/index.html', context={
        'data_navs' : json.dumps(data_navs),
        'data_goods' : json.dumps(data_goods)
    })

def check_user(request):
    ss_user = request.session.get('user', None)
    if ss_user:
        return redirect('/manager/user_home/')
    else:
        return redirect('/auth/login/')

def pay(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User
    users = User.objects.filter(id=str(user_id))
    if len(users) == 0:
        return redirect('/auth/login/')

    recv_infos = users[0].recv_infos
    recv_infos = json.loads(recv_infos)

    recv_name = ''
    recv_phone = ''
    dormi = ''
    building = ''

    for recv_info in recv_infos['recv_infos']:
        if recv_info['default']:
            recv_name = recv_info['recv_name']
            recv_phone = recv_info['recv_phone']
            dormi = recv_info['recv_localtion']['dormi']
            building = recv_info['recv_localtion']['building']
            break

    recv_infos_json = {
        'recv_name' : recv_name,
        'recv_phone' : recv_phone,
        'recv_location' : {
            'dormi_num' : dormi,
            'building' : building
        }
    }

    recv_infos_json = json.dumps(recv_infos_json)

    data_context = {
        'data_recv_infos' : recv_infos_json
    }

    return render(request, 'shop/pay.html', context=data_context)

def check_pay(request):
    user_id = request.session.get('user', None)

    if not user_id:
        return redirect('/auth/login/')

    recv_method = request.POST.get('recv_method', None)
    recv_info = request.POST.get('recv_info', None)
    pick_time = request.POST.get('pick_time', None)
    goods = request.POST.get('goods', None)

    if recv_method == None or goods == None:
        return redirect('/')

    goods = json.loads(goods)

    if recv_method == 'true':
        recv_method = True
    else:
        recv_method = False

    if recv_method:
        print(recv_method)
        if not recv_info:
            return redirect('/')
    else:
        if not pick_time:
            return redirect('/')

    from apps.sm_info.models import Table
    import datetime
    import random

    now_datetime = datetime.datetime.now()
    dt_arr = []
    dt_arr.append(str(now_datetime.year))
    dt_arr.append(str(now_datetime.month))
    dt_arr.append(str(now_datetime.day))
    dt_arr.append(str(now_datetime.hour))
    dt_arr.append(str(now_datetime.minute))
    dt_arr.append(str(now_datetime.second))

    for i in range(len(dt_arr)):
        if len(dt_arr[i]) == 1:
            dt_arr[i] = '0' + dt_arr[i]

    id = ''.join(dt_arr) + user_id[-4:] + str(random.randint(1000,9999))
    dt = now_datetime
    status = 'A'

    real_recv_info = ''
    if recv_method:
        real_recv_info = json.dumps(recv_info)
    else:
        real_recv_info = {
            'recv_info' : {
                'time' : str(pick_time)
            }
        }
        real_recv_info = json.dumps(real_recv_info)

    from apps.sm_auth.models import User

    # 写入订单数据库
    Table.objects.create(
        id = id,
        dt = dt,
        user_id = User.objects.get(id=user_id),
        status = status,
        recv_method = bool(recv_method),
        recv_info = real_recv_info,
        goods = json.dumps(goods)
    )

    # 【debug】加入过期列表

    # 【debug】提醒卖家端

    # 跳转到订单页
    return redirect('/info/order_detail/%s/from_pay/' % (id))