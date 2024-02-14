function CRUDManagePlayersSearch() {
    return (
        <div className="font-poppins">
            <div className="md:container px-2">
                <div className="bg-primary-ts_blue grid grid-cols-1 my-8 mb-11 shadow-outer rounded-lg md:rounded-3xl px-10 sm:px-10 py-14">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-white text-base text-center lg:p-8 lg:text-lg pb-4">
                            The ultimate hub for coaches, team managers and unmatched teams hungry for excellence. With a sleek
                            interface designed for efficiency, users can easily use search, add, update and delete options.
                        </p>
                        <input type="text" className="lg:w-1/2 md:w-96 bg-primary-ts_purple sm:w-80 py-2 rounded-2xl mb-3 text-left ps-6 pe-" placeholder="Search Player"></input>
                        <button className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-6 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2 hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform">
                            <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon" className="inline me-2"></img>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CRUDManagePlayersSearch;