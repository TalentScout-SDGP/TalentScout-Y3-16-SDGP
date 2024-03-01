from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import (PlayerSerializer, PlayerBattingSerializer, PlayerBowlingSerializer,
                          PlayerWicketKeepingSerializer)


@api_view(['POST'])
def CreatePlayer(request):
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
