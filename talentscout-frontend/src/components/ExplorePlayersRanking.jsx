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



}

export default ExplorePlayerRanking