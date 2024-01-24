import HomeManagePlayers from "../components/HomeManagePlayers.jsx";
import HomeHero from "../components/HomeHero.jsx";
import HomeComparePlayers from "../components/HomeComparePlayers.jsx";
import ComparePlayerInfo from "../components/ComparePlayerInfo.jsx";
import ComparePlayerStats from "../components/ComparePlayerStats.jsx";
import ComparePlayersSearch from "../components/ComparePlayersSearch.jsx";

const FrontendDinuka = () => {
    return (
        <div>
            <ComparePlayersSearch/>
            <ComparePlayerInfo/>
            <ComparePlayerStats/>
            {/*<HomeHero/>*/}
            {/*<HomeComparePlayers/>*/}
            {/*<HomeManagePlayers/>*/}
        </div>
    );
}

export default FrontendDinuka;