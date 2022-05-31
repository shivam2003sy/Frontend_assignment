import React from 'react'

function Button(props) {
  return (
    <div >
    <button class="submit_btn mt-4  h-10 w-80 bg-[#194BFB] text-white cursor-pointer transition-all  flex justify-center items-center w-full rounded-[10px]">{props.name}</button>
    </div>              
  )
}

export default Button