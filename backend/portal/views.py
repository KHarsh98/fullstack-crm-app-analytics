from django.shortcuts import render, get_list_or_404
from .serializers import *
from rest_framework import viewsets, filters, mixins
from rest_framework.response import Response
from rest_framework import status
from .models import *
from rest_framework.decorators import action


class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ('date_created',)

    @action(methods=['GET'], detail=True)
    def get_order_line_items(self, request, pk=None):
        queryset = ProductQuantity.objects.filter(orderId=pk)
        serializer = ProductQuantitySerializer(queryset, many=True)
        return Response(serializer.data)


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class TransactionView(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()


class TargetView(viewsets.ModelViewSet):
    serializer_class = TargetSerializer
    queryset = Target.objects.all()


class ProductQuantityView(viewsets.ModelViewSet):
    serializer_class = ProductQuantitySerializer
    queryset = ProductQuantity.objects.all()
