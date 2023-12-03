import React from 'react'
import './sectionHeading.css'

import ArrowL from '../../../assets/icons/arrowLeft.png'
import ArrowR from '../../../assets/icons/arrowRight.png'

export default function SectionHeading({title,arrows}) {
    return (
        <div className="sectionheading">
            <h1>{title}</h1>
            {
                arrows?( <div className="slideArrows">
                <img src={ArrowL} alt="" />
                <img src={ArrowR} alt="" />
            </div>):""
            }
           
        </div>
    )
}
