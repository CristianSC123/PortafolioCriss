

from .models import Experiencia
from .serializers import ExperienciaSerializer
from rest_framework import generics

class ExperienciaAPIView(generics.ListCreateAPIView):
    queryset = Experiencia.objects.all()
    serializer_class = ExperienciaSerializer
    
# Create your views here.
