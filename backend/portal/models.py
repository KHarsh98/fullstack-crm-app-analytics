from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    email = models.EmailField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS = (
        ('Pending', 'Pending'),
        ('Out for delivery', 'Out for delivery'),
        ('Delivered', 'Delivered'),
    )
    order_number = models.CharField(max_length=100)
    customer = models.ForeignKey(
        Customer, related_name='orders', on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=STATUS)

    def __str__(self):
        return (self.customer.name + "'s order")


class Product(models.Model):
    CATEGORY = (
        ('Head', 'Head'),
        ('Block', 'Block'),
    )
    name = models.CharField(max_length=100)
    price = models.FloatField()
    category = models.CharField(max_length=10, choices=CATEGORY)
    description = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    order = models.ForeignKey(
        Order, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
