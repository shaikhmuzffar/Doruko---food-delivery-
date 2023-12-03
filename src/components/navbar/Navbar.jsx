import React from 'react'
import './navbar.css'

// images
import placeMarker from '../../assets/icons/placeMarker.png';
import userImg from '../../assets/icons/userImg.png';
import cartIcon from '../../assets/Images/icons/bagFilled.png';
import cartIconFilled from '../../assets/Images/icons/bag.png';

import bellIcon from '../../assets/Images/icons/NotificationFilled.png';
import bellIconFilled from '../../assets/Images/icons/Notification.png';

export default function Navbar({
    setshowSidecart,
    showSidecart,
    showNotification,
    setShowNotification,
    showUserMenu,
    setShowUserMenu }) {
    return (
        <div className="navbarSection">
            <div className="navbar">
                <div className="locationAndSearch">
                    {/* location  */}
                    <div className="navLocation">
                        <img src={placeMarker} alt="" style={{ opacity: ".5" }} />
                        <span>solapur, india</span>
                    </div>
                    {/* searchbar */}
                    {/* <div className="searchbar">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' />
                    </div> */}
                </div>
                {/* userActions */}
                <div className="userActions">
                    <div className="userAccount" onClick={()=>{
                        setShowUserMenu(!showUserMenu)
                        setShowNotification(false)
                        setshowSidecart(false)

                    }} >
                        <img src={userImg} alt="" />
                        <span>hello, <b>Muzffar</b></span>
                    </div>
                    <img src={showNotification ? bellIconFilled : bellIcon}   className='notificationIcon' onClick={() => {
                        setShowNotification(!showNotification)
                        setshowSidecart(false)
                        setShowUserMenu(false)

                    }} alt="" />
                    <img src={showSidecart ? cartIconFilled : cartIcon}  onClick={() => {
                        setshowSidecart(!showSidecart)
                        setShowNotification(false)
                        setShowUserMenu(false)
                    }} className='cart' alt="" />
                </div>
            </div>
        </div>
    )
}
