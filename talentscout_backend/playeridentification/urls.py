from django.urls import path
from .views import rankPlayers

urlpatterns = [
    path('', rankPlayers, name='rank_players'),
]
