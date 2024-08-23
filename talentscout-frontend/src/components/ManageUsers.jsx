import {useContext, useEffect} from "react";
import UserAuthContext from "../context/UserAuthContext.jsx";
import Spinner from "./shared/Spinner.jsx";

const ManageUsers = () => {
    const existing_user = JSON.parse(localStorage.getItem('user'));
    const {userData, approveUser, deleteUser, getAllUsers, isLoading} = useContext(UserAuthContext);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getRole = (user) => {
        if (user.is_verified && user.is_superuser) {
            return 'Admin';
        } else if (user.is_verified && user.is_staff && !user.is_superuser) {
            return 'Pending Admin Approval';
        } else if (user.is_verified && !user.is_superuser && !user.is_staff) {
            return 'User';
        }
    };

    const handleApprove = (user_email) => {
        approveUser(user_email);
    };

    const handleDelete = (user_email) => {
        deleteUser(user_email);
    };

    return (
        <div className='font-poppins'>
            <div className='md:container px-2 lg:px-0'>
                <div className='my-24 lg:w-1/2 mx-auto'>
                    <h1 className="text-center my-12 text-xl font-bold">Manage Users/Admin Requests</h1>
                    {isLoading ? (
                        <Spinner/>
                    ) : (
                        <div className="space-y-4">
                            {userData && userData.length > 0 ? (
                                userData.map(user => (
                                    user.email !== existing_user.email && ( // Check if the user is not the existing user
                                        <div key={user.id} className="border p-4 rounded shadow-explore_players">
                                            <p className="py-1"><b>Email:</b> {user.email}</p>
                                            <p className="py-1"><b>Username:</b> {user.first_name} {user.last_name}</p>
                                            <p className="py-1"><b>Role:</b> {getRole(user)}</p>
                                            {!user.is_superuser && user.is_staff && user.is_verified && (
                                                <button onClick={() => handleApprove(user.email)}
                                                        className="my-2 mr-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                                                    Approve
                                                </button>
                                            )}
                                            <button onClick={() => handleDelete(user.email)}
                                                    className="my-2 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    )
                                ))
                            ) : (
                                <p>No user data available.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ManageUsers;
