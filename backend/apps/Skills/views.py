from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CategoriaSkill
from .serializers import CategoriaSkillSerializer

class HabilidadesAPIView(APIView):
    def get(self, request):
        categorias = CategoriaSkill.objects.prefetch_related('skill_set').all()
        serializer = CategoriaSkillSerializer(categorias, many=True)
        return Response(serializer.data)

class HabilidadDetalleAPIView(APIView):
    def get(self, request, nombre_categoria):
        try:
            categoria = CategoriaSkill.objects.prefetch_related('skill_set').get(nombre=nombre_categoria)
            serializer = CategoriaSkillSerializer(categoria)
            return Response(serializer.data)
        except CategoriaSkill.DoesNotExist:
            return Response({"error": "Categoría no encontrada"}, status=404)