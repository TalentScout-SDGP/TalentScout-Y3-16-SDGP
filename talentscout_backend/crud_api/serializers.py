from rest_framework import serializers
from .models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'


class PlayerBattingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerBatting
        fields = '__all__'


class PlayerBowlingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerBowling
        fields = '__all__'


class PlayerWicketKeepingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerWicketKeeping
        fields = '__all__'
