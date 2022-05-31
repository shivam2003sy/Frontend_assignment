import React from 'react'
import Button from './Button'
const style={
    color : "#718096",
    size : "16px"
}
function VerifyAccount() {
  return (
    <div class="h-screen  py-20 px-3 bg-[#E5E5E5]  rounded shadow-lg">
    <div class="container mx-auto">
        <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
                <div class="bg-white h-90 py-3 rounded text-center">
                      <h1 class="text-2xl font-bold">Verify your email</h1>
                      <div class="flex flex-col mt-4">
                          <span  style={style}>We have sent code to your email</span>
                          <span class="font-bold">alesiaka******@gmial.com</span>
                      </div>
                      
                      <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
                      </div>
                      
                      <div class="flex justify-center text-center ">
                          <Button name = "Verify Account"/>
                      </div>
                      <div class="flex flex-col mt-4">
                            <span  style={style}>Resend code in <b className='text-[#1A202C]'>59:00</b></span>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default VerifyAccount