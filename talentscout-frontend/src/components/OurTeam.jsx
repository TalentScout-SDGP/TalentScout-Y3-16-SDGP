import React from 'react';

const OurTeam = () => {
    return (
        <div className="font-poppins">
            <div className="md:container px-8">
                <div className="my-12 grid lg:grid-cols-2 rounded-lg bg-primary-ts_purple shadow-xl">
                    <div className="flex flex-col justify-center px-6 lg:ps-16">
                        <h1 className="font-bold text-2xl lg:text-3xl text-center lg:text-left mb-2 lg:mb-0 pt-4">
                            Meet Our Team
                        </h1>
                        <div
                            className="hidden xl:block py-2 lg:text-left text-sm lg:text-base sm:text-center text-center">
                            Meet the dedicated individuals who make up our dynamic team. From creative minds shaping our
                            innovative projects to meticulous professionals ensuring smooth operations, our
                            collaborative spirit drives us forward. We believe in the power of teamwork, diversity, and
                            a shared commitment to excellence. Together, we are more than a team; We are a family
                            working towards a common goal. Get to know the faces behind our success and discover the
                            talents that propel us to new heights.
                        </div>
                        <div
                            className="block xl:hidden py-4 lg:text-left text-sm lg:text-base sm:text-center text-center">
                            Meet the dedicated individuals who make up our dynamic team. From creative minds shaping our
                            innovative projects to meticulous professionals ensuring smooth operations, our
                            collaborative spirit drives us forward. We believe in the power of teamwork, diversity, and
                            a shared commitment to excellence.
                        </div>
                    </div>
                    <div className="flex justify-center items-center ps-4 my-4">
                        <img src={import.meta.env.BASE_URL + 'All.png'} alt="team"
                             className="rounded-lg object-contain w-4/5 md:w-3/5 lg:w-4/5"/>
                    </div>
                </div>

                {/* Member Details */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-9 gap-y-6 lg:gap-y-11 pb-11 place-items-center">
                    {/* Member 1 */}
                    <div className="transition duration-300 ease-in-out hover:scale-105 w-3/5">
                        <div className='select-none'>
                            <img src={import.meta.env.BASE_URL + 'DulhanMin-1.jpg'} alt="teamleader"
                                 className="object-contain rounded-2xl w-full mx-auto"/>
                        </div>
                        <div className="pt-2 font-bold text-center text-sm xl:text-base -mx-3">Dulhan Perera</div>
                        <div className="text-center text-sm xl:text-base">Team Leader</div>
                    </div>

                    {/* Member 2 */}
                    <div className="transition duration-300 ease-in-out hover:scale-105 w-3/5">
                        <div className='select-none'>
                            <img src={import.meta.env.BASE_URL + 'DinukaMin-1.jpg'} alt="team_member"
                                 className="object-contain rounded-2xl w-full mx-auto"/>
                        </div>
                        <div className="pt-2 font-bold text-center text-sm xl:text-base -mx-3">Dinuka Heshan</div>
                        <div className="text-center text-sm xl:text-base">Team Member</div>
                    </div>

                    {/* Member 3 */}
                    <div className="transition duration-300 ease-in-out hover:scale-105 w-3/5">
                        <div className='select-none'>
                            <img src={import.meta.env.BASE_URL + 'SulanMin-1.jpg'} alt="team_member"
                                 className="object-contain rounded-2xl w-full mx-auto"/>
                        </div>
                        <div className="pt-2 font-bold text-center text-sm xl:text-base -mx-3">Sulan Kumarapperuma</div>
                        <div className="text-center text-sm xl:text-base">Team Member</div>
                    </div>

                    {/* Member 4 */}
                    <div className="transition duration-300 ease-in-out hover:scale-105 w-3/5">
                        <div className='select-none'>
                            <img src={import.meta.env.BASE_URL + 'LinukaMin-1.jpg'} alt="team_member"
                                 className="object-contain rounded-2xl w-full mx-auto"/>
                        </div>
                        <div className="pt-2 font-bold text-center text-sm xl:text-base -mx-3">Linuka Rivi Rihan</div>
                        <div className="text-center text-sm xl:text-base">Team Member</div>
                    </div>

                    {/* Member 5 */}
                    <div className="transition duration-300 ease-in-out hover:scale-105 w-3/5 h-full">
                        <div className='select-none'>
                            <img src={import.meta.env.BASE_URL + 'ChamathMin-1.jpg'} alt="team_member"
                                 className="object-contain rounded-2xl w-full h-full mx-auto"/>
                        </div>
                        <div className="pt-2 font-bold text-center text-sm xl:text-base -mx-3">Chamath Mahapatuna</div>
                        <div className="text-center text-sm xl:text-base">Team Member</div>
                    </div>

                    {/* Member 6 */}
                    <div className="transition duration-300 ease-in-out hover:scale-105 w-3/5">
                        <div className='select-none'>
                            <img src={import.meta.env.BASE_URL + 'AgraniMin-1.jpg'} alt="team_member"
                                 className="object-contain rounded-2xl w-full mx-auto"/>
                        </div>
                        <div className="pt-2 font-bold text-center text-sm xl:text-base -mx-3">Agrani
                            Ranathunga
                        </div>
                        <div className="text-center text-sm xl:text-base">Team Member</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
