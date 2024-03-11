from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer
from crud_api.models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping
from django.db.models import Q
from crud_api.serializers import PlayerBattingSerializer, PlayerBowlingSerializer, PlayerWicketKeepingSerializer


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

            if playing_role == "Bowler":
                if bowling_style:
                    query &= Q(bowling_style=bowling_style)
                if selected_format:
                    query &= Q(playerbowling__format=selected_format)
            elif playing_role == "Batsman":
                if batting_style:
                    query &= Q(batting_style=batting_style)
                if selected_format:
                    query &= Q(playerbatting__format=selected_format)

            if age_min_value is not None and age_max_value is not None:
                query &= Q(age__range=(age_min_value, age_max_value))
            elif age_min_value is not None:
                query &= Q(age__gte=age_min_value)
            elif age_max_value is not None:
                query &= Q(age__lte=age_max_value)

            filtered_players = Player.objects.filter(query)
            print(query)
            stats_list = []

            for player in filtered_players:

                # Fetch relevant stats based on the playing role

                if playing_role == 'Batsman':
                    stats = PlayerBattingSerializer(
                        PlayerBatting.objects.filter(player=player, format=selected_format), many=True).data
                elif playing_role == 'Bowler':
                    stats = PlayerBowlingSerializer(
                        PlayerBowling.objects.filter(player=player, format=selected_format), many=True).data
                elif playing_role == 'WicketKeeper':
                    stats = PlayerWicketKeepingSerializer(
                        PlayerWicketKeeping.objects.filter(player=player, format=selected_format), many=True).data
                else:
                    stats = []

                stats_list.extend(stats)  # Append stats to the list

            print(stats_list)

            return Response(stats_list, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
