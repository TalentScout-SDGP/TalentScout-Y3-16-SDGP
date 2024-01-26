import React, { useState } from 'react';
import { FaTrash, FaEdit, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CRUDManagePlayers = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const playersArray = [
        {id: 1, name: 'Player 1', fullName: 'Full Name 1', playingRole: 'Role 1'},
        {id: 2, name: 'Player 2', fullName: 'Full Name 2', playingRole: 'Role 2'},
        {id: 3, name: 'Player 3', fullName: 'Full Name 3', playingRole: 'Role 3'},
        {id: 4, name: 'Player 4', fullName: 'Full Name 4', playingRole: 'Role 4'},
        {id: 5, name: 'Player 5', fullName: 'Full Name 5', playingRole: 'Role 5'},
        {id: 6, name: 'Player 6', fullName: 'Full Name 6', playingRole: 'Role 6'},
        {id: 7, name: 'Player 7', fullName: 'Full Name 7', playingRole: 'Role 7'},
        {id: 8, name: 'Player 8', fullName: 'Full Name 8', playingRole: 'Role 8'},
        {id: 9, name: 'Player 9', fullName: 'Full Name 9', playingRole: 'Role 9'},
        {id: 10, name: 'Player 10', fullName: 'Full Name 10', playingRole: 'Role 10'},
        {id: 11, name: 'Player 11', fullName: 'Full Name 11', playingRole: 'Role 11'},
        {id: 12, name: 'Player 12', fullName: 'Full Name 12', playingRole: 'Role 12'},
        {id: 13, name: 'Player 13', fullName: 'Full Name 13', playingRole: 'Role 13'},
        {id: 14, name: 'Player 14', fullName: 'Full Name 14', playingRole: 'Role 14'},
        {id: 15, name: 'Player 15', fullName: 'Full Name 15', playingRole: 'Role 15'},
        // ... other players
    ];

    const handleDelete = () => {
        // Placeholder for delete functionality
        console.log('Deleting players...');
    };

    const handleAddNewPlayer = () => {
        // Placeholder for redirecting to AddPlayer page
        console.log('Redirecting to AddPlayer page...');
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

    return (
        <div className="font-poppins py-12">
            <div className="md:container px-8">
                <div
                    className="tab-header p-4 bg-primary-ts_blue text-white flex justify-between items-center rounded-t-2xl"
                >
                    <div className="ml-4">
                        <strong>Manage Players</strong>
                    </div>
                    <div className=" flex justify-center ">
                        <button
                            className="bg-primary-red text-white p-2 mr-2 font-semibold border-none rounded-2xl flex items-center hover:scale-105"
                            onClick={handleDelete}
                        >
                            <FaMinus className="mr-2" />
                            Delete
                        </button>
                        <Link
                            to="/add_players"
                            className="bg-primary-green text-white p-2 mr-2 font-semibold border-none rounded-2xl flex items-center  hover:scale-105"
                        >
                            <FaPlus className="mr-2" />
                            Add New Player
                        </Link>
                    </div>
                </div>

                <div
                    className="tab-content bg-primary-ts_purple rounded-b-2xl"
                    style={{ paddingBottom: '150px', justifyContent: 'center', textAlign: 'center' }}
                >
                    <div className="flex  border-b-2 border-gray-400 pt-5 py-4">
                        <div className="ml-20 w-20 mt-8">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                        </div>
                        <div className="font-bold flex-1 mt-8">Name</div>
                        <div className="font-bold flex-1 mt-8">Full Name</div>
                        <div className="font-bold flex-1 mt-8">Playing Role</div>
                        <div className="font-bold flex-1 mt-8">Actions</div>
                    </div>
                    {playersArray && playersArray.length > 0 ? (
                        playersArray.map((player) => (
                            <div key={player.id} className="flex py-5 border-b-2 border-gray-300  ">
                                <div className="ml-20 w-20">
                                    <input
                                        type="checkbox"
                                        checked={selectedPlayers.includes(player.id)}
                                        onChange={() => handleSelectPlayer(player.id)}
                                    />
                                </div>
                                <div className="flex-1 ">{player.name}</div>
                                <div className="flex-1">{player.fullName}</div>
                                <div className="flex-1">{player.playingRole}</div>
                                <div className="flex-1 flex items-center justify-center">
                                    <FaEdit className="text-2xl cursor-pointer mr-5 hover:scale-105" />
                                    <FaTrash className=" text-2xl cursor-pointer hover:scale-105" />
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
};

export default CRUDManagePlayers;
