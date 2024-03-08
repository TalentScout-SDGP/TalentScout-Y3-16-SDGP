import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from "../components/shared/Spinner.jsx";
import PropTypes from 'prop-types';

const ManagePlayersContext = createContext();

export const PlayerDataProvider = ({children}) => {
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayerData, setSelectedPlayerData] = useState({});
    const [playerDict, setPlayerDict] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [playerInfo, setPlayerInfo] = useState({});

    // UseEffect to fetch all player data from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('http://localhost:8000/api/crud/');
                const data = response.data;
                setPlayerData(data);
                const playerDict = {};
                data.forEach((player) => {
                    playerDict[player.player_id] = player.full_name;
                });
                setPlayerDict(playerDict);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);


    // Function to get player data by player_id from the playerData array
    const getPlayerDataById = async (playerId) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8000/api/crud/${playerId}/`);
            const data = response.data;
            setIsLoading(false);
            setSelectedPlayerData(data);
        } catch (error) {
            setIsLoading(false);
        }
    };

    // Function to set player info data
    const setPlayerInfoData = (data) => {
        setPlayerInfo(data);
    }

    // Function to create new players
    const createPlayers = async (formData) => {
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:8000/api/crud/create/', formData);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    const contextData = {
        playerData,
        playerDict,
        selectedPlayerData: selectedPlayerData,
        getPlayerDataById: getPlayerDataById,
        setPlayerInfoData: setPlayerInfoData,
        createPlayers: createPlayers,
    };


    if (!isLoading) {
        return (
            <ManagePlayersContext.Provider value={contextData}>
                {children}
            </ManagePlayersContext.Provider>
        );
    } else {
        return (
            <div className="mt-48">
                <Spinner/>
            </div>
        )
    }
};

PlayerDataProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default ManagePlayersContext;
