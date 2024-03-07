from django.urls import path
from .views import getAllPlayers, getPlayerById, filterPlayersByFullName, createPlayer, updatePlayer, deletePlayer

urlpatterns = [
    path('', getAllPlayers, name='get_all_players'),
    path('<int:player_id>/', getPlayerById, name='get_player_by_id'),
    path('filter/', filterPlayersByFullName, name='filter_players'),
    path('create/', createPlayer, name='create_player'),
    path('update/<int:player_id>/', updatePlayer, name='update_player'),
    path('delete/<int:player_id>/', deletePlayer, name='delete-player'),
]
