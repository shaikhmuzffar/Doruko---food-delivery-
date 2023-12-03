import React from 'react'
import { Link } from 'react-router-dom'

// components
import SectionHeading from '../../components/global/sectionHeading/SectionHeading'
import Sandwitchmenu from '../../components/sandwitchMenu/Sandwitchmenu'
import noItemImg from '../../assets/Images/otherBanners/noItemOrder.png'
import arrowLeft from '../../assets/Images/icons/arrowLeft.png'

export default function Orders() {
    const sandwitchMenuLinks = [
        {
          lable:'back to shop',
          linkTo:"/",
          active:false
        },
        {
          lable:'orders',
          linkTo:"/orders",
          active:true,
        },
      ]
    return (
        <div className="orderSection">
      <Sandwitchmenu sandwitchMenuLinks={sandwitchMenuLinks} />

            <SectionHeading title="Your Orders" arrows={false} />
            <div className="cartWithNoItem2">
                <img src={noItemImg} alt="" />
            </div>
            <div>
              <Link to="/" className='addSomthing2'>continue shopping <img src={arrowLeft} alt="" /></Link>
            </div>
        </div>
        
    )
}
