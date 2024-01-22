import React from 'react';

function OurTeam(props) {
    return (
        <div className="font-poppins">
            <div className="container">
                <div className="h-96 my-16 grid grid-cols-2 rounded-lg bg-primary-ts_purple shadow-xl">
                    <div className="flex flex-col justify-center ps-16">
                        <h1 className="font-bold text-3xl">Meet Our Team</h1>
                        <div className="text-justify py-6">
                            Meet the dedicated individuals who make up our dynamic team. From creative minds shaping our innovative projects to meticulous professionals ensuring smooth operations, our collaborative spirit drives us forward. We believe in the power of teamwork, diversity, and a shared commitment to excellence. Together, we are more than a team; we are a family working towards a common goal. Get to know the faces behind our success and discover the talents that propel us to new heights.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={import.meta.env.BASE_URL + ''} alt="team" className="rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;