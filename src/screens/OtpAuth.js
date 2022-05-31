import React from 'react'
import FooterBar from '../components/FooterBar'
import Headbar from '../components/Headbar'
import VerifyAccount from '../components/VerifyAccount'

function OtpAuth() {
  return (
      <>
    <Headbar text = "Sign In"/>
    <VerifyAccount/>
    <FooterBar/>
    </>
  )
}

export default OtpAuth