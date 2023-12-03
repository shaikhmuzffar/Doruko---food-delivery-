import fastFood1 from '../assets/Images/fastFood/fastFood1.png'
import fastFood2 from '../assets/Images/fastFood/fastFood2.png'
import fastFood3 from '../assets/Images/fastFood/fastFood3.png'
import fastFood4 from '../assets/Images/fastFood/fastFood4.png'
import fastFood5 from '../assets/Images/fastFood/fastFood5.png'
import fastFood6 from '../assets/Images/fastFood/fastFood6.png'
import fastFood7 from '../assets/Images/fastFood/fastFood7.png'
import fastFood8 from '../assets/Images/fastFood/fastFood8.png'
import fastFood9 from '../assets/Images/fastFood/fastFood9.png'
import fastFood10 from '../assets/Images/fastFood/fastFood10.png'
import fastFood11 from '../assets/Images/fastFood/fastFood11.png'
import fastFood12 from '../assets/Images/fastFood/fastFood12.png'
import fastFood13 from '../assets/Images/fastFood/fastFood13.png'
import fastFood14 from '../assets/Images/fastFood/fastFood14.png'
import fastFood15 from '../assets/Images/fastFood/fastFood15.png'
import fastFood16 from '../assets/Images/fastFood/fastFood16.png'
import fastFood17 from '../assets/Images/fastFood/fastFood17.png'

const fastFood =  [
        {
            id: 789012,
            name: "Classic Cheeseburger",
            category: "fastfood",
            tags: ["burger", "main course", "cheeseburger"],
            quantity: 1,
            originalPrice: 250,
            discountPrice: 220,
            offer: "12% off",
            rating: 4.5,
            reviews: 180,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Beef Patty",
                "Cheese",
                "Lettuce",
                "Tomato",
                "Onions",
                "Pickles",
                "Ketchup",
                "Mustard",
                "Bun"
            ],
            smallImage: fastFood9,
            bigImage: fastFood9,
            details: {
                nutrition_info: {
                    calories: 450,
                    protein: 20,
                    carbohydrates: 35,
                    fat: 28
                },
                restaurant: {
                    name: "Burger Haven",
                    distance: "1.2km",
                    rating: "4.2",
                    reviews: "150",
                    address: "789 Burger Street, Foodtown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "11:00 AM to 10:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user71.jpg",
                    name: "burgerFanatic",
                    rating: 4.5,
                    comment: "The Classic Cheeseburger from Burger Haven is simply amazing. The taste is perfect!"
                },
                {
                    image: "user72.jpg",
                    name: "foodExplorer",
                    rating: 4.2,
                    comment: "I've tried cheeseburgers from many places, but this one stands out. Great flavor!"
                },
                {
                    image: "user73.jpg",
                    name: "burgerKing",
                    rating: 4.7,
                    comment: "You can't go wrong with a Classic Cheeseburger. This one hits the spot every time."
                }
            ],
            description: "Indulge in the classic flavors of a Cheeseburger from Burger Haven. Made with a juicy beef patty, melted cheese, fresh veggies, and a soft bun, it's a burger lover's delight."
        },
        {
            id: 111111,
            name: "Classic Beef Burger",
            category: "fastfood",
            tags: ["burger", "main course", "beef burger"],
            quantity: 1,
            originalPrice: 280,
            discountPrice: 250,
            offer: "11% off",
            rating: 4.6,
            reviews: 220,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Beef Patty",
                "Lettuce",
                "Tomato",
                "Onions",
                "Pickles",
                "Ketchup",
                "Mustard",
                "Bun"
            ],
            smallImage: fastFood8,
            bigImage: fastFood8,
            details: {
                nutrition_info: {
                    calories: 480,
                    protein: 22,
                    carbohydrates: 36,
                    fat: 30
                },
                restaurant: {
                    name: "Burger Delight",
                    distance: "1.5km",
                    rating: "4.7",
                    reviews: "200",
                    address: "789 Burger Avenue, Foodville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "11:00 AM to 10:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user81.jpg",
                    name: "burgerAficionado",
                    rating: 4.6,
                    comment: "The Classic Beef Burger from Burger Delight is top-notch. The beef patty is juicy and delicious!"
                },
                {
                    image: "user82.jpg",
                    name: "foodieCravings",
                    rating: 4.5,
                    comment: "This burger is a classic for a reason. It's always a satisfying meal."
                },
                {
                    image: "user83.jpg",
                    name: "beefLover",
                    rating: 4.8,
                    comment: "I can't resist the flavors of this Classic Beef Burger. It's a burger lover's dream."
                }
            ],
            description: "Savor the timeless taste of a Classic Beef Burger from Burger Delight. Featuring a juicy beef patty, fresh veggies, and a soft bun, it's a burger classic."
        },
        {
            id: 222222,
            name: "Veggie Burger",
            category: "fastfood",
            tags: ["burger", "main course", "veggie burger"],
            quantity: 1,
            originalPrice: 220,
            discountPrice: 199,
            offer: "10% off",
            rating: 4.4,
            reviews: 180,
            time: "12-15 mins",
            shipping: "free",
            ingredients: [
                "Veggie Patty",
                "Lettuce",
                "Tomato",
                "Onions",
                "Pickles",
                "Ketchup",
                "Mustard",
                "Bun"
            ],
            smallImage: fastFood7,
            bigImage: fastFood7,
            details: {
                nutrition_info: {
                    calories: 350,
                    protein: 12,
                    carbohydrates: 40,
                    fat: 16
                },
                restaurant: {
                    name: "Green Bites",
                    distance: "1.0km",
                    rating: "4.2",
                    reviews: "150",
                    address: "456 Veggie Street, Greensville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "11:30 AM to 9:30 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user91.jpg",
                    name: "veggieLover",
                    rating: 4.4,
                    comment: "The Veggie Burger from Green Bites is packed with flavor. A great choice for vegetarians."
                },
                {
                    image: "user92.jpg",
                    name: "healthyEater",
                    rating: 4.3,
                    comment: "I appreciate the healthier option of a Veggie Burger. Tastes amazing!"
                },
                {
                    image: "user93.jpg",
                    name: "plantBasedFoodie",
                    rating: 4.5,
                    comment: "A delicious Veggie Burger that even non-vegetarians will enjoy. Highly recommended."
                }
            ],
            description: "Delight in the taste of a Veggie Burger from Green Bites. Made with a flavorful veggie patty, fresh toppings, and a soft bun, it's a vegetarian delight."
        },
        {
            id: 333333,
            name: "BBQ Burger",
            category: "fastfood",
            tags: ["burger", "main course", "BBQ burger"],
            quantity: 1,
            originalPrice: 270,
            discountPrice: 240,
            offer: "11% off",
            rating: 4.7,
            reviews: 250,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Beef Patty",
                "BBQ Sauce",
                "Lettuce",
                "Onions",
                "Pickles",
                "Bun"
            ],
            smallImage: fastFood13,
            bigImage: fastFood13,
            details: {
                nutrition_info: {
                    calories: 520,
                    protein: 24,
                    carbohydrates: 38,
                    fat: 34
                },
                restaurant: {
                    name: "Smokehouse Burgers",
                    distance: "2.0km",
                    rating: "4.8",
                    reviews: "220",
                    address: "789 BBQ Street, Smoketown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 10:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user101.jpg",
                    name: "bbqLover",
                    rating: 4.7,
                    comment: "The BBQ Burger from Smokehouse Burgers is a smoky delight. The flavors are incredible!"
                },
                {
                    image: "user102.jpg",
                    name: "grillMaster",
                    rating: 4.6,
                    comment: "If you're a fan of BBQ, this burger is a must-try. It's so satisfying."
                },
                {
                    image: "user103.jpg",
                    name: "meatAndSmoke",
                    rating: 4.8,
                    comment: "A burger that combines meaty goodness with BBQ perfection. Absolutely delicious!"
                }
            ],
            description: "Satisfy your BBQ cravings with the BBQ Burger from Smokehouse Burgers. Featuring a juicy beef patty and smoky BBQ sauce, it's a taste explosion."
        },
        {
            id: 444444,
            name: "Chicken Burger",
            category: "fastfood",
            tags: ["burger", "main course", "chicken burger"],
            quantity: 1,
            originalPrice: 240,
            discountPrice: 210,
            offer: "12% off",
            rating: 4.4,
            reviews: 190,
            time: "12-15 mins",
            shipping: "free",
            ingredients: [
                "Grilled Chicken Patty",
                "Lettuce",
                "Tomato",
                "Onions",
                "Mayonnaise",
                "Bun"
            ],
            smallImage: fastFood12,
            bigImage: fastFood12,
            details: {
                nutrition_info: {
                    calories: 380,
                    protein: 18,
                    carbohydrates: 40,
                    fat: 16
                },
                restaurant: {
                    name: "Chicken Delights",
                    distance: "1.3km",
                    rating: "4.3",
                    reviews: "170",
                    address: "456 Chicken Street, Chickenville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "11:30 AM to 9:30 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user111.jpg",
                    name: "chickenLover",
                    rating: 4.4,
                    comment: "The Chicken Burger from Chicken Delights is a chicken lover's dream. So tasty!"
                },
                {
                    image: "user112.jpg",
                    name: "burgerCraver",
                    rating: 4.3,
                    comment: "I can't resist the juicy chicken patty in this burger. It's a delightful meal."
                },
                {
                    image: "user113.jpg",
                    name: "mayoFanatic",
                    rating: 4.5,
                    comment: "The mayonnaise adds the perfect creaminess to this Chicken Burger. Highly recommend."
                }
            ],
            description: "Savor the flavors of a Chicken Burger from Chicken Delights. Featuring a grilled chicken patty and creamy mayonnaise, it's a chicken lover's delight."
        },
        {
            id: 555555,
            name: "Spicy Chicken Burger",
            category: "fastfood",
            tags: ["burger", "main course", "spicy chicken burger"],
            quantity: 1,
            originalPrice: 260,
            discountPrice: 230,
            offer: "11% off",
            rating: 4.6,
            reviews: 210,
            time: "12-15 mins",
            shipping: "free",
            ingredients: [
                "Spicy Grilled Chicken Patty",
                "Lettuce",
                "Tomato",
                "Onions",
                "Spicy Sauce",
                "Bun"
            ],
            smallImage: fastFood10,
            bigImage: fastFood10,
            details: {
                nutrition_info: {
                    calories: 410,
                    protein: 20,
                    carbohydrates: 36,
                    fat: 22
                },
                restaurant: {
                    name: "Spice King Burgers",
                    distance: "1.7km",
                    rating: "4.5",
                    reviews: "190",
                    address: "789 Spicy Street, Spicetown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "11:30 AM to 9:30 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user121.jpg",
                    name: "spiceLover",
                    rating: 4.6,
                    comment: "The Spicy Chicken Burger from Spice King Burgers lives up to its name. It's spicy and delicious!"
                },
                {
                    image: "user122.jpg",
                    name: "hotAndTasty",
                    rating: 4.5,
                    comment: "If you enjoy spicy food, this burger is a must-try. The chicken patty has a great kick."
                },
                {
                    image: "user123.jpg",
                    name: "spiceCraver",
                    rating: 4.7,
                    comment: "I can't get enough of the Spicy Chicken Burger. It's a spicy delight!"
                }
            ],
            description: "Experience the heat of a Spicy Chicken Burger from Spice King Burgers. With a spicy grilled chicken patty and fiery sauce, it's a spicy food lover's choice."
        },
        {
            id: 131313,
            name: "Spaghetti",
            category: "fastfood",
            tags: ["pasta", "main course", "Italian"],
            quantity: 1,
            originalPrice: 280,
            discountPrice: 250,
            offer: "11% off",
            rating: 4.7,
            reviews: 240,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Spaghetti",
                "Tomato Sauce",
                "Cheese",
                "Herbs",
                "Olive Oil"
            ],
            smallImage: fastFood2,
            bigImage: fastFood2,
            details: {
                nutrition_info: {
                    calories: 350,
                    protein: 12,
                    carbohydrates: 40,
                    fat: 16
                },
                restaurant: {
                    name: "Italian Delights",
                    distance: "1.0km",
                    rating: "4.6",
                    reviews: "220",
                    address: "456 Pasta Lane, Pastaville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user201.jpg",
                    name: "pastaLover",
                    rating: 4.7,
                    comment: "The Spaghetti from Italian Delights is heavenly. The sauce is just perfect!"
                },
                {
                    image: "user202.jpg",
                    name: "italianFoodie",
                    rating: 4.6,
                    comment: "I can't get enough of this Spaghetti. It's a delightful Italian treat."
                },
                {
                    image: "user203.jpg",
                    name: "cheeseLover",
                    rating: 4.8,
                    comment: "If you love cheese, you'll love this Spaghetti. It's cheesy and delicious!"
                }
            ],
            description: "Indulge in a classic Italian Spaghetti from Italian Delights. Made with spaghetti, rich tomato sauce, and cheese, it's a taste of Italy."
        },
        {
            id: 141414,
            name: "Chili Chicken",
            category: "fastFood",
            tags: ["chicken", "appetizer", "spicy"],
            quantity: 1,
            originalPrice: 220,
            discountPrice: 199,
            offer: "10% off",
            rating: 4.5,
            reviews: 200,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Chicken",
                "Bell Peppers",
                "Onions",
                "Chili Sauce",
                "Spices"
            ],
            smallImage: fastFood15,
            bigImage: fastFood15,
            details: {
                nutrition_info: {
                    calories: 280,
                    protein: 14,
                    carbohydrates: 20,
                    fat: 12
                },
                restaurant: {
                    name: "Spicy Delights",
                    distance: "1.2km",
                    rating: "4.4",
                    reviews: "190",
                    address: "456 Chili Street, Spicetown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user211.jpg",
                    name: "chickenLover",
                    rating: 4.5,
                    comment: "The Chili Chicken from Spicy Delights is a spicy delight. It has the perfect kick!"
                },
                {
                    image: "user212.jpg",
                    name: "spiceEnthusiast",
                    rating: 4.4,
                    comment: "I love spicy food, and this Chili Chicken doesn't disappoint. It's flavorful and spicy."
                },
                {
                    image: "user213.jpg",
                    name: "foodieExplorer",
                    rating: 4.6,
                    comment: "If you enjoy spicy appetizers, you'll love this Chili Chicken. It's fantastic!"
                }
            ],
            description: "Spice up your appetizer with Chili Chicken from Spicy Delights. Made with tender chicken, bell peppers, and spicy chili sauce, it's a fiery delight."
        },
        {
            id: 151515,
            name: "Chili Potato",
            category: "fastfood",
            tags: ["chilli potato", "appetizer", "spicy"],
            quantity: 1,
            originalPrice: 180,
            discountPrice: 160,
            offer: "11% off",
            rating: 4.6,
            reviews: 210,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Potato",
                "Bell Peppers",
                "Onions",
                "Chili Sauce",
                "Spices"
            ],
            smallImage: fastFood16,
            bigImage: fastFood16,
            details: {
                nutrition_info: {
                    calories: 220,
                    protein: 6,
                    carbohydrates: 28,
                    fat: 8
                },
                restaurant: {
                    name: "Spud Delights",
                    distance: "1.0km",
                    rating: "4.5",
                    reviews: "190",
                    address: "456 Potato Street, Spudsville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user221.jpg",
                    name: "potatoLover",
                    rating: 4.6,
                    comment: "The Chili Potato from Spud Delights is a spicy treat. The potatoes are perfectly cooked."
                },
                {
                    image: "user222.jpg",
                    name: "spiceEnthusiast",
                    rating: 4.5,
                    comment: "I enjoy spicy snacks, and these Chili Potatoes are a great choice. They're delicious!"
                },
                {
                    image: "user223.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "If you love spicy appetizers, you won't be disappointed with these Chili Potatoes. They're fantastic!"
                }
            ],
            description: "Spice up your appetizer with Chili Potato from Spud Delights. Made with crispy potatoes, bell peppers, and spicy chili sauce, it's a fiery delight."
        },
        {
            id: 101010,
            name: "Tacos",
            category: "fastfood",
            tags: ["tacos", "main course", "Mexican"],
            quantity: 1,
            originalPrice: 250,
            discountPrice: 220,
            offer: "12% off",
            rating: 4.7,
            reviews: 260,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Taco Shells",
                "Ground Beef",
                "Lettuce",
                "Tomato",
                "Cheese",
                "Salsa"
            ],
            smallImage: fastFood6,
            bigImage: fastFood6,
            details: {
                nutrition_info: {
                    calories: 320,
                    protein: 16,
                    carbohydrates: 25,
                    fat: 18
                },
                restaurant: {
                    name: "Mexican Flavors",
                    distance: "1.5km",
                    rating: "4.6",
                    reviews: "230",
                    address: "456 Taco Street, Mexicoville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user171.jpg",
                    name: "tacoLover",
                    rating: 4.7,
                    comment: "These Tacos from Mexican Flavors are a burst of Mexican goodness. The flavors are authentic."
                },
                {
                    image: "user172.jpg",
                    name: "mexicanFoodie",
                    rating: 4.6,
                    comment: "If you're a fan of Mexican cuisine, you'll love these Tacos. They're delicious!"
                },
                {
                    image: "user173.jpg",
                    name: "foodieExplorer",
                    rating: 4.8,
                    comment: "I can't resist the taste of these Tacos. They're a Mexican food lover's dream."
                }
            ],
            description: "Experience the flavors of Mexico with Tacos from Mexican Flavors. Filled with ground beef, fresh toppings, and salsa, they're a Mexican delight."
        },
        {
            id: 999999,
            name: "Veg Rolls",
            category: "fastfood",
            tags: ["veg rolls", "appetizer", "vegetarian"],
            quantity: 1,
            originalPrice: 160,
            discountPrice: 140,
            offer: "12% off",
            rating: 4.5,
            reviews: 190,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Mixed Vegetables",
                "Tortilla Wrap",
                "Lettuce",
                "Tomato",
                "Mayonnaise"
            ],
            smallImage: fastFood4,
            bigImage: fastFood4,
            details: {
                nutrition_info: {
                    calories: 180,
                    protein: 8,
                    carbohydrates: 22,
                    fat: 8
                },
                restaurant: {
                    name: "Veggie Delights",
                    distance: "1.2km",
                    rating: "4.4",
                    reviews: "170",
                    address: "789 Veggie Street, Greensville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user161.jpg",
                    name: "veggieLover",
                    rating: 4.5,
                    comment: "These Veg Rolls from Veggie Delights are a delightful vegetarian treat. The freshness of vegetables shines through."
                },
                {
                    image: "user162.jpg",
                    name: "vegetarianFoodie",
                    rating: 4.4,
                    comment: "I'm a vegetarian, and these Veg Rolls are one of my favorites. They're flavorful and filling."
                },
                {
                    image: "user163.jpg",
                    name: "foodieExplorer",
                    rating: 4.6,
                    comment: "If you're looking for a tasty vegetarian appetizer, these Veg Rolls are a great choice."
                }
            ],
            description: "Enjoy a delightful vegetarian snack with Veg Rolls from Veggie Delights. Filled with mixed vegetables and mayonnaise, they're a tasty appetizer option."
        },
        {
            id: 666666,
            name: "Pasta",
            category: "fastfood",
            tags: ["pasta", "main course", "Italian"],
            quantity: 1,
            originalPrice: 300,
            discountPrice: 270,
            offer: "10% off",
            rating: 4.7,
            reviews: 280,
            time: "20-25 mins",
            shipping: "free",
            ingredients: [
                "Pasta",
                "Tomato Sauce",
                "Cheese",
                "Herbs",
                "Olive Oil"
            ],
            smallImage: fastFood17,
            bigImage: fastFood17,
            details: {
                nutrition_info: {
                    calories: 350,
                    protein: 12,
                    carbohydrates: 40,
                    fat: 16
                },
                restaurant: {
                    name: "Italian Delights",
                    distance: "1.0km",
                    rating: "4.6",
                    reviews: "220",
                    address: "456 Pasta Lane, Pastaville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user131.jpg",
                    name: "pastaLover",
                    rating: 4.7,
                    comment: "The Pasta from Italian Delights is heavenly. The sauce is just perfect!"
                },
                {
                    image: "user132.jpg",
                    name: "italianFoodie",
                    rating: 4.6,
                    comment: "I can't get enough of this Pasta. It's a delightful Italian treat."
                },
                {
                    image: "user133.jpg",
                    name: "cheeseLover",
                    rating: 4.8,
                    comment: "If you love cheese, you'll love this Pasta. It's cheesy and delicious!"
                }
            ],
            description: "Indulge in a classic Italian Pasta from Italian Delights. Made with pasta, rich tomato sauce, and cheese, it's a taste of Italy."
        },
        {
            id: 888888,
            name: "Chicken Rolls",
            category: "fastfood",
            tags: ["chicken rolls", "appetizer", "chicken"],
            quantity: 1,
            originalPrice: 180,
            discountPrice: 160,
            offer: "11% off",
            rating: 4.6,
            reviews: 210,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Grilled Chicken",
                "Tortilla Wrap",
                "Lettuce",
                "Tomato",
                "Mayonnaise"
            ],
            smallImage: fastFood3,
            bigImage: fastFood3,
            details: {
                nutrition_info: {
                    calories: 220,
                    protein: 14,
                    carbohydrates: 18,
                    fat: 10
                },
                restaurant: {
                    name: "Roll Delight",
                    distance: "1.0km",
                    rating: "4.6",
                    reviews: "190",
                    address: "456 Roll Street, Rollsville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user151.jpg",
                    name: "rollLover",
                    rating: 4.6,
                    comment: "The Chicken Rolls from Roll Delight are simply delicious. The chicken is tender, and the flavors are great."
                },
                {
                    image: "user152.jpg",
                    name: "appetizerFanatic",
                    rating: 4.5,
                    comment: "These Chicken Rolls make for a tasty appetizer. The tortilla wrap is soft and perfect."
                },
                {
                    image: "user153.jpg",
                    name: "foodieCravings",
                    rating: 4.7,
                    comment: "I love the convenience of these Chicken Rolls. They're a quick and satisfying snack."
                }
            ],
            description: "Satisfy your cravings with Chicken Rolls from Roll Delight. Filled with grilled chicken, fresh vegetables, and mayonnaise, they're a delightful appetizer."
        },
        {
            id: 161616,
            name: "Ramen",
            category: "fastfood",
            tags: ["ramen", "noodles", "main course", "Japanese"],
            quantity: 1,
            originalPrice: 240,
            discountPrice: 220,
            offer: "8% off",
            rating: 4.6,
            reviews: 230,
            time: "15-20 mins",
            shipping: "free",
            ingredients: [
                "Ramen Noodles",
                "Broth",
                "Egg",
                "Seaweed",
                "Green Onions"
            ],
            smallImage: fastFood5,
            bigImage: fastFood5,
            details: {
                nutrition_info: {
                    calories: 320,
                    protein: 12,
                    carbohydrates: 40,
                    fat: 14
                },
                restaurant: {
                    name: "Japanese Delights",
                    distance: "1.2km",
                    rating: "4.5",
                    reviews: "220",
                    address: "456 Ramen Street, Japanville",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user231.jpg",
                    name: "ramenLover",
                    rating: 4.6,
                    comment: "The Ramen from Japanese Delights is an authentic delight. It's flavorful and satisfying."
                },
                {
                    image: "user232.jpg",
                    name: "japaneseFoodie",
                    rating: 4.5,
                    comment: "I'm a fan of Japanese cuisine, and this Ramen is one of the best I've had. It's delicious!"
                },
                {
                    image: "user233.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "I can't resist the taste of this Ramen. It's a Japanese food lover's dream."
                }
            ],
            description: "Experience the flavors of Japan with Ramen from Japanese Delights. Made with ramen noodles, savory broth, and traditional toppings, it's a Japanese culinary delight."
        },
        {
            id: 171717,
            name: "Aloo Tikki Burger",
            category: "fastfood",
            tags: ["burger", "vegetarian", "aloo tikki", "Indian"],
            quantity: 1,
            originalPrice: 150,
            discountPrice: 135,
            offer: "10% off",
            rating: 4.5,
            reviews: 210,
            time: "10-15 mins",
            shipping: "free",
            ingredients: [
                "Aloo Tikki",
                "Burger Bun",
                "Lettuce",
                "Tomato",
                "Sauce"
            ],
            smallImage: fastFood11,
            bigImage: fastFood11,
            details: {
                nutrition_info: {
                    calories: 280,
                    protein: 6,
                    carbohydrates: 35,
                    fat: 12
                },
                restaurant: {
                    name: "Indian Bites",
                    distance: "1.0km",
                    rating: "4.4",
                    reviews: "190",
                    address: "456 Tikki Street, Indiatown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user241.jpg",
                    name: "burgerLover",
                    rating: 4.5,
                    comment: "The Aloo Tikki Burger from Indian Bites is a tasty vegetarian delight. The aloo tikki is flavorful."
                },
                {
                    image: "user242.jpg",
                    name: "vegetarianFoodie",
                    rating: 4.4,
                    comment: "As a vegetarian, I love this Aloo Tikki Burger. It's filling and has a great combination of flavors."
                },
                {
                    image: "user243.jpg",
                    name: "foodieExplorer",
                    rating: 4.6,
                    comment: "If you're looking for a satisfying vegetarian burger, this Aloo Tikki Burger is a great choice."
                }
            ],
            description: "Satisfy your burger cravings with the Aloo Tikki Burger from Indian Bites. Made with aloo tikki, fresh lettuce, and tangy sauce, it's an Indian burger delight."
        },
        {
            id: 181818,
            name: "Paneer Burger",
            category: "fastfood",
            tags: ["paneer burger", "vegetarian", "Indian"],
            quantity: 1,
            originalPrice: 160,
            discountPrice: 145,
            offer: "9% off",
            rating: 4.6,
            reviews: 220,
            time: "10-15 mins",
            shipping: "free",
            ingredients: [
                "Paneer Patty",
                "Burger Bun",
                "Lettuce",
                "Tomato",
                "Sauce"
            ],
            smallImage: fastFood14,
            bigImage: fastFood14,
            details: {
                nutrition_info: {
                    calories: 320,
                    protein: 8,
                    carbohydrates: 40,
                    fat: 14
                },
                restaurant: {
                    name: "Indian Bites",
                    distance: "1.0km",
                    rating: "4.4",
                    reviews: "190",
                    address: "456 Paneer Street, Indiatown",
                    availability: {
                        days: "Monday to Sunday",
                        hours: "12:00 PM to 9:00 PM"
                    }
                }
            },
            customer_reviews: [
                {
                    image: "user251.jpg",
                    name: "burgerLover",
                    rating: 4.6,
                    comment: "The Paneer Burger from Indian Bites is a delicious vegetarian burger. The paneer patty is soft and tasty."
                },
                {
                    image: "user252.jpg",
                    name: "vegetarianFoodie",
                    rating: 4.5,
                    comment: "I'm a vegetarian, and this Paneer Burger is one of my favorites. It's flavorful and filling."
                },
                {
                    image: "user253.jpg",
                    name: "foodieExplorer",
                    rating: 4.7,
                    comment: "If you're in the mood for a vegetarian burger, this Paneer Burger is a great choice. It's tasty and satisfying."
                }
            ],
            description: "Indulge in the flavors of India with the Paneer Burger from Indian Bites. Made with soft paneer patty, fresh lettuce, and tangy sauce, it's a delightful vegetarian burger."
        },
    ]
export default fastFood;