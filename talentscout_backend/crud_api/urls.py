from django.urls import path
from .views import CreatePlayer

urlpatterns = [
    path('create/', CreatePlayer, name='create_player'),
]
