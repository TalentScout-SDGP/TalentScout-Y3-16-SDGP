import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, Dialog, Card, CardBody} from "@material-tailwind/react";

export function UserLoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        handleOpen();
    }, []);

    return (
        <>
            <Button onClick={handleOpen} className="hidden">Modal</Button>
            <Dialog open={open} handler={handleOpen}>
                <Card className="mx-auto lg:px-12">
                    <CardBody className="flex flex-col">
                        <p className="text-sm sm:text-md md:text-base lg:text-xl text-center text-black font-semibold border-b-2 border-gray-400 pb-2">
                            Login to continue
                        </p>
                        <Link to='/login'
                              className="bg-primary-ts_blue text-center text-white font-semibold text-sm sm:text-md md:text-base py-2 rounded-lg mt-6">
                            Login
                        </Link>
                        <p className="text-sm text-center mt-6">Don&apos;t have an account? &nbsp;
                            <Link to='/sign_up'
                                  className="text-black underline text-center font-semibold text-sm py-2">
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-sm text-center mt-2">Go back to Homepage &nbsp;
                            <Link to='/'
                                  className="   text-black underline text-center font-semibold text-sm py-2">
                                Go Back
                            </Link>
                        </p>
                    </CardBody>
                </Card>
            </Dialog>
        </>
    );
}

export default UserLoginModal;
