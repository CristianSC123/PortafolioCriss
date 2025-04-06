from django.urls import path
from .views import ExperienciaAPIView

urlpatterns = [
    path('api/experiencia/', ExperienciaAPIView.as_view(), name='api_experiencia') 
]