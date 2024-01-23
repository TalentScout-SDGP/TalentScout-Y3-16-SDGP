function AboutUs() {
    return (
        <div className="font-poppins">
            <div className="md:container grid sm:grid-cols-1 px-8">
                <div className="sm:grid sm:grid-cols-1">
                    <div className="lg:flex sm:grid sm:grid-cols-1 2xl:w-11/12 md:items-center md:justify-center mx-auto mt-16 p-8 bg-primary-ts_purple rounded-2xl shadow-outer">
                        <div className="lg:w-2/3 lg:flex lg:flex-col md:grid md:grid-cols-1 text-center md:text-center lg:text-left">
                            <div className="text-3xl font-bold pt-8">ABOUT US</div>
                            <p className="lg:max-w-xl sm:text-xs md:text-base font-bold pt-12 pb-10">Welcome to
                                TalentScout, an advanced platform tailored exclusively
                                for cricket enthusiasts seeking a comprehensive and refined experience. At TalentScout,
                                our commitment is to redefine and elevate the
                                cricket experience for enthusiasts through a professionally curated platform. Join us on
                                this remarkable journey where the sophistication
                                of the game meets intuitive tools for a refined cricket experience.</p>
                        </div>
                        <img className="size-80 mx-auto 2xl:mx-2" src={import.meta.env.BASE_URL + 'about_us.png'} alt=""/>
                    </div>

                    <div className="mx-auto p-8 mt-8 mb-10">
                        <div className="2xl:w-11/12 2xl:space-x-28 lg:flex lg:justify-center items-center lg:space-x-24 sm:text-xs sm:grid sm:grid-cols-1">
                            <a href="">
                                <div className="flex flex-col 2xl:w-48 text-center items-center p-6 md:p-4 hover:shadow-outer hover:rounded-3xl hover:scale-105 transition-transform duration-2000 transform">
                                    <img className="w-24 h-24 md:w-20 md:h-20 p-4 md:p-0" src={import.meta.env.BASE_URL + 'person-option.png'} alt="Person"/>
                                    <p className="font-bold md:pt-4 lg:w-24">Meet our dedicated sales team</p>
                                </div>
                            </a>

                            <div className="border-l border-gray-500 h-40 lg:block hidden"></div>

                            <a href="mailto:">
                                <div className="flex flex-col 2xl:w-48 text-center items-center p-6 md:p-4 hover:shadow-outer hover:rounded-3xl hover:scale-105 transition-transform duration-2000 transform">
                                    <img className="w-24 h-24 md:w-20 md:h-20 p-4 md:p-0" src={import.meta.env.BASE_URL + 'email-option.png'} alt="Person"/>
                                    <p className="font-bold md:pt-4 lg:w-24">Email us for prompt communication</p>
                                </div>
                            </a>

                            <div className="border-l border-gray-500 h-40 lg:block hidden"></div>

                            <a href="tel:+94112345678">
                                <div className="flex flex-col 2xl:w-48 text-center items-center p-6 md:p-4 hover:shadow-outer hover:rounded-3xl hover:scale-105 transition-transform duration-2000 transform">
                                    <img className="w-24 h-24 md:w-20 md:h-20 p-4 md:p-0" src={import.meta.env.BASE_URL + 'call-option.png'} alt="Person"/>
                                    <p className="font-bold md:pt-4 lg:w-24 xl:w-">Contact us through a phone call</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;