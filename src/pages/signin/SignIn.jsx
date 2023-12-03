import React from 'react'

// css
import './signIn.css'

// images 
import SingInImg from '../../assets/banner/signInBanner.png'
import googleImg from '../../assets/icons/google.png'
import linkedInImg from '../../assets/icons/linkedin.png'
import facebookImg from '../../assets/icons/facebook.png'

export default function SignIn() {
  return (
    <div className='SignInSection'>
        <div className="SignInBox">
            <div className="SignInImgBox">
                <img src={SingInImg} alt="" />
            </div>
            <div className="SinUpFormBox">
                <div className="formHeading">
                    <h1 className='formTitle'>Get Started</h1>
                    <span className='formSubTitle'>Create a new Account? <a href="">sign Up</a> </span>
                </div>
                <form action="">
                    <div className="formInputField">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div className="formInputField">
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>
                    <a href="" className='btn-primary formButton' >Sign IN</a>
                </form>
                <div className="signOptionsBox">
                    <div className="optionsHeader">
                    <span className='line'></span>
                    <span className='text'>Or sign in with</span>    
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
