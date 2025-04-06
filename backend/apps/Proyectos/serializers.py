from rest_framework import serializers
from .models import Proyecto, Tecnologia, TecnologiaProyecto

class TecnologiaProyectoSerializer(serializers.ModelSerializer):
    nombre = serializers.CharField(source='tecnologia.nombre')
    icono = serializers.CharField(source='tecnologia.icono')
    es_principal = serializers.BooleanField()

    class Meta:
        model = TecnologiaProyecto
        fields = ['nombre', 'icono','es_principal',]

class ProyectoSerializer(serializers.ModelSerializer):
    tecnologias = serializers.SerializerMethodField()
    id = serializers.SerializerMethodField()
    imagen = serializers.SerializerMethodField()

    class Meta:
        model = Proyecto
        fields = ['id', 'titulo','descripcion', 'imagen', 'tecnologias', 'url_demo', 'url_repositorio', 'fecha', 'destacado']

    def get_id(self, obj):
        return obj.titulo

    def get_tecnologias(self, obj):
        relaciones = TecnologiaProyecto.objects.filter(proyecto=obj)
        return TecnologiaProyectoSerializer(relaciones, many=True).data
    
    def get_imagen(self, obj):
        request = self.context.get('request')
        if obj.imagen and request:
            return request.build_absolute_uri(obj.imagen.url)
        return None
