import React from 'react'

// css
import './signUp.css'

// images 
import SinUpImg from '../../assets/banner/signUpBanner.png'
import googleImg from '../../assets/icons/google.png'
import linkedInImg from '../../assets/icons/linkedin.png'
import facebookImg from '../../assets/icons/facebook.png'

export default function SignUp() {
  return (
    <div className='SignUpSection'>
        <div className="SignUpBox">
            <div className="SignUpImgBox">
                <img src={SinUpImg} alt="" />
            </div>
            <div className="SinUpFormBox">
                <div className="formHeading">
                    <h1 className='formTitle'>Get Started</h1>
                    <span className='formSubTitle'>Already have account? <a href="">sign In</a> </span>
                </div>
                <form action="">
                    <div className="formInputField">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInputField">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div className="formInputField">
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>
                    <a href="" className='btn-primary formButton' >Sign Up</a>
                </form>
                <div className="signOptionsBox">
                    <div className="optionsHeader">
                    <span className='line'></span>
                    <span className='text'>Or sign up with</span>    
                    <span className='line'></span>
                    </div>                  
                    <div className="signOptions">
                        <img src={googleImg} alt="" />
                        <img src={linkedInImg} alt="" />
                        <img src={facebookImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
