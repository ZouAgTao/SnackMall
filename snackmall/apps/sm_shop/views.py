from django.shortcuts import render
from django.views.decorators.gzip import gzip_page

@gzip_page
def index(request):
    return render(request, 'shop/index.html')