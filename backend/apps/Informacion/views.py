from django.shortcuts import render
from .models import Informacion, SocialMedia
from .serializers import InformacionSerializer, SocialMediaSerializer
from rest_framework import generics

def index(request):
    context={
        "Informacion": Informacion.objects.first()
    }
    return render(request, 'index.html', context=context)

class InformacionAPIView(generics.ListCreateAPIView):
    queryset = Informacion.objects.all()
    serializer_class = InformacionSerializer
    
class SocialMediaAPIView(generics.ListCreateAPIView):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer