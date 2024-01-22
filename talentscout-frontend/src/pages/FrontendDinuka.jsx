import React from 'react';
import HomeManagePlayers from "../components/HomeManagePlayers.jsx";
import HomeHero from "../components/HomeHero.jsx";
import HomeComparePlayers from "../components/HomeComparePlayers.jsx";

const FrontendDinuka = () => {
    return (
        <div>
            <HomeHero/>
            <HomeComparePlayers/>
            <HomeManagePlayers/>
        </div>
    );
}

export default FrontendDinuka;