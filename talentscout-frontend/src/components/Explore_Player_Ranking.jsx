function ExplorePlayerRanking() {
    const playersArray = [
        {id: 1, ranking: '1', fullName: 'Full Name 1', rating: 'Value'},
        {id: 2, ranking: '2', fullName: 'Full Name 2', rating: 'Value'},
        {id: 3, ranking: '3', fullName: 'Full Name 3', rating: 'Value'},
        {id: 4, ranking: '4', fullName: 'Full Name 4', rating: 'Value'},
        {id: 5, ranking: '5', fullName: 'Full Name 5', rating: 'Value'},
        {id: 6, ranking: '6', fullName: 'Full Name 6', rating: 'Value'},
        {id: 7, ranking: '7', fullName: 'Full Name 7', rating: 'Value'},
        {id: 8, ranking: '8', fullName: 'Full Name 8', rating: 'Value'},
        {id: 9, ranking: '9', fullName: 'Full Name 9', rating: 'Value'},
        {id: 10, ranking: '10', fullName: 'Full Name 10', rating: 'Value'},
    ];

    const firstPlayer = playersArray[0];

    return (
        <div className="font-poppins">
            <div className="md:container px-2">
                <div
                    className="p-4 mt-6 sm:mt-8 bg-primary-ts_blue text-white flex flex-col gap-x-4 sm:flex-row items-center rounded-t-2xl">
                    <div className="font-semibold text-lg mb-2 sm:mb-0 border-r-2 px-8">
                        ODI
                    </div>
                    <div className="text-lg mb-2 sm:mb-0 font-semibold">
                        ODI Batting Ranking
                    </div>
                </div>
                <div
                    className="bg-primary-ts_purple grid grid-cols-1 shadow-outer rounded-lg">
                    <div className="grid grid-cols-12 items-center sm:flex-row lg:mt-6 ps-32 pe-48">
                        <div className="flex flex-row gap-x-12 text-center sm:text-left lg:mb-auto col-span-4">
                            <p className="w-fit bg-primary-ts_blue text-white lg:mb-auto py-1 px-5 sm:mb-5 rounded-md flex items-center justify-centertext-xl sm:text-2xl">1</p>
                            <div className='flex flex-col'>
                                <p className="first-player-name text-base sm:text-xl font-bold text-primary-ts_blue mb-1 sm:mb-4">{firstPlayer.fullName}</p>
                                <p className="first-ranking text-base sm:text-xl font-bold text-primary-ts_blue mb-1 sm:mb-2">{firstPlayer.rating}</p>
                            </div>
                        </div>
                        <div
                            className="flex justify-end text-center lg:mb-3 col-span-8">
                            <img
                                src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                alt="search-icon"
                                className="w-1/3"/>
                        </div>
                    </div>
                </div>
                <div className="tab-content rounded-lg shadow-outer mt-4 mb-12 justify-center text-center pb-12">
                    <div className="flex my-8 border-b-2 border-gray-500 py-8 lg:justify-between lg:space-x-60">
                        <div className="font-bold text-xl flex-1 ">POS</div>
                        <div className="font-bold text-xl flex-1">Player Name</div>
                        <div className="font-bold text-xl flex-1">Rating</div>
                    </div>
                    {playersArray && playersArray.length > 0 ? (
                        playersArray.slice(1).map((player) => (
                            <div key={player.id}
                                 className="flex font-bold mb-10 border-b-2 border-gray-500 py-2 lg:justify-between lg:space-x-60">
                                <div className="text-md flex-1">{player.ranking}</div>
                                <div className="text-md flex-1">{player.fullName}</div>
                                <div className="text-md flex-1">{player.rating}</div>
                            </div>
                        ))
                    ) : (
                        <p>No players available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExplorePlayerRanking