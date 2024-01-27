import {Link} from "react-router-dom";

function PlayerProfilesInfo() {

    return (
        <div className="md:container px-8 my-2">
            <div
                className="bg-primary-ts_purple mlg:grid-cols-1 my-10 shadow-outer rounded-lg px-2 py-2">
                <div
                    className="grid grid-cols-1 md:grid-cols-12 bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                    <div className="flex items-center text-center flex-col col-span-4 xl:py-1 md:py-8 sm:py-2">
                        <img src={import.meta.env.BASE_URL + 'Player-dummy-image.png'} alt="search-icon"
                             className="min-[600px]:w-3/5 w-3/5 md:w-4/5 mx-auto 2xl:px-8 xl:px-4 block"></img>
                        <p className="text-white font-bold text-xs sm:text-sm xl:text-lg md:text-base pt-7 ">Name
                            : Dhananjaya De Silva</p>
                    </div>
                    <div className="mt-0 2xl:py-20 xl:py-20 md:mt-0 md:mx-6 col-span-8 py-12 text-white ps-2 sm:ps-16 md:ps-0">
                        <div className="text-xs sm:text-sm xl:text-lg md:text-base flex flex-col gap-y-4">
                            <p className="">Full Name : Dhananjaya De Silva</p>
                            <p className="">Born : September 06, 1991,
                                Colombo</p>
                            <p className="">Playing Role : All-Rounder</p>
                            <p className="">Batting Style : Right-Handed</p>
                            <p className="">Bowling Style : Right-Arm
                                OffBreak</p>
                        </div>
                        <Link to="/compare_players" className="mx-18 px-16 xl:mt-4 md:mx-1 lg:mx-1 sm:px-14 sm:mx-18 sm:mt-4 2xl:mx-1 xl:mx-1 mt-2 inline-block text-sm bg-primary-yellow text-black font-semibold rounded-button text-center md:px-8 lg:py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform">
                            <img src={import.meta.env.BASE_URL + 'compare-icon.png'} alt="compare-icon"
                                 className="inline px-0"></img>
                            Compare
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfilesInfo;