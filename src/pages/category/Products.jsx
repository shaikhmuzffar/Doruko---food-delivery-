import React from 'react'

// components
import ProductCategory from '../../components/productCategory/ProductCategory'
import Sandwitchmenu from '../../components/sandwitchMenu/Sandwitchmenu'
// css 
import './products.css'

// bannerData
import bannerDatas from '../../data/allBannersData'

// img banner
import burgerBanner from '../../assets/Images/categoryBanners/burger.png'
import pizzaBanner from '../../assets/Images/categoryBanners/pizza.png'
import cuisinesBanner from '../../assets/Images/categoryBanners/cuisines.png'
import nonvegBanner from '../../assets/Images/categoryBanners/nonVeg.png'
import vegBanner from '../../assets/Images/categoryBanners/veg.png'
import sweetsBanner from '../../assets/Images/categoryBanners/sweets.png'

export default function Category() {
  const sandwitchMenuLinks = [
    {
      lable:'back to shop',
      linkTo:"/",
      active:false
    },
    {
      lable:'categories',
      linkTo:"/products",
      active:true,
    },
  ]
  return (
    <>
      <div className="products">
      <Sandwitchmenu sandwitchMenuLinks={sandwitchMenuLinks} />
        <div className="productsCatgories">
          {
          bannerDatas.map((bannerData,index) =><ProductCategory key={index} bannerData={bannerData}/>)
            }
        </div>
      </div>
    </>
  )
}
