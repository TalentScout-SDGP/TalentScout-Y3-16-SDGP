// Components
import Navbar from "./components/shared/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ExplorePlayersPage from "./pages/ExplorePlayersPage.jsx";
import ComparePlayers from "./pages/ComparePlayers.jsx";
import PlayerProfiles from "./pages/PlayerProfiles.jsx";
import ManagePlayers from "./pages/ManagePlayers.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AddPlayers from "./pages/AddPlayers.jsx";
import Footer from "./components/shared/Footer.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import OurTeamPage from "./pages/OurTeamPage.jsx";
import VerifyOTPPage from "./pages/VerifyOTPPage.jsx";
import ManageUsers from "./components/ManageUsers.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import NotFound from "./pages/NotFound.jsx";

// React Router
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

// Context Providers
import {AuthProvider} from "./context/UserAuthContext.jsx";
import {PlayerDataProvider} from "./context/ManagePlayersContext.jsx";
import {PlayerRankingProvider} from "./context/PlayerRankingContext.jsx";

// Global CSS
import './App.css'

// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

// Toastify Messages
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = JSON.parse(localStorage.getItem('isSuperuser'));

    console.log(isAdmin);

    return (
        <div className='bg-white'>
            <Router>
                <ToastContainer autoClose={10000}/>
                <AuthProvider>
                    <PlayerDataProvider>
                        <PlayerRankingProvider>
                            <Navbar/>
                            <Routes>
                                <Route exact path='/' element={<Home/>}/>
                                <Route exact path='/explore_players' element={<ExplorePlayersPage/>}/>
                                <Route exact path='/compare_players' element={<ComparePlayers/>}/>
                                <Route exact path='/player_profiles' element={<PlayerProfiles/>}/>
                                <Route exact path='/manage_players' element={<ManagePlayers/>}/>
                                <Route exact path='/add_players'
                                       element={!user && !isAdmin ? <Navigate to="/"/> : <AddPlayers/>}/>
                                <Route exact path='/manage_users'
                                       element={!user && !isAdmin ? <Navigate to="/"/> : <ManageUsers/>}/>
                                <Route exact path='/login' element={user ? <Navigate to="/"/> : <LoginPage/>}/>
                                <Route exact path='/sign_up' element={user ? <Navigate to="/"/> : <SignUpPage/>}/>
                                <Route exact path='/about_us' element={<AboutUsPage/>}/>
                                <Route exact path='/our_team' element={<OurTeamPage/>}/>
                                <Route exact path='/verify_otp' element={<VerifyOTPPage/>}/>
                                <Route path="/forget_password" element={<ForgetPassword/>}/>
                                <Route path="/password-reset-confirm/:uid/:token" element={<ResetPassword/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                            <Footer/>
                        </PlayerRankingProvider>
                    </PlayerDataProvider>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App
