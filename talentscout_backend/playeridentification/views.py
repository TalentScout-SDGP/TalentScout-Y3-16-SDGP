from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer
from crud_api.models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping
from django.db.models import Q
from crud_api.serializers import PlayerSerializer, PlayerBattingSerializer, PlayerBowlingSerializer, \
    PlayerWicketKeepingSerializer


@api_view(['POST'])
def rankPlayers(request):
    if request.method == 'POST':
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data

            playing_role = data['playing_role']
            batting_style = data['batting_style']
            bowling_style = data['bowling_style']
            age_min_value = data['age_min_value']
            age_max_value = data['age_max_value']
            selected_format = data['format']
            print(playing_role, batting_style, bowling_style, age_min_value, age_max_value, selected_format)

            query = Q()

            if playing_role:
                query &= Q(playing_role=playing_role)

            if bowling_style:
                query &= Q(bowling_style=bowling_style)
            # if batting_style:
            #     query &= Q(batting_style=batting_style)

            if age_min_value is not None and age_max_value is not None:
                query &= Q(age__range=(age_min_value, age_max_value))
            elif age_min_value is not None:
                query &= Q(age__gte=age_min_value)
            elif age_max_value is not None:
                query &= Q(age__lte=age_max_value)

            if selected_format:
                query &= Q(playerbowling__format=selected_format)

            filtered_players = Player.objects.filter(query)

            player_stats = []
            print("lol1")
            for player in filtered_players:
                # Fetch relevant stats based on the playing role
                print("lol")
                if playing_role == 'Batsman':
                    print("lol")
                    stats = PlayerBattingSerializer(
                        PlayerBatting.objects.filter(player=player, format=selected_format), many=True).data
                elif playing_role == 'Bowler':
                    print("lol")
                    stats = PlayerBowlingSerializer(
                        PlayerBowling.objects.filter(player=player, format=selected_format), many=True).data
                elif playing_role == 'WicketKeeper':
                    stats = PlayerWicketKeepingSerializer(
                        PlayerWicketKeeping.objects.filter(player=player, format=selected_format), many=True).data
                else:
                    stats = []

                player_serializer = PlayerSerializer(player).data
                player_serializer.update({
                    'stats': stats,
                })

                player_stats.append(player_serializer)
                print(player_stats)

            return Response(player_stats, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
