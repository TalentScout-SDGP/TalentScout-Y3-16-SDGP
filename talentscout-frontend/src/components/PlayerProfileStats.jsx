import React, {useState} from 'react';

function SizeChart() {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="lg:container text-base font-poppins pb-10 px-8 my-2">
            <div className="bg-primary-ts_purple mlg:grid-cols-1 my-10 shadow-outer rounded-lg px-2 py-2">
                <div className="pl-4 pb-4 pt-4">
                    <div className="font-semibold text-xl pb-2">Match Type: </div>
                    {/* Dropdown */}
                    <select id="size_select" onChange={handleOptionChange} className="font-medium w-28 h-8 text-center border border-black">
                        <option value="option1">T20</option>
                        <option value="option2">ODI</option>
                        <option value="option3">Test</option>
                    </select>
                </div>

                {/* Size chart components */}
                <div id="option1" className="size_chart" style={{display: selectedOption === 'option1' ? 'block' : 'none'}}>
                    {/* Content for option 1 */}
                    <div className="grid lg:grid-cols-3">
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                            <h1 className="text-white font-bold text-center">T20 - Batting Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4 text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4 text-left">427</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4 text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Not Outs:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Highest Score:</div>
                                <div className="text-white font-semibold pt-4 text-left">159</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">85.4</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Balls Faced:</div>
                                <div className="text-white font-semibold pt-4 text-left">585</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">72.99</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">100s:</div>
                                <div className="text-white font-semibold pt-4 text-left">1</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">50s:</div>
                                <div className="text-white font-semibold pt-4 text-left">3</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">4s:</div>
                                <div className="text-white font-semibold pt-4 text-left">38</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">6s:</div>
                                <div className="text-white font-semibold pt-4 text-left">4</div>
                            </div>
                        </div>

                        {/*Bowling Stats*/}
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">Bowling Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4 text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Wickets:</div>
                                <div className="text-white font-semibold pt-4 text-left">29</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4 text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Overs:</div>
                                <div className="text-white font-semibold pt-4 text-left">117.5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4 text-left">338</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">BBI:</div>
                                <div className="text-white font-semibold pt-4 text-left">27/7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">11.65</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Econ:</div>
                                <div className="text-white font-semibold pt-4 text-left">2.86</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">24.37</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">4Ws:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">5Ws:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                        </div>

                        {/*Wicket Keeping Stats*/}
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">Wicketkeeping Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4  text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4  text-left">427</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4  text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Not Outs:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Highest Score:</div>
                                <div className="text-white font-semibold pt-4 text-left">159</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">85.4</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Balls Faced:</div>
                                <div className="text-white font-semibold pt-4 text-left">585</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">72.99</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">100s:</div>
                                <div className="text-white font-semibold pt-4 text-left">1</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">50s:</div>
                                <div className="text-white font-semibold pt-4 text-left">3</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">4s:</div>
                                <div className="text-white font-semibold pt-4 text-left">38</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">6s:</div>
                                <div className="text-white font-semibold pt-4 text-left">4</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="option2" className="size_chart" style={{display: selectedOption === 'option2' ? 'block' : 'none'}}>
                    {/* Content for option 2 */}
                    <div className="grid md:grid-cols-3">
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">ODI - Batting Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4  text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4  text-left">427</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4  text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Not Outs:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Highest Score:</div>
                                <div className="text-white font-semibold pt-4 text-left">159</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">85.4</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Balls Faced:</div>
                                <div className="text-white font-semibold pt-4 text-left">585</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">72.99</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">100s:</div>
                                <div className="text-white font-semibold pt-4 text-left">1</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">50s:</div>
                                <div className="text-white font-semibold pt-4 text-left">3</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">4s:</div>
                                <div className="text-white font-semibold pt-4 text-left">38</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">6s:</div>
                                <div className="text-white font-semibold pt-4 text-left">4</div>
                            </div>
                        </div>

                        {/*Bowling Stats*/}
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">ODI - Bowling Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4 text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Wickets:</div>
                                <div className="text-white font-semibold pt-4 text-left">29</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4 text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Overs:</div>
                                <div className="text-white font-semibold pt-4 text-left">117.5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4 text-left">338</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">BBI:</div>
                                <div className="text-white font-semibold pt-4 text-left">27/7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">11.65</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Econ:</div>
                                <div className="text-white font-semibold pt-4 text-left">2.86</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">24.37</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">4Ws:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">5Ws:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                        </div>

                        {/*Wicket Keeping Stats*/}
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">Wicketkeeping Statistics</h1>
                            <div className="text-white text-center pt-8">No Wicket keeping Stats</div>
                        </div>
                    </div>
                </div>
                <div id="option2" className="size_chart" style={{display: selectedOption === 'option3' ? 'block' : 'none'}}>
                    {/* Content for option 3 */}
                    <div className="grid md:grid-cols-3">
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">Test - Batting Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4  text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4  text-left">427</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4  text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Not Outs:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Highest Score:</div>
                                <div className="text-white font-semibold pt-4 text-left">159</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">85.4</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Balls Faced:</div>
                                <div className="text-white font-semibold pt-4 text-left">585</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">72.99</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">100s:</div>
                                <div className="text-white font-semibold pt-4 text-left">1</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">50s:</div>
                                <div className="text-white font-semibold pt-4 text-left">3</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">4s:</div>
                                <div className="text-white font-semibold pt-4 text-left">38</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">6s:</div>
                                <div className="text-white font-semibold pt-4 text-left">4</div>
                            </div>
                        </div>

                        {/*Bowling Stats*/}
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">Bowling Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4 text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Wickets:</div>
                                <div className="text-white font-semibold pt-4 text-left">29</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4 text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Overs:</div>
                                <div className="text-white font-semibold pt-4 text-left">117.5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4 text-left">338</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">BBI:</div>
                                <div className="text-white font-semibold pt-4 text-left">27/7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">11.65</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Econ:</div>
                                <div className="text-white font-semibold pt-4 text-left">2.86</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">24.37</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">4Ws:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">5Ws:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                        </div>

                        {/*Wicket Keeping Stats*/}
                        <div
                            className="bg-primary-ts_blue p-4 rounded-2xl mx-2 my-2 overflow-hidden">
                            <h1 className="text-white font-bold text-center">Wicketkeeping Statistics</h1>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Matches:</div>
                                <div className="text-white font-semibold pt-4  text-left">5</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Runs:</div>
                                <div className="text-white font-semibold pt-4  text-left">427</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4">Innings:</div>
                                <div className="text-white font-semibold pt-4  text-left">7</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Not Outs:</div>
                                <div className="text-white font-semibold pt-4 text-left">2</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Highest Score:</div>
                                <div className="text-white font-semibold pt-4 text-left">159</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Average:</div>
                                <div className="text-white font-semibold pt-4 text-left">85.4</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Balls Faced:</div>
                                <div className="text-white font-semibold pt-4 text-left">585</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">Strike Rate:</div>
                                <div className="text-white font-semibold pt-4 text-left">72.99</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">100s:</div>
                                <div className="text-white font-semibold pt-4 text-left">1</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">50s:</div>
                                <div className="text-white font-semibold pt-4 text-left">3</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">4s:</div>
                                <div className="text-white font-semibold pt-4 text-left">38</div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="text-white font-semibold pt-4 ">6s:</div>
                                <div className="text-white font-semibold pt-4 text-left">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SizeChart;
