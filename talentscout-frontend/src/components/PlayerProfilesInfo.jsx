import React from "react";

function PlayerProfilesInfo() {

    return (
        <div className="md:container px-8 my-2">
            <div
                className="grid grid-cols-1 bg-primary-ts_purple mlg:grid-cols-1 my-10 shadow-outer rounded-lg px-2 py-2">
                <div className="flex bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 h-96 overflow-hidden">
                    <img src={import.meta.env.BASE_URL + 'Player-dummy-image.png'} alt="search-icon"
                         className="sm:w-48 sm:py-16 sm:mx-auto md:w-52 md:py-16 lg:w-60 md:ml-2 mx-auto pt-2 w-36 lg:py-12 xl:w-80 2xl:w-80 xl:py-4 py-4 h-auto"></img>
                    <div
                        className="w-full px-14 h-auto py-14 text-white text-base 2xl:text-xl 2xl:py-5 xl:text-lg xl:py-6 lg:text-lg lg:py-12 md:text-sm md:py-14 sm:text-xs sm:px-20 sm:py-28">
                        <p className="2xl:mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-2">Name : Dhananjaya De Silva</p>
                        <p className="2xl:mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-2">Born : September 06, 1991,
                            Colombo</p>
                        <p className="2xl:mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-2">Playing Role : All-Rounder</p>
                        <p className="2xl:mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-2">Batting Style : Right-Handed</p>
                        <p className="2xl:mb-2 xl:mb-4 lg:mb-2 md:mb-4 sm:mb-0">Bowling Style : Right-Arm
                            OffBreak</p>
                        <button className="bg-primary-yellow text-black px-1 py-1 rounded-3xl mt-3">
                            <img src={import.meta.env.BASE_URL + 'compare-icon.png'} alt="compare-icon"
                                 className="inline me-2"></img>
                            Compare
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default PlayerProfilesInfo;