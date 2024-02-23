import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import UserAuthContext from "../context/UserAuthContext.jsx";

const PrivateRoutes = () => {
    const {user} = useContext(UserAuthContext);
    return (
        user ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes;