import PlayerProfilesSearch from "../components/PlayerProfilesSearch.jsx";
import PlayerProfilesInfo from "../components/PlayerProfilesInfo.jsx";
import PlayerProfileStats from "../components/PlayerProfileStats.jsx";

const PlayerProfiles = () => {
    return (
        <div className="font-poppins">
            <div>
                <PlayerProfilesSearch/>
                <PlayerProfilesInfo/>
                <PlayerProfileStats/>
            </div>
        </div>
    )
}

export default PlayerProfiles