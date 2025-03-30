from rest_framework import serializers
from .models import Informacion

class InformacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Informacion
        fields = '__all__' 