import React, {useState} from 'react';
import {FaTrash, FaEdit, FaPlus, FaMinus} from 'react-icons/fa';
import {Link} from "react-router-dom";

const CRUDManagePlayers = () => {
    const playersArray = [
        {id: 1, name: 'Player 1', fullName: 'Full Name 1', playingRole: 'Role 1'},
        {id: 2, name: 'Player 2', fullName: 'Full Name 2', playingRole: 'Role 2'},
        {id: 3, name: 'Player 3', fullName: 'Full Name 3', playingRole: 'Role 3'},
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

    return (
        <div className="font-poppins mb-12">
            <div className="md:container px-8">
                <div
                    className="tab-header p-4 bg-primary-ts_blue text-white flex justify-between items-center rounded-t-2xl">
                    <div className="ml-4">
                        <strong>Manage Players</strong>
                    </div>
                    <div className=" flex justify-center ">
                        <button
                            className="bg-primary-red text-white p-2 mr-2 font-semibold border-none rounded-2xl flex items-center hover:scale-105"
                            onClick={handleDelete}
                        >
                            <FaMinus className="mr-2"/>
                            Delete
                        </button>
                        <Link
                            to="/add_players"
                            className="bg-primary-green text-white p-2 mr-2 font-semibold border-none rounded-2xl flex items-center  hover:scale-105"
                        >
                            <FaPlus className="mr-2"/>
                            Add New Player
                        </Link>

                    </div>
                </div>

                <div className="tab-content bg-primary-ts_purple rounded-b-2xl"
                     style={{paddingBottom: '100px', justifyContent: 'center', textAlign: 'center'}}>
                    <div className="flex mb-10 border-b-2 border-gray-500 py-4 ">
                        <div className="ml-20 w-20 mt-8"><input type="checkbox"/></div>
                        <div className="font-bold flex-1 mt-8">Name</div>
                        <div className="font-bold flex-1 mt-8">Full Name</div>
                        <div className="font-bold flex-1 mt-8">Playing Role</div>
                        <div className="font-bold flex-1 mt-8">Actions</div>
                    </div>
                    {playersArray && playersArray.length > 0 ? (
                        playersArray.map((player) => (
                            <div key={player.id}
                                 className="flex mb-10 border-b-2 border-gray-500 py-2 ">
                                <div className="ml-20 w-20">
                                    <input type="checkbox"/>
                                </div>
                                <div className="flex-1 ">{player.name}</div>
                                <div className="flex-1">{player.fullName}</div>
                                <div className="flex-1">{player.playingRole}</div>
                                <div className="flex-1 flex items-center justify-center">
                                    <FaEdit className="text-2xl cursor-pointer mr-5"/>
                                    <FaTrash className=" text-2xl cursor-pointer "/>
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