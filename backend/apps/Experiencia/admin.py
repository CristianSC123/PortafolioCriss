from django.contrib import admin
from .models import Experiencia

@admin.register(Experiencia)
class Educacion(admin.ModelAdmin):
    list_display = ('empresa', 'tipo_contrato', 'fecha_inicio', 'fecha_fin', 'actual')
    list_filter = ('tipo_contrato', 'fecha_inicio', 'fecha_fin', 'actual')
    search_fields = ('empresa',)
    ordering = ('-fecha_inicio',)