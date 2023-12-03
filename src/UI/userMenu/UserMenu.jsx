import React from 'react'
import './userMenu.css'

// img
import userSquare from '../../assets/icons/userSquare.png'
import smallArrow from '../../assets/icons/smallArrow.png'
import userAccountImg from '../../assets/icons/userAccountImg.png'
import arrowBig from '../../assets/icons/arrowBig.png'
import logOutImg from '../../assets/icons/logOutImg.png'

export default function UserMenu() {
    return (
        <div className='userMenu'>
            <div className="userProfile">
                <img src={userSquare} alt="" />
                <div className="userProfileInfo">
                    <div className='userProfileName'><span>Muzffar Shaikh</span> <img src={smallArrow} alt="" /> </div>
                    <span className='userProfileEmail'>shaikhmuzffar82@gmail.com</span>
                </div>
            </div>
            <div className="userProfileLinks">
                <a className='userProfileLink' href="">
                    <div className='userProfileLinkImg'>
                        <img src={userAccountImg} alt="" />
                        <span>Account</span>
                    </div>
                    <img src={arrowBig} alt="" />
                </a>
                <a className='userProfileLink' href="">
                    <div className='userProfileLinkImg'>
                        <img src={logOutImg} alt="" />
                        <span>Logout</span>
                    </div>
                    <img src={arrowBig} alt="" />
                </a>
            </div>
        </div>
    )
}
