from django.db import models
import uuid

class Educacion(models.Model):
    TIPO_EDUCACION = [
        ('universidad', 'Universidad'),
        ('instituto', 'Instituto'),
        ('bootcamp', 'Bootcamp'),
        ('curso', 'Curso'),
        ('certificacion', 'Certificacion'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    institucion = models.CharField(max_length=100)
    titulo = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50, choices=TIPO_EDUCACION)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField(null=True, blank=True)
    descripcion = models.TextField(blank=True)
    logo_institucion = models.ImageField(upload_to='logos_educacion/', null=True, blank=True)
    
    class Meta:
        ordering = ['-fecha_inicio']
        verbose_name = "Educación"
        
    def __str__(self):
        return f"{self.institucion}"        
        
class Certificado (models.Model):
    educacion = models.ForeignKey(Educacion, on_delete=models.CASCADE, related_name='certificados')
    nombre = models.CharField(max_length=100)
    fecha_emision = models.DateField()
    
    class Meta:
        ordering = ['-fecha_emision']