from django.urls import path
from .views import EducacionAPIView, CertificadoListView

urlpatterns = [
    path('api/educacion/', EducacionAPIView.as_view(), name='api_educacion'),
    path('api/certificados/', CertificadoListView.as_view(), name='api_certificados'),
]