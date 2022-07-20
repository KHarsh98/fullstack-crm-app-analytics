from django.shortcuts import render, get_list_or_404
from .serializers import *
from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework import status
from .models import *
from rest_framework.decorators import action


class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

    @action(methods=['get'], detail=True)
    def orders(self, request, pk=None):
        orderList = get_list_or_404(Order, customer=pk)
        serializer = OrderSerializer(orderList, many=True)
        return Response(serializer.data)


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ('date_created',)

    @action(methods=['get'], detail=True)
    def products(self, request, pk=None):
        productList = get_list_or_404(Product, order=pk)
        serializer = ProductSerializer(productList, many=True)
        return Response(serializer.data)


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
