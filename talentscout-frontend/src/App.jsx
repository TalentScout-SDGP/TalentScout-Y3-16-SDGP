import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// FontAwesome Packages
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
// Add the icons to the library
library.add(fab, fas, far);

import './App.css'

import Navbar from "./components/shared/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ExplorePlayers from "./pages/ExplorePlayers.jsx";
import ComparePlayers from "./pages/ComparePlayers.jsx";
import PlayerProfiles from "./pages/PlayerProfiles.jsx";
import ManagePlayers from "./pages/ManagePlayers.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AddPlayers from "./pages/AddPlayers.jsx";
import FrontendAgrani from "./pages/FrontendAgrani.jsx";
import FrontendChamath from "./pages/FrontendChamath.jsx";
import FrontendDinuka from "./pages/FrontendDinuka.jsx";
import FrontendSulan from "./pages/FrontendSulan.jsx";
import FrontendDulhan from "./pages/FrontendDulhan.jsx";
import FrontendLinuka from "./pages/FrontendLinuka.jsx";
import Footer from "./components/shared/Footer.jsx";

function App() {

    return (
        <div className='bg-white'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/explore_players' element={<ExplorePlayers/>}/>
                    <Route exact path='/compare_players' element={<ComparePlayers/>}/>
                    <Route exact path='/player_profiles' element={<PlayerProfiles/>}/>
                    <Route exact path='/manage_players' element={<ManagePlayers/>}/>
                    {/*TODO Have to check if we need a separate page for add players (with a route)*/}
                    {/*<Route exact path='/add_players' element={<AddPlayers/>}/>*/}
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/signup' element={<Signup/>}/>

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
