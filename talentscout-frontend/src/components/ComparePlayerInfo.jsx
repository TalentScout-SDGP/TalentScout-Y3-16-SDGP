function ComparePlayerInfo() {
    return (
        <div className="font-poppins">
            <div className="md:container my-12">
                <div
                    className="bg-primary-ts_purple flex flex-col gap-y-6 justify-center items-center rounded-lg py-8">
                    <div className="grid grid-cols-12 justify-center items-center gap-x-4">
                        <div className="text-center col-span-3">
                            <img className="lg:w-3/5 mx-auto" src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                            <p className="mt-6 font-semibold text-black">Player 1</p>
                        </div>
                        <div className="grid grid-cols-12 text-center col-span-6">
                            <div className="flex flex-col gap-y-8 col-span-3 border-r border-black">
                                <p className="font-semibold text-black">XX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                            </div>
                            <div className="flex flex-col gap-y-8 col-span-6">
                                <p className="font-semibold text-black">Age</p>
                                <p className="font-semibold text-black">Batting Style</p>
                                <p className="font-semibold text-black">Bowling Style</p>
                                <p className="font-semibold text-black">Playing Role</p>
                            </div>
                            <div className="flex flex-col gap-y-8 col-span-3 border-l border-black">
                                <p className="font-semibold text-black">XX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                                <p className="font-semibold text-black">XXXXX</p>
                            </div>
                        </div>
                        <div className="text-center col-span-3">
                            <img className="lg:w-3/5 mx-auto" src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                            <p className="mt-6 font-semibold text-black">Player 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComparePlayerInfo;
