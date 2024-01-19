import React from 'react';
import {Link} from "react-router-dom";
import {faSquarePlus, faBook, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function HomeManagePlayers() {
    const iconSize = "2x";

    return (
        <div className="font-poppins">
            <div className="container">
                <div className="grid grid-cols-12 my-16 shadow-outer rounded-lg px-2 py-4">
                    <div className="flex justify-center flex-col gap-y-16 col-span-5 px-16">
                        <p className="text-black text-2xl font-bold"> Crafting Cricket Excellence: Your gateway to
                            player mastery. Uncover talent, refine skills, and shape a winning legacy with our intuitive
                            Player Management feature.</p>
                        <Link to="/manage_players" className="text-sm bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
                                    hover:bg-white hover:text-primary-ts_blue hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Manage Players
                        </Link>
                    </div>
                    <div className="col-span-7 grid grid-cols-2 gap-6">
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_blue rounded-lg p-8 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105 ">
                            <div className="text-white h-4">
                                <FontAwesomeIcon icon={faSquarePlus} size={iconSize}/>
                            </div>
                            <p className="text-white font-semibold select-none">Add New Players</p>
                            <p className="text-white text-center select-none h-24">Discover Future Stars! Add new
                                players,
                                capture stats,
                                and witness the rise of potential cricket legends.</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_purple rounded-lg p-8 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <div className="text-black h-4">
                                <FontAwesomeIcon icon={faBook} size={iconSize}/>
                            </div>
                            <p className="text-black font-semibold select-none">View Existing Players</p>
                            <p className="text-black text-center select-none h-24">Explore Player Profiles: Dive
                                into detailed player
                                profiles, track metrics, and uncover the untapped potential of your players.</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_purple rounded-lg p-8 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <div className="text-black h-4">
                                <FontAwesomeIcon icon={faPenToSquare} size={iconSize}/>
                            </div>
                            <p className="text-black font-semibold select-none">Update Player Details</p>
                            <p className="text-black text-center select-none h-24">Stay Sharp: Keep player profiles
                                current.
                                Modify
                                details, update stats, and ensure your players are always in peak form.</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_blue rounded-lg p-8 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <div className="text-white h-4">
                                <FontAwesomeIcon icon={faTrash} size={iconSize}/>
                            </div>
                            <p className="text-white font-semibold select-none">Delete Players</p>
                            <p className="text-white text-center select-none h-24">Strategic Roster Management: Refine
                                your
                                roster
                                with ease. Remove players, make room for new talent, and optimize for success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeManagePlayers;
