import React, {useState} from 'react';

function SizeChart() {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="font-poppins">
            <div className="lg:container text-base font-poppins pb-10 px-2 my-2">
                <div className="bg-primary-ts_purple mlg:grid-cols-1 my-10 shadow-outer rounded-lg px-2 py-2">

                    {/* Tab buttons */}
                    <div className="md:container my-3 md:my-6 px-2">
                        <div
                            className="tab-header flex justify-center gap-x-2 sm:gap-x-4 bg-white w-fit mx-auto py-1 px-2 rounded-3xl lg:text-base sm:text-sm text-xs">
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={() => handleOptionChange('option1')}
                                    className={`${
                                        selectedOption === 'option1' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'
                                    } py-2 px-6 font-medium rounded-full focus:outline-none`}
                                >
                                    Test
                                </button>
                                <button
                                    onClick={() => handleOptionChange('option2')}
                                    className={`${
                                        selectedOption === 'option2' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'
                                    } py-2 px-6 font-medium rounded-full focus:outline-none`}
                                >
                                    ODI
                                </button>
                                <button
                                    onClick={() => handleOptionChange('option3')}
                                    className={`${
                                        selectedOption === 'option3' ? 'active text-md font-semibold bg-primary-ts_blue text-white py-1 px-2 sm:px-4 md:px-8 rounded-2xl' : 'font-semibold text-md py-1 px-2 sm:px-4 md:px-8'
                                    } py-2 px-6 font-medium rounded-full  focus:outline-none`}
                                >
                                    T20
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Size chart components */}
                    <div id="option1" className="size_chart"
                         style={{display: selectedOption === 'option1' ? 'block' : 'none'}}>
                        {/* Content for option 1 */}
                        <div className="grid sm:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Test - Batting Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="text-left">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">427</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Not Outs:</div>
                                    <div className="">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Highest Score:</div>
                                    <div className="">159</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">85.4</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Balls Faced:</div>
                                    <div className="">585</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">72.99</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">100s:</div>
                                    <div className="">1</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">50s:</div>
                                    <div className="">3</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4s:</div>
                                    <div className="">38</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className=" ">6s:</div>
                                    <div className="">4</div>
                                </div>
                            </div>

                            {/*Bowling Stats*/}
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Test - Bowling Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Wickets:</div>
                                    <div className="">29</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Overs:</div>
                                    <div className="">117.5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">338</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">BBI:</div>
                                    <div className="">27/7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">11.65</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Econ:</div>
                                    <div className="">2.86</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">24.37</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4Ws:</div>
                                    <div className="text-white font-semibold pt-4 text-left">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">5Ws:</div>
                                    <div className="">2</div>
                                </div>
                            </div>

                            {/*Wicket Keeping Stats*/}
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue py-4 px-2 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">Test - Wicketkeeping Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">427</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Not Outs:</div>
                                    <div className="">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Highest Score:</div>
                                    <div className="">159</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">85.4</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Balls Faced:</div>
                                    <div className="">585</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">72.99</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">100s:</div>
                                    <div className="">1</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">50s:</div>
                                    <div className="">3</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4s:</div>
                                    <div className="">38</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">6s:</div>
                                    <div className="">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="option2" className="size_chart"
                         style={{display: selectedOption === 'option2' ? 'block' : 'none'}}>
                        {/* Content for option 2 */}
                        <div className="grid sm:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">ODI - Batting Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">427</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Not Outs:</div>
                                    <div className="">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Highest Score:</div>
                                    <div className="">159</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">85.4</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Balls Faced:</div>
                                    <div className="">585</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">72.99</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">100s:</div>
                                    <div className="">1</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">50s:</div>
                                    <div className="">3</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4s:</div>
                                    <div className="">38</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className=" ">6s:</div>
                                    <div className="">4</div>
                                </div>
                            </div>

                            {/*Bowling Stats*/}
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">ODI - Bowling Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Wickets:</div>
                                    <div className="">29</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Overs:</div>
                                    <div className="">117.5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">338</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">BBI:</div>
                                    <div className="">27/7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">11.65</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Econ:</div>
                                    <div className="">2.86</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">24.37</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4Ws:</div>
                                    <div className="text-white font-semibold pt-4 text-left">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">5Ws:</div>
                                    <div className="">2</div>
                                </div>
                            </div>

                            {/*Wicket Keeping Stats*/}
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">ODI - Wicketkeeping Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">427</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Not Outs:</div>
                                    <div className="">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Highest Score:</div>
                                    <div className="">159</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">85.4</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Balls Faced:</div>
                                    <div className="">585</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">72.99</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">100s:</div>
                                    <div className="">1</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">50s:</div>
                                    <div className="">3</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4s:</div>
                                    <div className="">38</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">6s:</div>
                                    <div className="">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="option3" className="size_chart"
                         style={{display: selectedOption === 'option3' ? 'block' : 'none'}}>
                        {/* Content for option 3 */}
                        <div className="grid sm:grid-cols-3">
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">T20 - Batting Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">427</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Not Outs:</div>
                                    <div className="">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Highest Score:</div>
                                    <div className="">159</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">85.4</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Balls Faced:</div>
                                    <div className="">585</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">72.99</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">100s:</div>
                                    <div className="">1</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">50s:</div>
                                    <div className="">3</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4s:</div>
                                    <div className="">38</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className=" ">6s:</div>
                                    <div className="">4</div>
                                </div>
                            </div>

                            {/*Bowling Stats*/}
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">T20 - Bowling Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Wickets:</div>
                                    <div className="">29</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Overs:</div>
                                    <div className="">117.5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">338</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">BBI:</div>
                                    <div className="">27/7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">11.65</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Econ:</div>
                                    <div className="">2.86</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">24.37</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4Ws:</div>
                                    <div className="text-white font-semibold pt-4 text-left">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">5Ws:</div>
                                    <div className="">2</div>
                                </div>
                            </div>

                            {/*Wicket Keeping Stats*/}
                            <div
                                className="flex flex-col gap-y-4 text-white text-xs sm:text-sm xl:text-lg md:text-base bg-primary-ts_blue px-2 py-4 rounded-2xl mx-2 my-2 overflow-hidden ">
                                <h1 className="text-white font-bold text-center">T20 - Wicketkeeping Statistics</h1>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Matches:</div>
                                    <div className="">5</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Runs:</div>
                                    <div className="">427</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Innings:</div>
                                    <div className="">7</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Not Outs:</div>
                                    <div className="">2</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Highest Score:</div>
                                    <div className="">159</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Average:</div>
                                    <div className="">85.4</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Balls Faced:</div>
                                    <div className="">585</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">Strike Rate:</div>
                                    <div className="">72.99</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">100s:</div>
                                    <div className="">1</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">50s:</div>
                                    <div className="">3</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">4s:</div>
                                    <div className="">38</div>
                                </div>
                                <div className="grid md:grid-cols-2">
                                    <div className="">6s:</div>
                                    <div className="">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeChart;

