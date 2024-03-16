from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer
from crud_api.models import Player, PlayerBatting, PlayerBowling, PlayerWicketKeeping
from django.db.models import Q
from crud_api.serializers import PlayerBattingSerializer, PlayerBowlingSerializer, PlayerWicketKeepingSerializer
import pickle
import pandas as pd
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Global variables initialization
# stats order lists initialization
wicketkeeping_stats_order = ['Matches', 'Innings', 'Ct', 'St']
bowling_stats_order = ['Matches', 'Wickets', 'Innings', 'Overs', 'Runs', 'BBI', 'Avg', 'Econ', 'SR', '4Ws', '5Ws']
batting_stats_order = ['Matches', 'Runs', 'Innings', 'NO', 'HS', 'Avg', 'BF', 'SR', '100s', '50s', '4s', '6s']


@api_view(['POST'])
def rankPlayers(request):
    global numeric_columns
    if request.method == 'POST':
        serializer = FormDataSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            # Catching Frontend formats
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
            # Using filters for the Bowler
            if playing_role == "Bowler":
                numeric_columns = bowling_stats_order
                if bowling_style:
                    query &= Q(bowling_style=bowling_style)
                if selected_format:
                    query &= Q(playerbowling__format=selected_format)
            # Using filters for the Wicket Keeper
            if playing_role == "Wicket Keeper":
                numeric_columns = wicketkeeping_stats_order
                if bowling_style:
                    query &= Q(bowling_style=bowling_style)
                if batting_style:
                    query &= Q(batting_style=batting_style)
                if selected_format:
                    query &= Q(playerwicketkeeping__format=selected_format)

            # Using filters for the batsman
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

            # print the current using query formats
            print(query)

            player_list = []  # List to store dictionaries for each player
            for player in filtered_players:
                player_dict = {
                    'player_id': player.pk,
                    'player_name': player.full_name,  # Assuming your Player model has a 'name' field
                    'stats': []
                }

                # Fetch relevant stats based on the playing role
                if playing_role == 'Batsman':
                    stats = PlayerBattingSerializer(
                        PlayerBatting.objects.filter(player=player, format=selected_format), many=True).data
                elif playing_role == 'Bowler':
                    stats = PlayerBowlingSerializer(
                        PlayerBowling.objects.filter(player=player, format=selected_format), many=True).data
                elif playing_role == 'Wicket Keeper':
                    stats = PlayerWicketKeepingSerializer(
                        PlayerWicketKeeping.objects.filter(player=player, format=selected_format), many=True).data
                else:
                    stats = []

                for stat in stats:
                    # Extract only the numerical values and append them to a list
                    player_stats_values = [value for key, value in stat.items() if
                                           key not in ['wicketkeeping_id', 'bowling_id', 'batting_id', 'format',
                                                       'player']]

                    # Append the list of numerical values to the 'stats' key in the player_dict
                    player_dict['stats'].append(player_stats_values)

                # Append the player_dict to the player_list
                player_list.append(player_dict)

            if playing_role == "Bowler":
                string_values_list = []

                for player_info in player_list:
                    for stats_values in player_info['stats']:
                        for value in stats_values:
                            if isinstance(value, str):
                                string_values_list.append(value)

                bbi_counts = sorted_BBIs(string_values_list)
                # Append the player_dict to the player_list

                # print the bbi counts
                print(bbi_counts)
                # Replace BBI strings with their corresponding count values
                for player_info in player_list:
                    for stats_values in player_info['stats']:
                        for i, value in enumerate(stats_values):
                            if isinstance(value, str) and value in bbi_counts:
                                stats_values[i] = bbi_counts[value]

            # Get the absolute path of the current script
            current_script_path = os.path.abspath(__file__)

            # Get the content root directory (assuming this script is within the project)
            content_root = os.path.dirname(os.path.dirname(os.path.dirname(current_script_path)))

            if playing_role == 'Batsman' and selected_format == 'Test':
                # Construct the path to the pickle file from the content root
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Batting_Test_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Batsman' and selected_format == 'T20':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Batting_T20_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Batsman' and selected_format == 'ODI':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Batting_ODI_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Bowler' and selected_format == 'Test':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Bowling_Test_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Bowler' and selected_format == 'T20':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Bowling_T20_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Bowler' and selected_format == 'ODI':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Bowling_ODI_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Wicket Keeper' and selected_format == 'Test':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_WK_Test_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Wicket Keeper' and selected_format == 'T20':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_WK_T20_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            elif playing_role == 'Wicket Keeper' and selected_format == 'ODI':
                relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_WK_ODI_model.pkl'
                pickle_file_path = os.path.join(content_root, relative_pickle_path)

            # printing the using stats order--
            print(numeric_columns)

            for player_info in player_list:
                player_id = player_info['player_id']
                player_name = player_info['player_name']
                player_stats_list = player_info['stats']

                print(f"Player ID: {player_id}, Player Name: {player_name}")

                for stats_values in player_stats_list:
                    print("Stats Values:", stats_values)

                    # Calculate PPI using the pickle model
                    with open(pickle_file_path, 'rb') as file:
                        loaded_model = pickle.load(file)

                    new_player_stats = pd.DataFrame([stats_values], columns=numeric_columns)
                    predicted_ppi = loaded_model.predict(new_player_stats)
                    # Round UP the PPI value
                    rounded_ppi = round(predicted_ppi[0], 2)
                    # Update the stats_dict with the calculated PPI
                    player_info['PPI'] = player_info.pop('stats')
                    player_info['PPI'] = rounded_ppi

            sorted_player_list = sorted(player_list, key=lambda x: x['PPI'], reverse=True)

            for player_info in sorted_player_list:
                player_id = player_info['player_id']
                player_name = player_info['player_name']
                PPI = player_info['PPI']

                # printing Players ppi name and player ID--
                print(f"Player ID: {player_id}, Player Name: {player_name} , PPI: {PPI} ")

            return Response(sorted_player_list, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Function to get key for sorting BBIs
def sorted_BBIs(BBIs):
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
