import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/shared/Spinner.jsx';
import PropTypes from 'prop-types';

const ManagePlayersContext = createContext();

export const PlayerDataProvider = ({children}) => {
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayerData, setSelectedPlayerData] = useState(null);
    const [selectedSecondPlayerData, setSelectedSecondPlayerData] = useState({});
    const [selectedPlayersByName, setSelectedPlayersByName] = useState([]);
    const [playerDict, setPlayerDict] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [playerInfo, setPlayerInfo] = useState({});
    const [createdPlayer, setCreatedPlayer] = useState();
    const [createdPlayerStatus, setCreatedPlayerStatus] = useState(0);

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
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching player data:', error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const getPlayerDataById = async (playerId, isSecondPlayer = false) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8000/api/crud/${playerId}/`);
            const data = response.data;
            setIsLoading(false);
            if (isSecondPlayer) {
                setSelectedSecondPlayerData(data);
            } else {
                setSelectedPlayerData(data);
            }
        } catch (error) {
            console.error('Error fetching player data by ID:', error);
            setIsLoading(false);
        }
    };

    const filterPlayersByName = async (playerName) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8000/api/crud/filter?full_name=${playerName}`);
            const data = response.data;
            setIsLoading(false);
            setSelectedPlayersByName(data);
        } catch (error) {
            console.error('Error filtering players by name:', error);
            setIsLoading(false);
        }
    };

    const setPlayerInfoData = async (data) => {
        setPlayerInfo(data);
    }

    const createPlayers = async (playerInfo) => {
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:8000/api/crud/create/', playerInfo);
            const data = response.data;
            setIsLoading(false);
            setCreatedPlayer(data);
            setCreatedPlayerStatus(201);
        } catch (error) {
            console.error('Error creating player by ID:', error);
            setIsLoading(false);
            setCreatedPlayerStatus(400);
        }
    }

    const deletePlayerById = async (playerId) => {
        try {
            setIsLoading(true);
            await axios.delete(`http://localhost:8000/api/crud/delete/${playerId}/`);
            setIsLoading(false);
        } catch (error) {
            console.error('Error deleting player by ID:', error);
            setIsLoading(false);
        }
    };

    const contextData = {
        playerData,
        playerDict,
        selectedPlayerData,
        selectedSecondPlayerData,
        selectedPlayersByName,
        playerInfo,
        createdPlayer,
        createdPlayerStatus,
        getPlayerDataById,
        filterPlayersByName,
        deletePlayerById,
        setPlayerInfoData,
        createPlayers
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
        );
    }
};

PlayerDataProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ManagePlayersContext;
