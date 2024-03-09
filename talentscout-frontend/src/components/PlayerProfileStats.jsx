import {useContext, useState} from 'react';
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";

function PlayerProfileStats() {
    const {selectedPlayerData} = useContext(ManagePlayersContext);
    const [selectedTab, setSelectedTab] = useState('testStats');

    const handleTabChange = (option) => {
        setSelectedTab(option);
    };

    const getBattingStats = (format) => {
        return selectedPlayerData.batting_stats.find(stats => stats.format === format) || {};
    };

    const getBowlingStats = (format) => {
        return selectedPlayerData.bowling_stats.find(stats => stats.format === format) || {};
    };

    const getWicketKeepingStats = (format) => {
        return selectedPlayerData.wicketkeeping_stats.find(stats => stats.format === format) || {};
    };

    const playerStats = {
        Batting: {
            Test: [
                {id: 1, statValue: getBattingStats('Test').matches, description: 'Matches'},
                {id: 2, statValue: getBattingStats('Test').runs, description: 'Runs'},
                {id: 3, statValue: getBattingStats('Test').innings, description: 'Innings'},
                {id: 4, statValue: getBattingStats('Test').no, description: 'Not Outs'},
                {id: 5, statValue: getBattingStats('Test').hs, description: 'HS'},
                {id: 6, statValue: getBattingStats('Test').avg, description: 'Avg'},
                {id: 7, statValue: getBattingStats('Test').bf, description: 'BF'},
                {id: 8, statValue: getBattingStats('Test').sr, description: 'SR'},
                {id: 9, statValue: getBattingStats('Test').centuries, description: '100s'},
                {id: 10, statValue: getBattingStats('Test').fifties, description: '50s'},
                {id: 11, statValue: getBattingStats('Test').fours, description: '4s'},
                {id: 12, statValue: getBattingStats('Test').sixes, description: '6s'},
            ],
            ODI: [
                {id: 1, statValue: getBattingStats('ODI').matches, description: 'Matches'},
                {id: 2, statValue: getBattingStats('ODI').runs, description: 'Runs'},
                {id: 3, statValue: getBattingStats('ODI').innings, description: 'Innings'},
                {id: 4, statValue: getBattingStats('ODI').no, description: 'Not Outs'},
                {id: 5, statValue: getBattingStats('ODI').hs, description: 'HS'},
                {id: 6, statValue: getBattingStats('ODI').avg, description: 'Avg'},
                {id: 7, statValue: getBattingStats('ODI').bf, description: 'BF'},
                {id: 8, statValue: getBattingStats('ODI').sr, description: 'SR'},
                {id: 9, statValue: getBattingStats('ODI').centuries, description: '100s'},
                {id: 10, statValue: getBattingStats('ODI').fifties, description: '50s'},
                {id: 11, statValue: getBattingStats('ODI').fours, description: '4s'},
                {id: 12, statValue: getBattingStats('ODI').sixes, description: '6s'},
            ],
            T20: [
                {id: 1, statValue: getBattingStats('T20').matches, description: 'Matches'},
                {id: 2, statValue: getBattingStats('T20').runs, description: 'Runs'},
                {id: 3, statValue: getBattingStats('T20').innings, description: 'Innings'},
                {id: 4, statValue: getBattingStats('T20').no, description: 'Not Outs'},
                {id: 5, statValue: getBattingStats('T20').hs, description: 'HS'},
                {id: 6, statValue: getBattingStats('T20').avg, description: 'Avg'},
                {id: 7, statValue: getBattingStats('T20').bf, description: 'BF'},
                {id: 8, statValue: getBattingStats('T20').sr, description: 'SR'},
                {id: 9, statValue: getBattingStats('T20').centuries, description: '100s'},
                {id: 10, statValue: getBattingStats('T20').fifties, description: '50s'},
                {id: 11, statValue: getBattingStats('T20').fours, description: '4s'},
                {id: 12, statValue: getBattingStats('T20').sixes, description: '6s'},
            ],
        },
        Bowling: {
            Test: [
                {id: 1, statValue: getBowlingStats('Test').matches, description: 'Matches'},
                {id: 2, statValue: getBowlingStats('Test').wickets, description: 'Wickets'},
                {id: 3, statValue: getBowlingStats('Test').innings, description: 'Innings'},
                {id: 4, statValue: getBowlingStats('Test').overs, description: 'Overs'},
                {id: 5, statValue: getBowlingStats('Test').runs, description: 'Runs'},
                {id: 6, statValue: getBowlingStats('Test').bbi, description: 'BBI'},
                {id: 7, statValue: getBowlingStats('Test').avg, description: 'Avg'},
                {id: 8, statValue: getBowlingStats('Test').econ, description: 'Econ'},
                {id: 9, statValue: getBowlingStats('Test').sr, description: 'SR'},
                {id: 10, statValue: getBowlingStats('Test').four_ws, description: '4Ws'},
                {id: 11, statValue: getBowlingStats('Test').five_ws, description: '5Ws'},
            ],
            ODI: [
                {id: 1, statValue: getBowlingStats('ODI').matches, description: 'Matches'},
                {id: 2, statValue: getBowlingStats('ODI').wickets, description: 'Wickets'},
                {id: 3, statValue: getBowlingStats('ODI').innings, description: 'Innings'},
                {id: 4, statValue: getBowlingStats('ODI').overs, description: 'Overs'},
                {id: 5, statValue: getBowlingStats('ODI').runs, description: 'Runs'},
                {id: 6, statValue: getBowlingStats('ODI').bbi, description: 'BBI'},
                {id: 7, statValue: getBowlingStats('ODI').avg, description: 'Avg'},
                {id: 8, statValue: getBowlingStats('ODI').econ, description: 'Econ'},
                {id: 9, statValue: getBowlingStats('ODI').sr, description: 'SR'},
                {id: 10, statValue: getBowlingStats('ODI').four_ws, description: '4Ws'},
                {id: 11, statValue: getBowlingStats('ODI').five_ws, description: '5Ws'},
            ],
            T20: [
                {id: 1, statValue: getBowlingStats('T20').matches, description: 'Matches'},
                {id: 2, statValue: getBowlingStats('T20').wickets, description: 'Wickets'},
                {id: 3, statValue: getBowlingStats('T20').innings, description: 'Innings'},
                {id: 4, statValue: getBowlingStats('T20').overs, description: 'Overs'},
                {id: 5, statValue: getBowlingStats('T20').runs, description: 'Runs'},
                {id: 6, statValue: getBowlingStats('T20').bbi, description: 'BBI'},
                {id: 7, statValue: getBowlingStats('T20').avg, description: 'Avg'},
                {id: 8, statValue: getBowlingStats('T20').econ, description: 'Econ'},
                {id: 9, statValue: getBowlingStats('T20').sr, description: 'SR'},
                {id: 10, statValue: getBowlingStats('T20').four_ws, description: '4Ws'},
                {id: 11, statValue: getBowlingStats('T20').five_ws, description: '5Ws'},
            ],
        },
        WicketKeeping: {
            Test: [
                {id: 1, statValue: getWicketKeepingStats('Test').matches, description: 'Matches'},
                {id: 2, statValue: getWicketKeepingStats('Test').innings, description: 'Innings'},
                {id: 3, statValue: getWicketKeepingStats('Test').catches, description: 'Catches'},
                {id: 4, statValue: getWicketKeepingStats('Test').stumping, description: 'Stumping'},
            ],
            ODI: [
                {id: 1, statValue: getWicketKeepingStats('ODI').matches, description: 'Matches'},
                {id: 2, statValue: getWicketKeepingStats('ODI').innings, description: 'Innings'},
                {id: 3, statValue: getWicketKeepingStats('ODI').catches, description: 'Catches'},
                {id: 4, statValue: getWicketKeepingStats('ODI').stumping, description: 'Stumping'},
            ],
            T20: [
                {id: 1, statValue: getWicketKeepingStats('T20').matches, description: 'Matches'},
                {id: 2, statValue: getWicketKeepingStats('T20').innings, description: 'Innings'},
                {id: 3, statValue: getWicketKeepingStats('T20').catches, description: 'Catches'},
                {id: 4, statValue: getWicketKeepingStats('T20').stumping, description: 'Stumping'},
            ],
        },
    };

    return (
        <div className="font-poppins">
            <div className="lg:container text-base font-poppins pb-10 px-2 my-2">
                {/* Tabs */}
                <div className="bg-primary-ts_purple mlg:grid-cols-1 my-10 shadow-outer rounded-lg px-2 py-2">
                    <div className="md:container my-3 md:my-6 px-2">
                        <div
                            className="tab-header shadow-outer bg-white flex justify-center gap-x-2 sm:gap-x-4 w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={() => handleTabChange('testStats')}
                                    className={`${
                                        selectedTab === 'testStats' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'
                                    } py-2 px-6 font-medium rounded-full focus:outline-none`}
                                >
                                    Test
                                </button>
                                <button
                                    onClick={() => handleTabChange('oDIStats')}
                                    className={`${
                                        selectedTab === 'oDIStats' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'
                                    } py-2 px-6 font-medium rounded-full focus:outline-none`}
                                >
                                    ODI
                                </button>
                                <button
                                    onClick={() => handleTabChange('t20Stats')}
                                    className={`${
                                        selectedTab === 't20Stats' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'
                                    } py-2 px-6 font-medium rounded-full  focus:outline-none`}
                                >
                                    T20
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="size_chart"
                         style={{display: selectedTab === 'testStats' ? 'block' : 'none'}}>
                        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden">
                                <h1 className="text-white font-bold text-center mb-4">Batting Statistics</h1>
                                {playerStats.Batting && playerStats.Batting.Test &&
                                    (playerStats.Batting.Test.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.Batting.Test.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden">
                                <h1 className="text-white font-bold text-center mb-4">Bowling Statistics</h1>
                                {playerStats.Bowling && playerStats.Bowling.Test &&
                                    (playerStats.Bowling.Test.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.Bowling.Test.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center mb-4">WicketKeeping Statistics</h1>
                                {playerStats.WicketKeeping && playerStats.WicketKeeping.Test &&
                                    (playerStats.WicketKeeping.Test.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.WicketKeeping.Test.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="size_chart"
                         style={{display: selectedTab === 'oDIStats' ? 'block' : 'none'}}>
                        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center mb-4">Batting Statistics</h1>
                                {playerStats.Batting && playerStats.Batting.ODI &&
                                    (playerStats.Batting.ODI.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.Batting.ODI.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center mb-4">Bowling Statistics</h1>
                                {playerStats.Bowling && playerStats.Bowling.ODI &&
                                    (playerStats.Bowling.ODI.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.Bowling.ODI.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center mb-4">WicketKeeping Statistics</h1>
                                {playerStats.WicketKeeping && playerStats.WicketKeeping.ODI &&
                                    (playerStats.WicketKeeping.ODI.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.WicketKeeping.ODI.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="size_chart"
                         style={{display: selectedTab === 't20Stats' ? 'block' : 'none'}}>
                        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center mb-4">Batting Statistics</h1>
                                {playerStats.Batting && playerStats.Batting.T20 &&
                                    (playerStats.Batting.T20.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.Batting.T20.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden">
                                <h1 className="text-white font-bold text-center mb-4">Bowling Statistics</h1>
                                {playerStats.Bowling && playerStats.Bowling.T20 &&
                                    (playerStats.Bowling.T20.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.Bowling.T20.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 ps-6 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center mb-4">WicketKeeping Statistics</h1>
                                {playerStats.WicketKeeping && playerStats.WicketKeeping.T20 &&
                                    (playerStats.WicketKeeping.T20.every(stat => stat.statValue === undefined) ? (
                                        <div className="text-white text-center">Stats Not Available</div>
                                    ) : (
                                        playerStats.WicketKeeping.T20.map((stat) => (
                                            <div className="grid grid-cols-2" key={stat.id}>
                                                <div className="">{stat.description}:</div>
                                                <div className="text-left">{stat.statValue}</div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerProfileStats;

