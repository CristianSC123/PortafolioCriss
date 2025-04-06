from django.urls import path
from .views import index
from .views import InformacionAPIView, SocialMediaAPIView

urlpatterns = [
    path('', index, name='inicio'),
    path('api/informacion/', InformacionAPIView.as_view(), name='api_informacion'),
    path('api/social_media/', SocialMediaAPIView.as_view(), name='api_social_media'),  
]