from django.urls import path
from .views import createPlayer, getAllPlayers, getPlayerById, updatePlayer,filterPlayersByName

urlpatterns = [
    path('', getAllPlayers, name='get_all_players'),
    path('<int:player_id>/', getPlayerById, name='get_player_by_id'),
    path('create/', createPlayer, name='create_player'),
    path('update/<int:player_id>/', updatePlayer, name='update_player'),
    path('get-players/', filterPlayersByName, name='get_players'),

]
