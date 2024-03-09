import {Link} from "react-router-dom";
import {faSquarePlus, faBook, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HomeManagePlayers() {
    const iconSize = "2x";

    return (
        <div className="font-poppins">
            <div className="md:container px-8">
                <div
                    className="grid grid-cols-1 lg:grid-cols-12 my-16 shadow-outer md:px-4 md:py-4 rounded-lg md:rounded-3xl">
                    <div
                        className="flex justify-center items-center lg:items-start flex-col gap-y-4 my-6 lg:gap-y-16 col-span-6 px-4 md:px-8 lg:px-16 xl:px-24">
                        <p className="text-black text-base lg:text-2xl font-bold text-center lg:text-start leading-relaxed"> Crafting
                            Cricket Excellence: Your gateway to player mastery. Uncover talent, refine skills, and shape
                            a winning legacy with our intuitive
                            Player Management feature.</p>
                        <Link to="/manage_players" className="text-xs lg:text-sm font-semibold bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-2 shadow-lg
                                    duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Manage Players
                        </Link>
                    </div>
                    <div className="col-span-6 grid md:grid-cols-2 gap-6 pb-4 px-4 lg:px-0 lg:mt-0">
                        <div
                            className="flex flex-col gap-y-4 justify-center items-center bg-primary-ts_blue rounded-lg px-8 pt-8 pb-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105 ">
                            <div className="text-white">
                                <FontAwesomeIcon icon={faSquarePlus} size={iconSize}/>
                            </div>
                            <p className="text-white text-xs lg:text-sm font-semibold select-none">Add New Players</p>
                            <p className="text-white text-xs lg:text-sm text-center select-none">Discover
                                Future Stars! Add new
                                players,
                                capture stats,
                                and witness the rise of potential cricket legends.</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-4 justify-center items-center bg-primary-ts_purple rounded-lg px-8 pt-8 pb-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <div className="text-black">
                                <FontAwesomeIcon icon={faBook} size={iconSize}/>
                            </div>
                            <p className="text-black text-center text-xs lg:text-sm font-semibold select-none">View
                                Existing
                                Players</p>
                            <p className="text-black text-xs lg:text-sm text-center select-none">Explore
                                Player Profiles: Dive
                                into detailed player
                                profiles, track metrics, and uncover the untapped potential of your players.</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-4 justify-center items-center bg-primary-ts_purple rounded-lg px-8 pt-8 pb-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <div className="text-black">
                                <FontAwesomeIcon icon={faPenToSquare} size={iconSize}/>
                            </div>
                            <p className="text-black text-center text-xs lg:text-sm font-semibold select-none">Update
                                Player
                                Details</p>
                            <p className="text-black text-xs lg:text-sm text-center select-none">Stay
                                Sharp:
                                Keep player profiles
                                current.
                                Modify
                                details, update stats, and ensure your players are always in peak form.</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-4 justify-center items-center bg-primary-ts_blue rounded-lg px-8 pt-8 pb-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <div className="text-white">
                                <FontAwesomeIcon icon={faTrash} size={iconSize}/>
                            </div>
                            <p className="text-white text-xs lg:text-sm font-semibold select-none">Delete Players</p>
                            <p className="text-white text-xs lg:text-sm text-center select-none">Strategic
                                Roster Management:
                                Refine
                                your
                                roster
                                with ease. Remove players, make room for new talent, and optimize for success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeManagePlayers;
