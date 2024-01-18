import React, {useState} from 'react';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SignUpComp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    function togglePasswordVisibility(e, field) {
        e.preventDefault();
        if (field === "password") {
            setIsPasswordVisible((prevState) => !prevState);
        } else if (field === "confirmPassword") {
            setIsConfirmPasswordVisible((prevState) => !prevState);
        }
    }

    return (
        <div className="font-poppins">
            <div className="container pt-16 grid grid-cols-2">
                <div className="pb-16 pe-16">
                    <div className="text-primary-ts_blue text-2xl font-bold">Create your account</div>
                    <form className="w-full py-8">
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0 relative">
                                <label className="text-primary-ts_blue text-lg font-semibold">Username</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="sign-up-username" type="text" placeholder="Your username"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0 relative">
                                <label className="text-primary-ts_blue text-lg font-semibold">Email</label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none" className="absolute left-6 top-11">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M14.4451 3C15.652 3 16.813 3.43647 17.6671 4.21965C18.5221 5.00118 19 6.05529 19 7.15882V13.6647C19 15.9624 16.957 17.8235 14.4451 17.8235H5.554C3.0421 17.8235 1 15.9624 1 13.6647V7.15882C1 4.86118 3.0331 3 5.554 3H14.4451ZM15.8771 8.38587L15.9491 8.31999C16.1642 8.08117 16.1642 7.73528 15.9392 7.49646C15.8141 7.37375 15.6422 7.29881 15.4631 7.28234C15.2741 7.27328 15.0941 7.33175 14.9582 7.44705L10.9001 10.4118C10.3781 10.8079 9.63024 10.8079 9.10014 10.4118L5.05014 7.44705C4.77024 7.25764 4.38324 7.28234 4.15014 7.5047C3.90714 7.72705 3.88014 8.08117 4.08624 8.32823L4.20414 8.43528L8.29914 11.3588C8.80314 11.7212 9.41424 11.9188 10.0541 11.9188C10.6922 11.9188 11.3141 11.7212 11.8172 11.3588L15.8771 8.38587Z"
                                          fill="black"/>
                                </svg>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="sign-up-email" type="email" placeholder="example@gmail.com"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0 relative">
                                <label className="text-primary-ts_blue text-lg font-semibold">Password</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="sign-up-password" type={isPasswordVisible ? "text" : "password"}
                                    placeholder="must be 8 characters"/>
                                <button className="absolute right-6 top-11"
                                        onClick={(e) => togglePasswordVisibility(e, "password")}>
                                    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-full px-3 md:mb-0 relative">
                                <label className="text-primary-ts_blue text-lg font-semibold">Confirm Password</label>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="sign-up-password-repeat" type={isConfirmPasswordVisible ? "text" : "password"}
                                    placeholder="repeat password"/>
                                <button className="absolute right-6 top-11"
                                        onClick={(e) => togglePasswordVisibility(e, "confirmPassword")}>
                                    <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 my-2">
                            <div className="w-1/2 px-3 md:mb-0 relative">
                                <label className="text-primary-ts_blue text-lg font-semibold">Role</label>
                                <select
                                    className="appearance-none cursor-pointer block w-full bg-white text-black placeholder-primary-light_gray border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none text-md font-semibold">
                                    <option className="text-primary-ts_blue text-md font-semibold">User</option>
                                    <option className="text-primary-ts_blue text-md font-semibold">Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-8 mb-6">
                            {/*SUBMIT BUTTON*/}
                            <button
                                className="w-full bg-primary-ts_blue text-white py-3 px-6 font-semibold rounded-lg">
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center mt-8 mb-2">
                        <div className="border-t border-black h-0 w-1/4"></div>
                        <p className="mx-4">Or Sign up with</p>
                        <div className="border-t border-black h-0 w-1/4"></div>
                    </div>
                    <div className="flex flex-wrap mt-8 mb-2">
                        <button
                            className="block w-full bg-white text-primary-ts_blue font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">
                            <img src={import.meta.env.BASE_URL + 'user-google.png'} alt="google-logo"
                                 className="inline me-2"></img> Sign up
                            with Google
                        </button>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <button
                            className="block w-full bg-white text-primary-ts_blue font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">
                            <img src={import.meta.env.BASE_URL + 'user-facebook.png'} alt="google-logo"
                                 className="inline me-2"></img>Sign up with
                            Facebook
                        </button>
                    </div>
                    <div>
                        Already have an account?&nbsp;
                        <a className="underline cursor-pointer font-semibold text-primary-ts_blue" href="#">
                            Log in
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="h-full"
                         style={{
                             background: 'linear-gradient(180deg, #0C1857 0%, #3587C4 71.1%, #46B3F1 100%)',
                             borderTopLeftRadius: '20px'
                         }}>
                        <div className="flex flex-col justify-center items-center pt-36">
                            <div className="text-white font-semibold text-3xl">Welcome to TalentScout</div>
                            <div className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpComp;