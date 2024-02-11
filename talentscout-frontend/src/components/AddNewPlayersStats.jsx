import React, {useState} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

function AddNewPlayersStats() {
    const [matches, setMatches] = useState('');
    const [innings, setInnings] = useState('');
    const [highestScore, setHighestScore] = useState('');
    const [ballsFaced, setBallsFaced] = useState('');
    const [hundreds, setHundreds] = useState('');
    const [sixes, setSixes] = useState('');
    const [runs, setRuns] = useState('');
    const [notOuts, setNotOuts] = useState('');
    const [average, setAverage] = useState('');
    const [strikeRate, setStrikeRate] = useState('');
    const [fifties, setFifties] = useState('');
    const [fours, setFours] = useState('');
    const [Overs, setOvers] = useState('');
    const [BBI, setBBI] = useState('');
    const [Econ, setEcon] = useState('');
    const [FourWickets, setFourWickets] = useState('');
    const [FiveWickets, setFiveWickets] = useState('');
    const [Wickets, setWickets] = useState('');
    const [Catches, setCatches] = useState('');
    const [Stumps, setStumps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMatches('');
        setInnings('');
        setHighestScore('');
        setBallsFaced('');
        setHundreds('');
        setSixes('');
        setRuns('');
        setNotOuts('');
        setAverage('');
        setStrikeRate('');
        setFifties('');
        setFours('');
        setOvers('');
        setBBI('');
        setEcon('');
        setFourWickets('');
        setFiveWickets('');
        setWickets('');
        setStumps('');
        setCatches('');
    };

    const [activeMainTab, setActiveMainTab] = useState('ODI');
    const [activeSubTab, setActiveSubTab] = useState('Batsmen');

    const handleMainTabChange = (mainTab) => {
        setActiveMainTab(mainTab);
        // Set the default subtab when the main tab changes
        setActiveSubTab('Batsmen');
    };

    const handleSubTabChange = (subTab) => {
        setActiveSubTab(subTab);
    };
    return (
        <div className="font-poppins">
            <div className="md:container px-8 ">

                <div className="bg-primary-ts_purple my-12 lg:w-full rounded-lg px-16 py-24">
                    {/* Main Tabs */}
                    <div
                        className="section-header flex justify-center gap-x-2 sm:gap-x-4 bg-primary-Tab_color w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                        <button onClick={() => handleMainTabChange('ODI')}
                                className={activeMainTab === 'ODI' ? 'active text-sm sm:text-lg font-semibold bg-primary-ts_blue text-white py-1 px-4 sm:px-8 rounded-2xl' : 'font-semibold text-sm sm:text-lg py-1 px-4 sm:px-8'}>
                            ODI
                        </button>
                        <button onClick={() => handleMainTabChange('Test')}
                                className={activeMainTab === 'Test' ? 'active text-sm sm:text-lg font-semibold bg-primary-ts_blue text-white py-1 px-4 sm:px-8 rounded-2xl' : 'font-semibold text-sm sm:text-lg py-1 px-4 sm:px-8'}>
                            Test
                        </button>
                        <button onClick={() => handleMainTabChange('T20')}
                                className={activeMainTab === 'T20' ? 'active text-sm sm:text-lg font-semibold bg-primary-ts_blue text-white py-1 px-4 sm:px-8 rounded-2xl' : 'font-semibold text-sm sm:text-lg py-1 px-4 sm:px-8'}>
                            T20
                        </button>
                    </div>

                    {/* Sub Tabs */}
                    <div
                        className="tab-header flex justify-center gap-x-2 sm:gap-x-4 bg-primary-Tab_color w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                        <button onClick={() => handleSubTabChange('Batsmen')}
                                className={activeSubTab === 'Batsmen' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}>
                            Batsmen
                        </button>
                        <button onClick={() => handleSubTabChange('Bowler')}
                                className={activeSubTab === 'Bowler' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}>
                            Bowler
                        </button>
                        <button onClick={() => handleSubTabChange('WicketKeeper')}
                                className={activeSubTab === 'WicketKeeper' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}>
                            WicketKeeper
                        </button>
                    </div>

                    {/* Content based on selected tabs */}

                    {activeMainTab === 'ODI' && <p>Test Batsmen Content</p>}
                    {activeMainTab === 'Test' && (
                        <div>
                            {activeSubTab === 'Batsmen' && <p>Test Batsmen Content</p>}
                            {activeSubTab === 'Bowler' && <p>Test Bowler Content</p>}
                            {activeSubTab === 'WicketKeeper' && <p>Test Wicket Keeper Content</p>}
                        </div>
                    )}
                    {activeMainTab === 'T20' && (
                        <div>
                            {activeSubTab === 'Batsmen' && <p>T20 Batsmen Content</p>}
                            {activeSubTab === 'Bowler' && <p>T20 Bowler Content</p>}
                            {activeSubTab === 'WicketKeeper' && <p>T20 Wicket Keeper Content</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default AddNewPlayersStats

