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


            </div>
        </div>
    )
}

export default ExplorePlayerRanking