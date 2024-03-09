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


@api_view(['GET'])
def filterPlayersByFullName(request):
    if request.method == 'GET':
        player_name = request.GET.get('full_name', '')
        players = Player.objects.filter(full_name__icontains=player_name)
        player_data = []

        for player in players:
            player_serializer = PlayerSerializer(player).data
            player_serializer.update(getPlayerStats(player))
            player_data.append(player_serializer)

        return Response(player_data, status=status.HTTP_200_OK)



def formatBirthDate(birth_date):
    months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    birth_date = birth_date.split('-')
    year = birth_date[0]
    month_number = int(birth_date[1])
    month_name = months[month_number - 1]
    day = birth_date[2]

    return f"{month_name} {day}, {year}"


@api_view(['POST'])
def createPlayer(request):
    if request.method == 'POST':
        latest_player_id = Player.objects.latest('player_id')
        next_player_id = latest_player_id.player_id + 1 if latest_player_id else 1

        # Add player_id and birth_date to request.data
        request.data['player_id'] = next_player_id
        request.data['birth_date'] = formatBirthDate(request.data['birth_date'])

        player_serializer = PlayerSerializer(data=request.data)
        if player_serializer.is_valid():
            player_instance = player_serializer.save()

            batting_data_list = request.data.get('batting_data', [])
            bowling_data_list = request.data.get('bowling_data', [])
            wicketkeeping_data_list = request.data.get('wicketkeeping_data', [])

            for batting_data in batting_data_list:
                batting_data['player'] = player_instance.player_id
                batting_data['batting_id'] = setUniqueID(player_instance.player_id, batting_data['format'])
                batting_data['player_id'] = player_instance.player_id
                batting_serializer = PlayerBattingSerializer(data=batting_data)
                if batting_serializer.is_valid():
                    batting_serializer.save()
                else:
                    print(batting_serializer.errors)

            for bowling_data in bowling_data_list:
                bowling_data['player'] = player_instance.player_id
                bowling_data['bowling_id'] = setUniqueID(player_instance.player_id, bowling_data['format'])
                bowling_data['player_id'] = player_instance.player_id
                bowling_serializer = PlayerBowlingSerializer(data=bowling_data)
                if bowling_serializer.is_valid():
                    bowling_serializer.save()
                else:
                    print(bowling_serializer.errors)

            for wicketkeeping_data in wicketkeeping_data_list:
                wicketkeeping_data['player'] = player_instance.player_id
                wicketkeeping_data['wicketkeeping_id'] = setUniqueID(player_instance.player_id,
                                                                     wicketkeeping_data['format'])
                wicketkeeping_data['player_id'] = player_instance.player_id
                wicketkeeping_serializer = PlayerWicketKeepingSerializer(data=wicketkeeping_data)
                if wicketkeeping_serializer.is_valid():
                    wicketkeeping_serializer.save()
                else:
                    print(wicketkeeping_serializer.errors)
            return Response(player_serializer.data, status=status.HTTP_201_CREATED)
        return Response(player_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def setUniqueID(player_id, playing_format):
    formats = {'Test': 100, 'ODI': 200, 'T20': 300}
    return int(str(player_id) + str(formats[playing_format]))


@api_view(['PUT'])
def updatePlayer(request, player_id):
    try:
        player_instance = Player.objects.get(player_id=player_id)
    except Player.DoesNotExist:
        return Response({"error": "Player not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        player_serializer = PlayerSerializer(player_instance, data=request.data)
        if player_serializer.is_valid():
            player_serializer.save()

            batting_data_list = request.data.get('batting_data', [])
            bowling_data_list = request.data.get('bowling_data', [])
            wicketkeeping_data_list = request.data.get('wicketkeeping_data', [])

            for batting_data in batting_data_list:
                try:
                    batting_instance = PlayerBatting.objects.get(
                        batting_id=setUniqueID(player_id, batting_data['format']))
                    batting_data['player'] = player_id
                    batting_serializer = PlayerBattingSerializer(batting_instance, data=batting_data)
                except PlayerBatting.DoesNotExist:
                    batting_serializer = PlayerBattingSerializer(data=batting_data)

                if batting_serializer.is_valid():
                    batting_serializer.save()
                else:
                    print(batting_serializer.errors)

            for bowling_data in bowling_data_list:
                try:
                    bowling_instance = PlayerBowling.objects.get(
                        bowling_id=setUniqueID(player_id, bowling_data['format']))
                    bowling_data['player'] = player_id
                    bowling_serializer = PlayerBowlingSerializer(bowling_instance, data=bowling_data)
                except PlayerBowling.DoesNotExist:
                    bowling_serializer = PlayerBowlingSerializer(data=bowling_data)

                if bowling_serializer.is_valid():
                    bowling_serializer.save()
                else:
                    print(bowling_serializer.errors)

            for wicketkeeping_data in wicketkeeping_data_list:
                try:
                    wicketkeeping_instance = PlayerWicketKeeping.objects.get(
                        wicketkeeping_id=setUniqueID(player_id, wicketkeeping_data['format']))
                    wicketkeeping_data['player'] = player_id
                    wicketkeeping_serializer = PlayerWicketKeepingSerializer(wicketkeeping_instance,
                                                                             data=wicketkeeping_data)
                except PlayerWicketKeeping.DoesNotExist:
                    wicketkeeping_serializer = PlayerWicketKeepingSerializer(data=wicketkeeping_data)

                if wicketkeeping_serializer.is_valid():
                    wicketkeeping_serializer.save()
                else:
                    print(wicketkeeping_serializer.errors)

            return Response(player_serializer.data, status=status.HTTP_200_OK)
        return Response(player_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deletePlayer(request, player_id):
    try:
        player_instance = Player.objects.get(player_id=player_id)
    except Player.DoesNotExist:
        return Response({"error": "Player not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        player_instance.delete()
        return Response({"message": "Player deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
