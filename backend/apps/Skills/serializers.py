from rest_framework import serializers
from .models import Skill, CategoriaSkill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['nombre', 'nivel', 'icono', 'orden']

class CategoriaSkillSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(source='skill_set', many=True)
    
    class Meta:
        model = CategoriaSkill
        fields = ['nombre', 'orden', 'skills']