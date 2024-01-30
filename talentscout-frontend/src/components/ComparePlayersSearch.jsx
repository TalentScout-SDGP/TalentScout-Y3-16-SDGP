function ComparePlayersSearch() {
    return (
        <div className="font-poppins">
            <div className="md:container px-3 sm:px-4 md:px-8 lg:px-0 my-2">
                <div
                    className="grid grid-cols-1 md:grid-cols-3 shadow-outer rounded-3xl bg-primary-ts_blue my-8 px-2 lg:px-10 py-8">
                    <div
                        className="bg-primary-ts_blue grid grid-cols-1 mt-2 mb-6 sm:mt-4 my-12 px-12 sm:px-10 order-1 lg:order-1">
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
                    <div className="grid grid-cols-1 my-0 sm:my-2 px-12 sm:px-10 order-3 lg:order-2">
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
                        className="bg-primary-ts_blue grid grid-cols-1 mb-6 mt-2 my-12 sm:mt-4 px-10 sm:px-10 order-2 lg:order-3">
                        <div className="flex flex-col items-center justify-center">
                            <input
                                type="text"
                                className="w-48 xl:w-80 lg:w-64 md:w-48 bg-primary-ts_purple sm:w-80 py-1 md:py-2 rounded-2xl mb-3 text-left ps-6 placeholder-text lg:text-md text-sm"
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