import React from 'react'
import Button from '../components/Button'
import FooterBar from '../components/FooterBar'
import Headbar from '../components/Headbar'

function LoggedIn() {
    const style={
        color : "#718096",
        size : "16px"
    }
  return (
    <>
    <Headbar text= "Log Out"/>
    <div class="flex justify-center mt-36">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm  text-center">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Hi, Johne Doe!</h5>
    <div>
    <span  style={style}>You are logged in , Well done! </span>
                              </div>
    <Button name = "Log Out"/>
  </div>
</div>
    <FooterBar/>
    </>
  )
}

export default LoggedIn