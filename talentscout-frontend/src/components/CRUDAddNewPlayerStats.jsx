import {useState, useContext, useEffect} from 'react'
import ManagePlayersContext from "../context/ManagePlayersContext.jsx";
import CreatedPlayerModal from "./modals/CreatedPlayerModal.jsx";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function CRUDAddNewPlayerStats() {
    // State for Tab Change
    const [activeMainTab, setActiveMainTab] = useState('Test');
    const [activeSubTab, setActiveSubTab] = useState('Batting');
    let {
        playerInfo,
        createdPlayer,
        createdPlayerStatus,
        updatePlayerData,
        createPlayers,
        updatePlayers
    } = useContext(ManagePlayersContext);
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
        if (createdPlayerStatus === 201) {
            setCreatedPlayerId(createdPlayer.player_id);
            setIsPlayerCreated(true);
        }
    }, [createdPlayerStatus, playerInfo]);

    if (Object.keys(updatePlayerData).length === 0) {
        updatePlayerData = null;
    }

    const getBattingStats = (format) => {
        return (updatePlayerData && updatePlayerData.batting_stats) ? updatePlayerData.batting_stats.find(stats => stats.format === format) || {} : {};
    };

    const getBowlingStats = (format) => {
        return (updatePlayerData && updatePlayerData.bowling_stats) ? updatePlayerData.bowling_stats.find(stats => stats.format === format) || {} : {};
    };

    const getWicketKeepingStats = (format) => {
        return (updatePlayerData && updatePlayerData.wicketkeeping_stats) ? updatePlayerData.wicketkeeping_stats.find(stats => stats.format === format) || {} : {};
    };

    // BATTING STATS
    const [testBattingStats, setTestBattingStats] = useState({
        format: 'Test',
        matches: updatePlayerData ? getBattingStats('Test').matches ?? 0 : 0,
        runs: updatePlayerData ? getBattingStats('Test').runs ?? 0 : 0,
        innings: updatePlayerData ? getBattingStats('Test').innings ?? 0 : 0,
        no: updatePlayerData ? getBattingStats('Test').no ?? 0 : 0,
        hs: updatePlayerData ? getBattingStats('Test').hs ?? 0 : 0,
        avg: updatePlayerData ? getBattingStats('Test').avg ?? 0 : 0,
        bf: updatePlayerData ? getBattingStats('Test').bf ?? 0 : 0,
        sr: updatePlayerData ? getBattingStats('Test').sr ?? 0 : 0,
        centuries: updatePlayerData ? getBattingStats('Test').centuries ?? 0 : 0,
        fifties: updatePlayerData ? getBattingStats('Test').fifties ?? 0 : 0,
        fours: updatePlayerData ? getBattingStats('Test').fours ?? 0 : 0,
        sixes: updatePlayerData ? getBattingStats('Test').sixes ?? 0 : 0,
    });

    const [odiBattingStats, setODIBattingStats] = useState({
        format: 'ODI',
        matches: updatePlayerData ? getBattingStats('ODI').matches ?? 0 : 0,
        runs: updatePlayerData ? getBattingStats('ODI').runs ?? 0 : 0,
        innings: updatePlayerData ? getBattingStats('ODI').innings ?? 0 : 0,
        no: updatePlayerData ? getBattingStats('ODI').no ?? 0 : 0,
        hs: updatePlayerData ? getBattingStats('ODI').hs ?? 0 : 0,
        avg: updatePlayerData ? getBattingStats('ODI').avg ?? 0 : 0,
        bf: updatePlayerData ? getBattingStats('ODI').bf ?? 0 : 0,
        sr: updatePlayerData ? getBattingStats('ODI').sr ?? 0 : 0,
        centuries: updatePlayerData ? getBattingStats('ODI').centuries ?? 0 : 0,
        fifties: updatePlayerData ? getBattingStats('ODI').fifties ?? 0 : 0,
        fours: updatePlayerData ? getBattingStats('ODI').fours ?? 0 : 0,
        sixes: updatePlayerData ? getBattingStats('ODI').sixes ?? 0 : 0,
    });

    const [t20BattingStats, setT20BattingStats] = useState({
        format: 'T20',
        matches: updatePlayerData ? getBattingStats('T20').matches ?? 0 : 0,
        runs: updatePlayerData ? getBattingStats('T20').runs ?? 0 : 0,
        innings: updatePlayerData ? getBattingStats('T20').innings ?? 0 : 0,
        no: updatePlayerData ? getBattingStats('T20').no ?? 0 : 0,
        hs: updatePlayerData ? getBattingStats('T20').hs ?? 0 : 0,
        avg: updatePlayerData ? getBattingStats('T20').avg ?? 0 : 0,
        bf: updatePlayerData ? getBattingStats('T20').bf ?? 0 : 0,
        sr: updatePlayerData ? getBattingStats('T20').sr ?? 0 : 0,
        centuries: updatePlayerData ? getBattingStats('T20').centuries ?? 0 : 0,
        fifties: updatePlayerData ? getBattingStats('T20').fifties ?? 0 : 0,
        fours: updatePlayerData ? getBattingStats('T20').fours ?? 0 : 0,
        sixes: updatePlayerData ? getBattingStats('T20').sixes ?? 0 : 0,
    });

    // BOWLING STATS
    const [testBowlingStats, setTestBowlingStats] = useState({
        format: 'Test',
        matches: updatePlayerData ? getBowlingStats('Test').matches ?? 0 : 0,
        wickets: updatePlayerData ? getBowlingStats('Test').wickets ?? 0 : 0,
        innings: updatePlayerData ? getBowlingStats('Test').innings ?? 0 : 0,
        overs: updatePlayerData ? getBowlingStats('Test').overs ?? 0 : 0,
        runs: updatePlayerData ? getBowlingStats('Test').runs ?? 0 : 0,
        bbi: updatePlayerData ? getBowlingStats('Test').bbi ?? '' : '',
        avg: updatePlayerData ? getBowlingStats('Test').avg ?? 0 : 0,
        econ: updatePlayerData ? getBowlingStats('Test').econ ?? 0 : 0,
        sr: updatePlayerData ? getBowlingStats('Test').sr ?? 0 : 0,
        four_ws: updatePlayerData ? getBowlingStats('Test').four_ws ?? 0 : 0,
        five_ws: updatePlayerData ? getBowlingStats('Test').five_ws ?? 0 : 0,
    });

    const [odiBowlingStats, setODIBowlingStats] = useState({
        format: 'ODI',
        matches: updatePlayerData ? getBowlingStats('ODI').matches ?? 0 : 0,
        wickets: updatePlayerData ? getBowlingStats('ODI').wickets ?? 0 : 0,
        innings: updatePlayerData ? getBowlingStats('ODI').innings ?? 0 : 0,
        overs: updatePlayerData ? getBowlingStats('ODI').overs ?? 0 : 0,
        runs: updatePlayerData ? getBowlingStats('ODI').runs ?? 0 : 0,
        bbi: updatePlayerData ? getBowlingStats('ODI').bbi ?? '' : '',
        avg: updatePlayerData ? getBowlingStats('ODI').avg ?? 0 : 0,
        econ: updatePlayerData ? getBowlingStats('ODI').econ ?? 0 : 0,
        sr: updatePlayerData ? getBowlingStats('ODI').sr ?? 0 : 0,
        four_ws: updatePlayerData ? getBowlingStats('ODI').four_ws ?? 0 : 0,
        five_ws: updatePlayerData ? getBowlingStats('ODI').five_ws ?? 0 : 0,
    });

    const [t20BowlingStats, setT20BowlingStats] = useState({
        format: 'T20',
        matches: updatePlayerData ? getBowlingStats('T20').matches ?? 0 : 0,
        wickets: updatePlayerData ? getBowlingStats('T20').wickets ?? 0 : 0,
        innings: updatePlayerData ? getBowlingStats('T20').innings ?? 0 : 0,
        overs: updatePlayerData ? getBowlingStats('T20').overs ?? 0 : 0,
        runs: updatePlayerData ? getBowlingStats('T20').runs ?? 0 : 0,
        bbi: updatePlayerData ? getBowlingStats('T20').bbi ?? '' : '',
        avg: updatePlayerData ? getBowlingStats('T20').avg ?? 0 : 0,
        econ: updatePlayerData ? getBowlingStats('T20').econ ?? 0 : 0,
        sr: updatePlayerData ? getBowlingStats('T20').sr ?? 0 : 0,
        four_ws: updatePlayerData ? getBowlingStats('T20').four_ws ?? 0 : 0,
        five_ws: updatePlayerData ? getBowlingStats('T20').five_ws ?? 0 : 0,
    });

    // WICKETKEEPING STATS
    const [testWicketKeepingStats, setTestWicketKeepingStats] = useState({
        format: 'Test',
        matches: updatePlayerData ? getWicketKeepingStats('Test').matches ?? 0 : 0,
        innings: updatePlayerData ? getWicketKeepingStats('Test').innings ?? 0 : 0,
        catches: updatePlayerData ? getWicketKeepingStats('Test').catches ?? 0 : 0,
        stumping: updatePlayerData ? getWicketKeepingStats('Test').stumping ?? 0 : 0,
    });

    const [odiWicketKeepingStats, setODIWicketKeepingStats] = useState({
        format: 'ODI',
        matches: updatePlayerData ? getWicketKeepingStats('ODI').matches ?? 0 : 0,
        innings: updatePlayerData ? getWicketKeepingStats('ODI').innings ?? 0 : 0,
        catches: updatePlayerData ? getWicketKeepingStats('ODI').catches ?? 0 : 0,
        stumping: updatePlayerData ? getWicketKeepingStats('ODI').stumping ?? 0 : 0,
    });

    const [t20WicketKeepingStats, setT20WicketKeepingStats] = useState({
        format: 'T20',
        matches: updatePlayerData ? getWicketKeepingStats('T20').matches ?? 0 : 0,
        innings: updatePlayerData ? getWicketKeepingStats('T20').innings ?? 0 : 0,
        catches: updatePlayerData ? getWicketKeepingStats('T20').catches ?? 0 : 0,
        stumping: updatePlayerData ? getWicketKeepingStats('T20').stumping ?? 0 : 0,
    });


    const handleInputChange = (e, format, category) => {
        if (/^[\d\/]*$/.test(e.target.value)) {
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

        if (testBowlingStats) {
            if (testBowlingStats.bbi) {
                if (!/^\d+\/\d+$/.test(testBowlingStats.bbi)) {
                    toast.error('Invalid BBI Format, Please enter BBI in following format (Runs/Wicket) Ex:40/2.');
                    return;
                }
            }
        }
        if (odiBowlingStats) {
            if (odiBowlingStats.bbi) {
                if (!/^\d+\/\d+$/.test(odiBowlingStats.bbi)) {
                    toast.error('Invalid BBI Format, Please enter BBI in following format (Runs/Wicket) Ex:40/2.');
                    return;
                }
            }
        }
        if (t20BowlingStats) {
            if (t20BowlingStats.bbi) {
                if (!/^\d+\/\d+$/.test(t20BowlingStats.bbi)) {
                    toast.error('Invalid BBI Format, Please enter BBI in following format (Runs/Wicket) Ex:40/2.');
                    return;
                }
            }
        }
        if (Object.keys(playerInfo).length === 0) {
            toast.error('Please enter & submit player information first.');
            return;
        }

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

        if (Object.keys(updatePlayerData).length > 0) {
            updatePlayers(player_info, updatePlayerData.player.player_id);
        } else {
            createPlayers(player_info);
        }
    };

    if (!isPlayerCreated) {
        return (
            <div className="font-poppins">
                <div className="md:container px-2">
                    <div
                        className="shadow-outer bg-primary-ts_purple my-12 lg:w-full rounded-lg px-7 lg:px-16 pt-12 py-2">
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
    }
}

export default CRUDAddNewPlayerStats

