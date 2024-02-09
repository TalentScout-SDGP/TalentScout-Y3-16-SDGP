import React, {useState} from 'react';
import {FaTrash, FaEdit, FaPlus, FaMinus} from 'react-icons/fa';
import {Link} from "react-router-dom";

function ExplorePlayerRanking() {
    const playersArray = [
        {id: 1, name: '1', fullName: 'Full Name 1', playingRole: 'Rank 1'},
        {id: 2, name: '2', fullName: 'Full Name 2', playingRole: 'Rank 2'},
        {id: 3, name: '3', fullName: 'Full Name 3', playingRole: 'Rank 3'},
        {id: 4, name: '4', fullName: 'Full Name 4', playingRole: 'Rank 4'},
        {id: 5, name: '5', fullName: 'Full Name 5', playingRole: 'Rank 5'},
        {id: 6, name: '6', fullName: 'Full Name 6', playingRole: 'Rank 6'},
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
                    <div className="font-thin lg:ml-10 text-xl mb-2 sm:mb-0 sm:mr-5">
                        <strong>ODI</strong>
                    </div>
                    <div
                        className="hidden sm:block font-medium border-l-2 border-white h-10 mb-2 sm:mb-0 sm:ml-4"></div>
                    <div className="font-thin text-2xl mb-2 sm:mb-0 sm:ml-4"></div>
                    <div className="font-thin text-xl mb-2 sm:mb-0 sm:ml-4">
                        <strong>ODI Batting Ranking</strong>
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-0">
                        {/* Add any responsive content for the center if needed */}
                    </div>
                </div>
                <div
                    className="bg-primary-ts_purple grid grid-cols-1 shadow-outer rounded-tl-none rounded-tr-none rounded-3xl lg:px-8 sm:px-5 py-5 sm:py-1">
                    <div className="flex flex-col items-center sm:flex-row">
                        <div
                            className="bg-primary-ts_blue  text-white lg:mb-auto lg:ml-20 sm:mb-5  w-16 h-16 sm:w-20 sm:h-20 rounded-md flex items-center justify-center sm:ml-0  lg:mt-10">
                            <span className="text-xl sm:text-3xl">1</span>
                        </div>
                        <div
                            className="text-center lg:mr-16 sm:text-left lg:ml-10 lg:mb-auto sm:ml-4  sm:mt-10 lg:mt-10">
                            <p className="text-base sm:text-2xl font-bold text-primary-ts_blue mb-1 sm:mb-2">Player
                                Name</p>
                            <p className="text-base sm:text-2xl font-bold text-primary-ts_blue  mb-1 sm:mb-2">Ranking</p>
                        </div>
                        <div
                            className="sm:flex items-center lg:ml-auto m-10 sm:ml-20  text-center sm:flex-col lg:mb-3 sm:items-start  sm:order-2 ">
                            <img
                                src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                alt="search-icon"
                                className="lg:pr-20 lg:max-w-[350px] ms:pr-20  ms:max-w-[200px] sm:max-w-[200px]  sm:w-4/5"/>
                        </div>
                    </div>
                </div>
                <div className="tab-content rounded-b-2xl"
                     style={{paddingBottom: '100px', justifyContent: 'center', textAlign: 'center'}}>
                    <div className="flex mb-10 border-b-2 border-gray-500 py-4 lg:justify-between lg:space-x-60">
                        <div className="font-bold text-xl flex-1 mt-10">POS</div>
                        <div className="font-bold text-xl flex-1 mt-8">Player</div>
                        <div className="font-bold text-xl flex-1 mt-8">Rating</div>
                    </div>
                    {playersArray && playersArray.length > 0 ? (
                        playersArray.map((player) => (
                            <div key={player.id}
                                 className="flex font-bold mb-10 border-b-2 border-gray-500 py-2 lg:justify-between lg:space-x-60">
                                <div className="text-md flex-1">{player.name}</div>
                                <div className="text-md flex-1">{player.fullName}</div>
                                <div className="text-md flex-1">{player.playingRole}</div>
                            </div>
                        ))
                    ) : (
                        <p>No players available.</p>
                    )}
                </div>


            </div>
        </div>
    )
}

export default ExplorePlayerRanking