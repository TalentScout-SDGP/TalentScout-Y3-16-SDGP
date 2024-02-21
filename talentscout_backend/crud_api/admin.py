from django.contrib import admin

from .models import Player,PlayerBatting,PlayerBowling,PlayerWicketKeeping

admin.site.register(Player)
admin.site.register(PlayerBatting)
admin.site.register(PlayerBowling)
admin.site.register(PlayerWicketKeeping)


