import React, {useState} from 'react';
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
    // TODO add active link styling
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white shadow-xl font-poppins">
            <div className="md:container flex flex-col lg:flex-row justify-between gap-x-2 lg:items-center py-3">
                <div className="flex items-center px-3 lg:p-0 lg:justify-center">
                    <Link to="/" className="text-sm text-black">
                        <img className="w-36 xl:w-fit self-center" src="../../../public/ts_logo.png" alt="Logo"/>
                    </Link>
                </div>
                <div
                    className={`${isOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row flex-col font-bold text-sm justify-between xl:gap-x-4 bg-primary-ts_purple mt-3 lg:mt-0 lg:p-2 
                    rounded-lg lg:rounded-button shadow-lg`}>
                    <Link to="/"
                          className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform hover:scale-105">
                        Home
                    </Link>
                    <Link to="/explore_players"
                          className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform hover:scale-105">
                        Explore Players
                    </Link>
                    <Link to="/compare_players"
                          className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform hover:scale-105">
                        Compare Players
                    </Link>
                    <Link to="/player_profiles"
                          className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform hover:scale-105">
                        Player Profiles
                    </Link>
                    <Link to="/manage_players"
                          className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform hover:scale-105">
                        Manage Players
                    </Link>
                </div>
                <div
                    className={`${isOpen ? 'flex' : 'hidden'} user-buttons lg:flex flex-col lg:flex-row font-bold mt-3 justify-between lg:items-center ms-2 lg:ms-0 gap-y-2 lg:gap-y-0 lg:gap-x-4 lg:mt-0`}>
                    <Link to="/login" className="text-sm ms-2 lg:ms-0">
                        Login
                    </Link>
                    <Link to="/signup" className="text-sm bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-3 shadow-lg border-primary-ts_blue border-2
             hover:bg-white hover:text-primary-ts_blue hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="lg:hidden absolute top-3 right-10">
                <button onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={isOpen ? faX : faBars}/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
