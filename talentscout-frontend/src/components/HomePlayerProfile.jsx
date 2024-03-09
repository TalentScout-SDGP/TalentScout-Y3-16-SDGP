import React from 'react';
import {Link} from 'react-router-dom';

const HomePlayerProfile = () => {
    return (
        <div className="font-poppins mb-12">
            <div className="md:container px-8">
                <div className="bg-white shadow-outer rounded-lg md:rounded-3xl py-8 px-6  md:p-4 lg:p-10 mb-2 md:mb-6">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 justify-center items-center">
                        <div className="lg:w-2/6 flex justify-center items-center">
                            <img
                                src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                alt="view-profile-icon"
                                className="rounded-full w-3/5 sm:w-3/5 md:w-4/5 lg:w-5/5 mx-auto"
                            />
                        </div>
                        <div className="lg:w-4/6 flex flex-col justify-center gap-y-2">
                            <p className="text-black text-center text-base lg:text-2xl font-bold md:text-left">
                                Explore cricket player profiles with TalentScout. Get detailed insights into player
                                statistics, compare players, and stay updated with real-time data. </p>
                            <ul className="list-disc pl-6 mt-3 text-black text-left">
                                <li className="mb-4 text-sm md:text-md lg:text-base">View essential
                                    player
                                    information,
                                    including name, birthdate,
                                    playing role, batting, and bowling style.
                                </li>
                                <li className="mb-4 text-sm md:text-md lg:text-base">Explore detailed player
                                    profiles
                                    and easily compare them, aiding
                                    you in making informed decisions for optimal team composition.
                                </li>
                                <li className="mb-4 text-sm md:text-md lg:text-base">Access up-to-date and
                                    accurate
                                    player statistics for a
                                    comprehensive understanding of performance.
                                </li>
                                <li className="mb-4 text-sm md:text-md lg:text-base">Utilize an intuitive and
                                    user-friendly interface to navigate and
                                    check player profiles seamlessly.
                                </li>
                            </ul>
                            <div className="flex justify-center lg:justify-start">
                                <Link
                                    to="/player_profiles"
                                    className="text-xs lg:text-sm font-semibold bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-2 shadow-lg
                                    duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                    View Profiles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePlayerProfile;
