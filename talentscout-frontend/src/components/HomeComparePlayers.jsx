import React from 'react';
import {Link} from "react-router-dom";
import {faSquarePlus, faBook, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HomeManagePlayers() {
    const iconSize = "2x";

    return (
        <div className="font-poppins">
            <div className="md:container px-8">
                <div
                    className="bg-primary-ts_purple flex flex-col gap-y-6 justify-center items-center rounded-lg p-16">
                    <div className="flex flex-col justify-center gap-y-4">
                        <p className="text-black text-base lg:text-2xl font-bold text-center leading-relaxed">
                            Duis vel arcu porta
                        </p>
                        <p className="text-black text-base lg:text-lg font-bold text-center leading-relaxed w-4/5 mx-auto">
                            Duis vel arcu porta sapien fringilla congue. Praesent mollis turpis quam, vel hendrerit
                            lectus faucibus blandit. Nunc sollicitudin odio eu sem mattis congue. Etiam eu leo vehicula.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 justify-center items-center gap-x-8">
                        <div className="text-center">
                            <img className="w-3/5 mx-auto" src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
                                 alt="player-dummy-image"></img>
                        </div>
                        <div className="text-center">
                            <img className="w-2/5 mx-auto" src={import.meta.env.BASE_URL + 'versus-image.png'}
                                 alt="versus-image"></img>
                        </div>
                        <div className="text-center">
                            <img className="w-3/5 mx-auto" src={import.meta.env.BASE_URL + 'Player-dummy-image.png'}
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

export default HomeManagePlayers;
