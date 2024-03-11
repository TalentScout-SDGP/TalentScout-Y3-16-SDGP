import React, { useState, useContext } from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import ComparePlayersInfo from "./ComparePlayerInfo.jsx";

function ComparePlayersSearch() {
    const { playerDict, getPlayerDataById } = useContext(ManagePlayersContext);
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

}

export default ComparePlayersSearch;
