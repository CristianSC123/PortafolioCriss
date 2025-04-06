from django.contrib import admin
from .models import CategoriaSkill, Skill

@admin.register(CategoriaSkill)
class CategoriaSkill(admin.ModelAdmin):
    list_display = ('nombre', 'orden')
    search_fields = ('nombre',)
    ordering = ('orden',)
    list_per_page = 10
    
@admin.register(Skill)
class Skill(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'nivel', 'icono', 'orden')
    search_fields = ('nombre', 'categoria__nombre')
    list_filter = ('categoria', 'nivel')
    ordering = ('orden',)