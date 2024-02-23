import {Link} from "react-router-dom";
import {Dialog, Card, CardBody} from "@material-tailwind/react";

export function DialogWithForm() {
    return (
        <div>
            <Dialog open={true} className="bg-transparent shadow-none">
                <Card className="mx-auto w-full max-w-[26rem]">
                    <CardBody className="flex flex-col">
                        <p className="text-xl text-center text-black font-semibold border-b-2 border-gray-400 pb-2">
                            Login to continue
                        </p>
                        <Link to='/login'
                              className="w-full bg-primary-ts_blue text-center text-white font-semibold text-base py-2 rounded-lg mt-6">
                            Login
                        </Link>
                        <p className="text-sm text-center mt-6">Don&apos;t have an account? &nbsp;
                            <Link to='/sign_up'
                                  className="w-full text-black underline text-center font-semibold text-sm py-2">
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-sm text-center mt-2">Go back to Homepage &nbsp;
                            <Link to='/'
                                  className="w-full text-black underline text-center font-semibold text-sm py-2">
                                Go Back
                            </Link>
                        </p>
                    </CardBody>
                </Card>
            </Dialog>
        </div>
    );
}

export default DialogWithForm;