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
            console.log('Please select two players');
            return;
        }
        getPlayerDataById(playerId1);
        getPlayerDataById(playerId2, true); // Call for the second player and pass true as the second argument
        setIsCompareClicked(true); // Set isCompareClicked to true when compare button is clicked
    };

}

export default ComparePlayersSearch;
