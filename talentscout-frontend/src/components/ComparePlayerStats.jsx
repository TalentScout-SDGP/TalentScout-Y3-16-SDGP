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

    const renderStatsList = (statsData) => {
        return (
            <div className="stats-list">
                {statsData.map((stat, index) => (
                    <div key={stat.id}
                         className={`stats-row  grid grid-cols-12 items-center justify-center mx-6 ${index !== statsData.length - 1 ? 'border-b-2 border-primary-light_gray' : ''} py-3`}>
                        <div
                            className={`col-span-4 text-center lg:text-base sm:text-sm text-xs ${
                                stat.statPlayer1 !== undefined
                                    ? ['Runs Conceded', 'Avg', 'Econ', 'SR'].includes(stat.description)
                                        ? stat.description === 'BBI'
                                            ? compareBBI(stat.statPlayer1, stat.statPlayer2) === 'player1'
                                                ? 'bg-primary-green'
                                                : 'bg-primary-red'
                                            : stat.statPlayer1 < stat.statPlayer2
                                                ? 'bg-primary-green'
                                                : 'bg-primary-red'
                                        : stat.statPlayer1 > stat.statPlayer2
                                            ? 'bg-primary-green'
                                            : 'bg-primary-red'
                                    : 'bg-primary-light_gray'
                            } text-white w-14 sm:w-20 mx-auto font-semibold px-1 sm:px-2 py-1 sm:py-2 rounded-lg`}
                        >
                            {stat.statPlayer1 !== undefined ? stat.statPlayer1 : '-'}
                        </div>

                        <div className="stat-description col-span-4 text-center font-semibold">{stat.description}</div>


                    </div>
                ))}
            </div>
        );
    };

};

export default ComparePlayerStats;
