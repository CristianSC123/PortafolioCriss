from django.shortcuts import render
from .models import Informacion
from .serializers import InformacionSerializer
from rest_framework import generics

def index(request):
    context={
        "Informacion": Informacion.objects.first()
    }
    return render(request, 'index.html', context=context)

class InformacionAPIView(generics.ListCreateAPIView):
    queryset = Informacion.objects.all()
    serializer_class = InformacionSerializer