import React, {useState} from 'react';
import {FaTrash, FaEdit, FaPlus, FaMinus} from 'react-icons/fa';
import {Link} from "react-router-dom";

function ExplorePlayerRanking() {
    const playersArray = [
        {id: 1, name: 'Position 1', fullName: 'Full Name 1', playingRole: 'Rank 1'},
        {id: 2, name: 'Position 2', fullName: 'Full Name 2', playingRole: 'Ranke 2'},
        {id: 3, name: 'Position3', fullName: 'Full Name 3', playingRole: 'Rank 3'},
        {id: 4, name: 'Position 1', fullName: 'Full Name 1', playingRole: 'Rank 1'},
        {id: 5, name: 'Position 2', fullName: 'Full Name 2', playingRole: 'Ranke 2'},
        {id: 6, name: 'Position3', fullName: 'Full Name 3', playingRole: 'Rank 3'},
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
        <div className="font-poppins">
            <div className="md:container px-8">
                <div
                    className="tab-header p-4 mt-6 sm:mt-8 bg-primary-ts_blue shadow-outer text-white flex flex-col sm:flex-row items-center rounded-t-2xl">
                    <div className="font-thin text-2xl mb-2 sm:mb-0 sm:mr-4">
                        <strong>Manage Players</strong>
                    </div>
                    <div
                        className="hidden sm:block font-medium border-l-2 border-white h-10 mb-2 sm:mb-0 sm:ml-4"></div>
                    <div className="font-thin text-2xl mb-2 sm:mb-0 sm:ml-4"></div>
                    <div className="font-thin text-2xl mb-2 sm:mb-0 sm:ml-4">
                        <strong>ODI Batting Ranking</strong>
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-0">
                        {/* Add any responsive content for the center if needed */}
                    </div>
                </div>
                <div
                    className="bg-primary-ts_purple grid grid-cols-1 shadow-outer rounded-tl-none rounded-tr-none rounded-3xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
                    <div className="flex flex-col items-center sm:flex-row">
                        <div
                            className="bg-primary-ts_blue text-white lg:mb-auto lg:ml-10 sm:mb-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md flex items-center justify-center sm:ml-0 ml-4 mt-4">
                            <span className="text-xl sm:text-3xl">1</span>
                        </div>
                        <div className="text-center lg:mr-16 sm:text-left lg:ml-10 lg:mb-auto sm:ml-4 mt-4">
                            <p className="text-base sm:text-2xl font-bold text-primary-ts_blue ml-8 mb-1 sm:mb-2">Player
                                Name</p>
                            <p className="text-base sm:text-2xl font-bold text-primary-ts_blue ml-8 mb-1 sm:mb-2">Ranking</p>
                        </div>
                        <div
                            className="sm:flex items-center ml-auto text-center col-span-4 sm:flex-col sm:items-start sm:mt-4 sm:order-2 mt-4">
                            <img
                                src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                alt="search-icon"
                                className="w-full max-w-[600px] mx-auto sm:w-4/5"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExplorePlayerRanking