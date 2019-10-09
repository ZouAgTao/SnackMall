from django.db import models

class User(models.Model):
    # 【debug】没想好的枚举类型
    FAVOR = (
        ('N', '无'),
    )

    id = models.CharField(max_length=11, primary_key=True)
    passwd = models.CharField(max_length=18)
    nick = models.CharField(max_length=30)
    avator = models.CharField(max_length=11)
    recv_infos = models.TextField()
    psn_gender = models.BooleanField(blank=True)
    psn_birthday = models.DateTimeField(blank=True)
    psn_favor = models.CharField(max_length=1, choices=FAVOR, blank=True)
    goods = models.TextField()
    reg_date = models.DateTimeField()
    used_time = models.TextField()
    tab_click_num = models.IntegerField()
    consumption = models.DecimalField(max_digits=16,decimal_places=2)
    order_num = models.IntegerField()
    bad_order_num = models.IntegerField()

    def __str__(self):
        return '【%s】（%s）' % (self.nick, self.id)

class TempRegister(models.Model):
    phone = models.CharField(max_length=11, primary_key=True)
    check_code = models.CharField(max_length=4)

    def __str__(self):
        return self.phone