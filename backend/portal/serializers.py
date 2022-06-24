from rest_framework import serializers
from .models import *


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        exclude = ['customer']


class CustomerSerializer(serializers.ModelSerializer):
    order_count = serializers.SerializerMethodField()
    orders = OrderSerializer(many=True, read_only=True)

    class Meta:
        model = Customer
        fields = '__all__'

    def get_order_count(self, obj):
        return obj.orders.count()


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
