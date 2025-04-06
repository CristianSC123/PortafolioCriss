from django.db import models
import uuid

class CategoriaSkill (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, unique=True)
    orden = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['orden']
        
    def __str__(self):
        return self.nombre
        
class Skill (models.Model):
    NIVEL_CHOICES = [
        (1,'Básico'),
        (2,'Intermedio'),
        (3,'Avanzado'),
    ]
    nombre = models.CharField(max_length=100, unique=True)
    categoria = models.ForeignKey(CategoriaSkill, on_delete=models.CASCADE)
    nivel = models.PositiveIntegerField(choices=NIVEL_CHOICES, default=2)
    icono = models.CharField(max_length=100)
    orden = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['orden']
    def __str__(self):
        return self.nombre