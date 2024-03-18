import {useContext, useEffect} from 'react';
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import {Link, useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {FaTrash, FaEdit, FaPlus} from 'react-icons/fa';

const CRUDManagePlayers = () => {
    const {
        selectedPlayersByName,
        searched,
        setSearched,
        deletePlayerById,
        getPlayerDataById
    } = useContext(ManagePlayersContext);
    const navigate = useNavigate()
    const userString = localStorage.getItem('user');
    const email = userString ? JSON.parse(userString).email : "Initial";

    let playersArray = [];
    let isAvailable = false;

    useEffect(() => {
        if (searched === true && selectedPlayersByName.length === 0) {
            toast.error("No players available for the given search criteria.")
            setSearched(false);
        }
    }, [selectedPlayersByName, searched]);

    const generatePlayersArray = () => {
        const playersArray = [];

        for (let i = 0; i < selectedPlayersByName.length; i++) {
            const player = {
                id: selectedPlayersByName[i].player_id,
                name: selectedPlayersByName[i].also_known_as,
                fullName: selectedPlayersByName[i].full_name,
                playingRole: selectedPlayersByName[i].playing_role,
                createdBy: selectedPlayersByName[i].created_by
            };
            playersArray.push(player);
        }
        return playersArray;
    };

    if (selectedPlayersByName.length > 0) {
        playersArray = generatePlayersArray();
        isAvailable = true;
    }

    const handleDeletePlayer = (playerId) => {
        deletePlayerById(playerId)
    };

    function handleUpdatePlayer(playerId) {
        getPlayerDataById(playerId, false, 'manage_players');
        navigate('/add_players')
    }

    if (!isAvailable) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className="font-poppins mb-12">
                <div className="md:container px-2">
                    <div
                        className="flex justify-between items-center bg-primary-ts_blue text-white  p-4  rounded-t-3xl ">
                        <strong>Manage Players</strong>
                        <Link to="/add_players"
                              className="bg-primary-green text-white px-3 py-1 font-semibold rounded-xl flex items-center text-sm hover:scale-105 whitespace-nowrap">
                            <FaPlus className="mr-2"/>
                            Add New Player
                        </Link>
                    </div>

                    <div className="bg-primary-ts_purple mx-auto rounded-b-3xl" style={{paddingBottom: '75px'}}>
                        <div className="flex border-b border-gray-400 text-sm pt-4 pb-2">
                            <div className="font-bold flex-1 mt-3 text-center">Name</div>
                            <div className="font-bold flex-1 mt-3 ml-4 text-center">Full Name</div>
                            <div className="font-bold flex-1 mt-3 ml-2 text-center">Playing Role</div>
                            <div className="font-bold flex-1 mt-3 text-center">Actions</div>
                        </div>
                        {playersArray && playersArray.length > 0 ? (
                            playersArray.slice(0, 30).map((player) => (
                                <div key={player.id}
                                     className="flex flex-col-2 py-2 border-b lg:text-base sm:text-sm text-xs border-gray-300">
                                    <div className="flex-1 mt-1 ml-2 text-center">{player.name}</div>
                                    <div className="flex-1 mt-1 ml-2 text-center">{player.fullName}</div>
                                    <div className="flex-1 mt-1 ml-2 text-center">{player.playingRole}</div>
                                    <div className="flex-1 flex items-center justify-center mt-1">
                                        <FaEdit
                                            className={`text-xl mr-4 hover:scale-105 ${player.createdBy === email ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                                            onClick={player.createdBy === email ? () => handleUpdatePlayer(player.id) : undefined}/>
                                        <FaTrash
                                            className={`text-xl hover:scale-105 ${player.createdBy === email ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                                            onClick={player.createdBy === email ? () => handleDeletePlayer(player.id) : undefined}/>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No players available.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

export default CRUDManagePlayers;
