import React from 'react';
import { Link } from 'react-router-dom';

const HomePlayerProfile = () => {
  return (
      <div className="font-poppins mb-12">
        <div className="md:container px-8">
          <div className="bg-white shadow-outer rounded-3xl p-8 lg:p-16 mb-6">
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <div className="lg:w-2/6 flex justify-center items-center">
                <img
                    src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                    alt="view-profile-icon"
                    className="rounded-full lg:w-3/5 mx-auto"
                />
              </div>
              <div className="lg:w-4/6 flex flex-col justify-center gap-y-4">
                <p className="text-black text-base lg:text-2xl font-bold text-left">
                  Explore cricket player profiles with TalentScout. Get detailed insights into player statistics, compare players, and stay updated with real-time data.              </p>
                <ul className="list-disc pl-6 mb-4 mt-3 text-black text-left">
                  <li className="mb-6">View essential player information, including name, birthdate, playing role, batting, and bowling style.</li>
                  <li className="mb-6">Access up-to-date and accurate player statistics for a comprehensive understanding of performance.</li>
                  <li className="mb-6">Utilize an intuitive and user-friendly interface to navigate and check player profiles seamlessly.</li>
                  <li className="mb-6">Explore detailed player profiles and easily compare them, aiding you in making informed decisions for optimal team composition.</li>
                </ul>
                <div className="flex justify-center lg:justify-start">
                  <Link
                      to="/player_profiles"
                      className="bg-primary-ts_blue text-white py-2 px-4 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring focus:border-primary-ts_blue"
                  >
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
