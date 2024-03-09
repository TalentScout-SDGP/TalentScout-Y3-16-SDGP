import {useContext, useState} from "react";
import AdminLoginModal from "./modals/AdminLoginModal.jsx";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import {Link} from "react-router-dom";
import {FaPlus} from "react-icons/fa";

function CRUDManagePlayersSearch() {
    const [playerName, setPlayerName] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = JSON.parse(localStorage.getItem('isSuperuser'));
    const {filterPlayersByName} = useContext(ManagePlayersContext);

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        filterPlayersByName(playerName);
    }

    return (
        <div className="font-poppins">
            <div className="md:container px-2">
                {!user || !isAdmin ? <AdminLoginModal/> : ''}
                <div
                    className="bg-primary-ts_blue grid grid-cols-1 my-8 shadow-outer rounded-lg md:rounded-3xl px-10 sm:px-10 py-8">
                    <div className="flex flex-col items-center text-center justify-center">
                        <div className="text-center"><p
                            className="text-white text-lg lg:text-xl font-bold mb-2">Take Matters Into Your Own
                            Hands</p>
                            <p className="w-full sm:w-4/5 mt-6 mx-auto text-gray-300 text-md lg:text-lg mb-8">
                                The ultimate hub for coaches, team managers and unmatched teams hungry for excellence.
                                Effortlessly Navigate Through Player Management: Explore Existing Players or Introduce
                                New Additions with Ease.
                            </p>
                        </div>
                        <input type="text" name="player_name" value={playerName} onChange={handleChange}
                               className="lg:w-1/2 md:w-96 bg-primary-ts_purple sm:w-80 py-2 rounded-2xl mb-3 text-left ps-6 pe-"
                               placeholder="Search Player"></input>
                        <button onClick={handleSubmit}
                                className="mt-2 lg:mx-0 text-xs sm:text-sm md:text-md lg:text-base bg-primary-yellow text-black font-semibold rounded-button px-4 py-1 md:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon"
                                 className="inline me-2"></img>
                            Search
                        </button>
                        <div className="text-white font-semibold text-lg my-4">Or</div>
                        <Link
                            to="/add_players"
                            className="flex items-center mt-2 lg:mx-0 text-xs sm:text-sm md:text-md lg:text-base bg-primary-green text-black font-semibold rounded-button px-4 py-2 md:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <FaPlus className="mr-2"/>
                            Add New Player
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CRUDManagePlayersSearch;