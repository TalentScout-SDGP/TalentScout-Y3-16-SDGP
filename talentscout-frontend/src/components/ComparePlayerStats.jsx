import React, {useState} from 'react';

const ComparePlayerStats = () => {
    const [mainTab, setMainTab] = useState(1);
    const [nestedTab, setNestedTab] = useState(4);

    const handleMainTabChange = (tabNumber) => {
        setMainTab(tabNumber);
    };

    const handleNestedTabChange = (tabNumber) => {
        setNestedTab(tabNumber);
    };

    const renderStatsList = (statsData) => {
        return (
            <div className="stats-list">
                {statsData.map((stat, index) => (
                    <div key={stat.id}
                         className={`stats-row grid grid-cols-12 items-center justify-center mx-6 ${index !== statsData.length - 1 ? 'border-b-2 border-primary-light_gray' : ''} py-3`}>
                        <div
                            className={`col-span-4 text-lg text-center ${
                                stat.statPlayer1 !== '-' ? (stat.statPlayer1 > stat.statPlayer2 ? 'bg-primary-green' : 'bg-primary-red') : 'bg-primary-light_gray'
                            } text-white w-20 mx-auto font-semibold px-2 py-2 rounded-lg`}>
                            {stat.statPlayer1}
                        </div>
                        <div className="stat-description col-span-4 text-center font-semibold">{stat.description}</div>
                        <div
                            className={`col-span-4 text-lg text-center ${
                                stat.statPlayer2 !== '-' ? (stat.statPlayer2 > stat.statPlayer1 ? 'bg-primary-green' : 'bg-primary-red') : 'bg-primary-light_gray'
                            } text-white w-20 mx-auto font-semibold px-2 py-2 rounded-lg`}>
                            {stat.statPlayer2}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    //TODO Dummy data used for testing the component, Will be replaced with actual data from backend once we have the API ready
    const playerStats = {
        Batting: {
            Test: [
                {id: 1, statPlayer1: 75, statPlayer2: 95, description: 'Matches'},
                {id: 2, statPlayer1: 150, statPlayer2: 250, description: 'Runs'},
                {id: 3, statPlayer1: 65, statPlayer2: 50, description: 'Innings'},
                {id: 4, statPlayer1: 3, statPlayer2: 8, description: 'Not Outs'},
                {id: 5, statPlayer1: 130, statPlayer2: 120, description: 'HS'},
                {id: 6, statPlayer1: 42.5, statPlayer2: 48.3, description: 'Avg'},
                {id: 7, statPlayer1: 110, statPlayer2: 100, description: 'BF'},
                {id: 8, statPlayer1: 80.3, statPlayer2: 75.2, description: 'SR'},
                {id: 9, statPlayer1: 2, statPlayer2: 6, description: '100s'},
                {id: 10, statPlayer1: 20, statPlayer2: 25, description: '50s'},
                {id: 11, statPlayer1: 45, statPlayer2: 20, description: '4s'},
                {id: 12, statPlayer1: 30, statPlayer2: 40, description: '6s'},
            ],
            ODI: [
                {id: 1, statPlayer1: 90, statPlayer2: 70, description: 'Matches'},
                {id: 2, statPlayer1: 180, statPlayer2: 280, description: 'Runs'},
                {id: 3, statPlayer1: 75, statPlayer2: 55, description: 'Innings'},
                {id: 4, statPlayer1: 5, statPlayer2: 10, description: 'Not Outs'},
                {id: 5, statPlayer1: 140, statPlayer2: 130, description: 'HS'},
                {id: 6, statPlayer1: 38.2, statPlayer2: 44.6, description: 'Avg'},
                {id: 7, statPlayer1: 100, statPlayer2: 90, description: 'BF'},
                {id: 8, statPlayer1: 78.5, statPlayer2: 73.2, description: 'SR'},
                {id: 9, statPlayer1: 1, statPlayer2: 8, description: '100s'},
                {id: 10, statPlayer1: 15, statPlayer2: 20, description: '50s'},
                {id: 11, statPlayer1: 30, statPlayer2: 15, description: '4s'},
                {id: 12, statPlayer1: 25, statPlayer2: 35, description: '6s'},
            ],
            T20: [
                {id: 1, statPlayer1: 40, statPlayer2: 90, description: 'Matches'},
                {id: 2, statPlayer1: 80, statPlayer2: 180, description: 'Runs'},
                {id: 3, statPlayer1: 40, statPlayer2: 30, description: 'Innings'},
                {id: 4, statPlayer1: 1, statPlayer2: 5, description: 'Not Outs'},
                {id: 5, statPlayer1: 110, statPlayer2: 100, description: 'HS'},
                {id: 6, statPlayer1: 35.5, statPlayer2: 40.6, description: 'Avg'},
                {id: 7, statPlayer1: 90, statPlayer2: 80, description: 'BF'},
                {id: 8, statPlayer1: 85.0, statPlayer2: 78.6, description: 'SR'},
                {id: 9, statPlayer1: 0, statPlayer2: 3, description: '100s'},
                {id: 10, statPlayer1: 10, statPlayer2: 12, description: '50s'},
                {id: 11, statPlayer1: 25, statPlayer2: 18, description: '4s'},
                {id: 12, statPlayer1: 20, statPlayer2: 30, description: '6s'},
            ],
        },
        Bowling: {
            Test: [
                {id: 1, statPlayer1: 65, statPlayer2: 85, description: 'Matches'},
                {id: 2, statPlayer1: 110, statPlayer2: 220, description: 'Wickets'},
                {id: 3, statPlayer1: 50, statPlayer2: 35, description: 'Innings'},
                {id: 4, statPlayer1: 2.5, statPlayer2: 7.3, description: 'Overs'},
                {id: 5, statPlayer1: 130, statPlayer2: 120, description: 'Runs'},
                {id: 6, statPlayer1: 48.5, statPlayer2: 45.6, description: 'BBI'},
                {id: 7, statPlayer1: 120, statPlayer2: 110, description: 'Avg'},
                {id: 8, statPlayer1: 85.0, statPlayer2: 72.6, description: 'Econ'},
                {id: 9, statPlayer1: 30, statPlayer2: 35, description: 'SR'},
                {id: 10, statPlayer1: 10, statPlayer2: 12, description: '4Ws'},
                {id: 11, statPlayer1: 50, statPlayer2: 15, description: '5Ws'},
            ],
            ODI: [
                {id: 1, statPlayer1: 80, statPlayer2: 50, description: 'Matches'},
                {id: 2, statPlayer1: 120, statPlayer2: 180, description: 'Wickets'},
                {id: 3, statPlayer1: 45, statPlayer2: 30, description: 'Innings'},
                {id: 4, statPlayer1: 3.5, statPlayer2: 8, description: 'Overs'},
                {id: 5, statPlayer1: 110, statPlayer2: 100, description: 'Runs'},
                {id: 6, statPlayer1: 42.5, statPlayer2: 38.6, description: 'BBI'},
                {id: 7, statPlayer1: 105, statPlayer2: 95, description: 'Avg'},
                {id: 8, statPlayer1: 80.0, statPlayer2: 76.3, description: 'Econ'},
                {id: 9, statPlayer1: 25, statPlayer2: 30, description: 'SR'},
                {id: 10, statPlayer1: 8, statPlayer2: 10, description: '4Ws'},
                {id: 11, statPlayer1: 40, statPlayer2: 12, description: '5Ws'},
            ],
            T20: [
                {id: 1, statPlayer1: 60, statPlayer2: 40, description: 'Matches'},
                {id: 2, statPlayer1: 80, statPlayer2: 150, description: 'Wickets'},
                {id: 3, statPlayer1: 30, statPlayer2: 25, description: 'Innings'},
                {id: 4, statPlayer1: 4, statPlayer2: 10, description: 'Overs'},
                {id: 5, statPlayer1: 120, statPlayer2: 110, description: 'Runs'},
                {id: 6, statPlayer1: 35.5, statPlayer2: 32.6, description: 'BBI'},
                {id: 7, statPlayer1: 110, statPlayer2: 100, description: 'Avg'},
                {id: 8, statPlayer1: 85.0, statPlayer2: 78.6, description: 'Econ'},
                {id: 9, statPlayer1: 18, statPlayer2: 22, description: 'SR'},
                {id: 10, statPlayer1: 6, statPlayer2: 8, description: '4Ws'},
                {id: 11, statPlayer1: 30, statPlayer2: 10, description: '5Ws'},
            ],
        },
        WicketKeeping: {
            Test: [
                {id: 1, statPlayer1: 35, statPlayer2: 45, description: 'Catches'},
                {id: 2, statPlayer1: 70, statPlayer2: 60, description: 'Stumping'},
            ],
            ODI: [
                {id: 1, statPlayer1: 25, statPlayer2: 22, description: 'Catches'},
                {id: 2, statPlayer1: 20, statPlayer2: 35, description: 'Stumping'},
            ],
            T20: [
                {id: 1, statPlayer1: 45, statPlayer2: 60, description: 'Catches'},
                {id: 2, statPlayer1: 38, statPlayer2: 55, description: 'Stumping'},
            ],
        },
    };

    return (
        <div className="font-poppins">
            <div className="container my-16">
                <div
                    className="tab-header flex justify-center gap-x-4 bg-primary-ts_purple w-fit mx-auto py-1 px-2 rounded-3xl">
                    {Object.keys(playerStats).map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleMainTabChange(index + 1)}
                            className={mainTab === index + 1 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div
                    className="tab-header flex justify-center gap-x-4 bg-primary-ts_purple w-fit mx-auto py-1 px-2 rounded-3xl my-8">
                    {Object.keys(playerStats[Object.keys(playerStats)[mainTab - 1]]).map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleNestedTabChange(index + 4)}
                            className={nestedTab === index + 4 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content my-8 bg-primary-ts_purple rounded-lg">
                    {mainTab && nestedTab && renderStatsList(playerStats[Object.keys(playerStats)[mainTab - 1]][Object.keys(playerStats[Object.keys(playerStats)[mainTab - 1]])[nestedTab - 4]])}
                </div>
            </div>
        </div>
    );
};

export default ComparePlayerStats;
