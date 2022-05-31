import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
function pass() {
    const style={
        color : "#718096",
        size : "16px"
    }
    return (
        <div class="h-screen  py-20 px-3 bg-[#E5E5E5]  rounded shadow-lg">
        <div class="container mx-auto">
            <div class="max-w-sm mx-auto md:max-w-lg">
                <div class="w-full">
                    <div class="bg-white w-90 h-90 py-1 rounded text-center">
                          <h1 class="text-2xl font-bold">Need help with your <br/> account</h1>
                          <div class="flex flex-col mt-1">
                              <span  style={style}>Enter the email address associated with your account <br/>
                              and we will send you a link to reset your password</span>
                              </div>
                              <div class="flex justify-center text-center ">
      <input
        type="text"
        class="
          form-control
          block
          w-80
          h-10
          text-base
          font-normal
          text-[#1A202C]
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          focus:text-gray-700 focus:bg-white  focus:outline-none
          text-center
        "
        placeholder='alesikarapova@gmial.com'
      />
    </div>
                          
                          <div class="flex justify-center text-center ">
                             <Link to="/auth"> <Button name = "Send Link"/></Link>
                          </div>
                          <div class="flex flex-col text-12">
                                <span >Forget your email ? </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
            )
}

            export default pass