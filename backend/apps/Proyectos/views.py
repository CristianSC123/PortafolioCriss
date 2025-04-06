from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Proyecto
from .serializers import ProyectoSerializer

class ProyectoListAPIView(APIView):
    def get(self, request):
        proyectos = Proyecto.objects.all()
        serializer = ProyectoSerializer(proyectos, many=True, context={'request': request})
        return Response(serializer.data)
