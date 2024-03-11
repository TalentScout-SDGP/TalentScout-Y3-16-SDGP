function ComparePlayersSearch() {
    return (
        <div className="font-poppins">
            <div className="md:container px-2 my-2">
                <div
                    className="grid grid-cols-1 md:grid-cols-3 shadow-outer rounded-lg md:rounded-3xl bg-primary-ts_blue my-8 px-2 lg:px-10 py-8">
                    <div className="md:block sm:hidden hidden col-span-3 text-center md:mb-6 mb-20">
                        <p className="text-white text-lg lg:text-xl font-bold mb-2">Search and Compare Cricket
                            Players</p>
                        <p className="w-full sm:w-4/5 mt-6 mx-auto text-gray-300 text-md lg:text-lg">Explore more about
                            your
                            favourite players. Compare the talented players up against each other with an In depth
                            analysis of profile details and statistics of all types across all types of formats.</p>
                    </div>
                    <div
                        className="bg-primary-ts_blue grid grid-cols-1 mt-2 mb-6 sm:mt-4 px-12 sm:px-10 order-1 md:order-1">
                        <div className="2xl:hidden xl:hidden md:hidden sm:block col-span-3 text-center mb-6">
                            <p className="text-white text-lg lg:text-xl font-bold mb-2">Search and Compare Cricket
                                Players</p>
                            <p className="text-gray-300 text-md lg:text-lg">Explore player profiles and compare their
                                statistics to make informed decisions.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <input type="text"
                                   className="w-48 xl:w-80 lg:w-64 md:w-48 bg-primary-ts_purple sm:w-80 py-1 md:py-2 rounded-2xl my-3 text-left ps-6 placeholder-text lg:text-md text-sm"
                                   placeholder="Player Name">
                            </input>
                            <button className="lg:text-md md:text-sm text-xs bg-primary-yellow text-black font-semibold rounded-button px-6 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform">
                                <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon"
                                     className="inline me-2"></img>
                                Search
                            </button>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 my-0 sm:my-2 px-12 sm:px-10 order-3 md:order-2">
                        <div className="flex flex-col items-center justify-center">
                            <button
                                className="lg:text-md md:text-sm text-xs px-6 lg:w-44 md:w-40 bg-primary-yellow text-black font-semibold sm:w-40 py-0 rounded-3xl mb-3 ps-6">
                                <img src={import.meta.env.BASE_URL + 'compare-icon.png'} alt="compare-icon"
                                     className="inline px-0"></img>
                                Compare
                            </button>
                        </div>
                    </div>
                    <div
                        className="bg-primary-ts_blue grid grid-cols-1 mb-6 mt-2 my-12 sm:mt-4 px-10 sm:px-10 order-2 md:order-3">
                        <div className="flex flex-col items-center justify-center">
                            <input
                                type="text"
                                className="w-48 xl:w-80 lg:w-64 md:w-48 bg-primary-ts_purple sm:w-80 py-1 md:py-2 rounded-2xl my-3 text-left ps-6 placeholder-text lg:text-md text-sm"
                                placeholder="Player Name"
                            />
                            <button className="lg:text-md md:text-sm text-xs bg-primary-yellow text-black font-semibold rounded-button px-6 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform">
                                <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon"
                                     className="inline me-2"></img>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparePlayersSearch;