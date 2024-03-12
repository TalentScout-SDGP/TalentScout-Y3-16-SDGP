import {useState, useContext, useEffect} from 'react'
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import CreatedPlayerModal from "./modals/CreatedPlayerModal.jsx";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// TODO - Add validations for all fields (Regex for BBI)
// TODO - Navigate to the created players profile
// TODO - Prevent navigation before submission (add a check)
function CRUDAddNewPlayerStats() {
    // State for Tab Change
    const [activeMainTab, setActiveMainTab] = useState('Test');
    const [activeSubTab, setActiveSubTab] = useState('Batting');
    const {playerInfo, createdPlayer, createdPlayerStatus, createPlayers} = useContext(ManagePlayersContext);
    const [isVisible, setIsVisible] = useState(false);
    const [isPlayerCreated, setIsPlayerCreated] = useState(false);
    const [createdPlayerId, setCreatedPlayerId] = useState(0);

    // Function to handle Tab Change
    const handleMainTabChange = (mainTab) => {
        setActiveMainTab(mainTab);
        setActiveSubTab('Batting');
    };

    const handleSubTabChange = (subTab) => {
        setActiveSubTab(subTab);
    };

    useEffect(() => {
        if (Object.keys(playerInfo).length !== 0) {
            setIsVisible(true);
        }
        if (createdPlayerStatus === 201) {
            setCreatedPlayerId(createdPlayer.player_id);
            setIsPlayerCreated(true);
        }
    }, [createdPlayerStatus, playerInfo]);


    // BATTING STATS
    const [testBattingStats, setTestBattingStats] = useState({
        format: 'Test',
        matches: 0,
        runs: 0,
        innings: 0,
        no: 0,
        hs: 0,
        avg: 0,
        bf: 0,
        sr: 0,
        centuries: 0,
        fifties: 0,
        fours: 0,
        sixes: 0,
    });

    const [odiBattingStats, setODIBattingStats] = useState({
        format: 'ODI',
        matches: 0,
        runs: 0,
        innings: 0,
        no: 0,
        hs: 0,
        avg: 0,
        bf: 0,
        sr: 0,
        centuries: 0,
        fifties: 0,
        fours: 0,
        sixes: 0,
    });

    const [t20BattingStats, setT20BattingStats] = useState({
        format: 'T20',
        matches: 0,
        runs: 0,
        innings: 0,
        no: 0,
        hs: 0,
        avg: 0,
        bf: 0,
        sr: 0,
        centuries: 0,
        fifties: 0,
        fours: 0,
        sixes: 0,
    });

    // BOWLING STATS
    const [testBowlingStats, setTestBowlingStats] = useState({
        format: 'Test',
        matches: 0,
        wickets: 0,
        innings: 0,
        overs: 0,
        runs: 0,
        bbi: '',
        avg: 0,
        econ: 0,
        sr: 0,
        four_ws: 0,
        five_ws: 0,
    });

    const [odiBowlingStats, setODIBowlingStats] = useState({
        format: 'ODI',
        matches: 0,
        wickets: 0,
        innings: 0,
        overs: 0,
        runs: 0,
        bbi: '',
        avg: 0,
        econ: 0,
        sr: 0,
        four_ws: 0,
        five_ws: 0,
    });

    const [t20BowlingStats, setT20BowlingStats] = useState({
        format: 'T20',
        matches: 0,
        wickets: 0,
        innings: 0,
        overs: 0,
        runs: 0,
        bbi: '',
        avg: 0,
        econ: 0,
        sr: 0,
        four_ws: 0,
        five_ws: 0,
    });

    // WICKETKEEPING STATS
    const [testWicketKeepingStats, setTestWicketKeepingStats] = useState({
        format: 'Test',
        matches: 0,
        innings: 0,
        catches: 0,
        stumping: 0,
    });

    const [odiWicketKeepingStats, setODIWicketKeepingStats] = useState({
        format: 'ODI',
        matches: 0,
        innings: 0,
        catches: 0,
        stumping: 0,
    });

    const [t20WicketKeepingStats, setT20WicketKeepingStats] = useState({
        format: 'T20',
        matches: 0,
        innings: 0,
        catches: 0,
        stumping: 0,
    });

    const handleInputChange = (e, format, category) => {

        if (/^\d*$/.test(e.target.value)) {
            switch (category) {
                case 'Batting':
                    switch (format) {
                        case 'Test':
                            setTestBattingStats({...testBattingStats, [e.target.name]: e.target.value});
                            break;
                        case 'ODI':
                            setODIBattingStats({...odiBattingStats, [e.target.name]: e.target.value});
                            break;
                        case 'T20':
                            setT20BattingStats({...t20BattingStats, [e.target.name]: e.target.value});
                            break;
                        default:
                            break;
                    }
                    break;
                case 'Bowling':
                    switch (format) {
                        case 'Test':
                            setTestBowlingStats({...testBowlingStats, [e.target.name]: e.target.value});
                            break;
                        case 'ODI':
                            setODIBowlingStats({...odiBowlingStats, [e.target.name]: e.target.value});
                            break;
                        case 'T20':
                            setT20BowlingStats({...t20BowlingStats, [e.target.name]: e.target.value});
                            break;
                        default:
                            break;
                    }
                    break;
                case 'WicketKeeping':
                    switch (format) {
                        case 'Test':
                            setTestWicketKeepingStats({...testWicketKeepingStats, [e.target.name]: e.target.value});
                            break;
                        case 'ODI':
                            setODIWicketKeepingStats({...odiWicketKeepingStats, [e.target.name]: e.target.value});
                            break;
                        case 'T20':
                            setT20WicketKeepingStats({...t20WicketKeepingStats, [e.target.name]: e.target.value});
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        } else {
            toast.error('Invalid Input, Please Enter A Valid Number.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkAndPush = (stats, array) => {
            const isNotEmpty = stats.matches > 0;
            if (isNotEmpty) array.push(stats);
        };

        const batting_data = [];
        const bowling_data = [];
        const wicketkeeping_data = [];

        const battingStatsArray = [testBattingStats, odiBattingStats, t20BattingStats];
        const bowlingStatsArray = [testBowlingStats, odiBowlingStats, t20BowlingStats];
        const wicketkeepingStatsArray = [testWicketKeepingStats, odiWicketKeepingStats, t20WicketKeepingStats];

        battingStatsArray.forEach((stats) => checkAndPush(stats, batting_data));
        bowlingStatsArray.forEach((stats) => checkAndPush(stats, bowling_data));
        wicketkeepingStatsArray.forEach((stats) => checkAndPush(stats, wicketkeeping_data));

        const player_info = {
            ...playerInfo,
            batting_data: batting_data,
            bowling_data: bowling_data,
            wicketkeeping_data: wicketkeeping_data,
        };
        createPlayers(player_info);
    };

    if (isVisible && !isPlayerCreated) {
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
                                                    <input type="text" name="matches"
                                                           value={testBattingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                    <input type="text" name="runs"
                                                           value={testBattingStats.runs}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md: p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={testBattingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Not
                                                        Outs:</label>
                                                    <input type="text" name="no"
                                                           value={testBattingStats.no}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Highest
                                                        Score:</label>
                                                    <input type="text" name="hs"
                                                           value={testBattingStats.hs}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                    <input type="text" name="avg"
                                                           value={testBattingStats.avg}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Balls
                                                        Faced:</label>
                                                    <input type="text" name="bf"
                                                           value={testBattingStats.bf}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                        Rate:</label>
                                                    <input type="text" name="sr"
                                                           value={testBattingStats.sr}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Centuries:</label>
                                                    <input type="text" name="centuries"
                                                           value={testBattingStats.centuries}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fifties:</label>
                                                    <input type="text" name="fifties"
                                                           value={testBattingStats.fifties}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fours:</label>
                                                    <input type="text" name="fours"
                                                           value={testBattingStats.fours}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Sixes:</label>
                                                    <input type="text" name="sixes"
                                                           value={testBattingStats.sixes}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Batting')}
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
                                                    <input type="text" name="matches"
                                                           value={testBowlingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Wickets:</label>
                                                    <input type="text" name="wickets"
                                                           value={testBowlingStats.wickets}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={testBowlingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Overs:</label>
                                                    <input type="text" name="overs"
                                                           value={testBowlingStats.overs}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                    <input type="text" name="runs"
                                                           value={testBowlingStats.runs}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">BBI:</label>
                                                    <input type="text" name="bbi"
                                                           value={testBowlingStats.bbi}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                    <input type="text" name="avg"
                                                           value={testBowlingStats.avg}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Econ:</label>
                                                    <input type="text" name="econ"
                                                           value={testBowlingStats.econ}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                        Rate:</label>
                                                    <input type="text" name="sr"
                                                           value={testBowlingStats.sr}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Four
                                                        Wickets:</label>
                                                    <input type="text" name="four_ws"
                                                           value={testBowlingStats.four_ws}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Five
                                                        Wickets:</label>
                                                    <input type="text" name="five_ws"
                                                           value={testBowlingStats.five_ws}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'Bowling')}
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
                                                    <input type="text" name="matches"
                                                           value={testWicketKeepingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={testWicketKeepingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Catches:</label>
                                                    <input type="text" name="catches"
                                                           value={testWicketKeepingStats.catches}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Stumping:</label>
                                                    <input type="text" name="stumping"
                                                           value={testWicketKeepingStats.stumping}
                                                           onChange={(e) => handleInputChange(e, 'Test', 'WicketKeeping')}
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
                                                    <input type="text" name="matches"
                                                           value={odiBattingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                    <input type="text" name="runs"
                                                           value={odiBattingStats.runs}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={odiBattingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Not
                                                        Outs:</label>
                                                    <input type="text" name="no"
                                                           value={odiBattingStats.no}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Highest
                                                        Score:</label>
                                                    <input type="text" name="hs"
                                                           value={odiBattingStats.hs}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                    <input type="text" name="avg"
                                                           value={odiBattingStats.avg}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Balls
                                                        Faced:</label>
                                                    <input type="text" name="bf"
                                                           value={odiBattingStats.bf}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                        Rate:</label>
                                                    <input type="text" name="sr"
                                                           value={odiBattingStats.sr}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Centuries:</label>
                                                    <input type="text" name="centuries"
                                                           value={odiBattingStats.centuries}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fifties:</label>
                                                    <input type="text" name="fifties"
                                                           value={odiBattingStats.fifties}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fours:</label>
                                                    <input type="text" name="fours"
                                                           value={odiBattingStats.fours}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Sixes:</label>
                                                    <input type="text" name="sixes"
                                                           value={odiBattingStats.sixes}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Batting')}
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
                                                    <input type="text" name="matches"
                                                           value={odiBowlingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Wickets:</label>
                                                    <input type="text" name="wickets"
                                                           value={odiBowlingStats.wickets}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={odiBowlingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Overs:</label>
                                                    <input type="text" name="overs"
                                                           value={odiBowlingStats.overs}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                    <input type="text" name="runs"
                                                           value={odiBowlingStats.runs}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">BBI:</label>
                                                    <input type="text" name="bbi"
                                                           value={odiBowlingStats.bbi}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                    <input type="text" name="avg"
                                                           value={odiBowlingStats.avg}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Econ:</label>
                                                    <input type="text" name="econ"
                                                           value={odiBowlingStats.econ}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                        Rate:</label>
                                                    <input type="text" name="sr"
                                                           value={odiBowlingStats.sr}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Four
                                                        Wickets:</label>
                                                    <input type="text" name="four_ws"
                                                           value={odiBowlingStats.four_ws}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Five
                                                        Wickets:</label>
                                                    <input type="text" name="five_ws"
                                                           value={odiBowlingStats.five_ws}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'Bowling')}
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
                                                    <input type="text" name="matches"
                                                           value={odiWicketKeepingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={odiWicketKeepingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Catches:</label>
                                                    <input type="text" name="catches"
                                                           value={odiWicketKeepingStats.catches}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Stumping:</label>
                                                    <input type="text" name="stumping"
                                                           value={odiWicketKeepingStats.stumping}
                                                           onChange={(e) => handleInputChange(e, 'ODI', 'WicketKeeping')}
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
                                                    <input type="text" name="matches"
                                                           value={t20BattingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                    <input type="text" name="runs"
                                                           value={t20BattingStats.runs}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={t20BattingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Not
                                                        Outs:</label>
                                                    <input type="text" name="no"
                                                           value={t20BattingStats.no}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Highest
                                                        Score:</label>
                                                    <input type="text" name="hs"
                                                           value={t20BattingStats.hs}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                    <input type="text" name="avg"
                                                           value={t20BattingStats.avg}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Balls
                                                        Faced:</label>
                                                    <input type="text" name="bf"
                                                           value={t20BattingStats.bf}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                        Rate:</label>
                                                    <input type="text" name="sr"
                                                           value={t20BattingStats.sr}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Centuries:</label>
                                                    <input type="text" name="centuries"
                                                           value={t20BattingStats.centuries}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fifties:</label>
                                                    <input type="text" name="fifties"
                                                           value={t20BattingStats.fifties}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Fours:</label>
                                                    <input type="text" name="fours"
                                                           value={t20BattingStats.fours}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Sixes:</label>
                                                    <input type="text" name="sixes"
                                                           value={t20BattingStats.sixes}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Batting')}
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
                                                    <input type="text" name="matches"
                                                           value={t20BowlingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Wickets:</label>
                                                    <input type="text" name="wickets"
                                                           value={t20BowlingStats.wickets}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={t20BowlingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Overs:</label>
                                                    <input type="text" name="overs"
                                                           value={t20BowlingStats.overs}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Runs:</label>
                                                    <input type="text" name="runs"
                                                           value={t20BowlingStats.runs}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">BBI:</label>
                                                    <input type="text" name="bbi"
                                                           value={t20BowlingStats.bbi}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Average:</label>
                                                    <input type="text" name="avg"
                                                           value={t20BowlingStats.avg}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Econ:</label>
                                                    <input type="text" name="econ"
                                                           value={t20BowlingStats.econ}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Strike
                                                        Rate:</label>
                                                    <input type="text" name="sr"
                                                           value={t20BowlingStats.sr}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Four
                                                        Wickets:</label>
                                                    <input type="text" name="four_ws"
                                                           value={t20BowlingStats.four_ws}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Five
                                                        Wickets:</label>
                                                    <input type="text" name="five_ws"
                                                           value={t20BowlingStats.five_ws}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'Bowling')}
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
                                                    <input type="text" name="matches"
                                                           value={t20WicketKeepingStats.matches}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Innings:</label>
                                                    <input type="text" name="innings"
                                                           value={t20WicketKeepingStats.innings}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Catches:</label>
                                                    <input type="text" name="catches"
                                                           value={t20WicketKeepingStats.catches}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'WicketKeeping')}
                                                           className="col-span-9 w-full md:p-1 border-2 border-black rounded-lg shadow-md"/>
                                                </div>
                                                <div className="grid grid-cols-12 items-center gap-x-6">
                                                    <label
                                                        className="font-semibold col-span-3 text-sm md:text-md lg:text-base">Stumping:</label>
                                                    <input type="text" name="stumping"
                                                           value={t20WicketKeepingStats.stumping}
                                                           onChange={(e) => handleInputChange(e, 'T20', 'WicketKeeping')}
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
    } else if (isPlayerCreated) {
        return (
            <CreatedPlayerModal playerId={createdPlayerId}/>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default CRUDAddNewPlayerStats

