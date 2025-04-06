from django.urls import path
from .views import ProyectoListAPIView

urlpatterns = [
    path('api/proyectos/', ProyectoListAPIView.as_view(), name='api_proyectos'),
]
