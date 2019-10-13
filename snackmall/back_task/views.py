from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events, register_job
from apps.sm_info.models import Table

import datetime

# 启动后台定时任务
try:
    scheduler = BackgroundScheduler()

    scheduler.add_jobstore(DjangoJobStore(), "default")

    @register_job(scheduler, "interval", hours=1)
    def checkOutOrders():
        print('【后台任务】进行过期列表的检查')
        Table.objects.filter(status='A', dt__lt=(datetime.datetime.now() - datetime.timedelta(days=1))).update(status='C')

    register_events(scheduler)
    scheduler.start()
except Exception as e:
    print('【后台任务启动错误】')
    print(e)
    scheduler.shutdown()