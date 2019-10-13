from django.contrib import admin
from django.urls import path, include

import back_task.views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include('apps.sm_shop.urls')),
    path('auth/',include('apps.sm_auth.urls')),
    path('manager/',include('apps.sm_manager.urls')),
    path('info/', include('apps.sm_info.urls'))
]
