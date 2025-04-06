from rest_framework import serializers
from .models import Educacion, Certificado

class EducacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Educacion
        fields = '__all__' 
        
class CertificadoSerializer(serializers.ModelSerializer):
    educacion = EducacionSerializer()
    
    class Meta:
        model = Certificado
        fields = ['id', 'nombre', 'fecha_emision', 'educacion']