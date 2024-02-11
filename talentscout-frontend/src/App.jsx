import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
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
import VerifyOTP from "./pages/VerifyOTP.jsx";
// FontAwesome Packages
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
// Add the icons to the library
library.add(fab, fas, far);
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//TODO End:Delete Following Imports
import FrontendAgrani from "./pages/FrontendAgrani.jsx";
import FrontendChamath from "./pages/FrontendChamath.jsx";
import FrontendDinuka from "./pages/FrontendDinuka.jsx";
import FrontendSulan from "./pages/FrontendSulan.jsx";
import FrontendDulhan from "./pages/FrontendDulhan.jsx";
import FrontendLinuka from "./pages/FrontendLinuka.jsx";


function App() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='bg-white'>
            <Router>
                <Navbar/>
                <ToastContainer autoClose={20000}/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/explore_players' element={<ExplorePlayersPage/>}/>
                    <Route exact path='/compare_players' element={<ComparePlayers/>}/>
                    <Route exact path='/player_profiles' element={<PlayerProfiles/>}/>
                    <Route exact path='/manage_players' element={<ManagePlayers/>}/>
                    <Route exact path='/add_players' element={<AddPlayers/>}/>
                    <Route exact path='/login' element={user ? <Navigate to="/"/> : <LoginPage/>}/>
                    <Route exact path='/sign_up' element={user ? <Navigate to="/"/> : <SignUpPage/>}/>
                    <Route exact path='/about_us' element={<AboutUsPage/>}/>
                    <Route exact path='/our_team' element={<OurTeamPage/>}/>
                    <Route exact path='/verify_otp' element={<VerifyOTP/>}/>
                    {/*TODO End:Delete Following Routes & Page Files*/}
                    <Route exact path='/sulan' element={<FrontendSulan/>}/>
                    <Route exact path='/agrani' element={<FrontendAgrani/>}/>
                    <Route exact path='/chamath' element={<FrontendChamath/>}/>
                    <Route exact path='/dinuka' element={<FrontendDinuka/>}/>
                    <Route exact path='/dulhan' element={<FrontendDulhan/>}/>
                    <Route exact path='/linuka' element={<FrontendLinuka/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
