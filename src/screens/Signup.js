import React from 'react'
import Signin from "../asset/signup.jpg"
import {Link} from "react-router-dom"
function Signup() {
  const style={
    color : "#718096",
    
}
  return (
    <div class="flex justify-center items-center bg-gray-200 min-h-screen">
        <div class=" bg-white md:rounded-lg rounded-lg">
        <div class="flex h-full ">
            <div class="left_side bg-black h-fit w-fit md:rounded-lg hidden md:block  md:bg-white">
                <img class="md:h-full object-cover h-full md:w-full ml-10 w-20" src={Signin} alt="withotlogo"/>
            </div>
            <div class="right_side h-fit rounded-lg p-3 w-6/12 bg-white text-center mr-20 ml-20">
                <h1 class="text-2xl font-bold  mt-20 ">Sign up for an  account</h1>
                <span style={style} className="text-xs"> Send,spend and save smarter</span>
                <div className='mt-6 content-center'>
               <Link to="/home"> <button class="px-6 py-3 mt-4 font-semibold text-gray-900 bg-white border border-gray-500 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none w-full"><svg xmlns="http://www.w3.org/2000/svg" class="inline w-4 h-4 mr-3 text-gray-900 fill-current" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>Sign in with Google</button> </Link>
              <div class="flex items-center">
                    <div class="flex-grow bg bg-gray-300 h-0.5"></div>
                    <div class="flex-grow-0 mx-5 text dark:text-white">or with email</div>
                    <div class="flex-grow bg bg-gray-300 h-0.5"></div>
                </div>
                        <div class="flex ">
                       <input class="bg-white border h-10 w-full mt-1 mr-2 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="text" placeholder='First name'/>
                        <input class="bg-white border h-10 w-full mt-1 ml-2 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="text" placeholder='Last name'/>
                    </div>
                    <div class="mt-3 ">
                        
                        <div class="flex justify-between items-center gap-3 ">
                            <input class="bg-white border h-10 w-full mt-1 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="email" placeholder='Email'/>
                        </div>
                        <div class="flex justify-between items-center gap-3 mt-2 ">
                            <input class="bg-white border h-10 w-full mt-1 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="password" placeholder='Password'/>
                        </div>
                    </div>
                    <div class="mt-3 ">
                       
                        <div class="flex gap-3 justify-center items-center">
                            <span>By creating an account, you agreeing to our <a href='/'>Privacy Policy</a>, and <a href='/'>Electronics Communication Policy</a>.</span>
                        </div>
                    </div>
                    <Link to='/home'>
    <button class="submit_btn mt-4  h-10 w-full bg-[#194BFB] text-white cursor-pointer transition-all  flex justify-center items-center rounded-[10px]">Sign In</button>
  
          </Link>
                    <p class="text-sm text-center my-5 text-gray-500">Alredy Registered? <a class="text-blue-700" href="/">Check Your Status</a></p>
                    
                </div> 
                
            </div>
        </div>
    </div>    
</div>
  )
}

export default Signup