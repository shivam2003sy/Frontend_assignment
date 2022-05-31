import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignIn from './screens/SignIn';
import Signup from './screens/Signup';
import PassForgot from "./screens/PassForgot"
import Loggedln from "./screens/LoggedIn"
import OtpAuth from "./screens/OtpAuth"

function App() {
  
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<SignIn/>}/>
        <Route path="/forget" element={<PassForgot/>}>
        </Route>
        <Route path="/signup" element={<Signup/>}>
        </Route>
        <Route path="/home" element={<Loggedln/>}>
        </Route>
        <Route path="/Auth" element={<OtpAuth/>}>
        </Route>
      </Routes>
  </Router>
);
}


export default App;
