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
            stats_list = []
            stats_values = []

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

                player_stats = {}
                for stat in stats:
                    for key, value in stat.items():
                        if key != 'batting_id' and key != 'format':
                            player_stats[key] = value
                            stats_values.append(value)
                stats_list.append(player_stats)

            print(stats_values)

            grouped_stats_values = [stats_values[i:i + 13] for i in range(0, len(stats_values), 13)]
            script_directory = os.path.dirname(os.path.abspath(__file__))

            # Get the absolute path of the current script
            current_script_path = os.path.abspath(__file__)

            # Get the content root directory (assuming this script is within the project)
            content_root = os.path.dirname(os.path.dirname(os.path.dirname(current_script_path)))

            # Construct the path to the pickle file from the content root
            relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_Model/trained_Bowling_Test_model.pkl'
            pickle_file_path = os.path.join(content_root, relative_pickle_path)

            for i in grouped_stats_values:
                print(i)  # Adjust the path accordingly
                with open(pickle_file_path, 'rb') as file:
                    loaded_model = pickle.load(file)
                new_player_stats = pd.DataFrame([i], columns=numeric_columns)
                predicted_ppi = loaded_model.predict(new_player_stats)
                print(predicted_ppi)

            return Response(stats_list, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
