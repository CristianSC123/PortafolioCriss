from django.contrib import admin
from .models import Educacion, Certificado

@admin.register(Educacion)
class Educacion(admin.ModelAdmin):
    list_display = ('institucion', 'titulo', 'tipo', 'fecha_inicio', 'fecha_fin')
    list_filter = ('tipo', 'fecha_inicio', 'fecha_fin')
    search_fields = ('institucion', 'titulo')


@admin.register(Certificado)
class SocialMediaAdmin(admin.ModelAdmin):
    list_display = ('educacion', 'nombre', 'fecha_emision')
    list_filter = ('educacion', 'fecha_emision')
    