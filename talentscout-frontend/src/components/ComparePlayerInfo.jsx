function ComparePlayerInfo() {
    return (
        <div className="font-poppins">
            <div className="md:container my-8 md:my-12 px-2">
                <div
                    className="bg-primary-ts_purple shadow-outer flex flex-col gap-y-6 justify-center items-center rounded-lg py-8">
                    <div className="grid grid-cols-2 md:grid-cols-12 justify-center items-center md:gap-x-4">
                        <div className="text-center md:col-span-3 order-1 md:order-1">
                            <img className="w-3/5 md:w-3/5 lg:w-3/5 mx-auto"
                                 src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                            <p className="mt-6 font-semibold text-black lg:text-lg text-base">Player 1</p>
                        </div>
                        <div
                            className="grid grid-cols-3 sm:grid-cols-8 md:grid-cols-12 text-center col-span-6 order-3 md:order-2 mt-6 sm:mt-12 md:mt-0">
                            <div
                                className="flex flex-col gap-y-8 sm:col-span-3 md:col-span-3 border-r border-black xl:text-base lg:text-md md:text-sm text-xs">
                                <p className="font-semibold text-black">XX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                            </div>
                            <div
                                className="flex flex-col gap-y-8 sm:col-span-2 md:col-span-6 xl:text-base lg:text-md md:text-sm text-xs">
                                <p className="font-semibold text-black">Age</p>
                                <p className="font-semibold text-black">Batting
                                    Style</p>
                                <p className="font-semibold text-black">Bowling
                                    Style</p>
                                <p className="font-semibold text-black">Playing
                                    Role</p>
                            </div>
                            <div
                                className="flex flex-col gap-y-8 sm:col-span-3 md:col-span-3 border-l border-black xl:text-base lg:text-md md:text-sm text-xs">
                                <p className="font-semibold text-black">XX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                            </div>
                        </div>
                        <div className="text-center md:col-span-3 order-2 md:order-3">
                            <img className="w-3/5 md:w-3/5 lg:w-3/5 mx-auto"
                                 src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                            <p className="mt-6 font-semibold text-black lg:text-lg text-base">Player 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComparePlayerInfo;
