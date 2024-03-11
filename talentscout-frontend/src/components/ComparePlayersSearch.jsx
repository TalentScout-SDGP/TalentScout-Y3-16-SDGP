import React, {useState, useContext} from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import ComparePlayersInfo from "./ComparePlayerInfo.jsx";

function ComparePlayersSearch() {
    const {playerDict, getPlayerDataById} = useContext(ManagePlayersContext);
    const [searchTerm1, setSearchTerm1] = useState("");
    const [searchTerm2, setSearchTerm2] = useState("");
    const [filteredResults1, setFilteredResults1] = useState([]);
    const [filteredResults2, setFilteredResults2] = useState([]);
    const [selectedPlayer1, setSelectedPlayer1] = useState(null);
    const [selectedPlayer2, setSelectedPlayer2] = useState(null);
    const [playerId1, setPlayerId1] = useState(null);
    const [playerId2, setPlayerId2] = useState(null);
    const [isCompareClicked, setIsCompareClicked] = useState(false); // State to track if compare button is clicked
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange1 = (event) => {
        const input = event.target.value;
        setSearchTerm1(input);
        const results = Object.values(playerDict).filter((name) =>
            name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults1(results);
    };

    const handleChange2 = (event) => {
        const input = event.target.value;
        setSearchTerm2(input);
        const results = Object.values(playerDict).filter((name) =>
            name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults2(results);
    };

    const handleSelect1 = (selectedPlayer) => {
        const playerId = Object.keys(playerDict).find(key => playerDict[key] === selectedPlayer);
        setPlayerId1(playerId);
        setSearchTerm1(selectedPlayer);
        setFilteredResults1([]);
        setSelectedPlayer1(selectedPlayer);
    };

    const handleSelect2 = (selectedPlayer) => {
        const playerId = Object.keys(playerDict).find(key => playerDict[key] === selectedPlayer);
        setPlayerId2(playerId);
        setSearchTerm2(selectedPlayer);
        setFilteredResults2([]);
        setSelectedPlayer2(selectedPlayer);
    };

    const handleSubmit = () => {
        if (!playerId1 || !playerId2) {
            setErrorMessage('Please Select Two Players to Compare');
            return;
        }
        getPlayerDataById(playerId1);
        getPlayerDataById(playerId2, true); // Call for the second player and pass true as the second argument
        setIsCompareClicked(true); // Set isCompareClicked to true when compare button is clicked
        setErrorMessage(''); // Clear any previous error message
    };

    return (
        <div className="font-poppins">
            <div className="md:container px-2">
                <div
                    className="bg-primary-ts_blue grid grid-cols-1 my-8 shadow-outer rounded-lg md:rounded-3xl px-10 sm:px-10 py-8">
                    <div className="flex flex-col items-center text-center justify-center">
                        <p className="text-white text-lg lg:text-xl font-bold mb-2">
                            Compare Cricket Players
                        </p>
                        <p className="text-gray-300 text-md lg:text-lg mb-8">
                            Explore more about
                            your
                            favourite players. Compare the talented players up against each other with an In depth
                            analysis of profile details and statistics of all types across all types of formats.
                        </p>

                        <div className="relative w-full flex justify-center">
                            <input
                                type="text"
                                value={searchTerm1}
                                onChange={handleChange1}
                                className="lg:w-1/2 md:w-96 bg-primary-ts_purple w-64 md:h-10 h-8 sm:w-80 py-2 rounded-2xl mb-3 text-left ps-6 pe- text-sm md:text-md lg:text-base"
                                placeholder="Enter Player Name"
                            />
                            {filteredResults1.length > 0 && searchTerm1 !== "" && (
                                <div
                                    className="dropdown bg-primary-ts_purple w-1/2 absolute top-12 z-10 rounded-lg p-4 -mt-2">
                                    {filteredResults1.map((result, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect1(result)}
                                            className={`dropdown-item ${index === 0 ? '' : 'border-t-2'} border-black py-2 text-left text-black font-semibold text-lg cursor-pointer`}
                                        >
                                            {result}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="relative w-full flex justify-center">
                            <input
                                type="text"
                                value={searchTerm2}
                                onChange={handleChange2}
                                className="lg:w-1/2 md:w-96 bg-primary-ts_purple w-64 md:h-10 h-8 sm:w-80 py-2 rounded-2xl mb-3 text-left ps-6 pe- text-sm md:text-md lg:text-base"
                                placeholder="Enter Player Name"
                            />
                            {filteredResults2.length > 0 && searchTerm2 !== "" && (
                                <div
                                    className="dropdown bg-primary-ts_purple w-1/2 absolute top-12 z-10 rounded-lg p-4 -mt-2">
                                    {filteredResults2.map((result, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect2(result)}
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
                            <img src={import.meta.env.BASE_URL + 'compare-icon.png'} alt="compare-icon"
                                 className="inline me-2"></img>
                            Compare
                        </button>
                        {errorMessage && <p className="pt-3 text-red-500">{errorMessage}</p>}
                    </div>
                </div>
            </div>
            {isCompareClicked &&
                <ComparePlayersInfo/>} {/* Render ComparePlayersInfo only when isCompareClicked is true */}
        </div>
    );
}

export default ComparePlayersSearch;
