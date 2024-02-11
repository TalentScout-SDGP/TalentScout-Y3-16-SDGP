import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loginData, setLoginData] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {email, password} = loginData;

    function togglePasswordVisibility(e) {
        e.preventDefault();
        setIsPasswordVisible((prevState) => !prevState);
    }

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('All fields are required!');
        } else {
            try {
                setIsLoading(true);
                const res = await axios.post("http://localhost:8000/api/auth/login/", loginData)
                const response = res.data;
                setIsLoading(false)
                const user = {"email": response.email, "names": response.names}
                if (res.status === 200) {
                    localStorage.setItem('user', JSON.stringify(user))
                    localStorage.setItem('access', JSON.stringify(response.access_token))
                    localStorage.setItem('refresh', JSON.stringify(response.refresh_token))
                    window.location.href = '/';
                    toast.success("Login Successful!")
                }
            } catch (error) {
                if (error.response.status === 401) {
                    setError('Invalid credentials, Please try again.')
                }
            }
        }
    }

    return (
        <div className="font-poppins">
            <div className="container pt-16 grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block pb-16 lg:pe-16">
                    <div className="">
                        <img className="w-fit select-none" src={import.meta.env.BASE_URL + 'Login.png'}
                             alt="Login"></img>
                    </div>
                </div>
                <div className="relative">
                    <div className="lg:hidden text-primary-ts_blue mt-5 lg:mt-10 text-3xl lg:text-2xl font-bold">Welcome
                        Back!
                    </div>
                    <div className="text-primary-ts_blue mt-5 lg:mt-10 text-lg lg:text-2xl font-bold">Log in to your
                        account
                    </div>
                    <div className="text-sm lg:text-md mt-4">
                        Don't have an account?&nbsp;
                        <Link to="/sign_up"
                              className="underline cursor-pointer text-sm lg:text-md font-semibold text-primary-ts_blue">
                            Create an account
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full py-4 lg:py-8">
                        <div className="w-full flex flex-wrap my-2">
                            <div className="w-full md:mb-0 relative">
                                <label
                                    className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Email
                                    Address</label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20"
                                     fill="none" className="absolute left-6 top-11">
                                    <path
                                        d="M8.49951 10C9.78771 10 11.0231 9.47322 11.934 8.53553C12.8449 7.59785 13.3567 6.32608 13.3567 5C13.3567 3.67392 12.8449 2.40215 11.934 1.46447C11.0231 0.526784 9.78771 0 8.49951 0C7.21132 0 5.97588 0.526784 5.06499 1.46447C4.1541 2.40215 3.64237 3.67392 3.64237 5C3.64237 6.32608 4.1541 7.59785 5.06499 8.53553C5.97588 9.47322 7.21132 10 8.49951 10ZM6.76536 11.875C3.02764 11.875 -0.000488281 14.9922 -0.000488281 18.8398C-0.000488281 19.4805 0.504199 20 1.12652 20H15.8725C16.4948 20 16.9995 19.4805 16.9995 18.8398C16.9995 14.9922 13.9714 11.875 10.2337 11.875H6.76536Z"
                                        fill="black"/>
                                </svg>
                                <input
                                    className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-12 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="login-email" type="email" name='email' value={email} onChange={handleChange}
                                    placeholder="Your Email"/>
                            </div>
                            <div className="w-full md:mb-0 relative mt-3">
                                <label
                                    className="text-primary-ts_blue text-sm lg:text-lg font-semibold">Password</label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20"
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
                                    className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-12 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none"
                                    id="login-password" type={isPasswordVisible ? "text" : "password"}
                                    name='password' value={password} onChange={handleChange}
                                    placeholder="Password"/>
                                <button className="absolute right-6 top-10 lg:top-11"
                                        onClick={(e) => togglePasswordVisibility(e)}>
                                    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                            <p className='font-semibold text-red-500 mt-4'>{error ? error : ''} </p>
                            <div className="grid grid-cols 1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 gap-x-2 w-full mt-6">
                                {/*Login BUTTON*/}
                                <button
                                    className="bg-primary-ts_blue text-white text-sm lg:text-base py-3 font-semibold rounded-lg">Login
                                </button>
                                <button
                                    className="bg-primary-white text-primary-ts_blue text-sm lg:text-base py-3 font-semibold rounded-lg border border-solid border-primary-ts_blue">Forgot
                                    Password
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full flex items-center justify-center mt-2 mb-2">
                        <div className="border-t border-black h-0 w-1/3"></div>
                        <p className="w-1/3 text-center text-xs sm:text-base">Or Sign in with</p>
                        <div className="border-t border-black h-0 w-1/3"></div>
                    </div>
                    <div className="flex flex-wrap mt-8 mb-2">
                        <button
                            className="block w-full bg-white text-primary-ts_blue text-sm lg:text-md font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-3 shadow-signup leading-tight">
                            <img src={import.meta.env.BASE_URL + 'user-google.png'} alt="google-logo"
                                 className="inline me-2"></img> Sign in
                            with Google
                        </button>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <button
                            className="block w-full bg-white text-primary-ts_blue text-sm lg:text-md font-semibold border border-black rounded-lg py-3 px-4 mt-1 mb-20 shadow-signup leading-tight">
                            <img src={import.meta.env.BASE_URL + 'user-facebook.png'} alt="google-logo"
                                 className="inline me-2"></img>Sign in with
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;