import React from 'react'
import { Link } from 'react-router-dom'
import FooterBar from '../components/FooterBar'
import Headbar from '../components/Headbar'

function LoggedIn() {
    const style={
        color : "#718096",
        size : "16px"
    }
  return (
    <>
    <Link to="/"><Headbar text= "Log Out"/></Link>
    <div class="flex justify-center mt-36">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm  text-center">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Hi, Johne Doe!</h5>
    <div>
    <span  style={style}>You are logged in , Well done! </span>
                              </div>
                              <Link to='/'>
    <button class="submit_btn mt-4  h-10 w-full bg-[#194BFB] text-white cursor-pointer transition-all  flex justify-center items-center rounded-[10px]">Log out</button>
  
          </Link>
  </div>
</div>
    <FooterBar/>
    </>
  )
}

export default LoggedIn