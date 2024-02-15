import {useState} from 'react';

function SizeChart() {
    const [selectedTab, setSelectedTab] = useState('testStats');

    const handleTabChange = (option) => {
        setSelectedTab(option);
    };

    const playerStats = {
        Batting: {
            Test: [
                {id: 1, statValue: 75, description: 'Matches'},
                {id: 2, statValue: 150, description: 'Runs'},
                {id: 3, statValue: 65, description: 'Innings'},
                {id: 4, statValue: 3, description: 'Not Outs'},
                {id: 5, statValue: 130, description: 'HS'},
                {id: 6, statValue: 42.5, description: 'Avg'},
                {id: 7, statValue: 110, description: 'BF'},
                {id: 8, statValue: 80.3, description: 'SR'},
                {id: 9, statValue: 2, description: '100s'},
                {id: 10, statValue: 20, description: '50s'},
                {id: 11, statValue: 45, description: '4s'},
                {id: 12, statValue: 30, description: '6s'},
            ],
            ODI: [
                {id: 1, statValue: 90, description: 'Matches'},
                {id: 2, statValue: 180, description: 'Runs'},
                {id: 3, statValue: 75, description: 'Innings'},
                {id: 4, statValue: 5, description: 'Not Outs'},
                {id: 5, statValue: 140, description: 'HS'},
                {id: 6, statValue: 38.2, description: 'Avg'},
                {id: 7, statValue: 100, description: 'BF'},
                {id: 8, statValue: 78.5, description: 'SR'},
                {id: 9, statValue: 1, description: '100s'},
                {id: 10, statValue: 15, description: '50s'},
                {id: 11, statValue: 30, description: '4s'},
                {id: 12, statValue: 25, description: '6s'},
            ],
            T20: [
                {id: 1, statValue: 40, description: 'Matches'},
                {id: 2, statValue: 80, description: 'Runs'},
                {id: 3, statValue: 40, description: 'Innings'},
                {id: 4, statValue: 1, description: 'Not Outs'},
                {id: 5, statValue: 110, description: 'HS'},
                {id: 6, statValue: 35.5, description: 'Avg'},
                {id: 7, statValue: 90, description: 'BF'},
                {id: 8, statValue: 85.0, description: 'SR'},
                {id: 9, statValue: 0, description: '100s'},
                {id: 10, statValue: 10, description: '50s'},
                {id: 11, statValue: 25, description: '4s'},
                {id: 12, statValue: 20, description: '6s'},
            ],
        },
        Bowling: {
            Test: [
                {id: 1, statValue: 65, description: 'Matches'},
                {id: 2, statValue: 110, description: 'Wickets'},
                {id: 3, statValue: 50, description: 'Innings'},
                {id: 4, statValue: 2.5, description: 'Overs'},
                {id: 5, statValue: 130, description: 'Runs'},
                //TODO We will have to parse BBI stat as a string and compare the runs and wickets separately
                {id: 6, statValue: '86/5', description: 'BBI'},
                {id: 7, statValue: 120, description: 'Avg'},
                {id: 8, statValue: 85.0, description: 'Econ'},
                {id: 9, statValue: 30, description: 'SR'},
                {id: 10, statValue: 10, description: '4Ws'},
                {id: 11, statValue: 50, description: '5Ws'},
            ],
            ODI: [
                {id: 1, statValue: 80, description: 'Matches'},
                {id: 2, statValue: 120, description: 'Wickets'},
                {id: 3, statValue: 45, description: 'Innings'},
                {id: 4, statValue: 3.5, description: 'Overs'},
                {id: 5, statValue: 110, description: 'Runs'},
                {id: 6, statValue: '33/5', description: 'BBI'},
                {id: 7, statValue: 105, description: 'Avg'},
                {id: 8, statValue: 80.0, description: 'Econ'},
                {id: 9, statValue: 25, description: 'SR'},
                {id: 10, statValue: 8, description: '4Ws'},
                {id: 11, statValue: 40, description: '5Ws'},
            ],
            T20: [
                {id: 1, statValue: 60, description: 'Matches'},
                {id: 2, statValue: 80, description: 'Wickets'},
                {id: 3, statValue: 30, description: 'Innings'},
                {id: 4, statValue: 4, description: 'Overs'},
                {id: 5, statValue: 120, description: 'Runs'},
                {id: 6, statValue: '4/7', description: 'BBI'},
                {id: 7, statValue: 110, description: 'Avg'},
                {id: 8, statValue: 85.0, description: 'Econ'},
                {id: 9, statValue: 18, description: 'SR'},
                {id: 10, statValue: 6, description: '4Ws'},
                {id: 11, statValue: 30, description: '5Ws'},
            ],
        },
        WicketKeeping: {
            Test: [
                {id: 1, statValue: 35, description: 'Catches'},
                {id: 2, statValue: 70, description: 'Stumping'},
            ],
            ODI: [
                {id: 1, statValue: 25, description: 'Catches'},
                {id: 2, statValue: 20, description: 'Stumping'},
            ],
            T20: [
                {id: 1, statValue: 45, description: 'Catches'},
                {id: 2, statValue: 38, description: 'Stumping'},
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
                        <div className="grid sm:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Batting Statistics</h1>
                                {selectedTab === 'testStats' &&
                                    playerStats.Batting &&
                                    playerStats.Batting.Test &&
                                    playerStats.Batting.Test.map((stat) => (
                                        <div className="grid md:grid-cols-2" key={stat.id}>
                                            <div className="">{stat.description}:</div>
                                            <div className="text-left">{stat.statValue}</div>
                                        </div>
                                    ))}
                                {!playerStats.Batting.Test && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Bowling Statistics</h1>
                                {selectedTab === 'testStats' && playerStats.Bowling && playerStats.Bowling.Test && playerStats.Bowling.Test.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.Bowling.Test && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">WicketKeeping Statistics</h1>
                                {selectedTab === 'testStats' && playerStats.WicketKeeping && playerStats.WicketKeeping.Test && playerStats.WicketKeeping.Test.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.WicketKeeping.Test && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="size_chart"
                         style={{display: selectedTab === 'oDIStats' ? 'block' : 'none'}}>
                        <div className="grid sm:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Batting Statistics</h1>
                                {selectedTab === 'oDIStats' && playerStats.Batting && playerStats.Batting.ODI && playerStats.Batting.ODI.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.Batting.ODI && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Bowling Statistics</h1>
                                {selectedTab === 'oDIStats' && playerStats.Bowling && playerStats.Bowling.ODI && playerStats.Bowling.ODI.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.Bowling.ODI && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">WicketKeeping Statistics</h1>
                                {selectedTab === 'oDIStats' && playerStats.WicketKeeping && playerStats.WicketKeeping.ODI && playerStats.WicketKeeping.ODI.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.WicketKeeping.ODI && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="size_chart"
                         style={{display: selectedTab === 't20Stats' ? 'block' : 'none'}}>
                        <div className="grid sm:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Batting Statistics</h1>
                                {selectedTab === 't20Stats' && playerStats.Batting && playerStats.Batting.T20 && playerStats.Batting.T20.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.Batting.T20 && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Bowling Statistics</h1>
                                {selectedTab === 't20Stats' && playerStats.Bowling && playerStats.Bowling.T20 && playerStats.Bowling.T20.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.Bowling.T20 && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">WicketKeeping Statistics</h1>
                                {selectedTab === 't20Stats' && playerStats.WicketKeeping && playerStats.WicketKeeping.T20 && playerStats.WicketKeeping.T20.map((stat) => (
                                    <div className="grid md:grid-cols-2" key={stat.id}>
                                        <div className="">{stat.description}:</div>
                                        <div className="text-left">{stat.statValue}</div>
                                    </div>
                                ))}
                                {!playerStats.WicketKeeping.T20 && (
                                    <div className="text-white">Stats Not Available</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeChart;

