import React from 'react';
import {Link} from "react-router-dom";

function CRUDAddNewPlayer() {
    return(
        <div className="font-poppins">
            <div className="md:container mt-16 mb-16">
                <div className="lg:flex lg:flex-col bg-primary-ts_purple mx-4 rounded-lg">
                    <div
                        className="flex justify-between bg-primary-ts_blue text-white lg:text-xl md:text-base sm:text-sm lg:p-4 font-semibold rounded-lg p-4">
                        <p className="p-1.5">Add New Player</p>
                        <img src={import.meta.env.BASE_URL + 'plus.png'} alt="plus"
                             className=""/>
                    </div>
                    <div className="lg:pt-8 lg:px-8 text-xl">
                        <form className="mx-auto text-left p-6">
                            <div className="mb-5">
                                <label htmlFor="large-input"
                                       className="block mb-2 text-base font-semibold">Full Name : </label>
                                <input type="text" id="large-input"
                                       className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5"/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="large-input"
                                       className="block mb-2 text-base font-semibold">Also Known As : </label>
                                <input type="text" id="large-input"
                                       className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5"/>
                            </div>
                            <div className="flex flex-col-2">
                                <div className="pt-1.5">
                                    <label htmlFor="large-input"
                                           className="block mb-2 text-base font-semibold">Date of Birth : </label>
                                </div>
                                <div className="ml-4 pb-3">
                                    <input type="date" id="large-input"
                                           className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5"/>
                                </div>
                            </div>
                            <div className="lg:grid lg:grid-cols-3 gap-6">
                                <div>
                                    <div className="mb-5">
                                        <label htmlFor="large-input"
                                               className="block mb-2 text-base font-semibold">Bowling Style : </label>
                                        <input type="text" id="large-input"
                                               className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5 "/>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-5">
                                        <label htmlFor="large-input"
                                               className="block mb-2 text-base font-semibold">Batting Style : </label>
                                        <input type="text" id="large-input"
                                               className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5 "/>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-5">
                                        <label htmlFor="large-input"
                                               className="block mb-2 text-base font-semibold">Playing Role : </label>
                                        <input type="text" id="large-input"
                                               className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-1.5 "/>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="flex justify-left mt-4 pb-8 px-6">
                            <Link
                                to=""
                                className="text-xs lg:text-sm font-semibold bg-primary-yellow text-black rounded-button px-4 py-1 lg:py-2 shadow-lg
                                    duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                            Continue
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRUDAddNewPlayer;