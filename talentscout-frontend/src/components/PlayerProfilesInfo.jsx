import {useContext, useState} from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import Spinner from "./shared/Spinner.jsx";
import PlayerProfileStats from "./PlayerProfileStats.jsx";

function PlayerProfilesInfo() {
    const {playerProfileData} = useContext(ManagePlayersContext);
    const [loading, setLoading] = useState(true);

    if (Object.keys(playerProfileData).length > 0) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        if (!loading) {
            return (
                <div className="font-poppins">
                    <div className="md:container px-2 my-2">
                        <div className="bg-primary-ts_purple shadow-outer rounded-lg px-2 py-2">
                            <div className="bg-primary-ts_blue m-2 rounded-lg">
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-6 justify-center items-center p-8 gap-y-6">
                                    <div className="flex flex-col justify-center items-center col-span-3 xl:col-span-2">
                                        <img
                                            src={import.meta.env.BASE_URL + "Player-dummy-image.png"}
                                            alt="player-dummy"
                                            className="w-4/5 sm:w-2/5 md:w-2/5 lg:w-3/5"
                                        ></img>
                                        <div
                                            className="font-semibold text-lg text-center text-white mt-6 hidden lg:block">
                                            {playerProfileData.player.full_name === "NULL" ? "N/A" : playerProfileData.player.full_name}
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col text-center lg:text-left justify-center gap-y-4 font-semibold text-sm md:text-md lg:text-base xl:text-lg text-white col-span-3 xl:col-span-4">
                                        <div>Full Name
                                            : {playerProfileData.player.full_name === "NULL" ? "N/A" : playerProfileData.player.full_name}</div>
                                        <div>Born
                                            : {playerProfileData.player.birth_date === "NULL" ? "N/A" : playerProfileData.player.birth_date}</div>
                                        <div>Playing Role
                                            : {playerProfileData.player.playing_role === "NULL" ? "N/A" : playerProfileData.player.playing_role}</div>
                                        <div>Batting Style
                                            : {playerProfileData.player.batting_style === "NULL" ? "N/A" : playerProfileData.player.batting_style}</div>
                                        <div>Bowling Style
                                            : {playerProfileData.player.bowling_style === "NULL" ? "N/A" : playerProfileData.player.bowling_style}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PlayerProfileStats/>
                </div>
            );
        } else {
            return <Spinner/>
        }
    }
}

export default PlayerProfilesInfo;
