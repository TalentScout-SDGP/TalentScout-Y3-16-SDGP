import RangeSlider from "./RangeSlider.jsx";

function ExplorePlayers() {
    return (
        <div className="font-poppins">
            <div className="md:container my-8">
                <div className="lg:flex lg:flex-col bg-primary-ts_purple mx-4 md:mx-0 rounded-xl">
                    <div
                        className="bg-primary-ts_blue text-center text-white text-base lg:p-4 font-semibold rounded-xl p-4">Explore
                        Players
                    </div>
                    <form className="w-full py-4 lg:py-8">
                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:px-8">
                            {/*Format*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 font-semibold">
                                <div className="py-2 text-base">
                                    Format :
                                </div>
                                <div className="w-full md:mb-0 relative">
                                    <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Test
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">ODI
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">T20
                                        </option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-2 right-2 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                        <image id="image0_2840_144" width="240" height="240"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </svg>
                                </div>
                            </div>

                            {/*Age*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 text-xs font-semibold">
                                <div className="py-2 text-base">
                                    Age :
                                </div>
                                <div>
                                    <RangeSlider/>
                                </div>
                            </div>

                            {/*Playing Role*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 text-xs font-semibold">
                                <div className="py-2 text-base">
                                    Playing Role :
                                </div>
                                <div className="w-full md:mb-0 relative">
                                    <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                        <option
                                            className="text-primary-ts_blue text-sm lg:text-md font-semibold">Batsman
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Bowler
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Wicket
                                            Keeper
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">All
                                            Rounder
                                        </option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-2 right-2 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:pb-8 lg:px-8 text-xs">
                            {/*Batting Style*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 text-xs font-semibold">
                                <div className="py-2 text-base">
                                    Batting Style :
                                </div>
                                <div className="w-full md:mb-0 relative">
                                    <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Right
                                            Hand
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Left
                                            Hand
                                        </option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-2 right-2 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/*Bowling Style*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 text-xs font-semibold">
                                <div className="py-2 text-base">
                                    Bowling Style :
                                </div>
                                <div className="w-full md:mb-0 relative">
                                    <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Fast
                                            Bowler
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Spin
                                            Bowler
                                        </option>
                                        <option
                                            className="text-primary-ts_blue text-sm lg:text-md font-semibold">Medium-Pace
                                            Bowler
                                        </option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-2 right-2 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/*Fast Bowling Type*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 text-xs font-semibold">
                                <div className="py-2 text-base">
                                    Fast Bowling Type :
                                </div>
                                <div className="w-full md:mb-0 relative">
                                    <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Fast
                                        </option>
                                        <option
                                            className="text-primary-ts_blue text-sm lg:text-md font-semibold">Medium-Fast
                                        </option>
                                        <option
                                            className="text-primary-ts_blue text-sm lg:text-md font-semibold">Fast-Medium
                                        </option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-2 right-2 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/*Spin Bowling Type*/}
                            <div className="lg:grid lg:grid-cols-2 py-4 px-6 text-xs font-semibold">
                                <div className="py-2 text-base">
                                    Spin Bowling Type :
                                </div>
                                <div className="w-full md:mb-0 relative">
                                    <select className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg shadow-explore_players text-md font-semibold px-2 py-2">
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Leg
                                            Spin
                                        </option>
                                        <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Off
                                            Spin
                                        </option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-2 right-2 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>

                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-4 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExplorePlayers;