import React from 'react';
import {Link} from "react-router-dom";

function CRUDAddNewPlayer() {
    return (
        <div className="font-poppins">
            <div className="md:container mt-9 mb-16 px-2">
                <div className="shadow-outer lg:flex lg:flex-col bg-primary-ts_purple rounded-lg">
                    <div
                        className="flex justify-between bg-primary-ts_blue text-white lg:text-xl md:text-base sm:text-sm lg:p-4 font-semibold rounded-lg p-4">
                        <p className="p-1.5">Add New Player</p>
                        <img src={import.meta.env.BASE_URL + 'plus.png'} alt="plus"
                             className=""/>
                    </div>
                    <div className="lg:pt-8 lg:px-8 text-xl">
                        <form className="mx-auto text-left p-6">
                            <div className="mb-5">
                                <label htmlFor="large-input"
                                       className="block mb-2 text-base font-semibold">Full Name : </label>
                                <input type="text" id="large-input"
                                       className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5"/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="large-input"
                                       className="block mb-2 text-base font-semibold">Also Known As : </label>
                                <input type="text" id="large-input"
                                       className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5"/>
                            </div>
                            <div className="flex flex-col-2">
                                <div className="pt-1.5">
                                    <label htmlFor="large-input"
                                           className="block mb-2 text-base font-semibold">Date of Birth : </label>
                                </div>
                                <div className="ml-4 pb-3">
                                    <input type="date" id="large-input"
                                           className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5"/>
                                </div>
                            </div>
                            <div className="lg:grid lg:grid-cols-3 gap-40">
                                <div>
                                    <div className="lg:grid lg:grid-cols-2 py-4 text-xs font-semibold">
                                        <div className="pt-1.5">
                                            <label htmlFor="large-input"
                                                   className="block mb-2 text-base font-semibold">Bowling Style :
                                            </label>
                                        </div>
                                        <div className="w-full md:mb-0 relative">
                                            <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Fast
                                                    Bowler
                                                </option>
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Spin
                                                    Bowler
                                                </option>
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Medium-Pace
                                                    Bowler
                                                </option>
                                            </select>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                                 width="22" height="26" viewBox="0 0 30 26" fill="none"
                                                 className="absolute top-2 right-2 cursor-pointer">
                                                <rect width="30" height="26" fill="url(#pattern0)"/>
                                                <defs>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                             width="20"
                                                             height="1">
                                                        <use xlinkHref="#image0_2840_144"
                                                             transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="lg:grid lg:grid-cols-2 py-4 text-xs font-semibold">

                                        <div className="pt-1.5">
                                            <label htmlFor="large-input"
                                                   className="block mb-2 text-base font-semibold">Batting Style :
                                            </label>
                                        </div>
                                        <div className="w-full md:mb-0 relative">
                                            <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Right
                                                    Hand
                                                </option>
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Left
                                                    Hand
                                                </option>
                                            </select>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                                 width="22" height="26" viewBox="0 0 30 26" fill="none"
                                                 className="absolute top-2 right-2 cursor-pointer">
                                                <rect width="30" height="26" fill="url(#pattern0)"/>
                                                <defs>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                             width="1"
                                                             height="1">
                                                        <use xlinkHref="#image0_2840_144"
                                                             transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="lg:grid lg:grid-cols-2 py-4 text-xs font-semibold">

                                        <div className="pt-1.5">
                                            <label htmlFor="large-input"
                                                   className="block mb-2 text-base font-semibold">Playing Role :
                                            </label>
                                        </div>
                                        <div className="w-full md:mb-0 relative">
                                            <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Batsman
                                                </option>
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Bowler
                                                </option>
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">Wicket
                                                    Keeper
                                                </option>
                                                <option
                                                    className="text-primary-ts_blue text-sm md:text-base font-semibold">All
                                                    Rounder
                                                </option>
                                            </select>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                                 width="22" height="26" viewBox="0 0 30 26" fill="none"
                                                 className="absolute top-2 right-2 cursor-pointer">
                                                <rect width="30" height="26" fill="url(#pattern0)"/>
                                                <defs>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                             width="1"
                                                             height="1">
                                                        <use xlinkHref="#image0_2840_144"
                                                             transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="flex justify-left mt-4 pb-8 px-6">
                            <Link
                                to=""
                                className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-4 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                Continue
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRUDAddNewPlayer;