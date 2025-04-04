import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/shared/Spinner.jsx';
import PropTypes from 'prop-types';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom";

const ManagePlayersContext = createContext();

export const PlayerDataProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [playerDict, setPlayerDict] = useState({});
    const [playerInfo, setPlayerInfo] = useState({});
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayerData, setSelectedPlayerData] = useState({});
    const [selectedSecondPlayerData, setSelectedSecondPlayerData] = useState({});
    const [playerProfileData, setPlayerProfileData] = useState({});
    const [selectedPlayersByName, setSelectedPlayersByName] = useState([]);
    const [searched, setSearched] = useState(false);
    const [updatePlayerData, setUpdatePlayerData] = useState({});
    const navigate = useNavigate();

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
            } else if (page === 'player_profiles') {
                setPlayerProfileData(data);
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
            setSearched(true)
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
            await axios.post('http://localhost:8000/api/crud/create/', playerInfo);
            toast.success('Player Created Successfully!')
            setIsLoading(false);
            setUpdatePlayerData({});
            setSelectedPlayersByName([]);
            setPlayerInfo({});
            setSearched(false)
            navigate('/manage_players');
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    }

    const updatePlayers = async (playerInfo, playerId) => {
        try {
            setIsLoading(true);
            await axios.put(`http://localhost:8000/api/crud/update/${playerId}/`, playerInfo);
            toast.success('Player Updated Successfully!')
            setIsLoading(false);
            setUpdatePlayerData({});
            setSelectedPlayersByName([]);
            setPlayerInfo({});
            setSearched(false)
            navigate('/manage_players');
        } catch (error) {
            toast.error('Something went wrong. Please save player info first and then try again.');
            setIsLoading(false);
        }
    }

    const deletePlayerById = async (playerId) => {
        try {
            setIsLoading(true);
            await axios.delete(`http://localhost:8000/api/crud/delete/${playerId}/`);
            toast.success('Player Deleted Successfully.');
            setIsLoading(false);
            setUpdatePlayerData({});
            setSelectedPlayersByName([]);
            setPlayerInfo({});
            setSearched(false)
            setIsLoading(false);
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    const contextData = {
        playerData: playerData,
        playerDict: playerDict,
        playerInfo: playerInfo,
        selectedPlayerData: selectedPlayerData,
        selectedSecondPlayerData: selectedSecondPlayerData,
        playerProfileData: playerProfileData,
        selectedPlayersByName: selectedPlayersByName,
        searched: searched,
        updatePlayerData: updatePlayerData,
        setSearched: setSearched,
        getPlayerDataById: getPlayerDataById,
        filterPlayersByName: filterPlayersByName,
        deletePlayerById: deletePlayerById,
        setPlayerInfoData: setPlayerInfoData,
        createPlayers: createPlayers,
        updatePlayers: updatePlayers,
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
