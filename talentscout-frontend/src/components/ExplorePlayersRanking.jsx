import {useContext} from "react";
import PlayerRankingContext from "../context/PlayerRankingContext.jsx";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function ExplorePlayerRanking() {
    const {rankedPlayers, filters} = useContext(PlayerRankingContext);

    let playersArray = [];
    let isAvailable = false;

    const generatePlayersArray = (rankedPlayers) => {
        if (rankedPlayers.length === 0) {
            toast.error("No players available for the given search criteria.");
        } else {
            return rankedPlayers.slice(0, 10).map((player, index) => ({
                id: (index + 1),
                ranking: (index + 1).toString(),
                fullName: player.player_name,
                rating: player.PPI
            }));
        }
    }

    if (rankedPlayers.length > 0) {
        playersArray = generatePlayersArray(rankedPlayers);
        isAvailable = true;
    }

    const firstPlayer = playersArray[0];

    if (isAvailable) {
        return (
            <div className="font-poppins">
                <div className="md:container px-2">
                    <div
                        className="flex flex-row text-md md:text-base lg:text-lg p-2 sm:p-4 mt-6 sm:mt-8 bg-primary-ts_blue text-white gap-x-4 items-center rounded-t-2xl">
                        <div className="font-semibold border-r-2 px-2 md:px-8">
                            {filters.format}
                        </div>
                        <div className="font-semibold">
                            {filters.playing_role === 'Batsman' && (
                                <>
                                    Batting Ranking
                                </>
                            )}
                            {filters.playing_role === 'Bowler' && (
                                <>
                                    Bowling Ranking
                                </>
                            )}
                            {filters.playing_role === 'Wicketkeeper' && (
                                <>
                                    WicketKeeping Ranking
                                </>
                            )}
                        </div>
                    </div>
                    <div className="rounded-lg md:mb-12 text-center pb-12">
                        <div
                            className="grid grid-cols-1 md:grid-cols-12 bg-primary-ts_purple rounded-b-2xl border-gray-500 py-4 shadow-outer">
                            <div
                                className="md:col-span-3 order-2 md:order-1 mt-6 md:mt-0">
                                <div
                                    className="w-fit h-fit mx-auto py-3 px-6 rounded-lg bg-primary-ts_blue text-white font-bold text-md md:text-base lg:text-lg">1
                                </div>
                            </div>
                            <div
                                className="flex flex-col md:-ms-8 lg:-ms-16 gap-y-8 mt-6 md:mt-0 md:text-start font-bold text-base md:text-lg lg:text-xl md:col-span-3 order-3 md:order-2 px-8 md:px-0">
                                <div className="-mt-1">{firstPlayer.fullName}</div>
                                <div>{firstPlayer.rating}</div>
                            </div>
                            <div
                                className="flex justify-center right-0 md:right-8 lg:right-24 relative font-bold text-md md:text-base lg:text-lg md:col-span-6 order-1 md:order-3">
                                <img src={import.meta.env.BASE_URL + 'Player-dummy-image.png'} alt="player-dummy-image"
                                     className="mx-auto md:mx-0 w-2/5 lg:w-2/5 xl:w-2/6"/>
                            </div>
                        </div>
                        <div className='shadow-outer pb-4 rounded-2xl'>
                            <div
                                className="grid grid-cols-12 my-10 border-b-2 border-gray-500 py-6 font-bold mx-0 md:mx-4">
                                <div className="text-md md:text-base lg:text-lg col-span-3">POS</div>
                                <div className="text-md md:text-base lg:text-lg col-span-6">Player Name</div>
                                <div className="text-md md:text-base lg:text-lg col-span-3">Rating</div>
                            </div>
                            {playersArray && playersArray.length > 0 ? (
                                playersArray.slice(1).map((player) => (
                                    <div key={player.id}
                                         className="grid grid-cols-12 font-semibold mb-10 border-b-2 border-gray-500 py-2 items-center mx-0 md:mx-4">
                                        <div
                                            className="text-sm md:text-md lg:text-base col-span-3">{player.ranking}</div>
                                        <div
                                            className="text-sm md:text-md lg:text-base col-span-6">{player.fullName}</div>
                                        <div
                                            className="text-sm md:text-md lg:text-base col-span-3">{player.rating}</div>
                                    </div>
                                ))
                            ) : (
                                <p>No players available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default ExplorePlayerRanking