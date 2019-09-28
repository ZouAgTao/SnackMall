from django.db import models

class Types(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)

class Tags(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)

class Goods(models.Model):
    id = models.IntegerField(primary_key=True)
    type = models.ForeignKey(Types,on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8,decimal_places=2)
    tag = models.ManyToManyField(Tags)
    stock = models.IntegerField()
    image = models.CharField(max_length=54)
    description = models.TextField()
    statistics = models.TextField()