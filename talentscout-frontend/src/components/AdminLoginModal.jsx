import {Link} from "react-router-dom";
import {Dialog, Card, CardBody} from "@material-tailwind/react";

export function AdminLoginModal() {
    return (
        <div>
            <Dialog open={true} className="bg-transparent shadow-none">
                <Card className="mx-auto w-full max-w-[26rem]">
                    <CardBody className="flex flex-col">
                        <p className="text-xl text-black text-center font-semibold border-b-2 border-gray-400 pb-2">
                            You don&apos;t have access to this page, Please create an admin account to continue.
                        </p>
                        <Link to='/'
                              className="w-full bg-primary-ts_blue text-center text-white font-semibold text-base py-2 rounded-lg mt-6">
                            Go Back
                        </Link>
                    </CardBody>
                </Card>
            </Dialog>
        </div>
    );
}

export default AdminLoginModal;