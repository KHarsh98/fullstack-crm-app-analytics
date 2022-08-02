from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    email = models.EmailField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    CATEGORY = (
        ('Head', 'Head'),
        ('Block', 'Block'),
    )
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=CATEGORY)
    description = models.CharField(max_length=200, null=True)
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
    customerId = models.ForeignKey(
        Customer, related_name='orders', on_delete=models.CASCADE)
    date_of_order = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=STATUS)
    amount = models.DecimalField(max_digits=5, decimal_places=2, default=0)

    def __str__(self):
        return (self.customerId.name + "'s order:" + self.order_number)


class ProductQuantity(models.Model):
    productId = models.ForeignKey(Product, on_delete=models.CASCADE)
    orderId = models.ForeignKey(Order, on_delete=models.CASCADE)
    qty = models.PositiveSmallIntegerField(default=0)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['productId', 'orderId'], name='unique_order_product'
            )
        ]


class Transaction(models.Model):
    STATUS = (
        ('Pending', 'Pending'),
        ('Payed', 'Payed'),
        ('Cancelled', 'Cancelled'),
    )
    date_of_transaction = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=STATUS)
    orderId = models.ForeignKey(Order, on_delete=models.CASCADE)


class Target(models.Model):
    year = models.PositiveSmallIntegerField()
    daily_target = models.PositiveSmallIntegerField()
    weekly_target = models.PositiveSmallIntegerField()
    monthly_target = models.PositiveSmallIntegerField()
    yearly_target = models.PositiveSmallIntegerField()
