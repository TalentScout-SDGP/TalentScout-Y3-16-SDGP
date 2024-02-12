import React from 'react';

const OurTeam = () => {
  return (
    <div className="font-poppins">
      <div className="container mx-auto">
        <div className="lg:h-96 my-16 grid lg:grid-cols-2 rounded-lg bg-primary-ts_purple shadow-xl">
          <div className="flex flex-col justify-center px-6 lg:ps-16">
            <h1 className="font-bold text-2xl lg:text-3xl text-center lg:text-left mb-4 lg:mb-0 pt-4">
              Meet Our Team
            </h1>
            <div className="py-4 lg:text-left sm:text-center text-center">
              Meet the dedicated individuals who make up our dynamic team. From creative minds shaping our
              innovative projects to meticulous professionals ensuring smooth operations, our
              collaborative spirit drives us forward. We believe in the power of teamwork, diversity, and
              a shared commitment to excellence. Together, we are more than a team; We are a family
              working towards a common goal. Get to know the faces behind our success and discover the
              talents that propel us to new heights.
            </div>
          </div>
          <div className="flex justify-center items-center px-8">
            <img src={import.meta.env.BASE_URL + 'OurTeam(Up).png'} alt="team" className="rounded-lg lg:w-full pb-6 object-contain h-96 w-96"/>
          </div>
        </div>

        {/* Member Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-9 gap-y-6 lg:gap-y-11 pb-11 place-items-center">
          {/* Member 1 */}
          <div className="transition duration-300 ease-in-out hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Dulhan.jpg'} alt="teamleader" className="rounded-lg" />
            <div className="pt-2 font-bold text-center">Dulhan Perera</div>
            <div className="text-center">Team Leader</div>
          </div>

          {/* Member 2 */}
          <div className="transition duration-300 ease-in-out hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Dinuka.jpg'} alt="Dinuka" className="rounded-lg" />
            <div className="pt-2 font-bold text-center">Dinuka Amarasinghe</div>
            <div className="text-center">Team Member</div>
          </div>

          {/* Member 3 */}
          <div className="transition duration-300 ease-in-out hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Sulan.jpg'} alt="team" className="rounded-lg" />
            <div className="pt-2 font-bold text-center">Sulan Kumarapperuma</div>
            <div className="text-center">Team Member</div>
          </div>

          {/* Member 4 */}
          <div className="transition duration-300 ease-in-out hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Linuka.jpg'} alt="team" className="rounded-lg" />
            <div className="pt-2 font-bold text-center">Linuka Rivi Rihan</div>
            <div className="text-center">Team Member</div>
          </div>

          {/* Member 5 */}
          <div className="transition duration-300 ease-in-out hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Chamath.jpg'} alt="team" className="rounded-lg" />
            <div className="pt-2 font-bold text-center">Chamath Mahapatuna</div>
            <div className="text-center">Team Member</div>
          </div>

          {/* Member 6 */}
          <div className=" transition duration-300 ease-in-out hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Agrani.jpg'} alt="team" className="rounded-lg" />
            <div className="pt-2 font-bold text-center">Agrani Ranathunga</div>
            <div className="text-center">Team Member</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
