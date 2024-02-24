import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import AxiosInstance from "../utils/AxiosInstance.jsx";
import {toast} from "react-toastify";
import Spinner from "./shared/Spinner.jsx";

function ResetPassword() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const {uid, token} = useParams();
    const [newPasswords, setNewPasswords] = useState({
        password: '',
        confirm_password: ''
    });

    const {password, confirm_password} = newPasswords
    const handleChange = (e) => {
        setNewPasswords({...newPasswords, [e.target.name]: e.target.value});
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
            setIsLoading(true)
            const res = await AxiosInstance.patch('auth/set-new-password/', data)
            const response = res.data
            if (res.status === 200) {
                navigate('/login')
                toast.success(response.message)
                setIsLoading(false)
            }
        }
    }

    if (!isLoading) {
        return (
            <div className='font-poppins'>
                <div className='md:container px-2 lg:px-0'>
                    <div className='my-24 lg:w-1/2 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <label className='text-left text-base font-bold mb-4 inline-block'>Enter your New
                                Password</label>
                            <input
                                className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-4 pe-4 mt-1 mb-3 shadow-lg leading-tight focus:outline-none"
                                id="password" type="password" name='password' value={password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                            <label className='text-left text-base font-bold mb-4 inline-block'>Confirm
                                Password</label>
                            <input
                                className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-4 pe-4 mt-1 mb-3 shadow-lg leading-tight focus:outline-none"
                                id="confirm_password" type="password" name='confirm_password' value={confirm_password}
                                onChange={handleChange}
                                placeholder="confirm your password"
                            />
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