import {Link} from "react-router-dom";

function HomeComparePlayers() {
    return (
        <div className="font-poppins">
            <div className="md:container px-8">
                <div
                    className="bg-primary-ts_purple flex flex-col gap-y-6 justify-center items-center py-8 px-4 lg:px-8 lg:pt-8 lg:pb-12 shadow-outer rounded-lg md:rounded-3xl">
                    <div className="flex flex-col justify-center gap-y-4">
                        <p className="text-black text-base lg:text-2xl font-bold text-center leading-relaxed">
                            Discover Cricket Excellence
                        </p>
                        <p className="hidden lg:block text-black text-sm lg:text-lg text-center lg:w-4/5 mx-auto">
                            Elevate your cricket experience! Our platform empowers
                            you to delve into the depths of
                            player prowess, comparing vital stats and insights effortlessly. Uncover the secrets behind
                            each performance and make informed choices. Witness the game-changing details that matter.
                        </p>
                        <p className="block lg:hidden text-black text-sm lg:text-lg font-semibold text-center lg:w-4/5 mx-auto">
                            Elevate your cricket experience! Our platform empowers
                            you to delve into the depths of
                            player prowess, comparing vital stats and insights effortlessly.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 justify-center items-center gap-x-4 lg:gap-x-8">
                        <div className="text-center">
                            <img className="lg:w-3/5 mx-auto" src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                        </div>
                        <div className="text-center">
                            <img className="lg:w-2/5 mx-auto" src={import.meta.env.BASE_URL + 'versus-image.png'}
                                 alt="versus-image"></img>
                        </div>
                        <div className="text-center">
                            <img className="lg:w-3/5 mx-auto" src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                        </div>
                    </div>
                    <Link to="/compare_players" className="text-xs lg:text-sm font-semibold bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-2 shadow-lg
                                    duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                        Try Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeComparePlayers;
