import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCategory({bannerData}) {
    const {bannerImg,bannerTitle,bannerSubTitle,bannerItems,flexDir,route} =bannerData
    return (
        <>
            <div className="productCategory" style={{ backgroundImage: `url(${bannerImg})`,justifyContent:`${flexDir}`}}>
                <div className="productCategoryBannerInfo">
                    <div className="productCategoryBannerInfoTitle">
                        <h1>{bannerTitle}</h1>
                        <span>{bannerSubTitle}</span>
                        <span>{bannerItems}</span>
                    </div>
                    <Link to={`/products/${route}`} >Explore</Link>
                </div>
            </div>
        </>
    )
}
