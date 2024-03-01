from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import (PlayerSerializer, PlayerBattingSerializer, PlayerBowlingSerializer,
                          PlayerWicketKeepingSerializer)
from .models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping


def getPlayerStats(player):
    batting_stats = PlayerBatting.objects.filter(player=player)
    bowling_stats = PlayerBowling.objects.filter(player=player)
    wicketkeeping_stats = PlayerWicketKeeping.objects.filter(player=player)

    batting_serializer = PlayerBattingSerializer(batting_stats, many=True).data
    bowling_serializer = PlayerBowlingSerializer(bowling_stats, many=True).data
    wicketkeeping_serializer = PlayerWicketKeepingSerializer(wicketkeeping_stats, many=True).data

    return {
        'batting_stats': batting_serializer,
        'bowling_stats': bowling_serializer,
        'wicketkeeping_stats': wicketkeeping_serializer
    }


@api_view(['GET'])
def getAllPlayers(request):
    if request.method == 'GET':
        players = Player.objects.all()
        player_data = []

        for player in players:
            player_serializer = PlayerSerializer(player).data
            player_serializer.update(getPlayerStats(player))
            player_data.append(player_serializer)

        return Response(player_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getPlayerById(request, player_id):
    if request.method == 'GET':
        try:
            player = Player.objects.get(player_id=player_id)
        except Player.DoesNotExist:
            return Response({"error": "Player not found"}, status=status.HTTP_404_NOT_FOUND)

        player_serializer = PlayerSerializer(player).data
        player_data = {'player': player_serializer}
        player_data.update(getPlayerStats(player))

        return Response(player_data, status=status.HTTP_200_OK)


@api_view(['POST'])
def createPlayer(request):
    if request.method == 'POST':
        player_serializer = PlayerSerializer(data=request.data)
        if player_serializer.is_valid():
            player_instance = player_serializer.save()

            # get relevant stats data from request.data
            batting_data_list = request.data.get('batting_data', [])
            bowling_data_list = request.data.get('bowling_data', [])
            wicketkeeping_data_list = request.data.get('wicketkeeping_data', [])

            for batting_data in batting_data_list:
                # Adding player reference to related data
                batting_data['player'] = player_instance.player_id
                # Serializing and saving related instances
                batting_serializer = PlayerBattingSerializer(data=batting_data)
                if batting_serializer.is_valid():
                    batting_serializer.save()
                else:
                    print('Error Batting')
                    print(batting_serializer.errors)

            for bowling_data in bowling_data_list:
                # Adding player reference to related data
                bowling_data['player'] = player_instance.player_id
                # Serializing and saving related instances
                bowling_serializer = PlayerBowlingSerializer(data=bowling_data)
                if bowling_serializer.is_valid():
                    bowling_serializer.save()
                else:
                    print('Error Bowling')
                    print(bowling_serializer.errors)

            for wicketkeeping_data in wicketkeeping_data_list:
                # Adding player reference to related data
                wicketkeeping_data['player'] = player_instance.player_id
                # Serializing and saving related instances
                wicketkeeping_serializer = PlayerWicketKeepingSerializer(data=wicketkeeping_data)
                if wicketkeeping_serializer.is_valid():
                    wicketkeeping_serializer.save()
                else:
                    print('Error Wicketkeeping')
                    print(wicketkeeping_serializer.errors)
            return Response(player_serializer.data, status=status.HTTP_201_CREATED)
        return Response(player_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
