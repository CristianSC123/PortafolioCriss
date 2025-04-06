from django.db import models
import uuid 

class Proyecto (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='proyectos/')
    url_demo = models.URLField(blank=True, null=True)
    url_repositorio = models.URLField(blank=True, null= True)
    fecha = models.DateField()
    destacado = models.BooleanField(default=False)
    tecnologias = models.ManyToManyField('Tecnologia', through='TecnologiaProyecto')
    
    def __str__(self):
        return self.titulo
    
    class Meta ():
        ordering = ['-fecha']

class Tecnologia(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    nombre = models.CharField(max_length=50, unique=True)
    icono = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre
    
class TecnologiaProyecto(models.Model):
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    tecnologia = models.ForeignKey(Tecnologia, on_delete=models.CASCADE)
    es_principal = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.proyecto.titulo} - {self.tecnologia.nombre}"

