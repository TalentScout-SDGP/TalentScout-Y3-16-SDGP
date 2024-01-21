import React, {useState} from 'react';

function PlayerProfilesSearch() {

    return (
        <div className="font-poppins">
            <div className="md:container px-8">
                <div className="bg-primary-ts_blue grid grid-cols-1 my-8 shadow-outer rounded-3xl px-10 sm:px-10 py-20">
                    <div className="flex flex-col items-center justify-center">
                        <input type="text"
                               className="lg:w-1/2 md:w-96 bg-primary-ts_purple sm:w-80 py-3 rounded-2xl mb-3 text-left ps-6 pe-"
                               placeholder="Player Name">

                        </input>
                        <button className="bg-primary-yellow text-black px-4 py-2 rounded-3xl mt-3">
                            <img src={import.meta.env.BASE_URL + 'search-icon.png'} alt="search-icon"
                                 className="inline me-2"></img>
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default PlayerProfilesSearch;