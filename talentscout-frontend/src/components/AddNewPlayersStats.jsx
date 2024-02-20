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
    const [activeSubTab, setActiveSubTab] = useState('Batsman');

    const handleMainTabChange = (mainTab) => {
        setActiveMainTab(mainTab);
        // Set the default subtab when the main tab changes
        setActiveSubTab('Batsman');
    };

    const handleSubTabChange = (subTab) => {
        setActiveSubTab(subTab);
    };
    return (
        <div className="font-poppins">
            <div className="md:container px-2">

                <div className="shadow-outer bg-primary-ts_purple my-12 lg:w-full rounded-lg px-7 lg:px-16 pt-12 py-2">
                    {/* Main Tabs */}
                    <div
                        className="shadow-outer section-header flex justify-center gap-x-2 sm:gap-x-0 bg-primary-Tab_color w-fit mx-auto mb-5 py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
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
                        className="shadow-outer tab-header flex justify-center gap-x-2 sm:gap-x- bg-primary-Tab_color w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                        <button onClick={() => handleSubTabChange('Batsman')}
                                className={activeSubTab === 'Batsman' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}>
                            Batsman
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

                    {activeMainTab === 'ODI' && (
                        <div>
                            {activeSubTab === 'Batsman' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            {/* Left Column */}
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-1">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4  ">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-1">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="highestScore"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        Highest Score:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="highestScore"
                                                        value={highestScore}
                                                        onChange={(e) => setHighestScore(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="ballsFaced"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        Balls Faced:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ballsFaced"
                                                        value={ballsFaced}
                                                        onChange={(e) => setBallsFaced(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="hundreds"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        100s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hundreds"
                                                        value={hundreds}
                                                        onChange={(e) => setHundreds(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="sixes"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        6s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="sixes"
                                                        value={sixes}
                                                        onChange={(e) => setSixes(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold text-ts_blue mb-5">
                                                        Runs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="notOuts"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        Not Outs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="notOuts"
                                                        value={notOuts}
                                                        onChange={(e) => setNotOuts(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fifties"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        50s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fifties"
                                                        value={fifties}
                                                        onChange={(e) => setFifties(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fours"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        4s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fours"
                                                        value={fours}
                                                        onChange={(e) => setFours(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>


                            }

                            {activeSubTab === 'Bowler' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-1">
                                                        Matches:</label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4  ">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Wickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Wickets :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Wickets"
                                                        value={Wickets}
                                                        onChange={(e) => setWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Overs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Overs :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Overs"
                                                        value={Overs}
                                                        onChange={(e) => setOvers(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="BBI"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        BBI:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="BBI"
                                                        value={BBI}
                                                        onChange={(e) => setBBI(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            {/* Right Column */}
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Econ"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Econ:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Econ"
                                                        value={Econ}
                                                        onChange={(e) => setEcon(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="FourWickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4Ws :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="FourWickets"
                                                        value={FourWickets}
                                                        onChange={(e) => setFourWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="FiveWickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        5Ws :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="FiveWickets"
                                                        value={FiveWickets}
                                                        onChange={(e) => setFiveWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            }
                            {activeSubTab === 'WicketKeeper' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            {/* Left Column */}
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-1">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4  ">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-1">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="highestScore"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        Highest Score:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="highestScore"
                                                        value={highestScore}
                                                        onChange={(e) => setHighestScore(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="ballsFaced"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        Balls Faced:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ballsFaced"
                                                        value={ballsFaced}
                                                        onChange={(e) => setBallsFaced(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label
                                                        htmlFor="hundreds"
                                                        className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        100s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hundreds"
                                                        value={hundreds}
                                                        onChange={(e) => setHundreds(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label
                                                        htmlFor="sixes"
                                                        className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        6s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="sixes"
                                                        value={sixes}
                                                        onChange={(e) => setSixes(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label
                                                        htmlFor="Catches"
                                                        className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Catches :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Catches"
                                                        value={Catches}
                                                        onChange={(e) => setCatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            {/* Right Column */}


                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="notOuts"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Not Outs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="notOuts"
                                                        value={notOuts}
                                                        onChange={(e) => setNotOuts(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue mt-4">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fifties"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        50s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fifties"
                                                        value={fifties}
                                                        onChange={(e) => setFifties(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fours"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fours"
                                                        value={fours}
                                                        onChange={(e) => setFours(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Stumps"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Stumps :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Stumps"
                                                        value={Stumps}
                                                        onChange={(e) => setStumps(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            }
                        </div>
                    )}
                    {activeMainTab === 'Test' && (
                        <div>
                            {activeSubTab === 'Batsman' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="highestScore"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        Highest Score:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="highestScore"
                                                        value={highestScore}
                                                        onChange={(e) => setHighestScore(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="ballsFaced"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Balls Faced:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ballsFaced"
                                                        value={ballsFaced}
                                                        onChange={(e) => setBallsFaced(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="hundreds"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        100s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hundreds"
                                                        value={hundreds}
                                                        onChange={(e) => setHundreds(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="sixes"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        6s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="sixes"
                                                        value={sixes}
                                                        onChange={(e) => setSixes(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            {/* Right Column */}

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="notOuts"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Not Outs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="notOuts"
                                                        value={notOuts}
                                                        onChange={(e) => setNotOuts(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fifties"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        50s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fifties"
                                                        value={fifties}
                                                        onChange={(e) => setFifties(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fours"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fours"
                                                        value={fours}
                                                        onChange={(e) => setFours(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>}
                            {activeSubTab === 'Bowler' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Wickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Wickets :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Wickets"
                                                        value={Wickets}
                                                        onChange={(e) => setWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Overs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Overs :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Overs"
                                                        value={Overs}
                                                        onChange={(e) => setOvers(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="BBI"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        BBI:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="BBI"
                                                        value={BBI}
                                                        onChange={(e) => setBBI(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            {/* Right Column */}

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Econ"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Econ:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Econ"
                                                        value={Econ}
                                                        onChange={(e) => setEcon(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="FourWickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4Ws :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="FourWickets"
                                                        value={FourWickets}
                                                        onChange={(e) => setFourWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="FiveWickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        5Ws :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="FiveWickets"
                                                        value={FiveWickets}
                                                        onChange={(e) => setFiveWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>}
                            {activeSubTab === 'WicketKeeper' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="highestScore"
                                                           className="block text-md font-bold sm:mr-2 mb-5 text-ts_blue  mt-4">
                                                        Highest Score:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="highestScore"
                                                        value={highestScore}
                                                        onChange={(e) => setHighestScore(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="ballsFaced"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Balls Faced:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ballsFaced"
                                                        value={ballsFaced}
                                                        onChange={(e) => setBallsFaced(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="hundreds"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        100s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hundreds"
                                                        value={hundreds}
                                                        onChange={(e) => setHundreds(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="sixes"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        6s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="sixes"
                                                        value={sixes}
                                                        onChange={(e) => setSixes(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Catches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Catches :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Catches"
                                                        value={Catches}
                                                        onChange={(e) => setCatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            {/* Right Column */}

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="notOuts"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Not Outs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="notOuts"
                                                        value={notOuts}
                                                        onChange={(e) => setNotOuts(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fifties"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        50s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fifties"
                                                        value={fifties}
                                                        onChange={(e) => setFifties(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fours"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fours"
                                                        value={fours}
                                                        onChange={(e) => setFours(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Stumps"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Stumps :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Stumps"
                                                        value={Stumps}
                                                        onChange={(e) => setStumps(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>}
                        </div>

                    )}
                    {activeMainTab === 'T20' && (
                        <div>
                            {activeSubTab === 'Batsman' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="highestScore"
                                                           className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                                        Highest Score:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="highestScore"
                                                        value={highestScore}
                                                        onChange={(e) => setHighestScore(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="ballsFaced"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Balls Faced:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ballsFaced"
                                                        value={ballsFaced}
                                                        onChange={(e) => setBallsFaced(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="hundreds"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        100s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hundreds"
                                                        value={hundreds}
                                                        onChange={(e) => setHundreds(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="sixes"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        6s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="sixes"
                                                        value={sixes}
                                                        onChange={(e) => setSixes(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            {/* Right Column */}

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="notOuts"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Not Outs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="notOuts"
                                                        value={notOuts}
                                                        onChange={(e) => setNotOuts(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fifties"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        50s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fifties"
                                                        value={fifties}
                                                        onChange={(e) => setFifties(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fours"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fours"
                                                        value={fours}
                                                        onChange={(e) => setFours(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start  ">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>}
                            {activeSubTab === 'Bowler' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Wickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Wickets :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Wickets"
                                                        value={Wickets}
                                                        onChange={(e) => setWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Overs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Overs :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Overs"
                                                        value={Overs}
                                                        onChange={(e) => setOvers(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="BBI"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        BBI:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="BBI"
                                                        value={BBI}
                                                        onChange={(e) => setBBI(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            {/* Right Column */}

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Econ"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Econ:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Econ"
                                                        value={Econ}
                                                        onChange={(e) => setEcon(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="FourWickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4Ws :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="FourWickets"
                                                        value={FourWickets}
                                                        onChange={(e) => setFourWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="FiveWickets"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        5Ws :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="FiveWickets"
                                                        value={FiveWickets}
                                                        onChange={(e) => setFiveWickets(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>}
                            {activeSubTab === 'WicketKeeper' &&
                                <div className="tab-content my-4 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                                        <div className="lg:grid lg:grid-cols-2 lg:pt-8 lg:py-4 font-semibold lg:px-8">
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="matches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Matches:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="matches"
                                                        value={matches}
                                                        onChange={(e) => setMatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="innings"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Innings:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="innings"
                                                        value={innings}
                                                        onChange={(e) => setInnings(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="highestScore"
                                                           className="block text-md font-bold sm:mr-2 mb-5 text-ts_blue  mt-4">
                                                        Highest Score:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="highestScore"
                                                        value={highestScore}
                                                        onChange={(e) => setHighestScore(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="ballsFaced"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Balls Faced:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="ballsFaced"
                                                        value={ballsFaced}
                                                        onChange={(e) => setBallsFaced(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="hundreds"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        100s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hundreds"
                                                        value={hundreds}
                                                        onChange={(e) => setHundreds(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="sixes"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        6s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="sixes"
                                                        value={sixes}
                                                        onChange={(e) => setSixes(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Catches"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Catches :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Catches"
                                                        value={Catches}
                                                        onChange={(e) => setCatches(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            {/* Right Column */}

                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="runs"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Runs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="runs"
                                                        value={runs}
                                                        onChange={(e) => setRuns(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="notOuts"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Not Outs:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="notOuts"
                                                        value={notOuts}
                                                        onChange={(e) => setNotOuts(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="average"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Average:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="average"
                                                        value={average}
                                                        onChange={(e) => setAverage(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="strikeRate"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        StrikeRate:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="strikeRate"
                                                        value={strikeRate}
                                                        onChange={(e) => setStrikeRate(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fifties"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        50s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fifties"
                                                        value={fifties}
                                                        onChange={(e) => setFifties(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    /></div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="fours"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        4s:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fours"
                                                        value={fours}
                                                        onChange={(e) => setFours(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 lg:pr-5 lg:mr-4">
                                                <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                                    <label htmlFor="Stumps"
                                                           className="block text-md font-bold sm:mr-5 mb-5 text-ts_blue  mt-4">
                                                        Stumps :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Stumps"
                                                        value={Stumps}
                                                        onChange={(e) => setStumps(e.target.value)}
                                                        required
                                                        className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-lg mb-5 shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center sm:md:justify-start">
                                            <button type="submit"
                                                    className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default AddNewPlayersStats

