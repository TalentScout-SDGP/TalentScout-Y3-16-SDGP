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

