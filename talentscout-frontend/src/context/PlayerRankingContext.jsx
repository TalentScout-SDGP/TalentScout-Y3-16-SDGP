import {createContext, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Spinner from "../components/shared/Spinner.jsx";
import PropTypes from 'prop-types';

const PlayerRankingContext = createContext();

export const PlayerRankingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [rankedPlayers, setRankedPlayers] = useState([]);

    const rankPlayers = async (formData, age_min_value, age_max_value) => {
        const {format, playing_role, batting_style, bowling_style} = formData;
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:8000/api/rank/', {
                format,
                playing_role,
                batting_style,
                bowling_style,
                age_min_value,
                age_max_value
            });
            console.log('Response From Backend:', response.data);
            setRankedPlayers(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log('Error Sending Data!!!!')
        }
    }

    const contextData = {
        rankedPlayers: rankedPlayers,
        rankPlayers: rankPlayers,
    };

    if (!isLoading) {
        return (
            <PlayerRankingContext.Provider value={contextData}>
                {children}
            </PlayerRankingContext.Provider>
        );
    } else {
        return (
            <div className="mt-48">
                <Spinner/>
            </div>
        )
    }
};

PlayerRankingProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default PlayerRankingContext;
