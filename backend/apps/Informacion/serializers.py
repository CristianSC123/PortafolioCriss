from rest_framework import serializers
from .models import Informacion, SocialMedia

class InformacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Informacion
        fields = '__all__' 
        
class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = '__all__'