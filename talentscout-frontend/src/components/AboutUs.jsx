import React from 'react';

function AboutUs() {
    return (
        <div className="font-poppins">
            <div className="md:container grid sm:grid-cols-1 px-8">
                <div className="sm:grid sm:grid-cols-1">
                    <div className="lg:flex sm:grid sm:grid-cols-1 2xl:w-11/12 md:items-center md:justify-center mx-auto mt-16 p-8 bg-primary-ts_purple rounded-2xl shadow-outer">
                        <div className="lg:w-2/3 lg:flex lg:flex-col md:grid md:grid-cols-1 text-center md:text-center lg:text-left">
                            <div className="text-3xl font-bold pt-8">ABOUT US</div>
                            <p className="lg:max-w-lg sm:text-xs md:text-base font-bold pt-12 pb-10">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ad adipisci assumenda deserunt distinctio doloremque, dolores ex hic, id
                                necessitatibus nemo nulla optio pariatur perferendis quisquam reiciendis sint, sit tempora
                                voluptate.</p>
                        </div>
                        <img className="size-80 mx-auto 2xl:mx-2" src={import.meta.env.BASE_URL + 'default-image.png'} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;