import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function VerifyOtp() {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (otp) {
            const response = await axios.post('http://localhost:8000/api/auth/verify-email/', {'otp': otp})
            if (response.status === 200) {
                navigate('/login')
                toast.success(response.data.message)
            }
        }
    }

    return (
        <div className='font-poppins'>
            <div className='md:container px-2 lg:px-0'>
                <div className='my-24 lg:w-1/2 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <label className='text-left text-base font-bold mb-4 inline-block'>Enter OTP to verify your
                            account</label>
                        <input
                            className="appearance-none block w-full bg-white text-black placeholder:text-sm placeholder:lg:text-md placeholder-primary-light_gray border border-black rounded-lg py-3 ps-4 pe-4 mt-1 mb-3 shadow-lg leading-tight focus:outline-none"
                            id="verify_otp" type="text" name='otp' value={otp} onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                        />
                        <button type='submit' value='send'
                                className='w-full mt-4 bg-primary-ts_blue text-lg py-2 text-white bold rounded-lg p-12 shadow-lg'>Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;