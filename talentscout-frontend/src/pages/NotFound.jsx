import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="font-poppins">
            <div className="container">
                <div className="flex flex-col items-center justify-center h-96 gap-y-8">
                    <div className="text-5xl font-semibold">404</div>
                    <div className="text-5xl font-semibold">Page Not Found :(</div>
                    <div>Sorry, we couldn&apos;t find the page.</div>
                    <Link to="/"
                          className="text-sm bg-primary-yellow text-black font-semibold rounded-button px-8 py-2 shadow-lg border-primary-ts_blue border-2
                            hover:border-primary-ts_blue hover:border-2 duration-300 ease-in-out w-fit transition-transform duration-3000 transform hover:scale-105">
                        Back To Homepage
                    </Link>
                </div>

            </div>


        </div>
    );
}

export default NotFound;