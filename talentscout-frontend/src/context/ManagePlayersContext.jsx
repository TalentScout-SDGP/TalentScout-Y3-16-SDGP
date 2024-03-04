import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Spinner from "../components/shared/Spinner.jsx";
import PropTypes from 'prop-types';

const ManagePlayersContext = createContext();

export const PlayerDataProvider = ({children}) => {
    const [playerData, setPlayerData] = useState([]);
    const [selectedPlayerData, setSelectedPlayerData] = useState({});
    const [playerDict, setPlayerDict] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
                toast.success('Successfully fetched player data.');
            } catch (error) {
                setIsLoading(false);
                toast.error('Error fetching player data, Try Again.');
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
            toast.error('Error fetching player data, Try Again.');
        }
    };

    const contextData = {
        playerData,
        playerDict,
        selectedPlayerData: selectedPlayerData,
        getPlayerDataById: getPlayerDataById,
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
