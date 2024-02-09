function PlayerProfilesSearch() {

    return (
        <div className="font-poppins">
            <div className="md:container px-2">
                <div className="bg-primary-ts_blue grid grid-cols-1 my-8 shadow-outer rounded-lg md:rounded-3xl px-10 sm:px-10 py-14">
                    <div className="flex flex-col items-center justify-center">
                        <input type="text"
                               className="lg:w-1/2 md:w-96 bg-primary-ts_purple w-64 md:h-10 h-8 sm:w-80 py-2 rounded-2xl mb-3 text-left ps-6 pe-"
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

    )

}

export default PlayerProfilesSearch;