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


        // Log the data to the console
        console.log({
            matches,
            innings,
            highestScore,
            ballsFaced,
            hundreds,
            sixes,
            runs,
            notOuts,
            average,
            strikeRate,
            fifties,
            fours,
            Overs,
            BBI,
            Econ,
            FourWickets,
            FiveWickets,
            Wickets,
            Stumps,
            Catches,
        });

        // You may want to reset the form fields after submission
        // Uncomment the following lines if needed
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
                <div
                    className="tab-header flex justify-center gap-x-4 bg-primary-Tab_color w-fit mx-auto mt-8 py-1 px-2 rounded-3xl">
                    <button
                        onClick={() => handleTabChange(1)}
                        className={activeTab === 1 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}
                    >
                        Batsman
                    </button>
                    <button
                        onClick={() => handleTabChange(2)}
                        className={activeTab === 2 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}
                    >
                        Bowler
                    </button>
                    <button
                        onClick={() => handleTabChange(3)}
                        className={activeTab === 3 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}
                    >
                        Wicket Keeper
                    </button>
                </div>
                <div className="tab-content my-8 bg-primary-ts_purple">
                    {/*Display text fields for the combination of Test format and Batsman type*/}
                    {activeTab === 1 && sectionName === "Test" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    6s:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>

                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                    Runs:
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    50s:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4s:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>
                    </div>}

                    {/*Display text fields for the combination of Test format and Bowler type*/}
                    {activeTab === 2 && sectionName === "Test" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Wickets"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Wickets :
                                </label>
                                <input
                                    type="text"
                                    id="Wickets"
                                    value={Wickets}
                                    onChange={(e) => setWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Overs"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Overs :
                                </label>
                                <input
                                    type="text"
                                    id="Overs"
                                    value={Overs}
                                    onChange={(e) => setOvers(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Runs :
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="BBI" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    BBI:
                                </label>
                                <input
                                    type="text"
                                    id="BBI"
                                    value={BBI}
                                    onChange={(e) => setBBI(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Econ" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Econ:
                                </label>
                                <input
                                    type="text"
                                    id="Econ"
                                    value={Econ}
                                    onChange={(e) => setEcon(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="FourWickets" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4Ws :
                                </label>
                                <input
                                    type="text"
                                    id="FourWickets"
                                    value={FourWickets}
                                    onChange={(e) => setFourWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="FiveWickets" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    5Ws :
                                </label>
                                <input
                                    type="text"
                                    id="FiveWickets"
                                    value={FiveWickets}
                                    onChange={(e) => setFiveWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>
                    </div>}

                    {/*Display text fields for the combination of Test format and Wicket Keeper type.*/}
                    {activeTab === 3 && sectionName === "Test" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    6s:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Catches" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Catches :
                                </label>
                                <input
                                    type="text"
                                    id="Catches"
                                    value={Catches}
                                    onChange={(e) => setCatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>


                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                    Runs:
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    50s:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4s:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                />
                            </div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Stumps" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Stumps :
                                </label>
                                <input
                                    type="text"
                                    id="Stumps"
                                    value={Stumps}
                                    onChange={(e) => setStumps(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                />
                            </div>
                        </div>
                    </div>}
                    {/*Display text fields for the combination of T20 format and Batsman type.*/}
                    {activeTab === 1 && sectionName === "T20" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    6s:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>

                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                    Runs:
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    50s:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4s:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>


                    </div>}
                    {/*Display text fields for the combination of T20 format and Bowler type.*/}
                    {activeTab === 2 && sectionName === "T20" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Wickets"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Wickets :
                                </label>
                                <input
                                    type="text"
                                    id="Wickets"
                                    value={Wickets}
                                    onChange={(e) => setWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Overs"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Overs :
                                </label>
                                <input
                                    type="text"
                                    id="Overs"
                                    value={Overs}
                                    onChange={(e) => setOvers(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Runs :
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="BBI" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    BBI:
                                </label>
                                <input
                                    type="text"
                                    id="BBI"
                                    value={BBI}
                                    onChange={(e) => setBBI(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Econ" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Econ:
                                </label>
                                <input
                                    type="text"
                                    id="Econ"
                                    value={Econ}
                                    onChange={(e) => setEcon(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="FourWickets" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4Ws :
                                </label>
                                <input
                                    type="text"
                                    id="FourWickets"
                                    value={FourWickets}
                                    onChange={(e) => setFourWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="FiveWickets" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    5Ws :
                                </label>
                                <input
                                    type="text"
                                    id="FiveWickets"
                                    value={FiveWickets}
                                    onChange={(e) => setFiveWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>
                    </div>}
                    {/*Display text fields for the combination of T20 format and Wicket Keeper type.*/}
                    {activeTab === 3 && sectionName === "T20" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    6s:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Catches" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Catches :
                                </label>
                                <input
                                    type="text"
                                    id="Catches"
                                    value={Catches}
                                    onChange={(e) => setCatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>


                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                    Runs:
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    50s:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4s:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                />
                            </div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Stumps" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Stumps :
                                </label>
                                <input
                                    type="text"
                                    id="Stumps"
                                    value={Stumps}
                                    onChange={(e) => setStumps(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                />
                            </div>
                        </div>
                    </div>}
                    {/*Display text fields for the combination of ODI format and Batsman type.*/}
                    {activeTab === 1 && sectionName === "ODI" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    6s:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>

                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                    Runs:
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    50s:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4s:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>


                    </div>}
                    {/*Display text fields for the combination of ODI format and Bowler type.*/}
                    {activeTab === 2 && sectionName === "ODI" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Wickets"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Wickets :
                                </label>
                                <input
                                    type="text"
                                    id="Wickets"
                                    value={Wickets}
                                    onChange={(e) => setWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Overs"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Overs :
                                </label>
                                <input
                                    type="text"
                                    id="Overs"
                                    value={Overs}
                                    onChange={(e) => setOvers(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs"
                                       className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Runs :
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="BBI" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    BBI:
                                </label>
                                <input
                                    type="text"
                                    id="BBI"
                                    value={BBI}
                                    onChange={(e) => setBBI(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Econ" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Econ:
                                </label>
                                <input
                                    type="text"
                                    id="Econ"
                                    value={Econ}
                                    onChange={(e) => setEcon(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="FourWickets" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4Ws :
                                </label>
                                <input
                                    type="text"
                                    id="FourWickets"
                                    value={FourWickets}
                                    onChange={(e) => setFourWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="FiveWickets" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    5Ws :
                                </label>
                                <input
                                    type="text"
                                    id="FiveWickets"
                                    value={FiveWickets}
                                    onChange={(e) => setFiveWickets(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                        </div>
                    </div>}
                    {/*Display text fields for the combination of ODI format and Wicket Keeper type.*/}
                    {activeTab === 3 && sectionName === "ODI" && <div className="grid grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-md font-bold mb-5 text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full text-2 border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md  "
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md "
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    6s:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Catches" className="block text-md font-bold text-ts_blue mb-5 mt-4">
                                    Catches :
                                </label>
                                <input
                                    type="text"
                                    id="Catches"
                                    value={Catches}
                                    onChange={(e) => setCatches(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>


                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-md font-bold text-ts_blue mb-5">
                                    Runs:
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
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
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    50s:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    4s:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                />
                            </div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="Stumps" className="block text-md font-bold text-ts_blue mt-4 mb-5">
                                    Stumps :
                                </label>
                                <input
                                    type="text"
                                    id="Stumps"
                                    value={Stumps}
                                    onChange={(e) => setStumps(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full  border-2 border-primary-ts_blue rounded-3xl mb-5 shadow-md"
                                />
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    };

    return (
        <div className="font-poppins">
            <div className="md:container px-8 ">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="bg-primary-ts_purple my-12 lg:w-full rounded-lg px-16 py-24">
                        <div>
                            <div
                                className="section-header flex justify-center gap-x-4 bg-primary-Tab_color w-fit mx-auto mt-8 py-1 px-2 rounded-3xl">
                                <button
                                    onClick={() => handleSectionChange(1)}
                                    className={activeSection === 1 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}
                                >
                                    Test
                                </button>
                                <button
                                    onClick={() => handleSectionChange(2)}
                                    className={activeSection === 2 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}
                                >
                                    T20
                                </button>
                                <button
                                    onClick={() => handleSectionChange(3)}
                                    className={activeSection === 3 ? 'active text-lg font-semibold bg-primary-ts_blue text-white py-1 px-8 rounded-2xl' : 'font-semibold text-lg py-1 px-8'}
                                >
                                    ODI
                                </button>

                            </div>

                            {activeSection === 1 && <TabSection sectionName="Test"/>}
                            {activeSection === 2 && <TabSection sectionName="T20"/>}
                            {activeSection === 3 && <TabSection sectionName="ODI"/>}
                        </div>
                        <button type="submit"
                                className="bg-primary-yellow lg:w-44 text-primary-ts_blue p-2 font-medium  border-2 border-primary-ts_blue rounded-3xl mt-10 shadow-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewPlayersStats
