import React from 'react';
import {Link} from 'react-router-dom';

const HomeExplorePlayers = () => {
    const boxes = [
        {
            title: "Instant Performance Insights",
            description: "Real-time assessments for quick decisions",
            icon: import.meta.env.BASE_URL + 'Instant Performance Insights.png'
        },
        {
            title: "Dynamic Player Rankings",
            description: "Evolve ratings with each player's performance",
            icon: import.meta.env.BASE_URL + 'Dynamic Player Rankings.png'
        },
        {
            title: "Detailed Player Analytics",
            description: "In-depth stats for a comprehensive player overview",
            icon: import.meta.env.BASE_URL + 'Detailed Player Analytics.png'
        },
        {
            title: "Reliable Data Accuracy",
            description: "Trust precise and up-to-date player statistics",
            icon: import.meta.env.BASE_URL + 'Reliable Data Accuracy.png'
        },
        {
            title: "Smart Performance Insights",
            description: "Identify players' strengths and areas to improve",
            icon: import.meta.env.BASE_URL + 'Smart Performance Insights.png'
        },
        {
            title: "Tailored Exploration Preferences",
            description: "Explore players with tailored profile highlights",
            icon: import.meta.env.BASE_URL + 'Tailored Exploration Preferences.png'
        },
    ];

    return (
        <div className="font-poppins mb-12">
            <div className="md:container px-8">
                <div
                    className="bg-primary-ts_purple flex flex-col gap-y-8 justify-center items-center rounded-3xl p-8 lg:p-12 shadow-outer mt-12 "
                >
                    <p className="text-black text-base lg:text-3xl font-bold text-center">
                        Unleash the power of TalentScout!<br/>
                        <span className="text-base lg:text-lg font-normal">
              Revolutionizing cricket insights far beyond conventional boundaries.
            </span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 ">
                        {boxes.map((box, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-outer rounded-lg p-4 flex items-start  hover:scale-105"
                            >
                                <img
                                    src={box.icon}
                                    alt={`Icon ${index + 1}`}
                                    className="h-8 w-8 mb-2 mr-2"
                                />
                                <div className="flex flex-col">
                                    <p className="text-black font-bold text-left mb-1">{box.title}</p>
                                    <p className="text-black text-left mb-2">{box.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            to="/explore_players"
                            className="text-xs lg:text-sm font-semibold bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-2 shadow-lg
                                    duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Explore Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeExplorePlayers;
