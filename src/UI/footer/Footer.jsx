import React from 'react'
import Input from '../../components/input/Input'

// css
import './footer.css'

// icons
import { TbLocationFilled } from 'react-icons/tb'

// img
import logo from '../../assets/logo/logo - black.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerColumns">

                <div className="footerColumn footerBrandInfo">
                    <div className="footerColumnBox">
                        <div className="logo footerColumnHeader">
                            <img src={logo} alt="" />
                        </div>
                        <p className="footerColumnInfo">in Doruko we always aim to bring a flavorful delivery to your doorstep.</p>
                    </div>
                    <div className="footerColumnBox">
                        <h1 className="footerColumnHeader">Contact info</h1>
                        <p className="footerColumnInfo">123 Main Street, Cityville Stateville, 12345</p>
                    </div>
                </div>

                <div className="footerColumn">
                    <div className="footerColumnBox">
                        <h1 className="footerColumnHeader">Quick Links</h1>
                        <ul className="footerColumnInfo footerColumnLinks">
                            <li className='footerColumnLink'><a href="">Home</a></li>
                            <li className='footerColumnLink'><a href="">Categories</a></li>
                            <li className='footerColumnLink'><a href="">Orders</a></li>
                            <li className='footerColumnLink'><a href="">Support</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footerColumn">
                    <div className="footerColumnBox">
                        <h1 className="footerColumnHeader">Explore</h1>
                        <ul className="footerColumnInfo footerColumnLinks">
                            <li className='footerColumnLink'><a href="">FAQ's</a></li>
                            <li className='footerColumnLink'><a href="">Privacy Policy</a></li>
                            <li className='footerColumnLink'><a href="">Terms and Conditions</a></li>
                            <li className='footerColumnLink'><a href="">Blogs</a></li>
                            <li className='footerColumnLink'><a href="">Careers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footerColumn">
                    <div className="footerColumnBox">
                        <h1 className="footerColumnHeader">Newsletter</h1>
                        <p className="footerColumnInfo">Subscribe to Our Newsletter</p>
                    </div>
                    <div className=" footerInputBox">
                        {/* <input type="text"  placeholder='useremail@gmai.com' /> */}
                        <input className="footerInput" placeholder="useremail@gmail.com" />
                
                        <a href="" className="footerButton"><TbLocationFilled/></a>
                    </div>
                </div>

            </div>
            <div className="coprightAndSocialMedias">
                <span>©2023 Doruko. All Rights Reserved.</span>
                <span>social media</span>
            </div>
        </div>
    )
}
