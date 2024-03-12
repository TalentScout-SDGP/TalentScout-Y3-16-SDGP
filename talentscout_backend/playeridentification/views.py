from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer
from crud_api.models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping
from django.db.models import Q
from crud_api.serializers import PlayerSerializer, PlayerBowlingSerializer


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
            print(query)
            if age_min_value is not None and age_max_value is not None:
                query &= Q(age__range=(age_min_value, age_max_value))
            elif age_min_value is not None:
                query &= Q(age__gte=age_min_value)
            elif age_max_value is not None:
                query &= Q(age__lte=age_max_value)
            if selected_format:
                query &= Q(playerbowling__format=selected_format)

            filtered_players = Player.objects.filter(query)
            print(query)
            player_stats = []

            for player in filtered_players:

                # Fetch only bowling stats for bowlers

                if playing_role == 'Bowler':
                    bowling_stats = PlayerBowlingSerializer(
                        PlayerBowling.objects.filter(player=player, format=selected_format), many=True).data
                else:
                    bowling_stats = []  # Empty list for non-bowlers

                # You can fetch batting stats and wicketkeeping stats if needed

                player_serializer = PlayerSerializer(player).data
                player_serializer.update({
                    'bowling_stats': bowling_stats,
                })

                player_stats.append(player_serializer)

            return Response(player_stats, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
