import {createContext, useState, useEffect} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
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
    const [searchParams] = useSearchParams()

    const signUp = async (formData) => {
        setIsLoading(true);
        const res = await axios.post("https://talentscout-y3-16-sdgp.onrender.com/api/auth/register/", formData)
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
            const response = await axios.post('https://talentscout-y3-16-sdgp.onrender.com/api/auth/verify-email/', {'otp': otp})
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
            const res = await axios.post("https://talentscout-y3-16-sdgp.onrender.com/api/auth/login/", loginData)
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
        const server_res = await axios.post("https://talentscout-y3-16-sdgp.onrender.com/api/auth/google/", {'access_token': payload})
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

    const signInWithGithub = () => {
        window.location.assign(`https://github.com/login/oauth/authorize/?client_id=${import.meta.env.VITE_GITHUB_ID}`)
    }

    const sendGithubCode = async () => {
        if (searchParams) {
            try {
                const qcode = searchParams.get('code')
                const response = await AxiosInstance.post('/auth/github/', {'code': qcode})
                const result = response.data
                if (response.status === 200) {
                    const user = {
                        'email': result.email,
                        'names': result.full_name
                    }
                    localStorage.setItem('access', JSON.stringify(result.access_token))
                    localStorage.setItem('refresh', JSON.stringify(result.refresh_token))
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate('/')
                    toast.success("Login Successful!")
                }
            } catch (error) {
                toast.error("Something went wrong! Please try again.")
            }
        }
    }

    let code = searchParams.get('code')
    useEffect(() => {
        if (code) {
            sendGithubCode()
        }
    }, [code])


    const contextData = {
        isLoading: isLoading,
        responseError: responseError,
        signUp: signUp,
        verifyOTP: verifyOTP,
        login: login,
        forgetPassword: forgetPassword,
        resetPassword: resetPassword,
        logout: logout,
        renderGoogleButton: renderGoogleButton,
        signInWithGithub: signInWithGithub
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