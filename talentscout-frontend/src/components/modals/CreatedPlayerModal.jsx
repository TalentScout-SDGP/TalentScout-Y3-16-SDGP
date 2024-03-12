import {useState, useEffect} from "react";
import {Button, Dialog, Card, CardBody} from "@material-tailwind/react";

export function CreatedPlayerModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        handleOpen();
    }, []);

    const handleGoBack = () => {
        window.location.href = '/manage_players';
    }

    return (
        <>
            <Button onClick={handleOpen} className="hidden">Modal</Button>
            <Dialog open={open} handler={handleOpen}>
                <Card className="mx-auto lg:px-12">
                    <CardBody className="flex flex-col">
                        <img className="w-2/5 mx-auto select-none" src={import.meta.env.BASE_URL + 'green-check.png'}
                             alt="green-check"></img>
                        <p className="text-sm sm:text-md md:text-base lg:text-xl text-black text-center font-semibold border-b-2 border-gray-400 pb-2">
                            Player Created Successfully!
                        </p>
                        <button onClick={handleGoBack}
                                className="w-full bg-primary-ts_blue text-center text-white font-semibold text-sm sm:text-md md:text-base py-2 rounded-lg mt-6">
                            Go Back
                        </button>
                    </CardBody>
                </Card>
            </Dialog>
        </>
    );
}

export default CreatedPlayerModal;
