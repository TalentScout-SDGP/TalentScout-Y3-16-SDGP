import {useContext, useState} from 'react'
import Spinner from "./shared/Spinner.jsx";
import UserAuthContext from "../context/UserAuthContext.jsx";

const ForgetPassword = () => {
    const {isLoading, forgetPassword} = useContext(UserAuthContext);
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email) {
            forgetPassword(email)
            setEmail("")
        }
    }

    if (!isLoading) {
        return (
            <div className='font-poppins'>
                <div className='md:container px-2 lg:px-0'>
                    <div className='my-24 lg:w-1/2 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <label className='text-left text-base font-bold mb-4 inline-block'>Enter your registered
                                email to reset your password</label>
                            <input
                                className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-4 pe-4 mt-1 mb-3 shadow-lg leading-tight focus:outline-none"
                                id="email" type="email" name='email' value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
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

export default ForgetPassword