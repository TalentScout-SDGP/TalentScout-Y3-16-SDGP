import {useContext, useEffect, useState} from 'react';
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import axios from "axios";

const ComparePlayerStats = () => {
    const [mainTab, setMainTab] = useState(1);
    const [nestedTab, setNestedTab] = useState(4);
    const {selectedPlayerData, selectedSecondPlayerData} = useContext(ManagePlayersContext);

    useEffect(() => {
        console.log(getBattingStats('Test', 1).matches)
    }, [selectedPlayerData, selectedSecondPlayerData]);


    const getBattingStats = (format, playerNo) => {
        if (playerNo === 1) {
            return selectedPlayerData.batting_stats.find(stats => stats.format === format) || {};

        } else {
            return selectedSecondPlayerData.batting_stats.find(stats => stats.format === format) || {};

        }

    };

    const getBowlingStats = (format, playerNo) => {
        if (playerNo === 1) {
            return selectedPlayerData.bowling_stats.find(stats => stats.format === format) || {};

        } else {
            return selectedSecondPlayerData.bowling_stats.find(stats => stats.format === format) || {};

        }


    };

    const getWicketKeepingStats = (format, playerNo) => {
        if (playerNo === 1) {
            return selectedPlayerData.wicketkeeping_stats.find(stats => stats.format === format) || {};

        } else {
            return selectedSecondPlayerData.wicketkeeping_stats.find(stats => stats.format === format) || {};

        }


    };

    const handleMainTabChange = (tabNumber) => {
        setMainTab(tabNumber);
    };

    const handleNestedTabChange = (tabNumber) => {
        setNestedTab(tabNumber);
    };

    const compareBBI = (bbi1, bbi2) => {
        const [runs1, wickets1] = bbi1.split('/').map(Number);
        const [runs2, wickets2] = bbi2.split('/').map(Number);

        if (runs1 !== runs2) {
            return runs1 < runs2 ? 'player1' : 'player2';
        }

        return wickets1 > wickets2 ? 'player1' : 'player2';
    };


};

export default ComparePlayerStats;
