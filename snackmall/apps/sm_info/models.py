from django.db import models

from apps.sm_auth.models import User

class Table(models.Model):
    STATUS = (
        ('A', '已接单'),
        ('S', '已完成'),
        ('C', '已取消')
    )

    id = models.CharField(max_length=22, primary_key=True)
    dt = models.DateTimeField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=1, choices=STATUS)
    recv_method = models.BooleanField()
    recv_info = models.TextField()
    goods = models.TextField()

    def __str__(self):
        return self.id