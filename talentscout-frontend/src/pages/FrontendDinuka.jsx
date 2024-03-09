import ComparePlayerInfo from "../components/ComparePlayerInfo.jsx";
import ComparePlayerStats from "../components/ComparePlayerStats.jsx";
import ComparePlayersSearch from "../components/ComparePlayersSearch.jsx";

const FrontendDinuka = () => {
    return (
        <div>
            <ComparePlayersSearch/>
            <ComparePlayerInfo/>
            <ComparePlayerStats/>
        </div>
    );
}

export default FrontendDinuka;