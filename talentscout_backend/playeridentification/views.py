from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer
from crud_api.models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping
from django.db.models import Q
from crud_api.serializers import PlayerBattingSerializer, PlayerBowlingSerializer, PlayerWicketKeepingSerializer
import pickle
import csv
import pandas as pd
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Global variables initialization
format_input = "odi"
playing_role = "bowling"
wicketkeeping_stats_order = ['Matches', 'Innings', 'Highest Score', 'Balls Faced', '100s', '6s', 'Catches', 'Runs',
                             'Not Outs', 'Average', 'Strike Rate', '50s', '4s', 'Stumps']
bowling_stats_order = ['Matches', 'Wickets', 'Innings', 'Overs', 'Runs', 'BBI', 'Avg', 'Econ', 'SR', '4Ws', '5Ws']
batting_stats_order = ['Matches', 'Runs', 'Innings', 'NO', 'HS', 'Avg', 'BF', 'SR', '100s', '50s', '4s', '6s']


@api_view(['POST'])
def rankPlayers(request):
    global numeric_columns
    if request.method == 'POST':
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data

            playing_role = data['playing_role']
            batting_style = data.get('batting_style')
            bowling_style = data.get('bowling_style')
            age_min_value = data['age_min_value']
            age_max_value = data['age_max_value']
            selected_format = data['format']
            print(playing_role, batting_style, bowling_style, age_min_value, age_max_value, selected_format)

            query = Q()
            if playing_role:
                query &= Q(playing_role=playing_role)

            if playing_role == "Bowler":

                numeric_columns = bowling_stats_order
                if bowling_style:
                    query &= Q(bowling_style=bowling_style)
                if selected_format:
                    query &= Q(playerbowling__format=selected_format)
            elif playing_role == "Batsman":

                numeric_columns = batting_stats_order
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
            player_list = []  # List to store dictionaries for each player
            for player in filtered_players:
                player_dict = {
                    'player_id': player.pk,
                    'player_name': player.full_name,  # Assuming your Player model has a 'name' field
                    'stats': []
                }

                player_stats = []

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
                for stat in stats:
                    # Extract only the numerical values and append them to a list
                    player_stats_values = [value for key, value in stat.items() if
                                           key not in ['batting_id', 'format', 'player']]

                    # Append the list of numerical values to the 'stats' key in the player_dict
                    player_dict['stats'].append(player_stats_values)

                    # Append the player_dict to the player_list
                player_list.append(player_dict)
            string_values_list = []

            for player_info in player_list:
                    for stats_values in player_info['stats']:
                        for value in stats_values:
                            if isinstance(value, str):
                                string_values_list.append(value)

            print(string_values_list)

            bbi_counts = sorted_BBIs(string_values_list)

            # Replace BBI strings with their corresponding count values

            # Loop through the player_list and replace BBI strings with counts
            for player_info in player_list:
                for stats_values in player_info['stats']:
                    for i, value in enumerate(stats_values):
                        if isinstance(value, str) and value in bbi_counts:
                            stats_values[i] = bbi_counts[value]







            return Response(player_list, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def sorted_BBIs(BBIs):
    # Function to get key for sorting BBIs
    def get_bbi_key(x):
        try:
            bbi_parts = x.split('/')
            if len(bbi_parts) == 2:
                return -int(bbi_parts[1]), int(bbi_parts[0])
            else:
                return 0, 0  # Return a small value if BBI is missing or invalid
        except ValueError:
            return 0, 0

    # Find the best BBI
    best_bbis = sorted(BBIs, key=lambda x: get_bbi_key(x), reverse=True)

    # Allocate count to each BBI based on index
    bbi_counts = {}
    base_count = 1  # Starting count value for non-duplicate items
    for s in best_bbis:
        if s in bbi_counts:
            # If the string is a duplicate, assign the same count value
            count = bbi_counts[s]
        elif s == '0':
            # If the string is not a duplicate, assign the base count value
            count = 0
        else:
            # If the string is not a duplicate, assign the base count value
            count = base_count
            base_count += 1

        # Update the count in the dictionary for the current string
        bbi_counts[s] = count
        print(f"String: {s}, Count: {count}")

    return bbi_counts