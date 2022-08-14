from rest_framework import serializers
from .models import *


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):

    count_total_orders = serializers.SerializerMethodField()
    count_total_spent = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = '__all__'

    def get_count_total_orders(self, obj):
        return obj.orders.count()

    def get_count_total_spent(self, obj):
        orders = obj.orders.filter(status_payment='Payed')
        return sum([order.amount for order in orders])


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class ProductQuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductQuantity
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'


class TargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Target
        fields = '__all__'
