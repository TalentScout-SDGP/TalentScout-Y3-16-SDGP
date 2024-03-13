import React, {useContext, useState} from "react";
import PlayerRankingContext from "../context/PlayerRankingContext.jsx";
import ExplorePlayersRanking from "./ExplorePlayersRanking.jsx";
import UserLoginModal from "./modals/UserLoginModal.jsx";
import MultiRangeSlider from "multi-range-slider-react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function ExplorePlayers() {
    const user = JSON.parse(localStorage.getItem('user'));
    const {rankPlayers} = useContext(PlayerRankingContext);
    const [formData, setFormData] = useState({
        format: '',
        playing_role: '',
        batting_style: '',
        bowling_style: '',
    });
    const {format, playing_role, batting_style, bowling_style} = formData;
    const [min_value, set_min_value] = useState(18);
    const [max_value, set_max_value] = useState(32);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleInput = (e) => {
        set_min_value(e.minValue);
        set_max_value(e.maxValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (format === '' || playing_role === '') {
            toast.error("Please select format and playing role.");
        } else if (format !== '' && playing_role !== 'Batsman' && batting_style === '') {
            toast.error("Please select batting style.");
        } else if (format !== '' && playing_role !== 'Bowler' && bowling_style === '') {
            toast.error("Please select bowling style.");
        } else {
            rankPlayers(formData, min_value, max_value);
        }
    };


}

export default ExplorePlayers;
