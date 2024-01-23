import HomeManagePlayers from "../components/HomeManagePlayers.jsx";
import HomeHero from "../components/HomeHero.jsx";
import HomeComparePlayers from "../components/HomeComparePlayers.jsx";

const Home = () => {
    return (
        <div className="">
            <HomeHero/>
            <HomeComparePlayers/>
            <HomeManagePlayers/>
        </div>
    )
}

export default Home
