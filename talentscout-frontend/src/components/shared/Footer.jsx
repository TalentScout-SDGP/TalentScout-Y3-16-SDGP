import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-primary-ts_blue text-white font-poppins">
            <div className="container grid grid-cols-12 py-8">
                <div className="flex flex-col col-span-4 gap-y-4">
                    <h2 className="text-4xl font-semibold">TalentScout</h2>
                    <div className="flex gap-x-8 items-center ">
                        <a className="self-center" href="#">
                            <img className="w-6 mt-[3px]" src="../../../public/Twitter.png" alt="Twitter"></img>
                        </a>
                        <a className="self-center" href="#">
                            <img className="w-8" src="../../../public/LinkedIn.png" alt="LinkedIn"></img>
                        </a>
                        <a className="self-center" href="#">
                            <img className="w-8" src="../../../public/Facebook.png" alt="Facebook"></img>
                        </a>
                        <a className="self-center" href="#">
                            <img className="w-8 mt-[2px]" src="../../../public/Instagram.png" alt="Instagram"></img>
                        </a>
                    </div>
                    <div className="">
                        <img className="w-68" src="../../../public/dummy_qr.png" alt="QR Code"></img>
                    </div>
                </div>
                <div className=" flex flex-col gap-y-4 text-white col-span-3 mt-16">
                    <Link to="/aboutus" className="text-md">
                        About Us
                    </Link>
                    <Link to="/ourteam" className="text-md">
                        Our Team
                    </Link>
                </div>
                <div className="col-span-5 pt-4 ">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full md:w-1/2 px-3 md:mb-0">
                                <input
                                    className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none "
                                    id="footer-first-name" type="text" placeholder="First Name"/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input
                                    className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="footer-last-name" type="text" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <input
                                    className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="footer-email" type="email" placeholder="Enter Your Email"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                        <textarea id="message" rows="6"
                                  className="appearance-none block w-full bg-primary-footer_gray text-white placeholder-white border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none resize-none"
                                  placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button
                            className="float-end bg-[#D9D9D9] text-black py-2 px-6 font-semibold rounded-2xl transition-transform duration-3000 transform hover:scale-105">Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
