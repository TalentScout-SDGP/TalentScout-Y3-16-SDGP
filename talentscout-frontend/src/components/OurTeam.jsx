function OurTeam() {
    return (
        <div className="font-poppins">
            <div className="container">
                <div className="h-96 my-16 grid grid-cols-2 rounded-lg bg-primary-ts_purple shadow-xl">
                    <div className="flex flex-col justify-center ps-16">
                        <h1 className="font-bold text-3xl">Meet Our Team</h1>
                        <div className="text-justify py-6">
                            Meet the dedicated individuals who make up our dynamic team. From creative minds shaping our
                            innovative projects to meticulous professionals ensuring smooth operations, our
                            collaborative spirit drives us forward. We believe in the power of teamwork, diversity, and
                            a shared commitment to excellence. Together, we are more than a team; we are a family
                            working towards a common goal. Get to know the faces behind our success and discover the
                            talents that propel us to new heights.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={import.meta.env.BASE_URL + ''} alt="team" className="rounded-lg"/>
                    </div>
                </div>

                {/*Member Details*/}
                <div className="grid grid-cols-3 gap-x-9 gap-y-11 pb-11 place-items-center">
                    <div className="">
                        <img src={import.meta.env.BASE_URL + 'profile-photo-2.jpg'} alt="team" className="rounded-lg"/>
                        <div className="pt-2 font-bold text-center">Dulhan Perera</div>
                        <div className="text-center">Team Leader</div>
                    </div>
                    <div className="">
                        <img src={import.meta.env.BASE_URL + 'profile-photo-2.jpg'} alt="team" className="rounded-lg"/>
                        <div className="pt-2 font-bold text-center">Dinuka Heshan</div>
                        <div className="text-center">Team Member</div>
                    </div>
                    <div className="">
                        <img src={import.meta.env.BASE_URL + 'profile-photo-2.jpg'} alt="team" className="rounded-lg"/>
                        <div className="pt-2 font-bold text-center">Sulan Kumarapperuma</div>
                        <div className="text-center">Team Member</div>
                    </div>
                    <div className="">
                        <img src={import.meta.env.BASE_URL + 'profile-photo-2.jpg'} alt="team" className="rounded-lg"/>
                        <div className="pt-2 font-bold text-center">Linuka Rivi Rihan</div>
                        <div className="text-center">Team Member</div>
                    </div>
                    <div className="">
                        <img src={import.meta.env.BASE_URL + 'profile-photo-2.jpg'} alt="team" className="rounded-lg"/>
                        <div className="pt-2 font-bold text-center">Chamath Mahapatuna</div>
                        <div className="text-center">Team Member</div>
                    </div>
                    <div className="">
                        <img src={import.meta.env.BASE_URL + 'profile-photo-2.jpg'} alt="team" className="rounded-lg"/>
                        <div className="pt-2 font-bold text-center">Agrani Ranathunga</div>
                        <div className="text-center">Team Member</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;