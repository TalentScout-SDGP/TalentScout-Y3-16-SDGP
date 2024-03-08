import {useState, useContext} from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";

function PlayerProfilesSearch() {
    const {playerDict, getPlayerDataById} = useContext(ManagePlayersContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [playerId, setPlayerId] = useState([]);

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
        if (playerId === []) {
            console.log('Please select a player');
        } else {
            getPlayerDataById(playerId);
        }
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
                        <p className="text-gray-300 text-md lg:text-lg mb-8">
                            Delve into the world of cricket excellence. Explore in-depth player
                            profiles and detailed statistics, uncovering the stories behind the
                            stars of the game. Whether you're a seasoned fan or a curious newcomer,
                            discover the insights and achievements that define cricket's finest players.
                        </p>
                        <div className="relative w-full flex justify-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleChange}
                                className="lg:w-1/2 md:w-96 bg-primary-ts_purple w-64 md:h-10 h-8 sm:w-80 py-2 rounded-2xl mb-3 text-left ps-6 pe- text-sm md:text-md lg:text-base"
                                placeholder="Player Name"
                            />
                            {filteredResults.length > 0 && searchTerm !== "" && (
                                <div
                                    className="dropdown bg-primary-ts_purple w-1/2 absolute top-12 z-10 rounded-lg p-4 -mt-2">
                                    {filteredResults.map((result, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect(result)}
                                            className={`dropdown-item ${index === 0 ? '' : 'border-t-2'} border-black py-2 text-left text-black font-semibold text-lg cursor-pointer`}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerProfilesSearch;
