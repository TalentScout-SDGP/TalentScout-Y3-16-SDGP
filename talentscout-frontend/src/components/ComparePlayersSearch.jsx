function ComparePlayersSearch() {

    return (
        <div className="font-poppins">
            <div className="md:container px-8 my-2">
                <div
                    className="grid grid-cols-1 md:grid-cols-3 bg-primary-ts_blue p-0 mx-2 my-2 overflow-hidden">
                    <div
                        className="hidden md:flex w-full xl:w-44 2xl:w-44 2xl:mx-52 xl:mx-20 lg:w-36 lg:mx-18 md:w-24 items-center text-center col-span-4">
                        <img src={import.meta.env.BASE_URL + 'compare-players-image.png'} alt="search-icon"
                             className="min-[600px]:w-40 w-20 mx-10 2xl:px-8 xl:px-2 py-6"></img>
                        <img src={import.meta.env.BASE_URL + 'compare-players-image.png'} alt="search-icon"
                             className="min-[600px]:w-40 w-20 mx-10 2xl:px-8 xl:px-2 py-6"></img>
                        <img src={import.meta.env.BASE_URL + 'compare-players-image.png'} alt="search-icon"
                             className="min-[600px]:w-40 w-20 mx-10 2xl:px-8 xl:px-2 py-6"></img>
                        <img src={import.meta.env.BASE_URL + 'compare-players-image.png'} alt="search-icon"
                             className="min-[600px]:w-40 w-20 mx-10 2xl:px-8 xl:px-2 py-6"></img>
                    </div>
                    <div
                        className="bg-primary-ts_blue grid grid-cols-1 mt-2 mb-6 sm:mt-4 my-12 px-12 sm:px-10">
                        <div className="flex flex-col items-center justify-center">
                            <input type="text"
                                   className="w-44 lg:w-64 md:w-48 bg-primary-ts_purple sm:w-80 py-2 rounded-lg my-3 text-left ps-6"
                                   placeholder="Player Name">
                            </input>
                            <button className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-6 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform">
                                <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon"
                                     className="inline me-2"></img>
                                Search
                            </button>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 my-0 sm:my-2 px-12 sm:px-10">
                        <div className="flex flex-col items-center justify-center">
                            <button
                                className="px-6 lg:w-44 md:w-40 text-sm bg-primary-yellow text-black font-semibold sm:w-40 py-0 rounded-3xl mb-3 ps-6">
                                <img src={import.meta.env.BASE_URL + 'compare-icon.png'} alt="compare-icon"
                                     className="inline px-0"></img>
                                Compare
                            </button>
                        </div>
                    </div>
                    <div
                        className="bg-primary-ts_blue grid grid-cols-1 mb-6 mt-2 my-12 sm:mt-4 px-10 sm:px-10">
                        <div className="flex flex-col items-center justify-center">
                            <input type="text"
                                   className="w-44 lg:w-64 md:w-48 bg-primary-ts_purple sm:w-80 py-2 rounded-lg mb-3 text-left ps-6"
                                   placeholder="Player Name">
                            </input>
                            <button className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-6 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
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