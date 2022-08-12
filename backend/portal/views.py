from django.shortcuts import render, get_list_or_404
from .serializers import *
from rest_framework import viewsets, mixins, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework import status
from .models import *
from rest_framework.decorators import action


class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'

    @action(detail=False, methods=['GET'])
    def get_total_customers(self, request, pk=None):
        total = Customer.objects.all().count()
        return Response({'total': total})


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'

    @action(detail=False, methods=['GET'])
    def get_total_orders(self, request, pk=None):
        total = Order.objects.all().count()
        return Response({'total': total})

    @action(detail=False, methods=['GET'])
    def get_completed_orders(self, request, pk=None):
        completedTotal = Order.objects.filter(status='Delivered').count()
        return Response({'total': completedTotal})

    @action(detail=False, methods=['GET'])
    def get_pending_orders(self, request, pk=None):
        pendingTotal = Order.objects.filter(status='Pending').count()
        return Response({'total': pendingTotal})


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'


class TransactionView(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'


class TargetView(viewsets.ModelViewSet):
    serializer_class = TargetSerializer
    queryset = Target.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'


class ProductQuantityView(viewsets.ModelViewSet):
    serializer_class = ProductQuantitySerializer
    queryset = ProductQuantity.objects.all()
    filterset_fields = ['orderId']
    ordering_fields = '__all__'
