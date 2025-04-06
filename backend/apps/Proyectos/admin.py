from django.contrib import admin
from .models import Proyecto, Tecnologia, TecnologiaProyecto

@admin.register(Proyecto)
class Proyecto(admin.ModelAdmin):
    list_display = ('titulo', 'fecha', 'destacado')
    search_fields = ('titulo', 'descripcion')
    list_filter = ('destacado',)
    list_per_page = 10
    
@admin.register(Tecnologia)
class Tecnologia(admin.ModelAdmin):
    list_display = ('nombre', 'icono')
    search_fields = ('titulo', 'descripcion')
      
@admin.register(TecnologiaProyecto)
class TecnologiaProyecto(admin.ModelAdmin):
    list_display = ('proyecto', 'tecnologia', 'es_principal')
    search_fields = ('proyecto__titulo', 'tecnologia__nombre')
    list_filter = ('es_principal',)
    list_per_page = 10