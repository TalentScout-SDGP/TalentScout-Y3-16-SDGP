import pandas as pd
from math import isnan, nan
import pickle
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np
import unittest
import pickle
import pandas as pd
import os

# Global variables initialization
format_input = "test"
playing_role = "wicket keeping"
wicketkeeping_stats_order = ['Matches', 'Innings', 'Ct', 'St']
bowling_stats_order = ['Matches', 'Wickets', 'Innings', 'Overs', 'Runs', 'BBI', 'Avg', 'Econ', 'SR', '4Ws', '5Ws']
batting_stats_order = ['Matches', 'Runs', 'Innings', 'NO', 'HS', 'Avg', 'BF', 'SR', '100s', '50s', '4s', '6s']
stats = []


def calculate_ppi(format_input, playing_role, stats):

    # Define weightage types for batting, bowling, and wicket keeping
    batting_weights = {
        "test": {"Matches": 0.08, "Runs": 0.20, "Innings": 0.08, "NO": 0.06, "HS": 0.06, "Avg": 0.22, "BF": 0.08,
                 "SR": 0.07, "100s": 0.08, "50s": 0.04, "4s": 0.04, "6s": 0.04},
        "odi": {"Matches": 0.07, "Runs": 0.24, "Innings": 0.07, "NO": 0.06, "HS": 0.06, "Avg": 0.18, "BF": 0.08,
                "SR": 0.10,
                "100s": 0.10, "50s": 0.06, "4s": 0.05, "6s": 0.05},
        "t20": {"Matches": 0.06, "Runs": 0.21, "Innings": 0.06, "NO": 0.06, "HS": 0.06, "Avg": 0.15, "BF": 0.07,
                "SR": 0.13,
                "100s": 0.07, "50s": 0.04, "4s": 0.04, "6s": 0.05}
    }
    bowling_weights = {
        "test": {"Matches": 0.05, "Wickets": 0.25, "Innings": 0.05, "Overs": 0.10, "Runs": 0.05, "BBI": 0.05,
                 "Avg": 0.10, "Econ": 0.10, "SR": 0.05, "4Ws": 0.05, "5Ws": 0.05},
        "odi": {"Matches": 0.05, "Wickets": 0.25, "Innings": 0.05, "Overs": 0.10, "Runs": 0.05, "BBI": 0.05,
                "Avg": 0.10, "Econ": 0.10, "SR": 0.05, "4Ws": 0.05, "5Ws": 0.05},
        "t20": {"Matches": 0.05, "Wickets": 0.25, "Innings": 0.05, "Overs": 0.10, "Runs": 0.05, "BBI": 0.05,
                "Avg": 0.10, "Econ": 0.10, "SR": 0.05, "4Ws": 0.05, "5Ws": 0.05}
    }
    wicketkeeping_weights = {
        "test": {"Matches": 0.07, "Innings": 0.07, "Ct": 0.12, "St": 0.09},
        "odi": {"Matches": 0.06, "Innings": 0.06, "Ct": 0.10, "St": 0.10},
        "t20": {"Matches": 0.05, "Innings": 0.05, "Ct": 0.08, "St": 0.12}
    }
    # Select the appropriate weightage type based on format_input and playing_role
    if playing_role == "batting":
        weights = batting_weights.get(format_input, {})
    elif playing_role == "bowling":
        weights = bowling_weights.get(format_input, {})
    elif playing_role == "wicket keeping":
        weights = wicketkeeping_weights.get(format_input, {})
    else:
        print("Invalid playing role entered.")
        return None


    if playing_role == "batting":
        stats_order = batting_stats_order
    elif playing_role == "bowling":
        stats_order = bowling_stats_order
    elif playing_role == "wicket keeping":
        stats_order = wicketkeeping_stats_order
    else:
        print("Invalid playing role entered.")
        exit()
    # stats = [0 if isnan(value) else value for value in stats]
    # Calculate PPI using the selected weights and provided stats
    ppi = sum(value * weights.get(stat, 0) for stat, value in zip(stats_order, stats))
    return ppi
class TestBackendFunctionality(unittest.TestCase):
    def test_calculate_ppi_odi_Bowling(self):
        # Arrange
        format_input = "odi"
        playing_role = "bowling"
        Bowling_stats = [3, 6, 3, 28.0, 183, 28, 30.5, 6.53, 28.0, 0, 0]

        current_script_path = os.path.abspath(__file__)
        # Get the content root directory (assuming this script is within the project)
        content_root = os.path.dirname(os.path.dirname(os.path.dirname(current_script_path)))

        relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Bowling_ODI_model.pkl'
        pickle_file_path = os.path.join(content_root, relative_pickle_path)

        with open( pickle_file_path, 'rb') as model_file:
            loaded_model = pickle.load(model_file)
        new_player_stats = pd.DataFrame([Bowling_stats], columns=['Matches', 'Wickets', 'Innings', 'Overs', 'Runs', 'BBI', 'Avg', 'Econ', 'SR', '4Ws', '5Ws'])
        predicted_ppi = loaded_model.predict(new_player_stats)
        expected_ppi = round(predicted_ppi[0], 2)

        # Act
        actual_ppi = calculate_ppi(format_input, playing_role, Bowling_stats)
        actual_ppi = round(actual_ppi, 2)
        self.assertEqual(actual_ppi, expected_ppi)

        def test_calculate_ppi_test_Bowling(self):
            # Arrange
            format_input = "test"
            playing_role = "bowling"
            Bowling_stats = [2, 2, 3, 23.0, 118, 25, 59.0, 5.13, 69.0, 0, 0]

            current_script_path = os.path.abspath(__file__)
            # Get the content root directory (assuming this script is within the project)
            content_root = os.path.dirname(os.path.dirname(os.path.dirname(current_script_path)))

            relative_pickle_path = 'talentscout_backend/playeridentification/Pickle_models/trained_Bowling_Test_model.pkl'
            pickle_file_path = os.path.join(content_root, relative_pickle_path)

            with open(pickle_file_path,
                      'rb') as model_file:
                loaded_model = pickle.load(model_file)
            new_player_stats = pd.DataFrame([Bowling_stats],
                                            columns=['Matches', 'Wickets', 'Innings', 'Overs', 'Runs', 'BBI', 'Avg',
                                                     'Econ', 'SR', '4Ws', '5Ws'])
            predicted_ppi = loaded_model.predict(new_player_stats)
            expected_ppi = round(predicted_ppi[0], 2)

            # Act
            actual_ppi = calculate_ppi(format_input, playing_role, Bowling_stats)
            actual_ppi = round(actual_ppi, 2)

            # Assert
            self.assertEqual(actual_ppi, expected_ppi)




