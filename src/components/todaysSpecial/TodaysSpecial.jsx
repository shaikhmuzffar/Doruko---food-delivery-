import React from 'react'
import SectionHeading from '../../components/global/sectionHeading/SectionHeading'
import './todaysSpecial.css'

import classicBurgerImg from '../../assets/burgers/burger1.png'
import buddhaBowlImg from '../../assets/vegan/vegan2.png'
import margheritaPizza from '../../assets/pizzas/pizza1.png'
import caesarSalad from '../../assets/vegan/vegan7.png'
import spaghetti from '../../assets/cuisines/cuisine1.png'
// components
import Product from '../global/product/Product'

import allCategories from '../../data/allCategories'

const todaysSpecialsData = allCategories[0]

export default function TodaysSpecial() {
    return (
        <div className="todaysSpecialSection">
            <div className="todaysSpecial">
                <SectionHeading title="What would you eat today?" arrows={true} />
                <div className="todaysSpecialsItems">
                    {
                        todaysSpecialsData.slice(2,6).map((tds,index)=><Product key={index} data={tds}/>)
                        
                    }
                </div>
            </div>
        </div>
    )
}
