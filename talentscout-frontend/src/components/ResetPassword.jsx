import {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from "./shared/Spinner.jsx";
import UserAuthContext from "../context/UserAuthContext.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

function ResetPassword() {
    const {isLoading, resetPassword} = useContext(UserAuthContext);
    const {uid, token} = useParams();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidPassword2, setIsValidPassword2] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPassword2, setErrorPassword2] = useState(false);
    const [error, setError] = useState('');
    const [newPasswords, setNewPasswords] = useState({
        password: '',
        confirm_password: ''
    });
    const {password, confirm_password} = newPasswords

    const handleChange = (e) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (e.target.name === 'password' || e.target.name === 'confirm_password') {
            if (e.target.name === 'password') {
                const newPassword = e.target.value;
                const isValidPassword = regex.test(newPassword);
                setErrorPassword(!isValidPassword);
                setIsValidPassword(isValidPassword)
            } else if (e.target.name === 'confirm_password') {
                const newPassword = e.target.value;
                const isValidPassword2 = regex.test(newPassword);
                setErrorPassword2(!isValidPassword2);
                setIsValidPassword2(isValidPassword2)
            }
            if (!isValidPassword || !isValidPassword2) {
                setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
            } else {
                setError('');
            }
        }
        setNewPasswords({...newPasswords, [e.target.name]: e.target.value});
    }

    function togglePasswordVisibility(e, field) {
        e.preventDefault();
        if (field === "password") {
            setIsPasswordVisible((prevState) => !prevState);
        } else if (field === "confirm_password") {
            setIsConfirmPasswordVisible((prevState) => !prevState);
        }
    }

    const data = {
        'password': password,
        'confirm_password': confirm_password,
        'uidb64': uid,
        'token': token
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (data) {
            resetPassword(data)
        }
    }

    if (!isLoading) {
        return (
            <div className='font-poppins'>
                <div className='md:container px-2 lg:px-0'>
                    <div className='my-24 lg:w-1/2 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <label className='text-left text-base font-bold mb-4 inline-block'>Enter your New
                                    Password</label>
                                <input
                                    className={`appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border rounded-lg py-3 ps-4 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none 
                                        ${isValidPassword ? 'border-green-500' : errorPassword && !isValidPassword ? 'border-red-500' : 'border-black'}`}
                                    id="password"
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder="must be 8 characters"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                                <div className="cursor-pointer absolute right-6 top-14"
                                     onClick={(e) => togglePasswordVisibility(e, "password")}>
                                    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}/>
                                </div>
                            </div>
                            <div className="relative">
                                <label className='text-left text-base font-bold mb-4 inline-block '>Confirm
                                    Password</label>
                                <input
                                    className={`appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-4 pe-4 mt-1 mb-3 shadow-signup leading-tight focus:outline-none 
                                        ${isValidPassword2 ? 'border-green-500' : errorPassword2 && !isValidPassword2 ? 'border-red-500' : 'border-black'}`}
                                    id="confirm_password"
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    placeholder="Confirm password"
                                    name='confirm_password'
                                    value={confirm_password}
                                    onChange={handleChange}
                                />
                                <div className="cursor-pointer absolute right-6 top-14"
                                     onClick={(e) => togglePasswordVisibility(e, "confirm_password")}>
                                    <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEyeSlash : faEye}/>
                                </div>
                            </div>
                            <p className='font-semibold text-red-500 my-4'>{error ? error : ''} </p>
                            <button type='submit' value='send'
                                    className='w-full mt-4 bg-primary-ts_blue text-lg py-2 text-white bold rounded-lg p-12 shadow-lg'>Submit
                            </button>
                        </form>
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

export default ResetPassword;