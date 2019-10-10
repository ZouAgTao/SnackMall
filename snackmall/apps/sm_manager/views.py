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

    json_id = 1

    def cmpById(elem):
        return elem['id']

    if len(recv_infos['recv_infos']) > 0:
        (recv_infos['recv_infos']).sort(key=cmpById)

    for i in range(len(recv_infos['recv_infos'])):
        if recv_infos['recv_infos'][i]['id'] == json_id:
            json_id += 1

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

    if len(recv_infos['recv_infos']) > 0:
        (recv_infos['recv_infos']).sort(key=cmpById)

    recv_infos = json.dumps(recv_infos)
    users.update(recv_infos=recv_infos)

    route_url = str(request.POST.get('route', '/index/'))

    return redirect(route_url)

def user_home(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User

    users = User.objects.filter(id = user_id)

    nickname = users[0].nick

    return render(request, 'manager/user_homepage.html', context={'data_nickname' : nickname})

def address_list_from_pay(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User

    users = User.objects.filter(id=user_id)

    data_recv_infos = json.loads(users[0].recv_infos)
    data_recv_infos = data_recv_infos['recv_infos']

    return render(request, 'manager/address_list_from_pay.html', context={'data_recv_infos' : json.dumps(data_recv_infos) })

def address_list_from_homepage(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User

    users = User.objects.filter(id=user_id)

    data_recv_infos = json.loads(users[0].recv_infos)
    data_recv_infos = data_recv_infos['recv_infos']

    return render(request, 'manager/address_list_from_homepage.html', context={'data_recv_infos' : json.dumps(data_recv_infos) })

def select_recv_infos(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    id = request.POST.get('id', None)

    if id:
        id = int(id)
        from apps.sm_auth.models import User
        users = User.objects.filter(id=str(user_id))
        recv_infos = users[0].recv_infos
        recv_infos = json.loads(recv_infos)

        for i in range(len(recv_infos['recv_infos'])):
            if recv_infos['recv_infos'][i]['id'] == id:
                recv_infos['recv_infos'][i]['default'] = True
            else:
                recv_infos['recv_infos'][i]['default'] = False

        recv_infos = json.dumps(recv_infos)
        users.update(recv_infos=recv_infos)

    from django.http import HttpResponse
    return HttpResponse('')

def delete_recv_infos(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    id = request.POST.get('id', None)

    if id:
        id = int(id)
        from apps.sm_auth.models import User
        users = User.objects.filter(id=str(user_id))
        recv_infos = users[0].recv_infos
        recv_infos = json.loads(recv_infos)

        for i in range(len(recv_infos['recv_infos'])):
            if recv_infos['recv_infos'][i]['id'] == id:
                if recv_infos['recv_infos'][i]['default']:
                    del recv_infos['recv_infos'][i]
                    if len(recv_infos['recv_infos']) > 0:
                        recv_infos['recv_infos'][0]['default'] = True
                else:
                    del recv_infos['recv_infos'][i]
                break

        recv_infos = json.dumps(recv_infos)
        users.update(recv_infos=recv_infos)

    from django.http import HttpResponse
    return HttpResponse('')

def edit_address(request, id, route):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User
    users = User.objects.filter(id=user_id)
    recv_infos = users[0].recv_infos
    recv_infos = json.loads(recv_infos)
    recv_infos = recv_infos['recv_infos']

    data_recv_info = {}

    for i in range(len(recv_infos)):
        if recv_infos[i]['id'] == id:
            data_recv_info = recv_infos[i]
            del data_recv_info['default']
            break

    return render(request, 'manager/edit_address.html', context={'data_src_url': str(route) + '/', 'data_recv_info' : data_recv_info, 'data_lid' : id})

def check_edit_address(request):
    user_id = request.session.get('user', None)
    if not user_id:
        return redirect('/auth/login/')

    from apps.sm_auth.models import User
    users = User.objects.filter(id=str(user_id))
    recv_infos = users[0].recv_infos
    recv_infos = json.loads(recv_infos)

    post_id = int(request.POST.get('lid', None))
    post_recv_name = request.POST.get('recv_name', None)
    post_recv_phone = request.POST.get('recv_phone', None)
    post_building = request.POST.get('building', None)
    post_dormi = request.POST.get('dormi', None)

    for i in range(len(recv_infos['recv_infos'])):
        if recv_infos['recv_infos'][i]['id'] == post_id:
            recv_infos['recv_infos'][i]['recv_name'] = str(post_recv_name)
            recv_infos['recv_infos'][i]['recv_phone'] = str(post_recv_phone)
            recv_infos['recv_infos'][i]['recv_localtion']['dormi'] = str(post_dormi)
            recv_infos['recv_infos'][i]['recv_localtion']['building'] = str(post_building)
            break

    recv_infos = json.dumps(recv_infos)
    users.update(recv_infos=recv_infos)

    route_url = str(request.POST.get('route', '/index/'))

    return redirect(route_url)