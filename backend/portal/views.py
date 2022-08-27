from django.shortcuts import render, get_list_or_404
from .serializers import *
from rest_framework import viewsets, mixins, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework import status
from .models import *
from rest_framework.decorators import action
import datetime


class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
    ordering_fields = ['company', 'location', 'date_created']
    filterset_fields = ['name', 'company',
                        'location', 'email', 'phone', 'position']

    @action(detail=False, methods=['GET'])
    def get_total_customers(self, request, pk=None):
        total = Customer.objects.all().count()
        return Response({'total': total})

    @action(detail=False, methods=['GET'])
    def get_new_customers(self, request, pk=None):
        date_today = datetime.date.today()
        first_date = datetime.date(date_today.year, date_today.month-1, date_today.day)
        total = Customer.objects.filter(date_created__range=[first_date, date_today]).count()
        return Response({'total': total})


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    ordering_fields = '__all__'
    filterset_fields = [
        'order_number',
        'customerId',
        'date_of_order',
        'status',
        'status_payment',
    ]

    @action(detail=False, methods=['GET'])
    def get_total_orders(self, request, pk=None):
        total = Order.objects.all().count()
        return Response({'total': total})

    @action(detail=False, methods=['GET'])
    def get_out_orders(self, request, pk=None):
        total = Order.objects.filter(status='Out for delivery').count()
        return Response({'total': total})

    @action(detail=False, methods=['GET'])
    def get_completed_orders(self, request, pk=None):
        completedTotal = Order.objects.filter(status='Delivered').count()
        return Response({'total': completedTotal})

    @action(detail=False, methods=['GET'])
    def get_pending_orders(self, request, pk=None):
        pendingTotal = Order.objects.filter(status='Pending').count()
        return Response({'total': pendingTotal})

    @action(detail=False, methods=['GET'])
    def get_monthly_revenue(self, request, pk=None):
        date_today = datetime.date.today()
        first_date = datetime.date(date_today.year, date_today.month, 1)
        orders = Order.objects.filter(status_payment='Payed', date_of_order__range=[
                                      first_date, date_today])
        monthly_revenue = sum([order.amount for order in orders])
        return Response({'total': monthly_revenue})

    @action(detail=False, methods=['GET'])
    def get_monthly_revenue_history(self, request, pk=None):
        date_today = datetime.date.today()

        if date_today.month == 1:
            start_date = datetime.date(date_today.year-1, 12, date_today.day)
        else:
            start_date = datetime.date(
                date_today.year, date_today.month-1, date_today.day)

        orders = Order.objects.filter(status_payment='Payed', date_of_order__range=[
                                      start_date, date_today])

        delta = date_today - start_date
        revenue_history = []
        for i in range(delta.days+1):
            date_now = start_date+datetime.timedelta(days=i)
            orders_date_now = orders.filter(date_of_order=date_now)
            revenue_history_item = {}
            revenue_history_item['date'] = date_now.strftime('%d-%m-%Y')

            if orders_date_now:
                revenue_history_item['total'] = sum([order.amount for order in orders_date_now])
            else:
                revenue_history_item['total'] = 0
            revenue_history.append(revenue_history_item)

        return Response({'revenue_history': revenue_history})


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    ordering_fields = ['name', 'category']
    filterset_fields = ['name', 'category']


class TransactionView(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()
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
