import React, {useContext, useEffect, useState} from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import ComparePlayerStats from "./ComparePlayerStats.jsx";
import Spinner from "./shared/Spinner.jsx";

function ComparePlayersInfo() {
    const {selectedPlayerData, selectedSecondPlayerData} = useContext(ManagePlayersContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (Object.keys(selectedPlayerData).length > 0 && Object.keys(selectedSecondPlayerData).length > 0) {
            setLoading(false);
        }
    }, [selectedPlayerData, selectedSecondPlayerData]);

    if (loading || !selectedPlayerData || !selectedSecondPlayerData) { // Check if data is loaded or available
        return <div></div>;
    }


}

export default ComparePlayersInfo;
