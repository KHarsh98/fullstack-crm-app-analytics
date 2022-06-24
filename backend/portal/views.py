from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets, filters
from .models import *


class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.prefetch_related('orders')


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ('date_created',)


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
