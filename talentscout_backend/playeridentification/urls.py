from django.urls import path
from .views import rank_players

urlpatterns = [
    path('', rank_players, name='rank_players'),
]
