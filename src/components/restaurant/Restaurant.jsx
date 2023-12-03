import React from 'react'
import './restaurant.css'

// imgs 
import ratingImg from '../../assets/icons/ratings.png'
import locationImg from '../../assets/icons/placeMarker.png'

export default function Restaurant({data}) {
    const {RestaurantImg,RestaurantName,Address,Description} = data;
    return (
        <div className="restaurant">
            <div className="restaurantImg">
                <img src={RestaurantImg} alt="" />
            </div>
            <div className="restaurantInfo">
                <div className="nameAndRating">
                    <h1>{RestaurantName}</h1><img src={ratingImg} alt="" />
                </div>
                <div className="location">
                    <img src={locationImg} alt="" />
                    <span>{Address.length<35?Address:Address.slice(0, 30)+'...'}</span>
                </div>
                <p className='description'>{Description.slice(0, 90)}...</p>
            </div>
        </div>
    )
}
