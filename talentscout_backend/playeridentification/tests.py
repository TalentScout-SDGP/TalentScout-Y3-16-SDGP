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

