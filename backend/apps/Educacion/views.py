from django.shortcuts import render
from .models import Educacion, Certificado
from .serializers import EducacionSerializer, CertificadoSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

class EducacionAPIView(generics.ListCreateAPIView):
    queryset = Educacion.objects.all()
    serializer_class = EducacionSerializer

class CertificadoListView(APIView):
    def get(self, request):
        certificados = Certificado.objects.select_related('educacion').all()
        serializer = CertificadoSerializer(certificados, many=True)
        return Response(serializer.data)
