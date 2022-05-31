import React from 'react'
import signin from "../asset/signin.svg"
function SignIn() {
  return (
    <div class="flex justify-center items-center bg-gray-200 min-h-screen">
    <div class="w-96 my-5 h-[650px] md:w-3/4 bg-white md:rounded-lg rounded-lg">
        <div class="flex h-full w-full">
            <div class="left_side bg-[url('https://imgur.com/x2c3aE1.jpg')] h-full w-full md:rounded-lg md:block hidden md:bg-red-400">
                <img class="md:h-full object-cover h-full md:w-full" src="https://imgur.com/m2Sho5o.jpg"/>
            </div>
            <div class="right_side h-full rounded-lg p-3 w-full bg-white">
                <p class="text-xl font-semibold text-purple-800">Let's Protect Yourself and those around you by vaccinating.</p>
                <img class="w-10 mt-4" src="https://imgur.com/qkWO43D.jpg"/>
                <div class="mt-3 ">
                    <span class="font-semibold text-purple-900">I am registering for :</span>
                    <div class="flex gap-5">
                        <div class="flex justify-center items-center">
                            <input class="appearance-none" type="radio" name="select" id="select1"/>
                            <label for="select1" class="inline-block ">
                                <div class="outer_border  h-10 w-32 mt-2 border flex justify-center rounded-lg  transition-all cursor-pointer items-center">
                                    <span class="inner_circle relative h-5 w-5 rounded-full border flex focus:bg-blue-700"></span>
                                    <p class="ml-2 text-sm">My self</p>
                                </div>
                            </label>
                        </div>
                        <div class="flex justify-center items-center">
                            <input class="appearance-none form-check-input" type="radio" name="select" id="select2"/>
                            <label for="select2">
                                <div class="outer_border  h-10 w-32 mt-2 border flex justify-center rounded-lg focus:border-blue-700 transition-all cursor-pointer items-center">
                                    <span class="inner_circle relative h-5 w-5 rounded-full border flex focus:bg-blue-700"></span>
                                    <p class="ml-2 text-sm">Other People</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="mt-3 ">
                        <span class="text-purple-900 font-semibold">Patient's Full Name</span>
                        <input class="bg-white border h-10 w-full mt-1 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="text"/>
                    </div>
                    <div class="mt-3 ">
                        <span class="text-purple-900 font-semibold">Mobile Number</span>
                        <p class="text-sm text-gray-400">Notifications for appointment and remainders will be sent to this number.</p>
                        <div class="flex justify-between items-center gap-3 ">
                            <input class="bg-white border h-10 w-full mt-1 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="number"/>
                            <button class="text-sm mt-[1px] h-10 bg-blue-500 text-white cursor-pointer transition-all hover:bg-blue-800 flex justify-center items-center w-36 rounded-[10px]">Verify</button>
                        </div>
                    </div>
                    <div class="mt-3 ">
                        <span class="text-purple-900 font-semibold">Patient ID  Number</span>
                        <div class="flex gap-3 justify-center items-center">
                            <select class="outline-none transition-all focus:border-blue-800 mt-[3px] text-gray-900 border h-10 rounded-lg bg-white text-sm cursor-pointer">
                                <option class="hidden">ID Type</option>
                                <option>Aadhar Card</option>
                                <option>Passport</option>
                                <option>PAN Card</option>
                                <option>Driving License</option>
                                <option>Voter ID</option>
                                <option></option>
                            </select>
                            <input class="bg-white border h-10 w-full mt-1 focus:border-blue-700 transition-all rounded-lg text-sm outline-none px-2" type="number"/>
                        </div>
                    </div>
                    <button class="submit_btn text-sm mt-8 h-12 bg-blue-500 text-white cursor-pointer transition-all hover:bg-blue-800 flex justify-center items-center w-full rounded-[10px]">Submit</button>
                    <p class="text-sm text-center my-5 text-gray-500">Alredy Registered? <a class="text-blue-700" href="#">Check Your Status</a></p>
                </div>  
            </div>
        </div>
    </div>    
</div>
    
  )
}

export default SignIn