from django.contrib import admin
from .models import Informacion, SocialMedia

@admin.register(Informacion)
class InformacionAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'specialty', 'email', 'url_web', 'created_at')
    list_filter = ('specialty', 'created_at')
    search_fields = ('full_name', 'email', 'specialty')
    readonly_fields = ('created_at', 'updated_at', 'embedding')

@admin.register(SocialMedia)
class SocialMediaAdmin(admin.ModelAdmin):
    list_display = ('platform', 'username', 'informacion', 'url', 'is_active')
    list_filter = ('platform', 'is_active', 'informacion__full_name') 
    search_fields = ('username', 'url', 'informacion__full_name')
    list_editable = ('is_active',)
    raw_id_fields = ('informacion',)  