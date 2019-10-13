from django.db import models

# Create your models here.
class Config(models.Model):
    key = models.TextField(primary_key=True)
    value = models.TextField()

    def __str__(self):
        return ('【 %s | %s 】' % (self.key, self.value))