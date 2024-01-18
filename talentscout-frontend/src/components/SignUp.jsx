import React from 'react';

function SignUp() {
    return (
        <div className="font-poppins">
            <div className="container py-16 grid grid-cols-2">
                <div className="px-16">
                    <div className="text-primary-ts_blue text-2xl font-bold">Create your account</div>
                    <form className="w-full py-8">
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0">
                                <label className="text-primary-ts_blue text-lg font-semibold">Username</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="footer-first-name" type="text" placeholder="Your username"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0">
                                <label className="text-primary-ts_blue text-lg font-semibold">Email</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="footer-first-name" type="text" placeholder="example@gmail.com"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0">
                                <label className="text-primary-ts_blue text-lg font-semibold">Password</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="footer-first-name" type="text" placeholder="must be 8 characters"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0">
                                <label className="text-primary-ts_blue text-lg font-semibold">Confirm Password</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="footer-first-name" type="text" placeholder="repeat password"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-1/2 px-3 md:mb-0">
                                <label className="text-primary-ts_blue text-lg font-semibold">Role</label>
                                <select
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none text-md font-semibold">
                                    <option className="text-primary-ts_blue text-md font-semibold">User</option>
                                    <option className="text-primary-ts_blue text-md font-semibold">Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-8 mb-6">
                            <button
                                className="w-full bg-primary-ts_blue text-white py-3 px-6 font-semibold rounded-lg">
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-start">
                        <div className="border-t border-black h-0 w-1/4"></div>
                        <p className="mx-4">Or Sign up with</p>
                        <div className="border-t border-black h-0 w-1/4"></div>
                    </div>
                    <div className="flex flex-wrap mt-8 mb-2">
                        <button
                            className="block w-full bg-white text-primary-ts_blue font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">
                            Sign up with Google
                        </button>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <button
                            className="block w-full bg-white text-primary-ts_blue font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">
                            Sign up with Facebook
                        </button>
                    </div>
                    <div>
                        Already have an account?&nbsp;
                        <a className="underline cursor-pointer font-semibold text-primary-ts_blue" href="#">
                            Log in
                        </a>
                    </div>
                </div>
                <div>
                    <div className="text-primary-ts_blue text-2xl font-bold">Create your account</div>

                </div>
            </div>
        </div>
    );
}

export default SignUp;