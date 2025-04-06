from django.db import models
import uuid

class Experiencia (models.Model):
    TIPO_CONTRATO = [
        ('tiempo_completo', 'Tiempo Completo'),
        ('medio_tiempo', 'Medio Tiempo'),
        ('freelance', 'Freelance'),
        ('practicas', 'Prácticas'),
        ('horario', 'Horario'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.CharField(max_length=100)
    tipo_contrato = models.CharField(max_length=50, choices=TIPO_CONTRATO)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField(null=True, blank=True)
    actual = models.BooleanField(default=False)
    descripcion = models.TextField(blank=True)
    
    class Meta:
        ordering = ['-fecha_inicio']
        
    def __str__(self):
        return f"{self.empresa}"
    
        
class Logro(models.Model):
    experiencia = models.ForeignKey(Experiencia, on_delete=models.CASCADE, related_name='logros')
    descripcion = models.CharField(max_length=255)
    icono = models.CharField(max_length=100, default='FaCheckCircle')
    