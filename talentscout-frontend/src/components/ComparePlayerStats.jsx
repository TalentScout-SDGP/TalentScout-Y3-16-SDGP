import {useContext, useState} from 'react';
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";

const ComparePlayerStats = () => {
    const [mainTab, setMainTab] = useState(1);
    const [nestedTab, setNestedTab] = useState(4);
    const {selectedPlayerData, selectedSecondPlayerData} = useContext(ManagePlayersContext);

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

        if (wickets1 === wickets2) {
            return runs1 < runs2 ? 'player1' : 'player2';
        } else if (wickets1 > wickets2) {
            return 'player1';
        } else if (wickets1 < wickets2) {
            return 'player2';
        }
    };

    const renderStatsList = (statsData) => {
        return (
            <div className="stats-list">
                {statsData.map((stat, index) => (
                    <div key={index}
                         className={`stats-row  grid grid-cols-12 items-center justify-center mx-6 ${index !== statsData.length - 1 ? 'border-b-2 border-primary-light_gray' : ''} py-3`}>
                        <div
                            className={`col-span-4 text-center lg:text-base sm:text-sm text-xs ${
                                stat.statPlayer1 !== undefined
                                    ? stat.description === 'BBI'
                                        ? compareBBI(stat.statPlayer1, stat.statPlayer2) === 'player1'
                                            ? 'bg-primary-green'
                                            : 'bg-primary-red'
                                        : ['Runs Conceded', 'Bowling Average', 'Bowling Econ', 'Bowling SR'].includes(stat.description)
                                            ? stat.statPlayer1 < stat.statPlayer2
                                                ? 'bg-primary-green'
                                                : 'bg-primary-red'
                                            : stat.statPlayer1 > stat.statPlayer2
                                                ? 'bg-primary-green'
                                                : 'bg-primary-red'
                                    : 'bg-primary-light_gray'
                            } text-white w-14 sm:w-20 mx-auto font-semibold px-1 sm:px-2 py-1 sm:py-2 rounded-lg`}>
                            {stat.statPlayer1 !== undefined ? stat.statPlayer1 : '-'}
                        </div>
                        <div className="stat-description col-span-4 text-center font-semibold">{stat.description}</div>
                        <div
                            className={`col-span-4 text-center lg:text-base sm:text-sm text-xs ${
                                stat.statPlayer2 !== undefined
                                    ? stat.description === 'BBI'
                                        ? compareBBI(stat.statPlayer1, stat.statPlayer2) === 'player2'
                                            ? 'bg-primary-green'
                                            : 'bg-primary-red'
                                        : ['Runs Conceded', 'Bowling Average', 'Bowling Econ', 'Bowling SR'].includes(stat.description)
                                            ? stat.statPlayer2 < stat.statPlayer1
                                                ? 'bg-primary-green'
                                                : 'bg-primary-red'
                                            : stat.statPlayer2 > stat.statPlayer1
                                                ? 'bg-primary-green'
                                                : 'bg-primary-red'
                                    : 'bg-primary-light_gray'
                            } text-white w-14 sm:w-20 mx-auto font-semibold px-1 sm:px-2 py-1 sm:py-2 rounded-lg`}>
                            {stat.statPlayer2 !== undefined ? stat.statPlayer2 : '-'}
                        </div>
                    </div>
                ))}
            </div>
        );
    };


    const playerStats = {
        Batting: {
            Test: [
                {
                    id: 1,
                    statPlayer1: getBattingStats('Test', 1).matches,
                    statPlayer2: getBattingStats('Test', 2).matches,
                    description: 'Matches'
                },
                {
                    id: 2,
                    statPlayer1: getBattingStats('Test', 1).runs,
                    statPlayer2: getBattingStats('Test', 2).runs,
                    description: 'Runs'
                },
                {
                    id: 3,
                    statPlayer1: getBattingStats('Test', 1).innings,
                    statPlayer2: getBattingStats('Test', 2).innings,
                    description: 'Innings'
                },
                {
                    id: 4,
                    statPlayer1: getBattingStats('Test', 1).no,
                    statPlayer2: getBattingStats('Test', 2).no,
                    description: 'Not Outs'
                },
                {
                    id: 5,
                    statPlayer1: getBattingStats('Test', 1).hs,
                    statPlayer2: getBattingStats('Test', 2).hs,
                    description: 'HS'
                },
                {
                    id: 6,
                    statPlayer1: getBattingStats('Test', 1).avg,
                    statPlayer2: getBattingStats('Test', 2).avg,
                    description: 'Avg'
                },
                {
                    id: 7,
                    statPlayer1: getBattingStats('Test', 1).bf,
                    statPlayer2: getBattingStats('Test', 2).bf,
                    description: 'BF'
                },
                {
                    id: 8,
                    statPlayer1: getBattingStats('Test', 1).sr,
                    statPlayer2: getBattingStats('Test', 2).sr,
                    description: 'SR'
                },
                {
                    id: 9,
                    statPlayer1: getBattingStats('Test', 1).centuries,
                    statPlayer2: getBattingStats('Test', 2).centuries,
                    description: '100s'
                },
                {
                    id: 10,
                    statPlayer1: getBattingStats('Test', 1).fifties,
                    statPlayer2: getBattingStats('Test', 2).fifties,
                    description: '50s'
                },
                {
                    id: 11,
                    statPlayer1: getBattingStats('Test', 1).fours,
                    statPlayer2: getBattingStats('Test', 2).fours,
                    description: '4s'
                },
                {
                    id: 12,
                    statPlayer1: getBattingStats('Test', 1).sixes,
                    statPlayer2: getBattingStats('Test', 2).sixes,
                    description: '6s'
                },

            ],
            ODI: [
                {
                    id: 1,
                    statPlayer1: getBattingStats('ODI', 1).matches,
                    statPlayer2: getBattingStats('ODI', 2).matches,
                    description: 'Matches'
                },
                {
                    id: 2,
                    statPlayer1: getBattingStats('ODI', 1).runs,
                    statPlayer2: getBattingStats('ODI', 2).runs,
                    description: 'Runs'
                },
                {
                    id: 3,
                    statPlayer1: getBattingStats('ODI', 1).innings,
                    statPlayer2: getBattingStats('ODI', 2).innings,
                    description: 'Innings'
                },
                {
                    id: 4,
                    statPlayer1: getBattingStats('ODI', 1).no,
                    statPlayer2: getBattingStats('ODI', 2).no,
                    description: 'Not Outs'
                },
                {
                    id: 5,
                    statPlayer1: getBattingStats('ODI', 1).hs,
                    statPlayer2: getBattingStats('ODI', 2).hs,
                    description: 'HS'
                },
                {
                    id: 6,
                    statPlayer1: getBattingStats('ODI', 1).avg,
                    statPlayer2: getBattingStats('ODI', 2).avg,
                    description: 'Avg'
                },
                {
                    id: 7,
                    statPlayer1: getBattingStats('ODI', 1).bf,
                    statPlayer2: getBattingStats('ODI', 2).bf,
                    description: 'BF'
                },
                {
                    id: 8,
                    statPlayer1: getBattingStats('ODI', 1).sr,
                    statPlayer2: getBattingStats('ODI', 2).sr,
                    description: 'SR'
                },
                {
                    id: 9,
                    statPlayer1: getBattingStats('ODI', 1).centuries,
                    statPlayer2: getBattingStats('ODI', 2).centuries,
                    description: '100s'
                },
                {
                    id: 10,
                    statPlayer1: getBattingStats('ODI', 1).fifties,
                    statPlayer2: getBattingStats('ODI', 2).fifties,
                    description: '50s'
                },
                {
                    id: 11,
                    statPlayer1: getBattingStats('ODI', 1).fours,
                    statPlayer2: getBattingStats('ODI', 2).fours,
                    description: '4s'
                },
                {
                    id: 12,
                    statPlayer1: getBattingStats('ODI', 1).sixes,
                    statPlayer2: getBattingStats('ODI', 2).sixes,
                    description: '6s'
                },
            ],
            T20: [
                {
                    id: 1,
                    statPlayer1: getBattingStats('T20', 1).matches,
                    statPlayer2: getBattingStats('T20', 2).matches,
                    description: 'Matches'
                },
                {
                    id: 2,
                    statPlayer1: getBattingStats('T20', 1).runs,
                    statPlayer2: getBattingStats('T20', 2).runs,
                    description: 'Runs'
                },
                {
                    id: 3,
                    statPlayer1: getBattingStats('T20', 1).innings,
                    statPlayer2: getBattingStats('T20', 2).innings,
                    description: 'Innings'
                },
                {
                    id: 4,
                    statPlayer1: getBattingStats('T20', 1).no,
                    statPlayer2: getBattingStats('T20', 2).no,
                    description: 'Not Outs'
                },
                {
                    id: 5,
                    statPlayer1: getBattingStats('T20', 1).hs,
                    statPlayer2: getBattingStats('T20', 2).hs,
                    description: 'HS'
                },
                {
                    id: 6,
                    statPlayer1: getBattingStats('T20', 1).avg,
                    statPlayer2: getBattingStats('T20', 2).avg,
                    description: 'Avg'
                },
                {
                    id: 7,
                    statPlayer1: getBattingStats('T20', 1).bf,
                    statPlayer2: getBattingStats('T20', 2).bf,
                    description: 'BF'
                },
                {
                    id: 8,
                    statPlayer1: getBattingStats('T20', 1).sr,
                    statPlayer2: getBattingStats('T20', 2).sr,
                    description: 'SR'
                },
                {
                    id: 9,
                    statPlayer1: getBattingStats('T20', 1).centuries,
                    statPlayer2: getBattingStats('T20', 2).centuries,
                    description: '100s'
                },
                {
                    id: 10,
                    statPlayer1: getBattingStats('T20', 1).fifties,
                    statPlayer2: getBattingStats('T20', 2).fifties,
                    description: '50s'
                },
                {
                    id: 11,
                    statPlayer1: getBattingStats('T20', 1).fours,
                    statPlayer2: getBattingStats('T20', 2).fours,
                    description: '4s'
                },
                {
                    id: 12,
                    statPlayer1: getBattingStats('T20', 1).sixes,
                    statPlayer2: getBattingStats('T20', 2).sixes,
                    description: '6s'
                },
            ],
        },
        Bowling: {
            Test: [
                {
                    id: 1,
                    statPlayer1: getBowlingStats('Test', 1).matches,
                    statPlayer2: getBowlingStats('Test', 2).matches,
                    description: 'Matches'
                },
                {
                    id: 2,
                    statPlayer1: getBowlingStats('Test', 1).wickets,
                    statPlayer2: getBowlingStats('Test', 2).wickets,
                    description: 'Wickets'
                },
                {
                    id: 3,
                    statPlayer1: getBowlingStats('Test', 1).innings,
                    statPlayer2: getBowlingStats('Test', 2).innings,
                    description: 'Innings'
                },
                {
                    id: 4,
                    statPlayer1: getBowlingStats('Test', 1).overs,
                    statPlayer2: getBowlingStats('Test', 2).overs,
                    description: 'Overs'
                },
                {
                    id: 5,
                    statPlayer1: getBowlingStats('Test', 1).runs,
                    statPlayer2: getBowlingStats('Test', 2).runs,
                    description: 'Runs Conceded'
                },
                {
                    id: 6,
                    statPlayer1: getBowlingStats('Test', 1).bbi,
                    statPlayer2: getBowlingStats('Test', 2).bbi,
                    description: 'BBI'
                },
                {
                    id: 7,
                    statPlayer1: getBowlingStats('Test', 1).avg,
                    statPlayer2: getBowlingStats('Test', 2).avg,
                    description: 'Bowling Average'
                },
                {
                    id: 8,
                    statPlayer1: getBowlingStats('Test', 1).econ,
                    statPlayer2: getBowlingStats('Test', 2).econ,
                    description: 'Bowling Econ'
                },
                {
                    id: 9,
                    statPlayer1: getBowlingStats('Test', 1).sr,
                    statPlayer2: getBowlingStats('Test', 2).sr,
                    description: 'Bowling SR'
                },
                {
                    id: 10,
                    statPlayer1: getBowlingStats('Test', 1).four_ws,
                    statPlayer2: getBowlingStats('Test', 2).four_ws,
                    description: '4Ws'
                },
                {
                    id: 11,
                    statPlayer1: getBowlingStats('Test', 1).five_ws,
                    statPlayer2: getBowlingStats('Test', 2).five_ws,
                    description: '5Ws'
                },
                {id: 1, statPlayer1: 65, statPlayer2: 85, description: 'Matches'},
                {id: 2, statPlayer1: 110, statPlayer2: 220, description: 'Wickets'},
                {id: 3, statPlayer1: 50, statPlayer2: 35, description: 'Innings'},
                {id: 4, statPlayer1: 2.5, statPlayer2: 7.3, description: 'Overs'},
                {id: 5, statPlayer1: 130, statPlayer2: 120, description: 'Runs'},
                {id: 6, statPlayer1: '86/5', statPlayer2: '79/8', description: 'BBI'},
                {id: 7, statPlayer1: 120, statPlayer2: 110, description: 'Avg'},
                {id: 8, statPlayer1: 85.0, statPlayer2: 72.6, description: 'Econ'},
                {id: 9, statPlayer1: 30, statPlayer2: 35, description: 'SR'},
                {id: 10, statPlayer1: 10, statPlayer2: 12, description: '4Ws'},
                {id: 11, statPlayer1: 50, statPlayer2: 15, description: '5Ws'},
            ],
            ODI: [
                {
                    id: 1,
                    statPlayer1: getBowlingStats('ODI', 1).matches,
                    statPlayer2: getBowlingStats('ODI', 2).matches,
                    description: 'Matches'
                },
                {
                    id: 2,
                    statPlayer1: getBowlingStats('ODI', 1).wickets,
                    statPlayer2: getBowlingStats('ODI', 2).wickets,
                    description: 'Wickets'
                },
                {
                    id: 3,
                    statPlayer1: getBowlingStats('ODI', 1).innings,
                    statPlayer2: getBowlingStats('ODI', 2).innings,
                    description: 'Innings'
                },
                {
                    id: 4,
                    statPlayer1: getBowlingStats('ODI', 1).overs,
                    statPlayer2: getBowlingStats('ODI', 2).overs,
                    description: 'Overs'
                },
                {
                    id: 5,
                    statPlayer1: getBowlingStats('ODI', 1).runs,
                    statPlayer2: getBowlingStats('ODI', 2).runs,
                    description: 'Runs Conceded'
                },
                {
                    id: 6,
                    statPlayer1: getBowlingStats('ODI', 1).bbi,
                    statPlayer2: getBowlingStats('ODI', 2).bbi,
                    description: 'BBI'
                },
                {
                    id: 7,
                    statPlayer1: getBowlingStats('ODI', 1).avg,
                    statPlayer2: getBowlingStats('ODI', 2).avg,
                    description: 'Bowling Average'
                },
                {
                    id: 8,
                    statPlayer1: getBowlingStats('ODI', 1).econ,
                    statPlayer2: getBowlingStats('ODI', 2).econ,
                    description: 'Bowling Econ'
                },
                {
                    id: 9,
                    statPlayer1: getBowlingStats('ODI', 1).sr,
                    statPlayer2: getBowlingStats('ODI', 2).sr,
                    description: 'Bowling SR'
                },
                {
                    id: 10,
                    statPlayer1: getBowlingStats('ODI', 1).four_ws,
                    statPlayer2: getBowlingStats('ODI', 2).four_ws,
                    description: '4Ws'
                },
                {
                    id: 11,
                    statPlayer1: getBowlingStats('ODI', 1).five_ws,
                    statPlayer2: getBowlingStats('ODI', 2).five_ws,
                    description: '5Ws'
                },
            ],
            T20: [
                {
                    id: 1,
                    statPlayer1: getBowlingStats('T20', 1).matches,
                    statPlayer2: getBowlingStats('T20', 2).matches,
                    description: 'Matches'
                },
                {
                    id: 2,
                    statPlayer1: getBowlingStats('T20', 1).wickets,
                    statPlayer2: getBowlingStats('T20', 2).wickets,
                    description: 'Wickets'
                },
                {
                    id: 3,
                    statPlayer1: getBowlingStats('T20', 1).innings,
                    statPlayer2: getBowlingStats('T20', 2).innings,
                    description: 'Innings'
                },
                {
                    id: 4,
                    statPlayer1: getBowlingStats('T20', 1).overs,
                    statPlayer2: getBowlingStats('T20', 2).overs,
                    description: 'Overs'
                },
                {
                    id: 5,
                    statPlayer1: getBowlingStats('T20', 1).runs,
                    statPlayer2: getBowlingStats('T20', 2).runs,
                    description: 'Runs Conceded'
                },
                {
                    id: 6,
                    statPlayer1: getBowlingStats('T20', 1).bbi,
                    statPlayer2: getBowlingStats('T20', 2).bbi,
                    description: 'BBI'
                },
                {
                    id: 7,
                    statPlayer1: getBowlingStats('T20', 1).avg,
                    statPlayer2: getBowlingStats('T20', 2).avg,
                    description: 'Bowling Average'
                },
                {
                    id: 8,
                    statPlayer1: getBowlingStats('T20', 1).econ,
                    statPlayer2: getBowlingStats('T20', 2).econ,
                    description: 'Bowling Econ'
                },
                {
                    id: 9,
                    statPlayer1: getBowlingStats('T20', 1).sr,
                    statPlayer2: getBowlingStats('T20', 2).sr,
                    description: 'Bowling SR'
                },
                {
                    id: 10,
                    statPlayer1: getBowlingStats('T20', 1).four_ws,
                    statPlayer2: getBowlingStats('T20', 2).four_ws,
                    description: '4Ws'
                },
                {
                    id: 11,
                    statPlayer1: getBowlingStats('T20', 1).five_ws,
                    statPlayer2: getBowlingStats('T20', 2).five_ws,
                    description: '5Ws'
                },
            ],
        },
        WicketKeeping: {
            Test: [
                {
                    id: 1,
                    statPlayer1: getWicketKeepingStats('Test', 1).catches,
                    statPlayer2: getWicketKeepingStats('Test', 2).catches,
                    description: 'Catches'
                },
                {
                    id: 2,
                    statPlayer1: getWicketKeepingStats('Test', 1).stumping,
                    statPlayer2: getWicketKeepingStats('Test', 2).stumping,
                    description: 'Stumping'
                },
            ],
            ODI: [
                {
                    id: 1,
                    statPlayer1: getWicketKeepingStats('ODI', 1).catches,
                    statPlayer2: getWicketKeepingStats('ODI', 2).catches,
                    description: 'Catches'
                },
                {
                    id: 2,
                    statPlayer1: getWicketKeepingStats('ODI', 1).stumping,
                    statPlayer2: getWicketKeepingStats('ODI', 2).stumping,
                    description: 'Stumping'
                },
            ],
            T20: [
                {
                    id: 1,
                    statPlayer1: getWicketKeepingStats('T20', 1).catches,
                    statPlayer2: getWicketKeepingStats('T20', 2).catches,
                    description: 'Catches'
                },
                {
                    id: 1,
                    statPlayer1: getWicketKeepingStats('T20', 1).stumping,
                    statPlayer2: getWicketKeepingStats('T20', 2).stumping,
                    description: 'Stumping'
                },
            ],
        },
    };

    return (
        <div className="font-poppins">
            <div className="md:container my-4 md:my-16 px-2">
                <div
                    className=" shadow-outer tab-header flex justify-center gap-x-2 sm:gap-x-4 bg-primary-ts_purple w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                    {Object.keys(playerStats).map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleMainTabChange(index + 1)}
                            className={mainTab === index + 1 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div
                    className="tab-header shadow-outer flex justify-center gap-x-4 bg-primary-ts_purple w-fit mx-auto py-1 px-2 rounded-3xl my-8 lg:text-base sm:text-sm text-xs">
                    {Object.keys(playerStats[Object.keys(playerStats)[mainTab - 1]]).map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleNestedTabChange(index + 4)}
                            className={nestedTab === index + 4 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content my-8 bg-primary-ts_purple rounded-lg lg:text-base text-sm shadow-outer">
                    {mainTab && nestedTab && renderStatsList(playerStats[Object.keys(playerStats)[mainTab - 1]][Object.keys(playerStats[Object.keys(playerStats)[mainTab - 1]])[nestedTab - 4]])}
                </div>
            </div>
        </div>
    );

};

export default ComparePlayerStats;
