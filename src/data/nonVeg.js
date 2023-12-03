import nonVeg1 from '../assets/Images/nonVeg/nonVeg1.png'
import nonVeg2 from '../assets/Images/nonVeg/nonVeg2.png'
import nonVeg3 from '../assets/Images/nonVeg/nonVeg3.png'
import nonVeg4 from '../assets/Images/nonVeg/nonVeg4.png'
import nonVeg5 from '../assets/Images/nonVeg/nonVeg5.png'
import nonVeg6 from '../assets/Images/nonVeg/nonVeg6.png'
import nonVeg7 from '../assets/Images/nonVeg/nonVeg7.png'
import nonVeg8 from '../assets/Images/nonVeg/nonVeg8.png'
import nonVeg9 from '../assets/Images/nonVeg/nonVeg9.png'

const nonVeg = [
    {
        id: 313131,
        name: "Fish Curry",
        category: "nonveg",
        tags: ["curry", "seafood", "Indian"],
        quantity: 1,
        originalPrice: 420,
        discountPrice: 390,
        offer: "7% off",
        rating: 4.5,
        reviews: 180,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Fish",
            "Onions",
            "Tomatoes",
            "Coconut Milk",
            "Spices"
        ],
        smallImage: nonVeg6,
        bigImage: nonVeg6,
        details: {
            nutrition_info: {
                calories: 280,
                protein: 18,
                carbohydrates: 12,
                fat: 16
            },
            restaurant: {
                name: "Seafood Delights",
                distance: "2.0km",
                rating: "4.4",
                reviews: "150",
                address: "456 Curry Lane, Seaville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user381.jpg",
                name: "seafoodLover",
                rating: 4.5,
                comment: "The Fish Curry from Seafood Delights is incredibly flavorful. The coconut milk adds a delightful creaminess."
            },
            {
                image: "user382.jpg",
                name: "foodieExplorer",
                rating: 4.4,
                comment: "I'm a fan of seafood, and this Fish Curry is one of my favorites. It's a must-try for seafood enthusiasts."
            },
            {
                image: "user383.jpg",
                name: "curryEnthusiast",
                rating: 4.6,
                comment: "If you love curry and seafood, this Fish Curry is a winning combination. It's delicious!"
            }
        ],
        description: "Indulge in the rich and aromatic flavors of Fish Curry from Seafood Delights. Made with tender fish, coconut milk, and spices, it's a seafood lover's dream."
    },
    {
        id: 323232,
        name: "Chicken 65",
        category: "nonveg",
        tags: ["appetizer", "chicken", "Indian"],
        quantity: 1,
        originalPrice: 320,
        discountPrice: 290,
        offer: "9% off",
        rating: 4.6,
        reviews: 210,
        time: "25-30 mins",
        shipping: "free",
        ingredients: [
            "Chicken",
            "Yogurt",
            "Spices",
            "Curry Leaves"
        ],
        smallImage: nonVeg9,
        bigImage: nonVeg9,
        details: {
            nutrition_info: {
                calories: 280,
                protein: 20,
                carbohydrates: 10,
                fat: 14
            },
            restaurant: {
                name: "Spice Delights",
                distance: "1.5km",
                rating: "4.7",
                reviews: "190",
                address: "456 Spice Lane, Spicetown",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user391.jpg",
                name: "chickenLover",
                rating: 4.6,
                comment: "The Chicken 65 from Spice Delights is perfectly spiced and incredibly tasty. It's a great appetizer."
            },
            {
                image: "user392.jpg",
                name: "spiceEnthusiast",
                rating: 4.7,
                comment: "I can't get enough of the Chicken 65 from Spice Delights. It's a flavorful and spicy delight."
            },
            {
                image: "user393.jpg",
                name: "foodieExplorer",
                rating: 4.5,
                comment: "For a spicy and delicious appetizer, Chicken 65 from Spice Delights is the way to go. Highly recommended!"
            }
        ],
        description: "Savor the spicy goodness of Chicken 65 from Spice Delights. Made with tender chicken, yogurt, and a blend of spices, it's a perfect appetizer."
    },
    {
        id: 333333,
        name: "Chicken Korma",
        category: "nonveg",
        tags: ["curry", "chicken", "Indian"],
        quantity: 1,
        originalPrice: 380,
        discountPrice: 350,
        offer: "8% off",
        rating: 4.7,
        reviews: 240,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Chicken",
            "Onions",
            "Cashews",
            "Cream",
            "Spices"
        ],
        smallImage: nonVeg8,
        bigImage: nonVeg8,
        details: {
            nutrition_info: {
                calories: 320,
                protein: 22,
                carbohydrates: 14,
                fat: 18
            },
            restaurant: {
                name: "Curry Delights",
                distance: "1.8km",
                rating: "4.6",
                reviews: "220",
                address: "456 Curry Lane, Currytown",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user401.jpg",
                name: "curryLover",
                rating: 4.7,
                comment: "The Chicken Korma from Curry Delights is a creamy and flavorful delight. The cashews add a nice crunch."
            },
            {
                image: "user402.jpg",
                name: "spiceLover",
                rating: 4.6,
                comment: "If you enjoy creamy and rich curries, Chicken Korma from Curry Delights won't disappoint. It's amazing."
            },
            {
                image: "user403.jpg",
                name: "foodieExplorer",
                rating: 4.8,
                comment: "For a creamy and indulgent curry experience, try the Chicken Korma. It's a true delight!"
            }
        ],
        description: "Indulge in the creamy and rich flavors of Chicken Korma from Curry Delights. Made with tender chicken, cashews, and cream, it's a delightful curry."
    },
    {
        id: 343434,
        name: "Rogan Josh",
        category: "nonveg",
        tags: ["curry", "lamb", "Indian"],
        quantity: 1,
        originalPrice: 450,
        discountPrice: 420,
        offer: "7% off",
        rating: 4.6,
        reviews: 210,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Lamb",
            "Yogurt",
            "Tomatoes",
            "Spices",
            "Ghee"
        ],
        smallImage: nonVeg2,
        bigImage: nonVeg2,
        details: {
            nutrition_info: {
                calories: 350,
                protein: 24,
                carbohydrates: 12,
                fat: 20
            },
            restaurant: {
                name: "Spice Delights",
                distance: "1.5km",
                rating: "4.7",
                reviews: "190",
                address: "456 Spice Lane, Spicetown",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user411.jpg",
                name: "curryLover",
                rating: 4.6,
                comment: "The Rogan Josh from Spice Delights is a flavorful delight. The lamb is tender, and the spices are just right."
            },
            {
                image: "user412.jpg",
                name: "spiceEnthusiast",
                rating: 4.7,
                comment: "I'm a fan of rich and spicy curries, and Rogan Josh from Spice Delights is one of the best I've had."
            },
            {
                image: "user413.jpg",
                name: "foodieExplorer",
                rating: 4.5,
                comment: "For a spicy and indulgent curry experience, Rogan Josh is a must-try. It's truly delicious!"
            }
        ],
        description: "Savor the rich and spicy flavors of Rogan Josh from Spice Delights. Made with tender lamb, yogurt, and a blend of spices, it's a curry lover's dream."
    },
    {
        id: 353535,
        name: "Lamb Korma",
        category: "nonveg",
        tags: ["curry", "lamb", "Indian"],
        quantity: 1,
        originalPrice: 480,
        discountPrice: 450,
        offer: "6% off",
        rating: 4.7,
        reviews: 220,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Lamb",
            "Onions",
            "Cashews",
            "Cream",
            "Spices"
        ],
        smallImage: nonVeg5,
        bigImage: nonVeg5,
        details: {
            nutrition_info: {
                calories: 360,
                protein: 26,
                carbohydrates: 14,
                fat: 22
            },
            restaurant: {
                name: "Curry Delights",
                distance: "1.8km",
                rating: "4.6",
                reviews: "210",
                address: "456 Curry Lane, Currytown",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user421.jpg",
                name: "curryLover",
                rating: 4.7,
                comment: "The Lamb Korma from Curry Delights is a rich and indulgent curry. The cashews add a nice crunch."
            },
            {
                image: "user422.jpg",
                name: "foodieExplorer",
                rating: 4.6,
                comment: "I'm a fan of creamy curries, and Lamb Korma from Curry Delights is one of my favorites. It's truly delicious."
            },
            {
                image: "user423.jpg",
                name: "spiceLover",
                rating: 4.8,
                comment: "For a rich and flavorful curry experience, Lamb Korma is a top choice. It's creamy, indulgent, and satisfying."
            }
        ],
        description: "Indulge in the rich and creamy flavors of Lamb Korma from Curry Delights. Made with tender lamb, cashews, and cream, it's a luxurious curry."
    },
    {
        id: 363636,
        name: "Hyderabadi Chicken Dum Biryani",
        category: "nonveg",
        tags: ["biryani", "chicken", "Indian"],
        quantity: 1,
        originalPrice: 380,
        discountPrice: 350,
        offer: "8% off",
        rating: 4.7,
        reviews: 240,
        time: "35-40 mins",
        shipping: "free",
        ingredients: [
            "Chicken",
            "Basmati Rice",
            "Spices",
            "Yogurt",
            "Mint Leaves"
        ],
        smallImage: nonVeg4,
        bigImage: nonVeg4,
        details: {
            nutrition_info: {
                calories: 480,
                protein: 28,
                carbohydrates: 50,
                fat: 16
            },
            restaurant: {
                name: "Biryani Paradise",
                distance: "2.5km",
                rating: "4.8",
                reviews: "250",
                address: "456 Biryani Lane, Biryanitown",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user431.jpg",
                name: "biryaniLover",
                rating: 4.7,
                comment: "The Hyderabadi Chicken Dum Biryani from Biryani Paradise is a true masterpiece. It's flavorful and aromatic."
            },
            {
                image: "user432.jpg",
                name: "spiceEnthusiast",
                rating: 4.8,
                comment: "As a biryani enthusiast, I can vouch for the excellence of this Hyderabadi Chicken Dum Biryani. It's a must-try!"
            },
            {
                image: "user433.jpg",
                name: "foodieExplorer",
                rating: 4.6,
                comment: "For an authentic and flavorful biryani experience, Hyderabadi Chicken Dum Biryani is the way to go. It's a true delight!"
            }
        ],
        description: "Experience the authentic flavors of Hyderabadi Chicken Dum Biryani from Biryani Paradise. Made with tender chicken, basmati rice, and aromatic spices, it's a biryani lover's dream."
    }]

export default nonVeg;