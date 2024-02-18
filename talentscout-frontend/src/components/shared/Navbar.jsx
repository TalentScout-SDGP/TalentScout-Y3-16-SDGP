import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axiosInstance from "../../utils/AxiosInstance.js";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const refresh = JSON.parse(localStorage.getItem('refresh'))

    //TODO Remove commented code

    // const jwt_access = localStorage.getItem('access')

    // useEffect(() => {
    //     if (jwt_access === null && !user) {
    //         navigate('/login')
    //     } else {
    //         getSomeData()
    //     }
    // }, [jwt_access, user])


    // const getSomeData = async () => {
    //     const res = await axiosInstance.get('/auth/profile/')
    //     if (res.status === 200) {
    //         console.log(res.data)
    //     }
    // }

    const handleLogout = async () => {
        const res = await axiosInstance.post('/auth/logout/', {'refresh_token': refresh})
        if (res.status === 204) {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('user')
            window.location.reload();
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const NavLinkStyles = ({isActive}) => {
        return {
            backgroundColor: isActive ? 'var(--color-ts-blue)' : undefined,
            color: isActive ? 'var(--color-white)' : undefined,
        };
    };

    return (
        <div className="bg-white shadow-xl font-poppins">
            <div
                className="md:container flex flex-col lg:flex-row justify-between gap-x-2 lg:items-center py-3 relative px-2 sm:px-4 md:px-6">
                <div className="flex items-center px-3 lg:p-0 lg:justify-center">
                    <Link to="/" className="text-sm text-black">
                        <img className="w-36 xl:w-fit self-center" src={import.meta.env.BASE_URL + 'ts_logo.png'}
                             alt="Logo"/>
                    </Link>
                </div>
                <div
                    className={`${isOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row flex-col font-bold text-sm justify-between xl:gap-x-4 bg-primary-ts_purple mt-3 lg:mt-0 lg:p-2 
                    rounded-lg lg:rounded-button shadow-lg`}>
                    <NavLink style={NavLinkStyles} to="/"
                             className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform md:hover:scale-105">
                        Home
                    </NavLink>
                    <NavLink style={NavLinkStyles} to="/explore_players"
                             className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform md:hover:scale-105">
                        Explore Players
                    </NavLink>
                    <NavLink style={NavLinkStyles} to="/compare_players"
                             className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform md:hover:scale-105">
                        Compare Players
                    </NavLink>
                    <NavLink style={NavLinkStyles} to="/player_profiles"
                             className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform md:hover:scale-105">
                        Player Profiles
                    </NavLink>
                    <NavLink style={NavLinkStyles} to="/manage_players"
                             className="text-xs xl:text-sm text-black hover:bg-primary-ts_blue hover:text-white py-2 px-4 rounded-3xl transition-transform duration-3000 transform md:hover:scale-105">
                        Manage Players
                    </NavLink>
                </div>
                <div
                    className={`${isOpen ? 'flex' : 'hidden'} user-buttons lg:flex flex-col lg:flex-row font-bold mt-3 justify-between lg:items-center ms-2 lg:ms-0 gap-y-2 lg:gap-y-0 lg:gap-x-4 lg:mt-0`}>
                    {user ? (
                        <button onClick={handleLogout} className="text-sm bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-3 shadow-lg border-primary-ts_blue border-2
                            hover:bg-white hover:text-primary-ts_blue hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform md:hover:scale-105">Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm ms-2 lg:ms-0">
                                Login
                            </Link>
                            <Link to="/sign_up" className="text-sm bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-3 shadow-lg border-primary-ts_blue border-2
                                hover:bg-white hover:text-primary-ts_blue hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform md:hover:scale-105">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
                <div className="lg:hidden absolute top-4 right-5 md:right-10">
                    <button onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={isOpen ? faX : faBars}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
