import React from 'react';
import {Link} from "react-router-dom";

function HomeManagePlayers() {
    return (
        <div className="font-poppins">
            <div className="container">
                <div className="grid grid-cols-12 my-16 shadow-outer rounded-lg p-12">
                    <div className="flex justify-center flex-col gap-y-16 col-span-5 px-16">
                        <p className="text-black text-2xl font-bold"> Lorem ipsum dolor
                            sit amet, consectetur
                            adipiscing elit sit amet</p>
                        <Link to="#" className="text-sm bg-primary-ts_blue text-white rounded-button px-4 py-1 lg:py-2 shadow-lg border-primary-ts_blue border-2
                                    hover:bg-white hover:text-primary-ts_blue hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Manage Now
                        </Link>
                    </div>
                    <div className="col-span-7 grid grid-cols-2 gap-12">
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_blue rounded-lg py-8">
                            <div className="text-white">Logo</div>
                            <p className="text-white">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_purple rounded-lg py-8">
                            <div className="text-black">Logo</div>
                            <p className="text-black">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_purple rounded-lg py-8">
                            <div className="text-black">Logo</div>
                            <p className="text-black">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div
                            className="flex flex-col gap-y-8 justify-center items-center bg-primary-ts_blue rounded-lg py-8">
                            <div className="text-white">Logo</div>
                            <p className="text-white">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeManagePlayers;
