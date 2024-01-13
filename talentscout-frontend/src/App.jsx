import {useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'

import Navbar from "./components/shared/header/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import ExplorePlayers from "./pages/explore players/Explore Players.jsx";
import ComparePlayers from "./pages/compare players/Compare Players.jsx";
import PlayerProfiles from "./pages/player profiles/Player Profiles.jsx";
import ManagePlayers from "./pages/manage players/Manage Players.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";

function App() {

    return (
        <div className='w-screen h-screen bg-white-100'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/explore players' element={<ExplorePlayers />}/>
                    <Route exact path='/compare players' element={<ComparePlayers />}/>
                    <Route exact path='/player profiles' element={<PlayerProfiles />}/>
                    <Route exact path='/manage players' element={<ManagePlayers />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/signup' element={<Signup />}/>
                </Routes>
            </Router>
        </div>

    )


}

export default App
