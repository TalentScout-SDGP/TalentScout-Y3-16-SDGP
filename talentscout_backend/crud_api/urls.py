from django.urls import path
from .views import createPlayer, getAllPlayers, getPlayerById

urlpatterns = [
    path('', getAllPlayers, name='get_all_players'),
    path('<int:player_id>/', getPlayerById, name='get_player_by_id'),
    path('create/', createPlayer, name='create_player'),
]
