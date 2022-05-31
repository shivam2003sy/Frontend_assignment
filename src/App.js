import React from 'react';
import './App.css';
import LoggedIn from './screens/LoggedIn';
import PassForget from './screens/PassForgot';
import OtpAuth from "./screens/OtpAuth"
import SignIn from './screens/SignIn';
import Signup from './screens/Signup';
function App() {
  
  return (
    <>
    <SignIn/>
    <Signup/>
    <LoggedIn/>
    <OtpAuth/>
    <PassForget/>
    
    </>

  );
}

export default App;
