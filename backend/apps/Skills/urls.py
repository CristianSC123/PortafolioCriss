from django.urls import path
from .views import HabilidadesAPIView, HabilidadDetalleAPIView

urlpatterns = [
    path('api/skills/', HabilidadesAPIView.as_view(), name='api_habilidades'),
    path('api/skills/<str:nombre_categoria>/', HabilidadDetalleAPIView.as_view(), name='api_habilidad_detalle'),
]