import React from 'react';
import PlayerProfilesSearch from "../components/PlayerProfilesSearch.jsx";
import PlayerProfilesInfo from "../components/PlayerProfilesInfo.jsx";

const PlayerProfiles = () => {
    return (
        <div className="font-poppins">
            <div>
                <PlayerProfilesSearch/>
                <PlayerProfilesInfo/>
            </div>
        </div>
    )
}

export default PlayerProfiles