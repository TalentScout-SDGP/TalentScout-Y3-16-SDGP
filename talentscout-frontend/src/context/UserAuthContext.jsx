import {createContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types';
import AxiosInstance from "../utils/AxiosInstance.jsx";

const UserAuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [responseError, setResponseError] = useState('')
    const navigate = useNavigate()

    const signUp = async (formData) => {
        setIsLoading(true);
        const res = await axios.post("http://localhost:8000/api/auth/register/", formData)
        const response = res.data
        if (res.status === 201) {
            setIsLoading(false)
            navigate('/verify_otp')
            toast.success(response.message)
        } else {
            setIsLoading(false)
        }
    }

    const verifyOTP = async (otp) => {
        try {
            setIsLoading(true)
            const response = await axios.post('http://localhost:8000/api/auth/verify-email/', {'otp': otp})
            if (response.status === 200) {
                setIsLoading(false)
                navigate('/login')
                toast.success(response.data.message)
            }
        } catch (error) {
            setIsLoading(false)
            if (error.response.status === 404) {
                setResponseError('Invalid OTP, Please try again.')
            } else if (error.response.status === 204) {
                setResponseError('Email already verified. Please login to continue.')
            } else {
                setResponseError('Something went wrong. Please try again later.')
            }
        }
    }

    const login = async (loginData) => {
        try {
            setIsLoading(true);
            const res = await axios.post("http://localhost:8000/api/auth/login/", loginData)
            setIsLoading(false)
            const response = res.data;
            const user = {"email": response.email, "full_name": response.full_name}
            if (res.status === 200) {
                setIsLoading(false);
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('access', JSON.stringify(response.access_token))
                localStorage.setItem('refresh', JSON.stringify(response.refresh_token))
                localStorage.setItem('isSuperuser', JSON.stringify(response.is_superuser))
                window.location.href = '/';
                toast.success('Login Successful!')
            }
        } catch (error) {
            if (error.response.status === 401) {
                setIsLoading(false)
            }
        }
    }

    const logout = async (refresh) => {
        const res = await AxiosInstance.post('/auth/logout/', {'refresh_token': refresh})
        if (res.status === 204) {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('user')
            localStorage.removeItem('isSuperuser')
            window.location.reload();
        }
    }

    const googleAuth = async (response) => {
        const payload = response.credential
        const server_res = await axios.post("http://localhost:8000/api/auth/google/", {'access_token': payload})
        const user = {
            "email": server_res.data.email,
            "full name": server_res.data.full_name
        }
        if (server_res.status === 200) {
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('access', JSON.stringify(server_res.data.access_token))
            localStorage.setItem('refresh', JSON.stringify(server_res.data.refresh_token))
            window.location.href = '/';
        }
    }

    const renderGoogleButton = () => {
        /* global google */
        if (typeof google !== 'undefined') {
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_CLIENT_ID,
                callback: googleAuth
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

    const contextData = {
        isLoading: isLoading,
        responseError: responseError,
        signUp: signUp,
        verifyOTP: verifyOTP,
        login: login,
        logout: logout,
        renderGoogleButton: renderGoogleButton
    }

    return (
        <UserAuthContext.Provider value={contextData}>
            {children}
        </UserAuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default UserAuthContext;