from django.urls import path
from .views import createPlayer, getAllPlayers

urlpatterns = [
    path('', getAllPlayers, name='get_all_players'),
    path('create/', createPlayer, name='create_player'),
]
