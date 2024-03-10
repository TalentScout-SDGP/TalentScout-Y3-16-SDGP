import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g46mydq', 'template_mmgh86u', form.current, {
        publicKey: 'HJHOhxbOD1xvPy6bS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-wrap -mx-3 my-2">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <input
            className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none text-sm md:text-md lg:text-base"
            id="footer-first-name" type="text" placeholder="First Name" name="user_name" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none text-sm md:text-md lg:text-base"
            id="footer-last-name" type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <input
            className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none text-sm md:text-md lg:text-base"
            id="footer-email" type="email" placeholder="Enter Your Email" name="user_email" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <textarea id="message" rows="6"
            className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none resize-none text-sm md:text-md lg:text-base"
            placeholder="Message" name="message"></textarea>
        </div>
      </div>
      <div className="flex lg:block justify-center lg:justify-end">
        <button
          className="lg:float-end bg-primary-footer_button text-black py-2 px-6 font-semibold rounded-2xl transition-transform duration-3000 transform hover:scale-105 text-sm md:text-md lg:text-base">Send
        </button>
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <div className="bg-primary-ts_blue text-white font-poppins">
      <div className="md:container grid grid-cols-12 py-8 gap-y-8">
        <div className="flex flex-col col-span-12 lg:col-span-4 gap-y-8 items-center lg:items-start order-3 lg:order-1">
          <h2 className="lg:block hidden text-4xl font-semibold">TalentScout</h2>
          <div className="flex gap-x-8 items-center md:mt-8 lg:mt-0">
            <a className="self-center transition-transform duration-3000 transform hover:scale-125"
              href="https://twitter.com/talentScout111">
              <img className="w-6 mt-[3px]" src={import.meta.env.BASE_URL + 'Twitter.png'}
                alt="Twitter"></img>
            </a>
            <a className="self-center transition-transform duration-3000 transform hover:scale-125"
              href="#">
              <img className="w-8" src={import.meta.env.BASE_URL + 'LinkedIn.png'} alt="LinkedIn">
              </img>
            </a>
            <a className="self-center transition-transform duration-3000 transform hover:scale-125"
              href="#">
              <img className="w-8" src={import.meta.env.BASE_URL + 'Facebook.png'} alt="Facebook"></img>
            </a>
            <a className="self-center transition-transform duration-3000 transform hover:scale-125"
              href="https://www.instagram.com/talentscout46/">
              <img className="w-8 mt-[2px]" src={import.meta.env.BASE_URL + 'Instagram.png'}
                alt="Instagram"></img>
            </a>
          </div>
          <div className="">
            <img className="w-60" src={import.meta.env.BASE_URL + 'qr-code.png'} alt="QR Code"></img>
          </div>
        </div>
        <div className="flex lg:gap-y-6 flex-col gap-y-4 md:gap-y-8 text-white col-span-12 lg:col-span-3 md:mt-8 lg:mt-16 lg:ps-0 items-center lg:items-start order-2 lg:order-2">
          <Link to="/about_us" className="text-sm md:text-md lg:text-base">
            About Us
          </Link>
          <Link to="/our_team" className="text-sm md:text-md lg:text-base">
            Our Team
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-5 pt-4 items-center lg:items-start order-1 lg:order-3 px-4 lg:px-0">
          <h2 className="lg:hidden block mb-2 md:mb-8 text-lg lg:text-2xl xl:text-4xl font-semibold">TalentScout</h2>
          <h2 className="font-semibold mb-2 md:mb-8 lg:mb-0 lg text-base md:text-lg lg:text-2xl">Contact
            Us</h2>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Footer;
