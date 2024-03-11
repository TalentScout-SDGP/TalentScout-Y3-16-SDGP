import {useContext, useState} from "react";
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";

function CRUDAddNewPlayerInfo() {
    const {setPlayerInfoData} = useContext(ManagePlayersContext);
    const [playerInfo, setPlayerInfo] = useState({
        full_name: '',
        also_known_as: '',
        birth_date: '',
        age: '',
        playing_role: '',
        batting_style: '',
        bowling_style: "",
    });

    // Function to calculate age from birth_date
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        if (today.getMonth() < birthDateObj.getMonth() ||
            (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    };

    const handleChange = (e) => {
        setPlayerInfo({
            ...playerInfo,
            [e.target.name]: e.target.value,
            age: e.target.name === 'birth_date' ? calculateAge(e.target.value) : playerInfo.age,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlayerInfoData(playerInfo);
    }

    return (
        <div className="font-poppins">
            <div className="md:container mt-9 mb-16 px-2">
                <div className="shadow-outer bg-primary-ts_purple rounded-b-lg">
                    <div
                        className="flex items-center justify-between px-4 py-2 bg-primary-ts_blue text-white font-semibold rounded-t-lg">
                        <p className="text-md lg:text-lg">Add New Player</p>
                        <img src={import.meta.env.BASE_URL + 'plus.png'} alt="plus"/>
                    </div>
                    <div
                        className="bg-primary-ts_purple rounded-b-lg font-semibold py-8 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-12">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-sm md:text-md lg:text-base">Full Name: </label>
                                <input type="text" name="full_name" value={playerInfo.full_name} onChange={handleChange}
                                       className="w-full p-0.5 md:p-1 text-2 border-2 border-black rounded-lg mb-3 lg:mb-5 shadow-md"/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-sm md:text-md lg:text-base">Also Known As: </label>
                                <input type="text" name="also_known_as" value={playerInfo.also_known_as}
                                       onChange={handleChange}
                                       className="w-full p-0.5 md:p-1 text-2 border-2 border-black rounded-lg mb-3 lg:mb-5 shadow-md"/>
                            </div>
                            <div
                                className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-10 justify-center items-center mb-3 lg:mt-4">
                                <div className="flex flex-col xl:flex-row w-full gap-y-2 justify-center items-center">
                                    <label className="w-full text-sm md:text-md lg:text-base">Birth Date: </label>
                                    <input type="date" name="birth_date" value={playerInfo.birth_date}
                                           onChange={handleChange}
                                           className="w-full text-sm md:text-md lg:text-base p-1 border-2 border-black rounded-lg shadow-md"/>
                                </div>
                                <div
                                    className="flex flex-col xl:flex-row w-full gap-y-2 justify-center items-center relative">
                                    <label className="w-full text-sm md:text-md lg:text-base">Playing Role: </label>
                                    <select name="playing_role" value={playerInfo.playing_role}
                                            onChange={handleChange}
                                            className="w-full p-1 text-sm md:text-md lg:text-base border-2 border-black rounded-lg shadow-md focus:outline-none"
                                    >
                                        <option value="" disabled>Select Playing Role</option>
                                        <option>Batsman</option>
                                        <option>Bowler</option>
                                        <option>All-Rounder</option>
                                        <option>WicketKeeper</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-8 md:top-9 xl:top-1 right-1 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                     width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                        <image id="image0_2840_144" width="240" height="240"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </svg>
                                </div>
                                <div
                                    className="flex flex-col xl:flex-row w-full gap-y-2 justify-center items-center relative">
                                    <label className="w-full text-sm md:text-md lg:text-base">Batting Style: </label>
                                    <select name="batting_style" value={playerInfo.batting_style}
                                            onChange={handleChange}
                                            className="w-full text-sm md:text-md lg:text-base p-1 text-2 border-2 border-black rounded-lg shadow-md focus:outline-none"
                                    >
                                        <option value="" disabled>Select Batting Style</option>
                                        <option>Left Hand</option>
                                        <option>Right Hand</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-8 md:top-9 xl:top-1 right-1 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                     width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                        <image id="image0_2840_144" width="240" height="240"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </svg>
                                </div>
                                <div
                                    className="flex flex-col xl:flex-row w-full gap-y-2 justify-center items-center relative">
                                    <label className="w-full text-sm md:text-md lg:text-base">Bowling Style: </label>
                                    <select name="bowling_style" value={playerInfo.bowling_style}
                                            onChange={handleChange}
                                            className="w-full text-sm md:text-md lg:text-base p-1 text-2 border-2 border-black rounded-lg shadow-md focus:outline-none"
                                    >
                                        <option value="" disabled>Select Bowling Style</option>
                                        <option>Left arm Fast</option>
                                        <option>Left arm Leg Spin</option>
                                        <option>Left arm Medium Fast</option>
                                        <option>Left arm Off Spin</option>
                                        <option>Right arm Fast</option>
                                        <option>Right arm Leg Spin</option>
                                        <option>Right arm Medium</option>
                                        <option>Right arm Medium Fast</option>
                                        <option>Right arm Off Spin</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22" height="26" viewBox="0 0 30 26" fill="none"
                                         className="absolute top-8 md:top-9 xl:top-1 right-1 cursor-pointer">
                                        <rect width="30" height="26" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                     width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_2840_144"
                                                     transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                            </pattern>
                                        </defs>
                                        <image id="image0_2840_144" width="240" height="240"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-center sm:md:justify-start mt-8 mb-4 lg:mt-6">
                                <button type="submit"
                                        className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRUDAddNewPlayerInfo;