import pizza1 from '../assets/Images/pizza/pizza1.png'
import pizza2 from '../assets/Images/pizza/pizza2.png'
import pizza3 from '../assets/Images/pizza/pizza3.png'
import pizza4 from '../assets/Images/pizza/pizza4.png'
import pizza5 from '../assets/Images/pizza/pizza5.png'
import pizza6 from '../assets/Images/pizza/pizza6.png'
import pizza7 from '../assets/Images/pizza/pizza7.png'
import pizza8 from '../assets/Images/pizza/pizza8.png'
import pizza9 from '../assets/Images/pizza/pizza9.png'
import pizza10 from '../assets/Images/pizza/pizza10.png'
import pizza11 from '../assets/Images/pizza/pizza11.png'
import pizza12 from '../assets/Images/pizza/pizza12.png'


const pizzas = [
        {
            id: 191919,
            name: "Margherita Pizza",
            category: "pizzas",
            tags: ["pizza", "Italian"],
            quantity: 1,
            originalPrice: 280,
            discountPrice: 250,
            offer: "11% off",
            rating: 4.7,
            reviews: 240,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Fresh Basil",
                "Olive Oil"
            ],
            smallImage: pizza9,
            bigImage: pizza9,
            details: {
                nutrition_info: {
                    calories: 320,
                    protein: 12,
                    carbohydrates: 40,
                    fat: 14
                },
                restaurant: {
                    name: "Italian Delights",
                    distance: "1.0km",
                    rating: "4.6",
                    reviews: "220",
                    address: "456 Pizza Lane, Pizzaville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user261.jpg",
                    name: "pizzaLover",
                    rating: 4.7,
                    comment: "The Margherita Pizza from Italian Delights is a classic. The simplicity and flavors are perfect."
                },
                {
                    image: "user262.jpg",
                    name: "italianFoodie",
                    rating: 4.6,
                    comment: "I can't resist the taste of this Margherita Pizza. It's a delightful Italian treat."
                },
                {
                    image: "user263.jpg",
                    name: "cheeseLover",
                    rating: 4.8,
                    comment: "If you love cheese, you'll love this Margherita Pizza. It's cheesy and delicious!"
                }
            ],
            description: "Indulge in the classic flavors of Italy with Margherita Pizza from Italian Delights. Made with tomato sauce, mozzarella cheese, and fresh basil, it's a timeless favorite."
        },
        {
            id: 202020,
            name: "Paneer Tikka Pizza",
            category: "pizzas",
            tags: ["pizza", "Indian"],
            quantity: 1,
            originalPrice: 320,
            discountPrice: 290,
            offer: "9% off",
            rating: 4.6,
            reviews: 230,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Paneer Tikka",
                "Capsicum",
                "Onions",
                "Tomato Sauce"
            ],
            smallImage: pizza11,
            bigImage: pizza11,
            details: {
                nutrition_info: {
                    calories: 360,
                    protein: 14,
                    carbohydrates: 45,
                    fat: 16
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "210",
                    address: "456 Tikka Lane, Tikkatown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user271.jpg",
                    name: "pizzaLover",
                    rating: 4.6,
                    comment: "The Paneer Tikka Pizza from Indian Flavors is a spicy delight. The paneer tikka adds a unique Indian twist."
                },
                {
                    image: "user272.jpg",
                    name: "indianFoodie",
                    rating: 4.5,
                    comment: "I love Indian flavors, and this Paneer Tikka Pizza is one of my favorites. It's a flavorful treat."
                },
                {
                    image: "user273.jpg",
                    name: "spiceLover",
                    rating: 4.7,
                    comment: "If you enjoy spicy Indian dishes, you'll enjoy this Paneer Tikka Pizza. It's deliciously spicy!"
                }
            ],
            description: "Experience the fusion of Indian and Italian flavors with Paneer Tikka Pizza from Indian Flavors. Made with paneer tikka, capsicum, and onions, it's a spicy and flavorful pizza."
        },
        {
            id: 212121,
            name: "Butter Chicken Pizza",
            category: "pizzas",
            tags: ["pizza", "Indian"],
            quantity: 1,
            originalPrice: 350,
            discountPrice: 320,
            offer: "9% off",
            rating: 4.7,
            reviews: 250,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Butter Chicken",
                "Bell Peppers",
                "Onions",
                "Tomato Sauce"
            ],
            smallImage: pizza5,
            bigImage: pizza5,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 16,
                    carbohydrates: 40,
                    fat: 18
                },
                restaurant: {
                    name: "Spicy Bites",
                    distance: "1.3km",
                    rating: "4.6",
                    reviews: "220",
                    address: "456 Butter Street, Buttertown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user281.jpg",
                    name: "pizzaLover",
                    rating: 4.7,
                    comment: "The Butter Chicken Pizza from Spicy Bites is a delightful twist on a classic. It's creamy and flavorful."
                },
                {
                    image: "user282.jpg",
                    name: "indianFoodie",
                    rating: 4.6,
                    comment: "As an Indian food enthusiast, I can't get enough of this Butter Chicken Pizza. It's a must-try."
                },
                {
                    image: "user283.jpg",
                    name: "foodieExplorer",
                    rating: 4.8,
                    comment: "If you're a fan of butter chicken, you'll love this pizza. It's a creamy and delicious treat."
                }
            ],
            description: "Indulge in the rich and creamy flavors of India with Butter Chicken Pizza from Spicy Bites. Made with butter chicken, bell peppers, and onions, it's a creamy and flavorful pizza."
        },
        {
            id: 222222,
            name: "Tandoori Chicken Pizza",
            category: "pizzas",
            tags: ["pizza", "Indian"],
            quantity: 1,
            originalPrice: 360,
            discountPrice: 330,
            offer: "8% off",
            rating: 4.7,
            reviews: 260,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Tandoori Chicken",
                "Bell Peppers",
                "Onions",
                "Tomato Sauce"
            ],
            smallImage: pizza6,
            bigImage: pizza6,
            details: {
                nutrition_info: {
                    calories: 390,
                    protein: 18,
                    carbohydrates: 38,
                    fat: 16
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "230",
                    address: "456 Tandoori Lane, Tandooriville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user291.jpg",
                    name: "pizzaLover",
                    rating: 4.7,
                    comment: "The Tandoori Chicken Pizza from Indian Flavors is a spicy delight. The tandoori chicken is perfectly cooked."
                },
                {
                    image: "user292.jpg",
                    name: "indianFoodie",
                    rating: 4.6,
                    comment: "I'm a fan of Indian flavors, and this Tandoori Chicken Pizza is one of the best I've had. It's delicious!"
                },
                {
                    image: "user293.jpg",
                    name: "spiceLover",
                    rating: 4.8,
                    comment: "If you enjoy spicy Indian dishes, you won't be disappointed with this Tandoori Chicken Pizza. It's fantastic!"
                }
            ],
            description: "Experience the bold and spicy flavors of India with Tandoori Chicken Pizza from Indian Flavors. Made with tandoori chicken, bell peppers, and onions, it's a spicy and delicious pizza."
        },
        {
            id: 232323,
            name: "Veggie Supreme Pizza",
            category: "pizzas",
            tags: ["pizza", "vegetarian", "Italian"],
            quantity: 1,
            originalPrice: 320,
            discountPrice: 290,
            offer: "9% off",
            rating: 4.6,
            reviews: 240,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Assorted Vegetables",
                "Mozzarella Cheese",
                "Tomato Sauce",
                "Olive Oil"
            ],
            smallImage: pizza1,
            bigImage: pizza1,
            details: {
                nutrition_info: {
                    calories: 320,
                    protein: 10,
                    carbohydrates: 40,
                    fat: 14
                },
                restaurant: {
                    name: "Italian Delights",
                    distance: "1.0km",
                    rating: "4.6",
                    reviews: "220",
                    address: "456 Pizza Lane, Pizzaville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user301.jpg",
                    name: "pizzaLover",
                    rating: 4.6,
                    comment: "The Veggie Supreme Pizza from Italian Delights is a vegetarian delight. It's loaded with fresh vegetables."
                },
                {
                    image: "user302.jpg",
                    name: "vegetarianFoodie",
                    rating: 4.5,
                    comment: "I enjoy vegetarian pizzas, and this Veggie Supreme Pizza is one of my favorites. It's delicious and satisfying."
                },
                {
                    image: "user303.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "If you're a vegetarian looking for a flavorful pizza, this Veggie Supreme Pizza is a great choice. It's a veggie lover's dream."
                }
            ],
            description: "Satisfy your vegetarian pizza cravings with Veggie Supreme Pizza from Italian Delights. Loaded with assorted vegetables and mozzarella cheese, it's a vegetarian's delight."
        },
        {
            id: 242424,
            name: "Chicken Tikka Pizza",
            category: "pizzas",
            tags: ["pizza", "non-vegetarian", "Indian"],
            quantity: 1,
            originalPrice: 350,
            discountPrice: 320,
            offer: "9% off",
            rating: 4.7,
            reviews: 250,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Chicken Tikka",
                "Bell Peppers",
                "Onions",
                "Tomato Sauce"
            ],
            smallImage: pizza8,
            bigImage: pizza8,
            details: {
                nutrition_info: {
                    calories: 390,
                    protein: 16,
                    carbohydrates: 38,
                    fat: 18
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "230",
                    address: "456 Tikka Lane, Tikkatown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user311.jpg",
                    name: "pizzaLover",
                    rating: 4.7,
                    comment: "The Chicken Tikka Pizza from Indian Flavors is a flavorful treat. The chicken tikka is delicious."
                },
                {
                    image: "user312.jpg",
                    name: "indianFoodie",
                    rating: 4.6,
                    comment: "I'm a fan of Indian flavors, and this Chicken Tikka Pizza is one of the best. It's spicy and tasty."
                },
                {
                    image: "user313.jpg",
                    name: "spiceLover",
                    rating: 4.8,
                    comment: "If you love Indian spices, you'll enjoy this Chicken Tikka Pizza. It's a spicy delight!"
                }
            ],
            description: "Spice up your pizza game with Chicken Tikka Pizza from Indian Flavors. Made with chicken tikka, bell peppers, and onions, it's a spicy and flavorful pizza."
        },
        {
            id: 303030,
            name: "Paneer Tikka Pizza",
            category: "pizzas",
            tags: ["pizza", "vegetarian", "Indian"],
            quantity: 1,
            originalPrice: 320,
            discountPrice: 290,
            offer: "9% off",
            rating: 4.6,
            reviews: 230,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Paneer Tikka",
                "Bell Peppers",
                "Onions",
                "Tomato Sauce"
            ],
            smallImage: pizza12,
            bigImage: pizza12,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 14,
                    carbohydrates: 45,
                    fat: 16
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "230",
                    address: "456 Tikka Lane, Tikkatown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user371.jpg",
                    name: "pizzaLover",
                    rating: 4.6,
                    comment: "The Paneer Tikka Pizza from Indian Flavors is a spicy delight. The paneer tikka is delicious."
                },
                {
                    image: "user372.jpg",
                    name: "indianFoodie",
                    rating: 4.5,
                    comment: "I'm a fan of Indian flavors, and this Paneer Tikka Pizza is one of the best. It's spicy and tasty."
                },
                {
                    image: "user373.jpg",
                    name: "spiceLover",
                    rating: 4.8,
                    comment: "If you love Indian spices, you won't be disappointed with this Paneer Tikka Pizza. It's a spicy delight!"
                }
            ],
            description: "Spice up your pizza game with Paneer Tikka Pizza from Indian Flavors. Made with paneer tikka, bell peppers, and onions, it's a spicy and flavorful pizza."
        },
        {
            id: 292929,
            name: "Biryani Pizza",
            category: "pizzas",
            tags: ["pizza", "Indian"],
            quantity: 1,
            originalPrice: 360,
            discountPrice: 330,
            offer: "8% off",
            rating: 4.6,
            reviews: 230,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Chicken Biryani",
                "Mint Chutney",
                "Onions",
                "Mozzarella Cheese"
            ],
            smallImage: pizza2,
            bigImage: pizza2,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 16,
                    carbohydrates: 38,
                    fat: 18
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "230",
                    address: "456 Biryani Lane, Biryanitown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user361.jpg",
                    name: "pizzaLover",
                    rating: 4.6,
                    comment: "The Biryani Pizza from Indian Flavors is a fusion of flavors. It's like biryani on a pizza!"
                },
                {
                    image: "user362.jpg",
                    name: "indianFoodie",
                    rating: 4.5,
                    comment: "I'm a biryani lover, and this Biryani Pizza is a delightful twist. The mint chutney adds a refreshing touch."
                },
                {
                    image: "user363.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "If you're a fan of biryani, you'll enjoy this Biryani Pizza. It's a unique and delicious creation."
                }
            ],
            description: "Experience the fusion of two classics with Biryani Pizza from Indian Flavors. Made with chicken biryani, mint chutney, and mozzarella cheese, it's a flavorful and unique pizza."
        },
        {
            id: 282828,
            name: "Chilli Cheese Pizza",
            category: "pizzas",
            tags: ["pizza", "vegetarian", "Mexican"],
            quantity: 1,
            originalPrice: 340,
            discountPrice: 310,
            offer: "9% off",
            rating: 4.7,
            reviews: 250,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Chilli Cheese",
                "Jalapeños",
                "Bell Peppers",
                "Tomato Sauce"
            ],
            smallImage: pizza3,
            bigImage: pizza3,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 14,
                    carbohydrates: 45,
                    fat: 16
                },
                restaurant: {
                    name: "Mexican Delights",
                    distance: "1.3km",
                    rating: "4.6",
                    reviews: "240",
                    address: "456 Chilli Lane, Chilitown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user351.jpg",
                    name: "pizzaLover",
                    rating: 4.7,
                    comment: "The Chilli Cheese Pizza from Mexican Delights is a spicy delight. The chilli cheese adds a kick of flavor."
                },
                {
                    image: "user352.jpg",
                    name: "spiceLover",
                    rating: 4.6,
                    comment: "I love spicy food, and this Chilli Cheese Pizza is right up my alley. It's spicy and cheesy in the best way."
                },
                {
                    image: "user353.jpg",
                    name: "foodieExplorer",
                    rating: 4.8,
                    comment: "For a pizza with a spicy twist, try the Chilli Cheese Pizza. It's perfect for spice lovers."
                }
            ],
            description: "Spice up your pizza experience with Chilli Cheese Pizza from Mexican Delights. Loaded with chilli cheese, jalapeños, and bell peppers, it's a spicy and cheesy delight."
        },
        {
            id: 272727,
            name: "Egg Bhurji Pizza",
            category: "pizzas",
            tags: ["pizza", "vegetarian", "Indian"],
            quantity: 1,
            originalPrice: 320,
            discountPrice: 290,
            offer: "9% off",
            rating: 4.6,
            reviews: 230,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Egg Bhurji",
                "Bell Peppers",
                "Onions",
                "Tomato Sauce"
            ],
            smallImage: pizza7,
            bigImage: pizza7,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 14,
                    carbohydrates: 45,
                    fat: 16
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "230",
                    address: "456 Bhurji Lane, Bhurjitown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user341.jpg",
                    name: "pizzaLover",
                    rating: 4.6,
                    comment: "The Egg Bhurji Pizza from Indian Flavors is a unique twist on pizza. The egg bhurji is flavorful."
                },
                {
                    image: "user342.jpg",
                    name: "indianFoodie",
                    rating: 4.5,
                    comment: "I enjoy trying Indian flavors, and this Egg Bhurji Pizza is a delightful surprise. It's tasty and satisfying."
                },
                {
                    image: "user343.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "For a unique and flavorful pizza experience, try the Egg Bhurji Pizza. It's a fusion of flavors that works wonderfully."
                }
            ],
            description: "Experience the fusion of Indian and Italian flavors with Egg Bhurji Pizza from Indian Flavors. Made with egg bhurji, bell peppers, and onions, it's a flavorful and unique pizza."
        },
        {
            id: 262626,
            name: "BBQ Chicken Pizza",
            category: "pizzas",
            tags: ["pizza", "non-vegetarian", "American"],
            quantity: 1,
            originalPrice: 380,
            discountPrice: 350,
            offer: "8% off",
            rating: 4.7,
            reviews: 240,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "BBQ Chicken",
                "Red Onions",
                "Mozzarella Cheese",
                "BBQ Sauce"
            ],
            smallImage: pizza10,
            bigImage: pizza10,
            details: {
                nutrition_info: {
                    calories: 390,
                    protein: 18,
                    carbohydrates: 38,
                    fat: 18
                },
                restaurant: {
                    name: "American Delights",
                    distance: "1.2km",
                    rating: "4.6",
                    reviews: "230",
                    address: "456 BBQ Lane, BBQtown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user331.jpg",
                    name: "pizzaLover",
                    rating: 4.7,
                    comment: "The BBQ Chicken Pizza from American Delights is a savory treat. The BBQ sauce adds a delicious twist."
                },
                {
                    image: "user332.jpg",
                    name: "bbqLover",
                    rating: 4.6,
                    comment: "I'm a BBQ enthusiast, and this BBQ Chicken Pizza is one of my favorites. It's smoky and flavorful."
                },
                {
                    image: "user333.jpg",
                    name: "foodieExplorer",
                    rating: 4.8,
                    comment: "If you crave the smoky flavor of BBQ, this BBQ Chicken Pizza won't disappoint. It's a BBQ lover's dream."
                }
            ],
            description: "Experience the smoky goodness of BBQ with BBQ Chicken Pizza from American Delights. Made with BBQ chicken, red onions, and mozzarella cheese, it's a smoky and savory pizza."
        },
        {
            id: 252525,
            name: "Keema Pizza",
            category: "pizzas",
            tags: ["pizza", "non-vegetarian", "Indian"],
            quantity: 1,
            originalPrice: 360,
            discountPrice: 330,
            offer: "8% off",
            rating: 4.6,
            reviews: 230,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pizza Dough",
                "Keema",
                "Onions",
                "Bell Peppers",
                "Tomato Sauce"
            ],
            smallImage: pizza4,
            bigImage: pizza4,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 16,
                    carbohydrates: 38,
                    fat: 18
                },
                restaurant: {
                    name: "Indian Flavors",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "230",
                    address: "456 Keema Lane, Keematown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user321.jpg",
                    name: "pizzaLover",
                    rating: 4.6,
                    comment: "The Keema Pizza from Indian Flavors is a meat lover's delight. It's loaded with delicious keema."
                },
                {
                    image: "user322.jpg",
                    name: "indianFoodie",
                    rating: 4.5,
                    comment: "If you're a fan of keema, you'll love this Keema Pizza. It's flavorful and satisfying."
                },
                {
                    image: "user323.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "This Keema Pizza is a must-try. It's packed with meaty goodness and Indian flavors."
                }
            ],
            description: "Satisfy your meat cravings with Keema Pizza from Indian Flavors. Loaded with keema, onions, and bell peppers, it's a meaty and flavorful pizza."
        }
    ]

export default pizzas;