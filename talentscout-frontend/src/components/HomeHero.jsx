import {Link} from "react-router-dom";

function HomeHero() {
    return (
        <div className="font-poppins">
            <div className="md:container mx-0 px-8 sm:px-8 ">
                <div
                    className="bg-cover bg-center h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center rounded-lg md:rounded-3xl my-6 md:my-12 shadow-outer"
                    style={{backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`}}>
                    <div
                        className="flex flex-col items-center gap-y-8 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">
                            Welcome To TalentScout</h1>
                        <p className="hidden lg:block text-white text-base lg:text-xl mb-6">Unleash the power of cricket
                            data with
                            TalentScout! Analyze player statistics, compare profiles, and discover the stars of
                            tomorrow. Whether you&apos;re a coach, scout, or a passionate fan, our platform empowers you
                            to
                            make informed decisions and stay ahead in the game.</p>
                        <p className="block lg:hidden text-white text-base lg:text-xl mb-6">Unleash the power of cricket
                            data with
                            TalentScout! Analyze player statistics, compare profiles, and discover the stars of
                            tomorrow.</p>
                        <Link to="/explore_players" className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-4 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
