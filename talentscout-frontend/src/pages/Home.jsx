import HomeManagePlayers from "../components/HomeManagePlayers.jsx";
import HomeHero from "../components/HomeHero.jsx";
import HomeComparePlayers from "../components/HomeComparePlayers.jsx";
import HomePlayerProfile from "../components/HomePlayerProfile.jsx";
import HomeExplorePlayers from "../components/HomeExplorePlayers.jsx";

const Home = () => {
    return (
        <div className="">
            <HomeHero/>
            <HomeExplorePlayers/>
            <HomePlayerProfile/>
            <HomeComparePlayers/>
            <HomeManagePlayers/>
        </div>
    )
}

export default Home
