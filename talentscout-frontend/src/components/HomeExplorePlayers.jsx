import React from 'react';
import { Link } from 'react-router-dom';

const HomeExplorePlayers = () => {
  const boxes = [
    { title: "Instant Performance Insights", description: "Real-time assessments for quick decisions", icon: import.meta.env.BASE_URL + 'Instant Performance Insights.png'},
    { title: "Dynamic Player Rankings", description: "Evolve ratings with each player's performance", icon: import.meta.env.BASE_URL + 'Dynamic Player Rankings.png'},
    { title: "Detailed Player Analytics", description: "In-depth stats for a comprehensive player overview", icon: import.meta.env.BASE_URL + 'Detailed Player Analytics.png'},
    { title: "Reliable Data Accuracy", description: "Trust precise and up-to-date player statistics", icon: import.meta.env.BASE_URL + 'Reliable Data Accuracy.png'},
    { title: "Smart Performance Insights", description: "Identify strengths and areas to improve", icon: import.meta.env.BASE_URL + 'Smart Performance Insights.png'},
    { title: "Tailored Exploration Preferences", description: "Explore players with tailored profile highlights", icon: import.meta.env.BASE_URL + 'Tailored Exploration Preferences.png'},
  ];

  return (
    <div className="font-poppins mb-12">
      <div className="md:container px-8">
        <div
          className="bg-primary-ts_purple flex flex-col gap-y-16 justify-center items-center rounded-3xl p-8 lg:p-16 shadow-outer mt-12"
        >
          <p className="text-black text-base lg:text-3xl font-bold text-center">
            Unleash the power of TalentScout!<br />
            <span className="text-base lg:text-2xl font-normal">
              Revolutionizing cricket insights far beyond conventional boundaries.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-white shadow-outer rounded-lg p-4 flex items-start"
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
              className="bg-primary-ts_blue text-white py-2 px-4 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring focus:border-primary-ts_blue"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplorePlayers;
