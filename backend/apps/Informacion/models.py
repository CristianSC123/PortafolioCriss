from django.db import models
import uuid
from apps.Analisis.views import generar_embedding

class Informacion(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    full_name = models.CharField(max_length=50, verbose_name="Nombre completo")
    specialty = models.CharField(max_length=60, verbose_name="Especialidad")
    bio = models.TextField(max_length=500, verbose_name="Biografía")
    email = models.EmailField(verbose_name="Correo electrónico")
    phone = models.CharField(max_length=15, verbose_name="Teléfono")
    url_web = models.URLField(max_length=200, blank=True, verbose_name="Sitio web")
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    embedding = models.JSONField(null=True, blank=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "Informacion"
        verbose_name = "Información personal"
        verbose_name_plural = "Informaciones personales"
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.embedding or any([
            self.has_changed('full_name'),
            self.has_changed('email'),
            self.has_changed('phone'),
            self.has_changed('specialty')
        ]):
            texto = f"""
            Nombre: {self.full_name}
            Especialidad: {self.specialty}
            Contacto: {self.email} | {self.phone}
            """
            self.embedding = generar_embedding(texto)
        super().save(*args, **kwargs)

    def has_changed(self, field):
        if not self.pk or not self.__class__.objects.filter(pk=self.pk).exists():
            return True  
        old_value = self.__class__.objects.get(pk=self.pk).__dict__.get(field)
        return getattr(self, field) != old_value

    def __str__(self):
        return f"{self.full_name} ({self.specialty})"


class SocialMedia(models.Model):
    PLATFORM_CHOICES = [
        ('github', 'GitHub'),
        ('linkedin', 'LinkedIn'),
        ('twitter', 'Twitter'),
        ('youtube', 'YouTube'),
        ('other', 'Otro'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    informacion = models.ForeignKey(
        Informacion, 
        on_delete=models.CASCADE,
        related_name='redes_sociales'
    )
    platform = models.CharField(
        max_length=20,
        choices=PLATFORM_CHOICES,
        default='other'
    )
    url = models.URLField(max_length=200)
    username = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    embedding = models.JSONField(null=True, blank=True, editable=False)

    class Meta:
        verbose_name = "Red social"
        verbose_name_plural = "Redes sociales"
        ordering = ['order']

    """def save(self, *args, **kwargs):
        if not self.embedding:
            texto = f"{self.get_platform_display()}: {self.url} - Usuario: {self.username}"
            self.embedding = generar_embedding(texto)
        super().save(*args, **kwargs)"""

    def __str__(self):
        return f"{self.informacion.full_name} - {self.get_platform_display()}"