import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, Dialog, Card, CardBody} from "@material-tailwind/react";

export function AdminLoginModal() {
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
                        <p className="text-sm sm:text-md md:text-base lg:text-xl text-black text-center font-semibold border-b-2 border-gray-400 pb-2">
                            You don&apos;t have access to this page, Please create an admin account to continue.
                        </p>
                        <Link to='/'
                              className="w-full bg-primary-ts_blue text-center text-white font-semibold text-sm sm:text-md md:text-base py-2 rounded-lg mt-6">
                            Go Back
                        </Link>
                    </CardBody>
                </Card>
            </Dialog>
        </>
    );
}

export default AdminLoginModal;
