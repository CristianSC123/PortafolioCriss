from django.urls import path
from .views import index
from .views import InformacionAPIView

urlpatterns = [
    path('', index, name='inicio'),
    path('api/informacion/', InformacionAPIView.as_view(), name='api_informacion'),
]