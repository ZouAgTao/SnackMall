from django.shortcuts import render, redirect
from django.views.decorators.gzip import gzip_page

import json

from .models import User
from .models import TempRegister

@gzip_page
def login(request):
    return render(request,'auth/login.html', context={"login_status":0})

@gzip_page
def relogin(request):
    return render(request,'auth/login.html', context={"login_status":1})

@gzip_page
def register(request):
    return render(request, 'auth/register.html', context={"data_msg" : 0})

@gzip_page
def register_err_phone(request):
    return render(request, 'auth/register.html', context={"data_msg" : 1})

@gzip_page
def register_err_code(request):
    return render(request, 'auth/register.html', context={"data_msg" : 2})

def check_login(request):
    username = request.POST.get('username', None)
    password = request.POST.get('password', None)
    if username and password:
        users = User.objects.filter(id=username, passwd=password)
        if len(users) == 1:
            # 登陆成功
            request.session['user'] = username
            return redirect('/index/')
        else:
            # 登陆失败
            return redirect('/auth/relogin/')

    else:
        return redirect('/auth/login/')

def sendMsg(phone, code):


    from qcloudsms_py import SmsSingleSender
    from qcloudsms_py.httpclient import HTTPError

    appid = 1400265177
    appkey = '6c6189b044f0ed2edad70183037f4e19'
    template_id = 443313
    sms_sign = 'SCNU南苑'

    ssender = SmsSingleSender(appid, appkey)
    code = str(code)
    params = [code]

    try:
        result = ssender.send_with_param(86, str(phone), template_id, params, sign=sms_sign, extend="", ext="")
    except HTTPError as e:
        print('【短信发送失败】（ %s | %s ）' % (phone,code))
        print(e)
    except Exception as e:
        print('【短信发送失败】（ %s | %s ）' % (phone, code))
        print(e)

def send_check_code(request, phone):
    from django.http import HttpResponse
    if phone:
        phones = TempRegister.objects.filter(phone=phone)

        import random
        check_code = random.randint(1000,9999)

        # 调用腾讯云的短息sdk
        sendMsg(phone, check_code)

        if len(phones) > 0:
            phones.update(check_code=check_code)
            return HttpResponse('')
        else:
            TempRegister.objects.create(phone=phone, check_code=check_code)
            return HttpResponse('')

    else:
        return redirect('/auth/register/')

def send_check_register(request):
    phone = request.POST.get('phone', None)
    password = request.POST.get('password', None)
    ver_code = request.POST.get('ver_code', None)

    if phone and password and ver_code:
        users = User.objects.filter(id=phone)
        if len(users) == 0:
            code_users = TempRegister.objects.filter(phone=phone, check_code=ver_code)

            if len(code_users) == 0:
                return redirect('/auth/register_err_code/')
            elif code_users[0].check_code != str(ver_code):
                return redirect('/auth/register_err_code/')
            else:
                # 注册
                code_users.delete()

                recv_infos = {
                    'recv_infos' : []
                }
                recv_infos = json.dumps(recv_infos)

                goods = {
                    'goods' : {
                        'list' : [

                        ],
                        'sum' : 0
                    }
                }
                goods = json.dumps(goods)

                used_time = {
                    'used_time' : {
                        'hour' : 0,
                        'min' : 0,
                        'sec' : 0
                    }
                }
                used_time = json.dumps(used_time)

                import datetime
                import random

                char_a = random.sample('qwertyuiopasdfghjklzxcvbnm', 3)
                char_0 = random.sample('1234567890', 3)
                str_random = char_a[0] + char_0[0] + char_a[1] + char_0[1] + char_a[2] + char_0[2]

                User.objects.create(
                    id=str(phone),
                    passwd=str(password),
                    nick = str(phone[:-6] + str_random),
                    avator = 'default.png',
                    recv_infos = recv_infos,
                    goods = goods,
                    psn_gender = False,
                    psn_birthday = datetime.datetime.now(),
                    psn_favor = 'N',
                    reg_date = datetime.datetime.now(),
                    used_time = used_time,
                    tab_click_num = 0,
                    consumption = 0,
                    order_num = 0,
                    bad_order_num = 0
                )

                return redirect('/auth/login/')

        else:
            return redirect('/auth/register_err_phone/')
    else:
        return redirect('/auth/register/')