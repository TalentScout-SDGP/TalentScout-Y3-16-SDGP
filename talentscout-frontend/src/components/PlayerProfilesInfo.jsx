import {useState} from "react";
import {Link} from "react-router-dom";

function PlayerProfilesInfo() {
    const [Name, setName] = useState("Dhananjaya    De Silva");
    const [fullName, setFullName] = useState("Dhananjaya Maduranga De Silva");
    const [born, setBorn] = useState("January 1, 1990");
    const [playingRole, setPlayingRole] = useState("Batsman");
    const [battingStyle, setBattingStyle] = useState("Right-handed");
    const [bowlingStyle, setBowlingStyle] = useState("Right-arm fast");

    return (
        <div className="font-poppins">
            <div className="md:container px-2 my-2">
                <div className="bg-primary-ts_purple shadow-outer rounded-lg px-2 py-2">
                    <div className="bg-primary-ts_blue m-2 rounded-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-6 justify-center items-center p-8 gap-y-6">
                            <div className="flex flex-col justify-center items-center col-span-3 xl:col-span-2">
                                <img
                                    src={import.meta.env.BASE_URL + "Player-dummy-image.png"}
                                    alt="player-dummy"
                                    className="w-4/5 sm:w-2/5 md:w-2/5 lg:w-3/5"
                                ></img>
                                <div className="font-semibold text-lg text-white mt-6 lg:block">
                                    {Name}
                                </div>
                            </div>
                            <div
                                className="flex flex-col lg:pl-4 xl:pl-32 md:pl-44 sm:px-10 lg:text-left justify-center gap-y-4 font-semibold text-sm md:text-md lg:text-base xl:text-lg text-white col-span-3 xl:col-span-4">
                                <div>Full Name : {fullName}</div>
                                <div>Born : {born}</div>
                                <div>Playing Role : {playingRole}</div>
                                <div>Batting Style : {battingStyle}</div>
                                <div>Bowling Style : {bowlingStyle}</div>
                                <Link to='/' className='mx-auto lg:mx-0 md:mx-16 text-xs sm:text-sm md:text-md lg:text-base bg-primary-yellow text-black font-semibold rounded-button px-4 md:py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105'>
                                    <img src={import.meta.env.BASE_URL + 'compare-icon.png'} alt="compare-icon"
                                         className="inline px-0"></img>
                                    Compare
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerProfilesInfo;
