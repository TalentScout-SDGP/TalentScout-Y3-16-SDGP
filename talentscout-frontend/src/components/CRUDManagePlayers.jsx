import {useState, useContext, useEffect} from 'react';
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import {FaTrash, FaEdit, FaPlus, FaMinus} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const CRUDManagePlayers = () => {
    const {selectedPlayersByName} = useContext(ManagePlayersContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const [selectAll, setSelectAll] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    let playersArray = [];
    let isAvailable = false;

    const generatePlayersArray = () => {
        const playersArray = [];
        for (let i = 0; i < selectedPlayersByName.length; i++) {
            const player = {
                id: selectedPlayersByName[i].player_id,
                name: selectedPlayersByName[i].also_known_as,
                fullName: selectedPlayersByName[i].full_name,
                playingRole: selectedPlayersByName[i].playing_role
            };
            playersArray.push(player);
        }
        return playersArray;
    };

    if (selectedPlayersByName.length > 0) {
        playersArray = generatePlayersArray();
        isAvailable = true;
    }

    const handleDelete = () => {
        // Handle delete logic
    };

    const handleDeletePlayer = (playerId) => {
        // Handle delete player logic
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedPlayers(selectAll ? [] : playersArray.map(player => player.id));
    };

    const handleSelectPlayer = (playerId) => {
        setSelectedPlayers((prevSelected) => {
            if (prevSelected.includes(playerId)) {
                return prevSelected.filter(id => id !== playerId);
            } else {
                return [...prevSelected, playerId];
            }
        });
    };

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
                        <div className="flex items-center space-x-2">
                            <button
                                className="bg-primary-red text-white px-3 py-1 font-semibold text-sm rounded-xl flex items-center hover:scale-105"
                                onClick={handleDelete}
                            >
                                <FaMinus className="mr-1"/>
                                Delete
                            </button>
                            <Link
                                to="/add_players"
                                className="bg-primary-green text-white px-3 py-1 font-semibold rounded-xl flex items-center text-sm hover:scale-105 whitespace-nowrap"
                            >
                                <FaPlus className="mr-1"/>
                                Add New Player
                            </Link>
                        </div>
                    </div>

                    <div className="bg-primary-ts_purple mx-auto rounded-b-3xl" style={{paddingBottom: '75px'}}>
                        <div className="flex border-b border-gray-400 text-sm pt-4 pb-2">
                            <div className="w-8 ml-4 sm:ml-10 mt-3">
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </div>
                            <div className="font-bold flex-1 mt-3 ml-4">Name</div>
                            <div className="font-bold flex-1 mt-3 mr-2">Full Name</div>
                            <div className="font-bold flex-1 mt-3 ml-6">Playing Role</div>
                            <div className="font-bold flex-1 text-center mt-3">Actions</div>
                        </div>
                        {playersArray && playersArray.length > 0 ? (
                            playersArray.slice(0, 30).map((player) => (
                                <div key={player.id}
                                     className="flex py-2 border-b lg:text-base sm:text-sm text-xs border-gray-300">
                                    <div className="disabled-icon w-8 ml-4 sm:ml-10 mt-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedPlayers.includes(player.id)}
                                            onChange={() => handleSelectPlayer(player.id)}
                                        />
                                    </div>
                                    <div className="flex-1 mt-1 ml-4">{player.name}</div>
                                    <div className="flex-1 mt-1 mr-2">{player.fullName}</div>
                                    <div className="flex-1 mt-1 ml-6">{player.playingRole}</div>
                                    <div className="flex-1 flex items-center justify-center mt-1">
                                        <FaEdit className="disabled-icon text-xl cursor-pointer mr-2 hover:scale-105"/>
                                        <FaTrash className="disabled-icon text-xl cursor-pointer hover:scale-105"
                                                 onClick={() => handleDeletePlayer(player.id)}/>
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
