from django.shortcuts import render
from django.views.decorators.gzip import gzip_page
from django.views.decorators.cache import cache_page

import json

from .models import Types
from .models import Goods

@gzip_page
# @cache_page(60 * 15)
def index(request):
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

            item['src'] = 'com_img/goods/' + i_item.image
            item['name'] = i_item.name
            item['price'] = float(i_item.price)
            item['tag'] = '' #【debug】初版没有tag
            item['num'] = 0

            good_item.append(item)

        data_goods.append(good)

    return render(request, 'shop/index.html', context={
        'data_navs' : json.dumps(data_navs),
        'data_goods' : json.dumps(data_goods)
    })

def check_user(request):
    from django.http import HttpResponse
    return HttpResponse('用户认证')