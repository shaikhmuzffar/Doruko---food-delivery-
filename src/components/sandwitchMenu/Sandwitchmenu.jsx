import React from 'react'
import { Link } from 'react-router-dom'

// css 
import './sandwitchmenu.css'

// imgs 
import sideArrow from '../../assets/Images/icons/arrowLeft.png'

export default function Sandwitchmenu({ sandwitchMenuLinks }) {
    return (
        <div className="sandwitchMenu">
            <ul className='sandwitchMenuLinks'>

                {

                    sandwitchMenuLinks.map((link, index) =>
                        <li>
                            <Link key={index} className={link.active?`sandwitchMenuLink active`:`sandwitchMenuLink`} to={link.linkTo}>
                                <img src={sideArrow} alt="" />
                                <span>{link.lable}</span>
                            </Link>
                        </li>
                    )


                }

            </ul>
        </div>
    )

}
