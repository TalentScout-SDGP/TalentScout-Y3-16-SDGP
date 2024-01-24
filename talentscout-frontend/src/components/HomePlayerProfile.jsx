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
                Proin placerat dolor ac tortor facilisis, eget commodo lectus imperdiet. In vel gravida justo. Morbi lobortis odio id leo sollicitudincondimentum.
              </p>
              <ul className="list-disc pl-6 mb-4 mt-3 text-black text-left">
                <li className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere nec risus ut facilisis.</li>
                <li className="mb-6">Suspendisse potenti. Cras condimentum diam quis neque finibus venenatis.</li>
                <li className="mb-6">Cras nunc diam, aliquet quis mollis ut, tempor ut nibh.</li>
                <li className="mb-6">Integer sagittis molestie vehicula. Quisque elementum augue nec tempus blandit.</li>
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
