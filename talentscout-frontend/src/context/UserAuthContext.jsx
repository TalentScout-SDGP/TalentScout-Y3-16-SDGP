import {createContext, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types';
import AxiosInstance from "../utils/AxiosInstance.jsx";

const UserAuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [responseError, setResponseError] = useState('')
    const navigate = useNavigate()

    const getAllUsers = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8000/api/auth/all-users/`);
            const data = response.data;
            setUserData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    const approveUser = async (userEmail) => {
        setIsLoading(true);
        try {
            const res = await axios.patch(`http://localhost:8000/api/auth/approve-admin/${userEmail}/`, {
                is_approved: true
            });
            if (res.status === 200) {
                toast.success('User approved successfully');
                getAllUsers();
            }
        } catch (error) {
            toast.error('Failed to approve user. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    const deleteUser = async (userEmail) => {
        setIsLoading(true);
        try {
            const res = await axios.delete(`http://localhost:8000/api/auth/delete-user/${userEmail}/`);
            if (res.status === 204) {
                toast.success('User deleted successfully');
                getAllUsers();
            }
        } catch (error) {
            toast.error('Failed to delete user. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    const signUp = async (formData) => {
        try {
            setIsLoading(true);
            const res = await axios.post("http://localhost:8000/api/auth/register/", formData)
            const response = res.data
            if (res.status === 201) {
                setIsLoading(false)
                navigate('/verify_otp')
                toast.success(response.message)
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.')
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
                toast.error('Invalid email or password. Please try again.')
            }
        }
    }

    const logout = async (refresh) => {
        try {
            setIsLoading(true)
            const res = await AxiosInstance.post('/auth/logout/', {'refresh_token': refresh})
            if (res.status === 204) {
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                localStorage.removeItem('user')
                localStorage.removeItem('isSuperuser')
                window.location.reload();
            }
        } catch (error) {
            setIsLoading(false)
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('user')
            localStorage.removeItem('isSuperuser')
            window.location.reload();
        }
    }

    const forgetPassword = async (email) => {
        setIsLoading(true)
        const res = await AxiosInstance.post('/auth/password-reset/', {"email": email})
        if (res.status === 200) {
            navigate('/')
            toast.success("A link to reset your password has been sent to your email")
        }
        setIsLoading(false)
    }

    const resetPassword = async (data) => {
        setIsLoading(true)
        const res = await AxiosInstance.patch('auth/set-new-password/', data)
        const response = res.data
        if (res.status === 200) {
            navigate('/login')
            toast.success(response.message)
        }
        setIsLoading(false)
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
                    text: "signin_with",
                    shape: "circle",
                    width: "280",
                    locale: "en",
                }
            );
        } else {
            toast.error("Something went wrong! Please try again.")
        }
    };

    const contextData = {
        userData: userData,
        isLoading: isLoading,
        responseError: responseError,
        getAllUsers: getAllUsers,
        deleteUser: deleteUser,
        approveUser: approveUser,
        signUp: signUp,
        verifyOTP: verifyOTP,
        login: login,
        forgetPassword: forgetPassword,
        resetPassword: resetPassword,
        logout: logout,
        renderGoogleButton: renderGoogleButton,
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