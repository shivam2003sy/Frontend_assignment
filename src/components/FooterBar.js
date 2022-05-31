import React from 'react'
const style ={
    color: "#718096",
    fontsize : "16px",
    postion : "absolute"
  }
function FooterBar() {
  return (
      <div style={style}>
          <p className='absolute left-7 bottom-10'>Privacy Policy</p>
          <p className='absolute right-7 bottom-10'>Copyright 2022</p>
      </div>
        

   
  )
}

export default FooterBar