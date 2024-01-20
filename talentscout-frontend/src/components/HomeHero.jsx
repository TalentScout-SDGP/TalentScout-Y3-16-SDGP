import React from 'react';

function HomeHero() {
    return (
        <div className="font-poppins">
            <div className="md:container px-2 sm:px-8">
                <div
                    className="bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center rounded-3xl my-6 md:my-12"
                    style={{backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`}}>
                    <div
                        className="flex flex-col items-center gap-y-8 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">
                            Centered Heading</h1>
                        <p className="text-white text-base lg:text-xl mb-6">Lorem ipsum dolor sit
                            amet,
                            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</p>
                        <button
                            className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-4 py-1 lg:py-3 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
