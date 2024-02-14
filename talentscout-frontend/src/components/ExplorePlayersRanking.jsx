function ExplorePlayerRanking() {
    const playersArray = [
        {id: 1, ranking: '1', fullName: 'Balapuwaduge Kusal Gimhan Mendis', rating: '75.5'},
        {id: 2, ranking: '2', fullName: 'Pathum Nissanka Silva', rating: '72.8'},
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
                    className="flex flex-row text-md md:text-base lg:text-lg p-2 sm:p-4 mt-6 sm:mt-8 bg-primary-ts_blue text-white gap-x-4 items-center rounded-t-2xl">
                    <div className="font-semibold border-r-2 px-2 md:px-8">
                        ODI
                    </div>
                    <div className="font-semibold">
                        ODI Batting Ranking
                    </div>
                </div>
                <div className="rounded-lg md:mb-12 text-center pb-12">
                    <div
                        className="grid grid-cols-1 md:grid-cols-12 bg-primary-ts_purple rounded-b-2xl border-gray-500 pt-8 pb-4 shadow-outer">
                        <div
                            className="md:col-span-3 order-2 md:order-1 mt-6 md:mt-0">
                            <div
                                className="w-fit h-fit mx-auto py-3 px-6 rounded-lg bg-primary-ts_blue text-white font-bold text-md md:text-base lg:text-lg">1
                            </div>
                        </div>
                        <div
                            className="flex flex-col md:-ms-8 lg:-ms-16 gap-y-8 mt-6 md:mt-0 md:text-start font-bold text-base md:text-lg lg:text-xl md:col-span-3 order-3 md:order-2 px-8 md:px-0">
                            <div className="-mt-1">{firstPlayer.fullName}</div>
                            <div>{firstPlayer.rating}</div>
                        </div>
                        <div
                            className="flex justify-end right-0 md:right-8 lg:right-24 relative font-bold text-md md:text-base lg:text-lg md:col-span-6 order-1 md:order-3">
                            <img src={import.meta.env.BASE_URL + 'Player-dummy-image.png'} alt="player-dummy-image"
                                 className="mx-auto md:mx-0 w-2/5"/>
                        </div>
                    </div>
                    <div className='shadow-outer pb-4 rounded-2xl'>
                        <div className="grid grid-cols-12 my-10 border-b-2 border-gray-500 py-6 font-bold mx-0 md:mx-4">
                            <div className="text-md md:text-base lg:text-lg col-span-3">POS</div>
                            <div className="text-md md:text-base lg:text-lg col-span-6">Player Name</div>
                            <div className="text-md md:text-base lg:text-lg col-span-3">Rating</div>
                        </div>
                        {playersArray && playersArray.length > 0 ? (
                            playersArray.slice(1).map((player) => (
                                <div key={player.id}
                                     className="grid grid-cols-12 font-semibold mb-10 border-b-2 border-gray-500 py-2 items-center mx-0 md:mx-4">
                                    <div className="text-sm md:text-md lg:text-base col-span-3">{player.ranking}</div>
                                    <div className="text-sm md:text-md lg:text-base col-span-6">{player.fullName}</div>
                                    <div className="text-sm md:text-md lg:text-base col-span-3">{player.rating}</div>
                                </div>
                            ))
                        ) : (
                            <p>No players available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePlayerRanking