import React, {useState} from 'react';


function AddNewPlayersStats() {

    // State for form fields
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

    // Function to handle form submission
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
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionChange = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };

    const TabSection = ({sectionName}) => {
        const [activeTab, setActiveTab] = useState(1);

        const handleTabChange = (tabNumber) => {
            setActiveTab(tabNumber);
        };
        return (
            <div>
                <div className="md:container my-4 md:my-5 px-2">
                    <div
                        className="tab-header flex justify-center gap-x-2 sm:gap-x-4 bg-primary-Tab_color w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                        <button
                            onClick={() => handleTabChange(1)}
                            className={activeTab === 1 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}
                        >
                            Batsman
                        </button>
                        <button
                            onClick={() => handleTabChange(2)}
                            className={activeTab === 2 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}
                        >
                            Bowler
                        </button>
                        <button
                            onClick={() => handleTabChange(3)}
                            className={activeTab === 3 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}
                        >
                            WicketKeeper
                        </button>
                    </div>

                    <div className="tab-content my-8 bg-primary-ts_purple rounded-lg lg:text-base text-sm">
                        <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                            {/*Display text fields for the combination of Test format and Batsman type*/}
                            {activeTab === 1 && sectionName === "Test" &&
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full p-1 text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="mb-4 lg:pr-5 lg:mr-4">
                                        <div className="mb-4 sm:flex-wrap lg:flex items-center justify-between">
                                            <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                                Runs:
                                            </label>
                                            <input
                                                type="text"
                                                id="runs"
                                                value={runs}
                                                onChange={(e) => setRuns(e.target.value)}
                                                required
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full  p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
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
                                                className="w-full lg:w-3/5 sm:w-full md:w-full p-1 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                            }
                            <button type="submit"
                                    className="bg-primary-yellow lg:w-44 text-primary-ts_blue p-2 font-medium  border-2 border-primary-ts_blue rounded-3xl mt-10 shadow-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="font-poppins">
            <div className="md:container px-8 ">
                <div className="bg-primary-ts_purple my-12 lg:w-full rounded-lg px-5 py-24">
                    <div>
                        <div
                            className="section-header flex justify-center gap-x-2 sm:gap-x-4 bg-primary-Tab_color w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                            <button
                                onClick={() => handleSectionChange(1)}
                                className={activeSection === 1 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}
                            >
                                Test
                            </button>
                            <button
                                onClick={() => handleSectionChange(2)}
                                className={activeSection === 2 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}
                            >
                                T20
                            </button>
                            <button
                                onClick={() => handleSectionChange(3)}
                                className={activeSection === 3 ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'}
                            >
                                ODI
                            </button>
                        </div>


                        {activeSection === 1 && <TabSection sectionName="Test"/>}
                        {activeSection === 2 && <TabSection sectionName="T20"/>}
                        {activeSection === 3 && <TabSection sectionName="ODI"/>}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddNewPlayersStats
