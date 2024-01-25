import React, {useState} from 'react';

function AddNewPlayersStats() {
    // State for form fields
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
    };

    return (
        <div className="font-poppins">
            <div className="md:container px-8 ">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div
                        className="bg-primary-ts_purple grid grid-cols-2 gap-20 my-12 lg:w-full rounded-lg px-16 py-24">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="matches" className="block text-sm font-bold text-ts_blue">
                                    Matches:
                                </label>
                                <input
                                    type="text"
                                    id="matches"
                                    value={matches}
                                    onChange={(e) => setMatches(e.target.value)}
                                    required
                                    className="lg:w-3/4  mt-1 p-1 w-full border rounded-3xl shadow-md ps-10 mb-3"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="innings" className="block text-sm font-bold text-ts_blue mt-4">
                                    Innings:
                                </label>
                                <input
                                    type="text"
                                    id="innings"
                                    value={innings}
                                    onChange={(e) => setInnings(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="highestScore" className="block text-sm font-bold text-ts_blue mt-4">
                                    Highest Score:
                                </label>
                                <input
                                    type="text"
                                    id="highestScore"
                                    value={highestScore}
                                    onChange={(e) => setHighestScore(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="ballsFaced" className="block text-sm font-bold text-ts_blue mt-4">
                                    Balls Faced:
                                </label>
                                <input
                                    type="text"
                                    id="ballsFaced"
                                    value={ballsFaced}
                                    onChange={(e) => setBallsFaced(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="hundreds" className="block text-sm font-bold text-ts_blue mt-4">
                                    Hundreds:
                                </label>
                                <input
                                    type="text"
                                    id="hundreds"
                                    value={hundreds}
                                    onChange={(e) => setHundreds(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="sixes" className="block text-sm font-bold text-ts_blue mt-4">
                                    Sixes:
                                </label>
                                <input
                                    type="text"
                                    id="sixes"
                                    value={sixes}
                                    onChange={(e) => setSixes(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>

                        </div>

                        {/* Right Column */}
                        <div>

                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="runs" className="block text-sm font-bold text-ts_blue">
                                    runs :
                                </label>
                                <input
                                    type="text"
                                    id="runs"
                                    value={runs}
                                    onChange={(e) => setRuns(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="notOuts" className="block text-sm font-bold text-ts_blue mt-4">
                                    Not Outs:
                                </label>
                                <input
                                    type="text"
                                    id="notOuts"
                                    value={notOuts}
                                    onChange={(e) => setNotOuts(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="average" className="block text-sm font-bold text-ts_blue mt-4">
                                    Average:
                                </label>
                                <input
                                    type="text"
                                    id="average"
                                    value={average}
                                    onChange={(e) => setAverage(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="strikeRate" className="block text-sm font-bold text-ts_blue mt-4">
                                    StrikeRate:
                                </label>
                                <input
                                    type="text"
                                    id="strikeRate"
                                    value={strikeRate}
                                    onChange={(e) => setStrikeRate(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fifties" className="block text-sm font-bold text-ts_blue mt-4">
                                    Fifties:
                                </label>
                                <input
                                    type="text"
                                    id="fifties"
                                    value={fifties}
                                    onChange={(e) => setFifties(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                            <div className="mb-4 flex items-center justify-between">
                                <label htmlFor="fours" className="block text-sm font-bold text-ts_blue mt-4">
                                    Fours:
                                </label>
                                <input
                                    type="text"
                                    id="fours"
                                    value={fours}
                                    onChange={(e) => setFours(e.target.value)}
                                    required
                                    className="lg:w-3/4 md:w-96 mt-1 p-1 w-full border rounded-3xl shadow-md"
                                /></div>
                        </div>

                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-3xl mt-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewPlayersStats
