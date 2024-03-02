import {useState} from 'react'

function CRUDAddNewPlayerStats() {
    // State for Tab Change
    const [activeMainTab, setActiveMainTab] = useState('Test');
    const [activeSubTab, setActiveSubTab] = useState('Batting');

    // Function to handle Tab Change
    const handleMainTabChange = (mainTab) => {
        setActiveMainTab(mainTab);
        setActiveSubTab('Batting');
    };

    const handleSubTabChange = (subTab) => {
        setActiveSubTab(subTab);
    };

    // State for Form Values
    const [formValues, setFormValues] = useState({
        test_batting_matches: '',
        test_batting_runs: '',
        test_batting_innings: '',
        test_batting_not_outs: '',
        test_batting_highest_score: '',
        test_batting_average: '',
        test_batting_balls_faced: '',
        test_batting_strike_rate: '',
        test_batting_centuries: '',
        test_batting_fifties: '',
        test_batting_fours: '',
        test_batting_sixes: '',
        odi_batting_matches: '',
        odi_batting_runs: '',
        odi_batting_innings: '',
        odi_batting_not_outs: '',
        odi_batting_highest_score: '',
        odi_batting_average: '',
        odi_batting_balls_faced: '',
        odi_batting_strike_rate: '',
        odi_batting_centuries: '',
        odi_batting_fifties: '',
        odi_batting_fours: '',
        odi_batting_sixes: '',
        t20_batting_matches: '',
        t20_batting_runs: '',
        t20_batting_innings: '',
        t20_batting_not_outs: '',
        t20_batting_highest_score: '',
        t20_batting_average: '',
        t20_batting_balls_faced: '',
        t20_batting_strike_rate: '',
        t20_batting_centuries: '',
        t20_batting_fifties: '',
        t20_batting_fours: '',
        t20_batting_sixes: '',
        test_bowling_matches: '',
        test_bowling_wickets: '',
        test_bowling_innings: '',
        test_bowling_overs: '',
        test_bowling_runs: '',
        test_bowling_bbi: '',
        test_bowling_average: '',
        test_bowling_econ: '',
        test_bowling_strike_rate: '',
        test_bowling_four_wickets: '',
        test_bowling_five_wickets: '',
        odi_bowling_matches: '',
        odi_bowling_wickets: '',
        odi_bowling_innings: '',
        odi_bowling_overs: '',
        odi_bowling_runs: '',
        odi_bowling_bbi: '',
        odi_bowling_average: '',
        odi_bowling_econ: '',
        odi_bowling_strike_rate: '',
        odi_bowling_four_wickets: '',
        odi_bowling_five_wickets: '',
        t20_bowling_matches: '',
        t20_bowling_wickets: '',
        t20_bowling_innings: '',
        t20_bowling_overs: '',
        t20_bowling_runs: '',
        t20_bowling_bbi: '',
        t20_bowling_average: '',
        t20_bowling_econ: '',
        t20_bowling_strike_rate: '',
        t20_bowling_four_wickets: '',
        t20_bowling_five_wickets: '',
        test_wicketkeeping_matches: '',
        test_wicketkeeping_innings: '',
        test_wicketkeeping_catches: '',
        test_wicketkeeping_stumping: '',
        odi_wicketkeeping_matches: '',
        odi_wicketkeeping_innings: '',
        odi_wicketkeeping_catches: '',
        odi_wicketkeeping_stumping: '',
        t20_wicketkeeping_matches: '',
        t20_wicketkeeping_innings: '',
        t20_wicketkeeping_catches: '',
        t20_wicketkeeping_stumping: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="font-poppins">
            <div className="md:container px-2">

                <div className="shadow-xl bg-primary-ts_purple my-12 lg:w-full rounded-lg px-7 lg:px-16 pt-12 py-2">
                    <div
                        className="shadow-outer section-header flex justify-center gap-x-2 sm:gap-x-0 bg-primary-Tab_color w-fit mx-auto mb-5 py-1 px-2 rounded-3xl font-semibold text-sm md:text-md lg:text-base">
                        <button onClick={() => handleMainTabChange('Test')}
                                className={activeMainTab === 'Test' ? 'active font-semibold bg-primary-ts_blue text-white py-1 px-4 sm:px-8 rounded-2xl' : 'font-semibold py-1 px-4 sm:px-8'}>
                            Test
                        </button>
                        <button onClick={() => handleMainTabChange('ODI')}
                                className={activeMainTab === 'ODI' ? 'active font-semibold bg-primary-ts_blue text-white py-1 px-4 sm:px-8 rounded-2xl' : 'font-semibold py-1 px-4 sm:px-8'}>
                            ODI
                        </button>
                        <button onClick={() => handleMainTabChange('T20')}
                                className={activeMainTab === 'T20' ? 'active font-semibold bg-primary-ts_blue text-white py-1 px-4 sm:px-8 rounded-2xl' : 'font-semibold py-1 px-4 sm:px-8'}>
                            T20
                        </button>
                    </div>

                    <div
                        className="shadow-lg tab-header flex justify-center gap-x-2 bg-primary-Tab_color w-fit mx-auto py-1 px-2 rounded-3xl font-semibold text-sm md:text-md lg:text-base">
                        <button onClick={() => handleSubTabChange('Batting')}
                                className={activeSubTab === 'Batting' ? 'active bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'py-1 px-2 sm:px-4 md:px-8'}>
                            Batting
                        </button>
                        <button onClick={() => handleSubTabChange('Bowling')}
                                className={activeSubTab === 'Bowling' ? 'active bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'py-1 px-2 sm:px-4 md:px-8'}>
                            Bowling
                        </button>
                        <button onClick={() => handleSubTabChange('WicketKeeping')}
                                className={activeSubTab === 'WicketKeeping' ? 'active bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'py-1 px-2 sm:px-4 md:px-8'}>
                            WicketKeeping
                        </button>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            {activeMainTab === 'Test' && (
                                <div>
                                    {activeSubTab === 'Batting' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="test_batting_matches"
                                                       value={formValues.test_batting_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                <input type="text" name="test_batting_runs"
                                                       value={formValues.test_batting_runs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="test_batting_innings"
                                                       value={formValues.test_batting_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Not
                                                    Outs:</label>
                                                <input type="text" name="test_batting_not_outs"
                                                       value={formValues.test_batting_not_outs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Highest
                                                    Score:</label>
                                                <input type="text" name="test_batting_highest_score"
                                                       value={formValues.test_batting_highest_score}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                <input type="text" name="test_batting_average"
                                                       value={formValues.test_batting_average}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Balls
                                                    Faced:</label>
                                                <input type="text" name="test_batting_balls_faced"
                                                       value={formValues.test_batting_balls_faced}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                    Rate:</label>
                                                <input type="text" name="test_batting_strike_rate"
                                                       value={formValues.test_batting_strike_rate}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Centuries:</label>
                                                <input type="text" name="test_batting_centuries"
                                                       value={formValues.test_batting_centuries}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fifties:</label>
                                                <input type="text" name="test_batting_fities"
                                                       value={formValues.test_batting_fifties}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fours:</label>
                                                <input type="text" name="test_batting_fours"
                                                       value={formValues.test_batting_fours}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Sixes:</label>
                                                <input type="text" name="test_batting_sixes"
                                                       value={formValues.test_batting_sixes}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                    {activeSubTab === 'Bowling' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="test_bowling_matches"
                                                       value={formValues.test_bowling_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Wickets:</label>
                                                <input type="text" name="test_bowling_wickets"
                                                       value={formValues.test_bowling_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="test_bowling_innings"
                                                       value={formValues.test_bowling_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Overs:</label>
                                                <input type="text" name="test_bowling_overs"
                                                       value={formValues.test_bowling_overs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                <input type="text" name="test_bowling_runs"
                                                       value={formValues.test_bowling_runs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">BBI:</label>
                                                <input type="text" name="test_bowling_bbi"
                                                       value={formValues.test_bowling_bbi}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                <input type="text" name="test_bowling_average"
                                                       value={formValues.test_bowling_average}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Econ:</label>
                                                <input type="text" name="test_bowling_econ"
                                                       value={formValues.test_bowling_econ}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                    Rate:</label>
                                                <input type="text" name="test_bowling_strike_rate"
                                                       value={formValues.test_bowling_strike_rate}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Four
                                                    Wickets:</label>
                                                <input type="text" name="test_bowling_four_wickets"
                                                       value={formValues.test_bowling_four_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Five
                                                    Wickets:</label>
                                                <input type="text" name="test_bowling_five_wickets"
                                                       value={formValues.test_bowling_five_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                    {activeSubTab === 'WicketKeeping' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="test_wicketkeeping_matches"
                                                       value={formValues.test_wicketkeeping_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="test_wicketkeeping_innings"
                                                       value={formValues.test_wicketkeeping_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Catches:</label>
                                                <input type="text" name="test_wicketkeeping_catches"
                                                       value={formValues.test_wicketkeeping_catches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Stumping:</label>
                                                <input type="text" name="test_wicketkeeping_stumping"
                                                       value={formValues.test_wicketkeeping_stumping}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                            {activeMainTab === 'ODI' && (
                                <div>
                                    {activeSubTab === 'Batting' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="odi_batting_matches"
                                                       value={formValues.odi_batting_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                <input type="text" name="odi_batting_runs"
                                                       value={formValues.odi_batting_runs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="odi_batting_innings"
                                                       value={formValues.odi_batting_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Not
                                                    Outs:</label>
                                                <input type="text" name="odi_batting_not_outs"
                                                       value={formValues.odi_batting_not_outs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Highest
                                                    Score:</label>
                                                <input type="text" name="odi_batting_highest_score"
                                                       value={formValues.odi_batting_highest_score}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                <input type="text" name="odi_batting_average"
                                                       value={formValues.odi_batting_average}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Balls
                                                    Faced:</label>
                                                <input type="text" name="odi_batting_balls_faced"
                                                       value={formValues.odi_batting_balls_faced}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                    Rate:</label>
                                                <input type="text" name="odi_batting_strike_rate"
                                                       value={formValues.odi_batting_strike_rate}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Centuries:</label>
                                                <input type="text" name="odi_batting_centuries"
                                                       value={formValues.odi_batting_centuries}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fifties:</label>
                                                <input type="text" name="odi_batting_fities"
                                                       value={formValues.odi_batting_fifties}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fours:</label>
                                                <input type="text" name="odi_batting_fours"
                                                       value={formValues.odi_batting_fours}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Sixes:</label>
                                                <input type="text" name="odi_batting_sixes"
                                                       value={formValues.odi_batting_sixes}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                    {activeSubTab === 'Bowling' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="odi_bowling_matches"
                                                       value={formValues.odi_bowling_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Wickets:</label>
                                                <input type="text" name="odi_bowling_wickets"
                                                       value={formValues.odi_bowling_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="odi_bowling_innings"
                                                       value={formValues.odi_bowling_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Overs:</label>
                                                <input type="text" name="odi_bowling_overs"
                                                       value={formValues.odi_bowling_overs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                <input type="text" name="odi_bowling_runs"
                                                       value={formValues.odi_bowling_runs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">BBI:</label>
                                                <input type="text" name="odi_bowling_bbi"
                                                       value={formValues.odi_bowling_bbi}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                <input type="text" name="odi_bowling_average"
                                                       value={formValues.odi_bowling_average}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Econ:</label>
                                                <input type="text" name="odi_bowling_econ"
                                                       value={formValues.odi_bowling_econ}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                    Rate:</label>
                                                <input type="text" name="odi_bowling_strike_rate"
                                                       value={formValues.odi_bowling_strike_rate}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Four
                                                    Wickets:</label>
                                                <input type="text" name="odi_bowling_four_wickets"
                                                       value={formValues.odi_bowling_four_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Five
                                                    Wickets:</label>
                                                <input type="text" name="odi_bowling_five_wickets"
                                                       value={formValues.odi_bowling_five_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                    {activeSubTab === 'WicketKeeping' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="odi_wicketkeeping_matches"
                                                       value={formValues.odi_wicketkeeping_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="odi_wicketkeeping_innings"
                                                       value={formValues.odi_wicketkeeping_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Catches:</label>
                                                <input type="text" name="odi_wicketkeeping_catches"
                                                       value={formValues.odi_wicketkeeping_catches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Stumping:</label>
                                                <input type="text" name="odi_wicketkeeping_stumping"
                                                       value={formValues.odi_wicketkeeping_stumping}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                            {activeMainTab === 'T20' && (
                                <div>
                                    {activeSubTab === 'Batting' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="t20_batting_matches"
                                                       value={formValues.t20_batting_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                <input type="text" name="t20_batting_runs"
                                                       value={formValues.t20_batting_runs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="t20_batting_innings"
                                                       value={formValues.t20_batting_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Not
                                                    Outs:</label>
                                                <input type="text" name="t20_batting_not_outs"
                                                       value={formValues.t20_batting_not_outs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Highest
                                                    Score:</label>
                                                <input type="text" name="t20_batting_highest_score"
                                                       value={formValues.t20_batting_highest_score}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                <input type="text" name="t20_batting_average"
                                                       value={formValues.t20_batting_average}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Balls
                                                    Faced:</label>
                                                <input type="text" name="t20_batting_balls_faced"
                                                       value={formValues.t20_batting_balls_faced}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                    Rate:</label>
                                                <input type="text" name="t20_batting_strike_rate"
                                                       value={formValues.t20_batting_strike_rate}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Centuries:</label>
                                                <input type="text" name="t20_batting_centuries"
                                                       value={formValues.t20_batting_centuries}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fifties:</label>
                                                <input type="text" name="t20_batting_fities"
                                                       value={formValues.t20_batting_fifties}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fours:</label>
                                                <input type="text" name="t20_batting_fours"
                                                       value={formValues.t20_batting_fours}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Sixes:</label>
                                                <input type="text" name="t20_batting_sixes"
                                                       value={formValues.t20_batting_sixes}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                    {activeSubTab === 'Bowling' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="t20_bowling_matches"
                                                       value={formValues.t20_bowling_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Wickets:</label>
                                                <input type="text" name="t20_bowling_wickets"
                                                       value={formValues.t20_bowling_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="t20_bowling_innings"
                                                       value={formValues.t20_bowling_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Overs:</label>
                                                <input type="text" name="t20_bowling_overs"
                                                       value={formValues.t20_bowling_overs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                <input type="text" name="t20_bowling_runs"
                                                       value={formValues.t20_bowling_runs}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">BBI:</label>
                                                <input type="text" name="t20_bowling_bbi"
                                                       value={formValues.t20_bowling_bbi}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                <input type="text" name="t20_bowling_average"
                                                       value={formValues.t20_bowling_average}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Econ:</label>
                                                <input type="text" name="t20_bowling_econ"
                                                       value={formValues.t20_bowling_econ}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                    Rate:</label>
                                                <input type="text" name="t20_bowling_strike_rate"
                                                       value={formValues.t20_bowling_strike_rate}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Four
                                                    Wickets:</label>
                                                <input type="text" name="t20_bowling_four_wickets"
                                                       value={formValues.t20_bowling_four_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Five
                                                    Wickets:</label>
                                                <input type="text" name="t20_bowling_five_wickets"
                                                       value={formValues.t20_bowling_five_wickets}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                    {activeSubTab === 'WicketKeeping' &&
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 my-4 bg-primary-ts_purple rounded-lg mt-12">
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Matches:</label>
                                                <input type="text" name="t20_wicketkeeping_matches"
                                                       value={formValues.t20_wicketkeeping_matches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                <input type="text" name="t20_wicketkeeping_innings"
                                                       value={formValues.t20_wicketkeeping_innings}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Catches:</label>
                                                <input type="text" name="t20_wicketkeeping_catches"
                                                       value={formValues.t20_wicketkeeping_catches}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                            <div className="grid grid-cols-12 items-center gap-x-6">
                                                <label
                                                    className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Stumping:</label>
                                                <input type="text" name="t20_wicketkeeping_stumping"
                                                       value={formValues.t20_wicketkeeping_stumping}
                                                       onChange={handleInputChange}
                                                       className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                            <div className="flex justify-center sm:md:justify-start my-12">
                                <button type="submit"
                                        className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-1 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRUDAddNewPlayerStats

