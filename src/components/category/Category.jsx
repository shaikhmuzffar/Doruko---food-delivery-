import React, { useState,useEffect } from 'react'

import categoriesData from '../../data/allCategories.js'


// css
import './category.css'

// Component 
import SectionHeading from '../global/sectionHeading/SectionHeading'
import Product from '../global/product/Product.jsx'

// images 
import allIcon from '../../assets/icons/allIcon.png'
import allIconFilled from '../../assets/icons/allIconFilled.png'

import burger from '../../assets/icons/burger.png'
import burgerFilled from '../../assets/icons/burgerFilled.png'

import pizzaFilled from '../../assets/icons/pizzaFilled.png'
import pizza from '../../assets/icons/pizza.png'

import sweetFilled from '../../assets/icons/sweetFilled.png'
import sweet from '../../assets/icons/sweet.png'

import cuisinesFilled from '../../assets/icons/cuisinesFilled.png'
import cuisines from '../../assets/icons/cuisines.png'

import veganFilled from '../../assets/icons/veganFilled.png'
import vegan from '../../assets/icons/vegan.png'


const categories = [
    {
        label: "All",
        icon: allIcon,
        iconFilled: allIconFilled
    },
    {
        label: "Snacks",
        icon: burger,
        iconFilled: burgerFilled
    },
    {
        label: "Pizzas",
        icon: pizza,
        iconFilled: pizzaFilled
    },
    {
        label: "Cuisines",
        icon: cuisines,
        iconFilled: cuisinesFilled
    },
    {
        label: "Sweets",
        icon: sweet,
        iconFilled: sweetFilled
    },
    {
        label: "Non Veg",
        icon: vegan,
        iconFilled: veganFilled
    },
]
// console.log(categoriesData) 

export default function () {
    const [categortItemsState, setCategortItemsState] = useState(0)
    useEffect(() => {
    }, [categoriesData])
    
    return (
        <div className='categorySection'>
            <div className="category">
                <SectionHeading title="Top Meals of this Week" />
                <div className="categories">
                    {
                        categories.map((category, index) => <div key={index} onClick={() => setCategortItemsState(index)} className={categortItemsState === index ? "singleCategory singleCategoryActive" : "singleCategory"}>
                            <img src={categortItemsState === index ? category.iconFilled : category.icon} alt="" /><span>{category.label}</span>
                        </div>)
                    }
                </div>
            </div>
            {/* categoryItem */}
            <div className="categoryItems">
                {
                    categoriesData[categortItemsState].slice(0,8).map((category,index) => <Product key={index} data={category} />)
                }
            </div>

        </div>
    )
}
