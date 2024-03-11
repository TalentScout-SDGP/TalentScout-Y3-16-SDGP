import {useState, useContext} from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";

function PlayerProfilesSearch() {
    const {playerDict, getPlayerDataById} = useContext(ManagePlayersContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [playerId, setPlayerId] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const input = event.target.value;
        setSearchTerm(input);
        const results = Object.values(playerDict).filter((name) =>
            name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults(results);
    };

    const handleSelect = (selectedPlayer) => {
        const player_id = Object.keys(playerDict).find(key => playerDict[key] === selectedPlayer);
        setPlayerId(player_id);
        setSearchTerm(selectedPlayer);
        setFilteredResults([]);
        setSelectedPlayer(selectedPlayer);
    };

    const handleSubmit = () => {
        if (!playerId.length) {
            setErrorMessage('Please Select a Player');
            return;
        }
        getPlayerDataById(playerId);
        setErrorMessage(''); // Clear any previous error message
    }

    return (
        <div className="font-poppins">
            <div className="md:container px-2">
                <div
                    className="bg-primary-ts_blue grid grid-cols-1 my-8 shadow-outer rounded-lg md:rounded-3xl px-10 sm:px-10 py-8">
                    <div className="flex flex-col items-center text-center justify-center">
                        <p className="text-white text-lg lg:text-xl font-bold mb-2">
                            View Player Profiles
                        </p>
                        <p className="w-full sm:w-4/5 mt-4 text-gray-300 text-md lg:text-lg mb-8">
                            Delve into the world of cricket excellence. Explore in-depth player
                            profiles and detailed statistics, uncovering the stories behind the
                            stars of the game. Whether you&apos;re a seasoned fan or a curious newcomer,
                            discover the insights and achievements that define cricket&apos;s finest players.
                        </p>
                        <div className="relative w-full flex justify-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleChange}
                                className="w-full lg:w-1/2 bg-primary-ts_purple md:h-10 h-8 py-2 rounded-2xl mb-3 text-left ps-6 text-sm md:text-md lg:text-lg"
                                placeholder="Player Name"
                            />
                            {filteredResults.length > 0 && searchTerm !== "" && (
                                <div
                                    className="w-full lg:w-1/2 dropdown bg-primary-ts_purple absolute top-10    md:top-12 z-10 rounded-lg p-4 -mt-2">
                                    {filteredResults.slice(0, 12).map((result, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect(result)}
                                            className={`dropdown-item ${index === 0 ? '' : 'border-t-2'} border-black py-2 text-left text-black font-semibold text-sm md:text-md lg:text-lg cursor-pointer`}
                                        >
                                            {result}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button onClick={handleSubmit}
                                className="mt-2 lg:mx-0 text-xs sm:text-sm md:text-md lg:text-base bg-primary-yellow text-black font-semibold rounded-button px-4 py-1 md:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon"
                                 className="inline me-2"></img>
                            Search
                        </button>
                        {errorMessage && <p className="pt-3 text-red-500">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerProfilesSearch;
