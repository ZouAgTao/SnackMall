from django.contrib import admin

from .models import Types
from .models import Tags
from .models import Goods

admin.site.register(Types)
admin.site.register(Tags)
admin.site.register(Goods)