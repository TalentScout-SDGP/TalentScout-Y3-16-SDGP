import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/shared/Spinner.jsx';
import PropTypes from 'prop-types';

const ManagePlayersContext = createContext();

export const PlayerDataProvider = ({ children }) => {
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayerData, setSelectedPlayerData] = useState({});
    const [selectedSecondPlayerData, setSelectedSecondPlayerData] = useState({});
    const [selectedPlayersByName, setSelectedPlayersByName] = useState([]);
    const [playerDict, setPlayerDict] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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



export default ManagePlayersContext;
