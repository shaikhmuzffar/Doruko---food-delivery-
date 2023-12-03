import React from 'react'


import './nearRestaurants.css'

// components
import Restaurant from '../restaurant/Restaurant'
import SectionHeading from '../global/sectionHeading/SectionHeading'
import restaurantImg1 from '../../assets/restaurants/restaurant1.png'
import restaurantImg2 from '../../assets/restaurants/restaurant2.png'
import restaurantImg3 from '../../assets/restaurants/restaurant3.png'


const restaurantsData = [
    {
        RestaurantImg: restaurantImg1,
        RestaurantName: "Spice of Mumbai",
        Rating: "4.5 out of 5",
        Address: "123 Masala Street, Colaba, Mumbai",
        Description: "Spice of Mumbai offers a culinary journey through India's flavors. Taste traditional dishes in the heart of Mumbai's historic Colaba district."
    },
    {
        RestaurantImg: restaurantImg2,
        RestaurantName: "Seafood Haven",
        Rating: "4.8 out of 5",
        Address: "456 Coastal Road, Juhu Beach, Mumbai",
        Description: "Seafood Haven delights with fresh catches and oceanfront dining. Experience the essence of Mumbai's coastal cuisine by the sea."
    },
    {
        RestaurantImg: restaurantImg3,
        RestaurantName: "The Curry House",
        Rating: "4.3 out of 5",
        Address: "789 Curry Lane, Andheri West, Mumbai",
        Description: "The Curry House serves authentic Indian curries that transport your taste buds. Discover rich flavors in the heart of Andheri West."
    },
    {
        RestaurantImg: restaurantImg1,
        RestaurantName: "Taj Mahal Delights",
        Rating: "4.7 out of 5",
        Address: "101 Monument View, Gateway of India, Mumbai",
        Description: "Taj Mahal Delights offers a royal dining experience with Mughlai cuisine. Enjoy exquisite dishes in the shadow of the iconic Gateway of India."
    },
    // {
    //     Restaurant Name: "Mumbai Spice Bazaar",
    //     Rating: "4.6 out of 5",
    //     Address: "555 Spice Market, Bandra, Mumbai",
    //     Description: "Mumbai Spice Bazaar is a sensory adventure. Explore a variety of spices and savor Mumbai's diverse street food flavors in vibrant Bandra."
    // }
]

export default function NearRestaurants() {
    return (
        <div className='NearRestaurantsSection'>
            <div className="nearRestaurants">
                <SectionHeading title="Restaurants Near you" arrows={false} />
                <div className="restaurants">
                    {
                        (restaurantsData.slice(0,3)).map((restaurant,index) =><Restaurant key={index} data={restaurant}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
