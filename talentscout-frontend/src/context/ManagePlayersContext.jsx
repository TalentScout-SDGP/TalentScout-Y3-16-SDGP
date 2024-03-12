import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/shared/Spinner.jsx';
import PropTypes from 'prop-types';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const ManagePlayersContext = createContext();

export const PlayerDataProvider = ({children}) => {
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayerData, setSelectedPlayerData] = useState({});
    const [selectedSecondPlayerData, setSelectedSecondPlayerData] = useState({});
    const [updatePlayerData, setUpdatePlayerData] = useState({});
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
                toast.error('Something went wrong. Please try again.');
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const getPlayerDataById = async (playerId, isSecondPlayer = false, page) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8000/api/crud/${playerId}/`);
            const data = response.data;
            setIsLoading(false);
            if (isSecondPlayer) {
                setSelectedSecondPlayerData(data);
            } else if (page === 'manage_players') {
                setUpdatePlayerData(data);
            } else {
                setSelectedPlayerData(data);
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
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
            toast.error('Something went wrong. Please try again.');
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
            toast.error('Something went wrong. Please try again.');
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
            toast.error('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    const contextData = {
        playerData,
        playerDict,
        selectedPlayerData,
        selectedSecondPlayerData,
        updatePlayerData,
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
