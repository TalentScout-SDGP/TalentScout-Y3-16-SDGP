import React, {useState} from 'react';

const ComparePlayerStats = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const statsArray = [
        {id: 1, statPlayer1: 60, statPlayer2: 80, description: 'Matches'},
        {id: 2, statPlayer1: 100, statPlayer2: 200, description: 'Runs'},
        {id: 3, statPlayer1: 58, statPlayer2: 42, description: 'Innings'},
        {id: 4, statPlayer1: 2, statPlayer2: 7, description: 'Not Outs'},
        {id: 5, statPlayer1: 2, statPlayer2: 7, description: 'HS'},
        {id: 6, statPlayer1: 2, statPlayer2: 7, description: 'Avg'},
        {id: 7, statPlayer1: 2, statPlayer2: 7, description: 'BF'},
        {id: 8, statPlayer1: 2, statPlayer2: 7, description: 'SR'},
        {id: 9, statPlayer1: 2, statPlayer2: 7, description: '100s'},
        {id: 10, statPlayer1: 2, statPlayer2: 7, description: '50s'},
        {id: 11, statPlayer1: 2, statPlayer2: 7, description: '4s'},
        {id: 12, statPlayer1: 2, statPlayer2: 7, description: '6s'},
    ];

    return (
        <div className="font-poppins">
            <div className="container my-8 ">
                <div
                    className="tab-header flex justify-center gap-x-4 bg-primary-ts_purple w-fit mx-auto py-1 px-2 rounded-3xl">
                    <button onClick={() => handleTabChange(1)}
                            className={activeTab === 1 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}>
                        Test
                    </button>
                    <button onClick={() => handleTabChange(2)}
                            className={activeTab === 2 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}>
                        ODI
                    </button>
                    <button onClick={() => handleTabChange(3)}
                            className={activeTab === 3 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}>
                        T20
                    </button>
                </div>
                <div className="tab-content my-8 bg-primary-ts_purple">
                    {activeTab === 1 && (
                        <div className="stats-list">
                            {statsArray.map((stat) => (
                                <div
                                    key={stat.id}
                                    className={`stats-row grid grid-cols-12 items-center justify-center border-b-2 border-gray-500 py-6`}>
                                    <div
                                        className={`col-span-4 text-lg text-center ${stat.statPlayer1 > stat.statPlayer2 ? 'bg-primary-green' : 'bg-primary-red'} text-white w-20 mx-auto font-semibold px-2 py-3 rounded-lg`}>
                                        {stat.statPlayer1}
                                    </div>
                                    <div
                                        className="stat-description col-span-4 text-center font-semibold">{stat.description}</div>
                                    <div
                                        className={`col-span-4 text-lg text-center ${stat.statPlayer2 > stat.statPlayer1 ? 'bg-primary-green' : 'bg-primary-red'} text-white w-20 mx-auto font-semibold px-2 py-3 rounded-lg`}>
                                        {stat.statPlayer2}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 2 && <div>Content for Tab 2</div>}
                    {activeTab === 3 && <div>Content for Tab 3</div>}
                </div>
            </div>
        </div>
    );
};

export default ComparePlayerStats;
