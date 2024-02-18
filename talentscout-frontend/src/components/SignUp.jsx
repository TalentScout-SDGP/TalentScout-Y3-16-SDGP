import {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Spinner from "./shared/Spinner.jsx";


function SignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidPassword2, setIsValidPassword2] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPassword2, setErrorPassword2] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password2: '',
        is_superuser: false
    });
    const navigate = useNavigate();

    const {email, first_name, last_name, password, password2, is_superuser} = formData;

    const handleSignUpWithGoogle = async (response) => {
        const payload = response.credential
        const server_res = await axios.post("http://localhost:8000/api/auth/google/", {'access_token': payload})
        const user = {
            "email": server_res.data.email,
            "names": server_res.data.full_name
        }
        if (server_res.status === 200) {
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('access', JSON.stringify(server_res.data.access_token))
            localStorage.setItem('refresh', JSON.stringify(server_res.data.refresh_token))
            window.location.href = '/';
            toast.success("Login Successful!")
        }
    }

    useEffect(() => {
        const initializeGoogleSignIn = () => {
            /* global google */
            if (typeof google !== 'undefined') {
                google.accounts.id.initialize({
                    client_id: import.meta.env.VITE_CLIENT_ID,
                    callback: handleSignUpWithGoogle
                });

                google.accounts.id.renderButton(
                    document.getElementById("signInDiv"),
                    {
                        theme: "outline",
                        size: "large",
                        text: "continue_with",
                        shape: "circle",
                        width: "280",
                        locale: "en"
                    }
                );
            } else {
                console.error("Google API is not yet loaded.");
            }
        };
        const timeoutId = setTimeout(initializeGoogleSignIn, 500);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleChange = (e) => {
        if (e.target.name === 'password' || e.target.name === 'password2') {
            if (e.target.name === 'password') {
                const newPassword = e.target.value;
                const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(newPassword);
                setErrorPassword(!isValidPassword);
                setIsValidPassword(isValidPassword)
            } else if (e.target.name === 'password2') {
                const newPassword = e.target.value;
                const isValidPassword2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(newPassword);
                setErrorPassword2(!isValidPassword2);
                setIsValidPassword2(isValidPassword2)
            }
            if (!isValidPassword || !isValidPassword2) {
                setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
            } else {
                setError('');
            }
        }
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (is_superuser === "Admin") {
            console.log(is_superuser)
            formData.is_superuser = true
        }
        if (!email || !first_name || !last_name || !password || !password2) {
            setError('All fields are required!');
        } else if (password !== password2) {
            setError('Passwords do not match!');
        } else if (password.length < 8 || password2.length < 8) {
            setError('Password should be minimum 8 characters!');
        } else {
            setIsLoading(true);
            const res = await axios.post("http://localhost:8000/api/auth/register/", formData)
            const response = res.data
            console.log(response)
            if (res.status === 201) {
                setIsLoading(false)
                navigate('/verify_otp')
                toast.success(response.message)
            } else {
                setIsLoading(false)
                setError('Something went wrong, Please try again.');
            }
        }
    }

    function togglePasswordVisibility(e, field) {
        e.preventDefault();
        if (field === "password") {
            setIsPasswordVisible((prevState) => !prevState);
        } else if (field === "password2") {
            setIsConfirmPasswordVisible((prevState) => !prevState);
        }
    }

    if (!isLoading) {
        return (
            <div className="font-poppins">
                <div className="container pt-16 grid grid-cols-1 lg:grid-cols-2">
                    <div className="pb-16 lg:pe-16">
                        <div className="lg:hidden text-primary-ts_blue text-2xl font-bold">Welcome to TalentScout</div>
                        <div className="text-primary-ts_blue mt-5 lg:mt-0 text-lg lg:text-2xl font-bold">Create your
                            account
                        </div>
                        <form className="w-full py-4 lg:py-8" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 my-2">
                                <div className="w-full px-3 md:mb-0 relative">
                                    <label className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Email
                                        Address</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none" className="absolute left-6 top-11">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M14.4451 3C15.652 3 16.813 3.43647 17.6671 4.21965C18.5221 5.00118 19 6.05529 19 7.15882V13.6647C19 15.9624 16.957 17.8235 14.4451 17.8235H5.554C3.0421 17.8235 1 15.9624 1 13.6647V7.15882C1 4.86118 3.0331 3 5.554 3H14.4451ZM15.8771 8.38587L15.9491 8.31999C16.1642 8.08117 16.1642 7.73528 15.9392 7.49646C15.8141 7.37375 15.6422 7.29881 15.4631 7.28234C15.2741 7.27328 15.0941 7.33175 14.9582 7.44705L10.9001 10.4118C10.3781 10.8079 9.63024 10.8079 9.10014 10.4118L5.05014 7.44705C4.77024 7.25764 4.38324 7.28234 4.15014 7.5047C3.90714 7.72705 3.88014 8.08117 4.08624 8.32823L4.20414 8.43528L8.29914 11.3588C8.80314 11.7212 9.41424 11.9188 10.0541 11.9188C10.6922 11.9188 11.3141 11.7212 11.8172 11.3588L15.8771 8.38587Z"
                                              fill="black"/>
                                    </svg>
                                    <input
                                        className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                        id="sign-up-email" type="email" name='email' placeholder="example@gmail.com"
                                        value={email}
                                        onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 my-2">
                                <div className="w-full px-3 md:mb-0 relative">
                                    <label
                                        className="text-primary-ts_blue text-sm lg:text-lg font-semibold">First
                                        Name</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20"
                                         fill="none" className="absolute left-6 top-11">
                                        <path
                                            d="M8.49951 10C9.78771 10 11.0231 9.47322 11.934 8.53553C12.8449 7.59785 13.3567 6.32608 13.3567 5C13.3567 3.67392 12.8449 2.40215 11.934 1.46447C11.0231 0.526784 9.78771 0 8.49951 0C7.21132 0 5.97588 0.526784 5.06499 1.46447C4.1541 2.40215 3.64237 3.67392 3.64237 5C3.64237 6.32608 4.1541 7.59785 5.06499 8.53553C5.97588 9.47322 7.21132 10 8.49951 10ZM6.76536 11.875C3.02764 11.875 -0.000488281 14.9922 -0.000488281 18.8398C-0.000488281 19.4805 0.504199 20 1.12652 20H15.8725C16.4948 20 16.9995 19.4805 16.9995 18.8398C16.9995 14.9922 13.9714 11.875 10.2337 11.875H6.76536Z"
                                            fill="black"/>
                                    </svg>
                                    <input
                                        className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                        id="sign-up-first-name" type="text" name='first_name'
                                        placeholder="Your First name"
                                        value={first_name}
                                        onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 my-2">
                                <div className="w-full px-3 md:mb-0 relative">
                                    <label
                                        className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Last
                                        Name</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20"
                                         fill="none" className="absolute left-6 top-11">
                                        <path
                                            d="M8.49951 10C9.78771 10 11.0231 9.47322 11.934 8.53553C12.8449 7.59785 13.3567 6.32608 13.3567 5C13.3567 3.67392 12.8449 2.40215 11.934 1.46447C11.0231 0.526784 9.78771 0 8.49951 0C7.21132 0 5.97588 0.526784 5.06499 1.46447C4.1541 2.40215 3.64237 3.67392 3.64237 5C3.64237 6.32608 4.1541 7.59785 5.06499 8.53553C5.97588 9.47322 7.21132 10 8.49951 10ZM6.76536 11.875C3.02764 11.875 -0.000488281 14.9922 -0.000488281 18.8398C-0.000488281 19.4805 0.504199 20 1.12652 20H15.8725C16.4948 20 16.9995 19.4805 16.9995 18.8398C16.9995 14.9922 13.9714 11.875 10.2337 11.875H6.76536Z"
                                            fill="black"/>
                                    </svg>
                                    <input
                                        className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                        id="sign-up-last-name" type="text" name='last_name' placeholder="Your Last name"
                                        value={last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 my-2">
                                <div className="w-full px-3 md:mb-0 relative">
                                    <label
                                        className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Password</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                         fill="none" className="absolute left-6 top-11">
                                        <g clipPath="url(#clip0_2840_130)">
                                            <path
                                                d="M5.30166 4.5V6H11.0332V4.5C11.0332 3.11875 9.75073 2 8.16741 2C6.58408 2 5.30166 3.11875 5.30166 4.5ZM3.00906 6V4.5C3.00906 2.01562 5.31957 0 8.16741 0C11.0152 0 13.3258 2.01562 13.3258 4.5V6H13.8989C15.1634 6 16.1915 6.89687 16.1915 8V14C16.1915 15.1031 15.1634 16 13.8989 16H2.43591C1.1714 16 0.143311 15.1031 0.143311 14V8C0.143311 6.89687 1.1714 6 2.43591 6H3.00906Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2840_130">
                                                <rect width="16.0482" height="16" fill="white"
                                                      transform="translate(0.143311)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <input
                                        className={`appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none 
                                        ${isValidPassword ? 'border-green-500' : errorPassword && !isValidPassword ? 'border-red-500' : 'border-black'}`}
                                        id="sign-up-password"
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        placeholder="must be 8 characters"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                    <div className="cursor-pointer absolute right-6 top-11"
                                         onClick={(e) => togglePasswordVisibility(e, "password")}>
                                        <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 my-2">
                                <div className="w-full px-3 md:mb-0 relative">
                                    <label className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Confirm
                                        Password</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                         fill="none" className="absolute left-6 top-11">
                                        <g clipPath="url(#clip0_2840_130)">
                                            <path
                                                d="M5.30166 4.5V6H11.0332V4.5C11.0332 3.11875 9.75073 2 8.16741 2C6.58408 2 5.30166 3.11875 5.30166 4.5ZM3.00906 6V4.5C3.00906 2.01562 5.31957 0 8.16741 0C11.0152 0 13.3258 2.01562 13.3258 4.5V6H13.8989C15.1634 6 16.1915 6.89687 16.1915 8V14C16.1915 15.1031 15.1634 16 13.8989 16H2.43591C1.1714 16 0.143311 15.1031 0.143311 14V8C0.143311 6.89687 1.1714 6 2.43591 6H3.00906Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2840_130">
                                                <rect width="16.0482" height="16" fill="white"
                                                      transform="translate(0.143311)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <input
                                        className={`appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-10 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none 
                                        ${isValidPassword2 ? 'border-green-500' : errorPassword2 && !isValidPassword2 ? 'border-red-500' : 'border-black'}`}
                                        id="sign-up-password-repeat"
                                        type={isConfirmPasswordVisible ? "text" : "password"}
                                        placeholder="repeat password"
                                        name='password2'
                                        value={password2}
                                        onChange={handleChange}
                                    />
                                    <div className="cursor-pointer absolute right-6 top-11"
                                         onClick={(e) => togglePasswordVisibility(e, "password2")}>
                                        <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEyeSlash : faEye}/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:mb-0 relative">
                                <label className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Role</label>
                                <select value={is_superuser} onChange={handleChange} name='is_superuser'
                                        className="appearance-none cursor-pointer text-sm lg:text-md block w-full bg-white text-black placeholder-primary-light_gray border
                                    border-black focus:outline-none rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup text-md font-semibold">
                                    <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">User
                                    </option>
                                    <option className="text-primary-ts_blue text-sm lg:text-md font-semibold">Admin
                                    </option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     width="22" height="26" viewBox="0 0 30 26" fill="none"
                                     className="absolute top-10 right-2 cursor-pointer">
                                    <rect width="30" height="26" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                 height="1">
                                            <use xlinkHref="#image0_2840_144"
                                                 transform="matrix(0.00416667 0 0 0.00480769 0 -0.0769231)"/>
                                        </pattern>
                                        <image id="image0_2840_144" width="240" height="240"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-wrap mt-8 mb-6">
                                <p className='font-semibold text-red-500 my-4'>{error ? error : ''} </p>
                                <button
                                    className="w-full bg-primary-ts_blue text-white text-sm lg:text-base py-3 px-6 font-semibold rounded-lg">
                                    Create account
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex items-center justify-center mt-2 mb-2">
                            <div className="border-t border-black h-0 w-1/3"></div>
                            <p className="w-1/3 text-center text-xs sm:text-base">Or Sign up with</p>
                            <div className="border-t border-black h-0 w-1/3"></div>
                        </div>
                        {/*<div className="flex flex-wrap mt-8 mb-2">*/}
                        {/*    <button*/}
                        {/*        className="block w-full bg-white text-primary-ts_blue text-sm lg:text-md font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">*/}
                        {/*        <img src={import.meta.env.BASE_URL + 'user-google.png'} alt="google-logo"*/}
                        {/*             className="inline me-2"></img> Sign up*/}
                        {/*        with Google*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        <div className="flex flex-wrap mt-8 mb-2">
                            <div id="signInDiv" className="w-full"></div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <button
                                className="block w-full bg-white text-primary-ts_blue text-sm lg:text-md font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">
                                <img src={import.meta.env.BASE_URL + 'user-facebook.png'} alt="google-logo"
                                     className="inline me-2"></img>Sign up with
                                Github
                            </button>
                        </div>
                        <div className="text-sm lg:text-md">
                            Already have an account?&nbsp;
                            <Link to="/login"
                                  className="underline cursor-pointer text-sm lg:text-md font-semibold text-primary-ts_blue">
                                Log in
                            </Link>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="h-full"
                             style={{
                                 background: 'linear-gradient(180deg, #0C1857 0%, #3587C4 71.1%, #46B3F1 100%)',
                                 borderTopLeftRadius: '20px'
                             }}>
                            <div className="flex flex-col justify-center items-center pt-36">
                                <div className="text-white font-semibold text-3xl">Welcome to TalentScout</div>
                                <div className="text-white text-lg font-semibold mt-4">Discover Sri Lankan Cricket
                                    Stars!
                                </div>
                            </div>
                            <div className="px-16 mt-60">
                                <Swiper pagination={true} autoplay={true} modules={[Pagination, Autoplay]}
                                        className="mySwiper">
                                    <SwiperSlide className="text-white">Unearth Hidden Gems: Dive into the world of Sri
                                        Lankan domestic cricket talent. From rising stars to seasoned players, explore
                                        their
                                        journey to greatness.</SwiperSlide>
                                    <SwiperSlide className="text-white">Compare Players: Evaluate players side-by-side
                                        with
                                        our intuitive comparison tool. Analyze their stats, strengths, and weaknesses to
                                        make informed decisions.</SwiperSlide>
                                    <SwiperSlide className="text-white">Comprehensive Player Profiles: Gain insights
                                        into
                                        player profiles with in-depth analysis. From batting averages to bowling
                                        figures,
                                        unlock a treasure trove of data.</SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden h-60"
                     style={{
                         background: 'linear-gradient(180deg, #0C1857 0%, #3587C4 71.1%, #46B3F1 100%)',
                     }}>
                    <div className="px-12">
                        <Swiper pagination={true} autoplay={true} modules={[Pagination, Autoplay]}
                                className="mySwiper">
                            <SwiperSlide className="text-white text-sm">Unearth Hidden Gems: Dive into the world of Sri
                                Lankan domestic cricket talent.</SwiperSlide>
                            <SwiperSlide className="text-white text-sm">Compare Players: Evaluate players side-by-side
                                with
                                our intuitive comparison tool.</SwiperSlide>
                            <SwiperSlide className="text-white text-sm">Comprehensive Player Profiles: Gain insights
                                into
                                player profiles with in-depth analysis.</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Spinner/>
        );
    }

}

export default SignUp;