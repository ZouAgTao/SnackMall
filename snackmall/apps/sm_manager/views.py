from django.shortcuts import render, redirect

import json

def forget_psw(request):
    return render(request,'manager/forgetPsw.html')

def add_address(request, route):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    return render(request, 'manager/add_address.html', context={'data_src_url': str(route) + '/'})

def check_add_address(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User
    users = User.objects.filter(id = str(user_id))
    recv_infos = users[0].recv_infos
    recv_infos = json.loads(recv_infos)

    json_id = len(recv_infos['recv_infos']) + 1

    for i in range(len(recv_infos['recv_infos'])):
        recv_infos['recv_infos'][i]['default'] = False

    json_default = True
    json_recv_name = str(request.POST.get('recv_name', ''))
    json_recv_phone = str(request.POST.get('recv_phone', ''))
    json_recv_localtion = {
        'dormi' : str(request.POST.get('dormi', '')),
        'building' : str(request.POST.get('building', '')),
    }

    recv_infos['recv_infos'].append({
        'id' : json_id,
        'default' : json_default,
        'recv_name' : json_recv_name,
        'recv_phone' : json_recv_phone,
        'recv_localtion' : json_recv_localtion
    })

    recv_infos = json.dumps(recv_infos)
    users.update(recv_infos=recv_infos)

    route_url = str(request.POST.get('route', '/index/'))

    return redirect(route_url)