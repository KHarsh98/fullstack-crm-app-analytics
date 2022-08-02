from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from portal import views

router = routers.DefaultRouter()
router.register(r'customers', views.CustomerView, 'customer')
router.register(r'products', views.ProductView, 'product')
router.register(r'product-quantity',
                views.ProductQuantityView, 'product quantity')
router.register(r'orders', views.OrderView, 'order')
router.register(r'transactions', views.TransactionView, 'transaction')
router.register(r'targets', views.TargetView, 'target')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
