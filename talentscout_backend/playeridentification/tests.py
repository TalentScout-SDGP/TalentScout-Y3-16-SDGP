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

