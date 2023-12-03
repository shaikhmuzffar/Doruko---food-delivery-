import cuisine1 from '../assets/Images/cuisinesSet1/cuisines01.png'
import cuisine2 from '../assets/Images/cuisinesSet1/cuisines02.png'
import cuisine3 from '../assets/Images/cuisinesSet1/cuisines03.png'
import cuisine4 from '../assets/Images/cuisinesSet1/cuisines04.png'
import cuisine5 from '../assets/Images/cuisinesSet1/cuisines05.png'
import cuisine6 from '../assets/Images/cuisinesSet1/cuisines06.png'
import cuisine7 from '../assets/Images/cuisinesSet1/cuisines07.png'
import cuisine8 from '../assets/Images/cuisinesSet1/cuisines08.png'
import cuisine9 from '../assets/Images/cuisinesSet1/cuisines09.png'
import cuisine10 from '../assets/Images/cuisinesSet1/cuisines10.png'
import cuisine11 from '../assets/Images/cuisinesSet1/cuisines11.png'
import cuisine12 from '../assets/Images/cuisinesSet1/cuisines12.png'
import cuisine13 from '../assets/Images/cuisinesSet1/cuisines13.png'
import cuisine14 from '../assets/Images/cuisinesSet1/cuisines14.png'
import cuisine15 from '../assets/Images/cuisinesSet1/cuisines15.png'
import cuisine16 from '../assets/Images/cuisinesSet1/cuisines16.png'
import cuisine17 from '../assets/Images/cuisinesSet1/cuisines17.png'
import cuisine18 from '../assets/Images/cuisinesSet1/cuisines18.png'
import cuisine19 from '../assets/Images/cuisinesSet1/cuisines19.png'
import cuisine20 from '../assets/Images/cuisinesSet1/cuisines20.png'
import cuisine21 from '../assets/Images/cuisinesSet1/cuisines21.png'
import cuisine22 from '../assets/Images/cuisinesSet1/cuisines22.png'
import cuisine23 from '../assets/Images/cuisinesSet1/cuisines23.png'
import cuisine24 from '../assets/Images/cuisinesSet1/cuisines24.png'
import cuisine25 from '../assets/Images/cuisinesSet1/cuisines25.png'
import cuisine26 from '../assets/Images/cuisinesSet1/cuisines26.png'
import cuisine27 from '../assets/Images/cuisinesSet1/cuisines27.png'
import cuisine28 from '../assets/Images/cuisinesSet1/cuisines28.png'
import cuisine29 from '../assets/Images/cuisinesSet1/cuisines29.png'
import cuisine30 from '../assets/Images/cuisinesSet1/cuisines30.png'
import cuisine31 from '../assets/Images/cuisinesSet1/cuisines31.png'
import cuisine32 from '../assets/Images/cuisinesSet1/cuisines32.png'
import cuisine33 from '../assets/Images/cuisinesSet1/cuisines33.png'
import cuisine34 from '../assets/Images/cuisinesSet1/cuisines34.png'
import cuisine35 from '../assets/Images/cuisinesSet1/cuisines35.png'
const cuisines = [
    {
        id: 784512,
        name: "Mutton Biryani",
        category: "cuisines",
        tags: ["main course", "indian cuisine", "mutton biryani", "mutton"],
        quantity: 1,
        originalPrice: 249,
        discountPrice: 199,
        offer: "20% off",
        rating: 4.9,
        reviews: 450,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Basmati Rice",
            "Mutton",
            "Onions",
            "Tomatoes",
            "Yogurt",
            "Spices"
        ],
        smallImage: cuisine33,
        bigImage: cuisine33,
        details: {
            nutrition_info: {
                calories: 350,
                protein: 15,
                carbohydrates: 40,
                fat: 12
            },
            restaurant: {
                name: "Spice Paradise",
                distance: "1.2km",
                rating: "4.8",
                reviews: "430",
                restaurant: "123 Spice Street, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:00 AM to 10:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user46.jpg",
                name: "foodieLover789",
                rating: 4.9,
                comment: "The Mutton Biryani from Spice Paradise is a flavor explosion. So aromatic and delicious!"
            },
            {
                image: "user47.jpg",
                name: "biryaniConnoisseur",
                rating: 4.7,
                comment: "This Mutton Biryani is a must-try. The mutton is tender, and the spices are perfect."
            },
            {
                image: "user48.jpg",
                name: "spiceEnthusiast",
                rating: 5.0,
                comment: "I can't get enough of this Mutton Biryani. It's the best I've ever had!"
            }
        ],
        description: "Indulge in the exquisite flavors of Mutton Biryani from Spice Paradise. Made with tender mutton pieces, fragrant basmati rice, and a blend of aromatic spices, this biryani is a culinary masterpiece."
    },
    {
        id: 901234,
        name: "Pyaj Samosa",
        category: "cuisines",
        tags: ["snacks", "samosa", "pyaj samosa", "vegetarian"],
        quantity: 1,
        originalPrice: 30,
        discountPrice: 25,
        offer: "17% off",
        rating: 4.6,
        reviews: 150,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Onions",
            "Spices",
            "Pastry Dough",
            "Oil"
        ],
        smallImage: cuisine25,
        bigImage: cuisine25,
        details: {
            nutrition_info: {
                calories: 100,
                protein: 2,
                carbohydrates: 15,
                fat: 4
            },
            restaurant: {
                name: "Samosa Delights",
                distance: "1.5km",
                rating: "4.6",
                reviews: "145",
                restaurant: "40 Samosa Lane",
                availability: {
                    days: "Monday to Sunday",
                    hours: "9:00 AM to 8:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user49.jpg",
                name: "samosaLover901",
                rating: 4.7,
                comment: "The Pyaj Samosa from Samosa Delights is a crispy delight. Perfectly spiced!"
            },
            {
                image: "user50.jpg",
                name: "snackEnthusiast",
                rating: 4.5,
                comment: "These Pyaj Samosas are a great snack option. The onions add a nice crunch."
            },
            {
                image: "user51.jpg",
                name: "foodieCravings",
                rating: 4.6,
                comment: "I can't resist these Pyaj Samosas. They're a classic Indian snack."
            }
        ],
        description: "Enjoy the crispiness of Pyaj Samosa from Samosa Delights. Stuffed with onions and spices, these samosas are a delightful snack for any time of the day."
    },
    {
        id: 214567,
        name: "Aalu Samosa",
        category: "cuisines",
        tags: ["snacks", "samosa", "aalu samosa", "vegetarian"],
        quantity: 1,
        originalPrice: 25,
        discountPrice: 20,
        offer: "20% off",
        rating: 4.8,
        reviews: 180,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Potatoes",
            "Spices",
            "Pastry Dough",
            "Oil"
        ],
        smallImage: cuisine12,
        bigImage: cuisine12,
        details: {
            nutrition_info: {
                calories: 120,
                protein: 2,
                carbohydrates: 20,
                fat: 5
            },
            restaurant: {
                name: "Samosa Delights",
                distance: "1.5km",
                rating: "4.6",
                reviews: "175",
                restaurant: "40 Samosa Lane",
                availability: {
                    days: "Monday to Sunday",
                    hours: "9:00 AM to 8:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user52.jpg",
                name: "samosaLover234",
                rating: 4.9,
                comment: "The Aalu Samosa from Samosa Delights is a classic favorite. So flavorful!"
            },
            {
                image: "user53.jpg",
                name: "snackEnthusiast",
                rating: 4.7,
                comment: "These Aalu Samosas are the ultimate comfort snack. The potatoes are perfectly spiced."
            },
            {
                image: "user54.jpg",
                name: "foodieCravings",
                rating: 4.8,
                comment: "I can't get enough of these Aalu Samosas. They're a must-try for samosa lovers."
            }
        ],
        description: "Savor the deliciousness of Aalu Samosa from Samosa Delights. Made with spiced potatoes, these samosas are a timeless snack that's perfect for tea-time or anytime."
    },
    {
        id: 325678,
        name: "Pyaj Pakora",
        category: "cuisines",
        tags: ["snacks", "pakora", "pyaj pakora", "vegetarian"],
        quantity: 1,
        originalPrice: 15,
        discountPrice: 12,
        offer: "20% off",
        rating: 4.7,
        reviews: 200,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Onions",
            "Gram Flour",
            "Spices",
            "Oil"
        ],
        smallImage: cuisine23,
        bigImage: cuisine23,
        details: {
            nutrition_info: {
                calories: 90,
                protein: 2,
                carbohydrates: 10,
                fat: 4
            },
            restaurant: {
                name: "Pakora Paradise",
                distance: "1.7km",
                rating: "4.7",
                reviews: "195",
                restaurant: "60 Pakora Street",
                availability: {
                    days: "Monday to Sunday",
                    hours: "10:00 AM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user55.jpg",
                name: "pakoraLover345",
                rating: 4.8,
                comment: "The Pyaj Pakora from Pakora Paradise is a crispy and addictive snack. Perfectly spiced!"
            },
            {
                image: "user56.jpg",
                name: "snackEnthusiast",
                rating: 4.6,
                comment: "These Pyaj Pakoras are a great tea-time treat. The onions are wonderfully crispy."
            },
            {
                image: "user57.jpg",
                name: "foodieCravings",
                rating: 4.7,
                comment: "I can't resist these Pyaj Pakoras. They're a classic favorite for a reason."
            }
        ],
        description: "Indulge in the crunchy goodness of Pyaj Pakora from Pakora Paradise. Made with thinly sliced onions coated in gram flour batter and fried to perfection, these pakoras are a popular Indian snack."
    },
    {
        id: 961234,
        name: "Aalu Pakora",
        category: "cuisines",
        tags: ["snacks", "pakora", "aalu pakora", "vegetarian"],
        quantity: 1,
        originalPrice: 20,
        discountPrice: 15,
        offer: "25% off",
        rating: 4.7,
        reviews: 180,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Potatoes",
            "Chickpea Flour",
            "Spices",
            "Oil"
        ],
        smallImage: cuisine24,
        bigImage: cuisine24,
        details: {
            nutrition_info: {
                calories: 110,
                protein: 2,
                carbohydrates: 15,
                fat: 5
            },
            restaurant: {
                name: "Pakora Paradise",
                distance: "1.7km",
                rating: "4.7",
                reviews: "175",
                restaurant: "60 Pakora Street",
                availability: {
                    days: "Monday to Sunday",
                    hours: "10:00 AM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user61.jpg",
                name: "pakoraLover901",
                rating: 4.8,
                comment: "The Aalu Pakora from Pakora Paradise is a crispy and delicious snack. Perfectly spiced!"
            },
            {
                image: "user62.jpg",
                name: "snackEnthusiast",
                rating: 4.6,
                comment: "These Aalu Pakoras are a great tea-time treat. The potatoes are wonderfully crispy."
            },
            {
                image: "user63.jpg",
                name: "foodieCravings",
                rating: 4.7,
                comment: "I can't resist these Aalu Pakoras. They're a classic favorite for a reason."
            }
        ],
        description: "Indulge in the crispy goodness of Aalu Pakora from Pakora Paradise. Made with thinly sliced potatoes coated in chickpea flour batter and fried to perfection, these pakoras are a popular Indian snack."
    },
    {
        id: 234567,
        name: "Shaabu Vada",
        category: "cuisines",
        tags: ["snacks", "vada", "shaabu vada", "vegetarian"],
        quantity: 1,
        originalPrice: 25,
        discountPrice: 20,
        offer: "20% off",
        rating: 4.8,
        reviews: 200,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Urad Dal (Black Gram)",
            "Rice Flour",
            "Spices",
            "Oil"
        ],
        smallImage: cuisine21,
        bigImage: cuisine21,
        details: {
            nutrition_info: {
                calories: 120,
                protein: 3,
                carbohydrates: 20,
                fat: 4
            },
            restaurant: {
                name: "Vada Delights",
                distance: "2.0km",
                rating: "4.8",
                reviews: "195",
                restaurant: "45 Vada Lane",
                availability: {
                    days: "Monday to Sunday",
                    hours: "10:00 AM to 8:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user64.jpg",
                name: "vadaLover234",
                rating: 4.9,
                comment: "The Shaabu Vada from Vada Delights is a classic favorite. So crispy and flavorful!"
            },
            {
                image: "user65.jpg",
                name: "snackEnthusiast",
                rating: 4.7,
                comment: "These Shaabu Vadas are a delightful snack option. Perfectly spiced and crunchy."
            },
            {
                image: "user66.jpg",
                name: "foodieDelights",
                rating: 4.8,
                comment: "I can't get enough of these Shaabu Vadas. They're a must-try for vada lovers."
            }
        ],
        description: "Savor the deliciousness of Shaabu Vada from Vada Delights. Made with urad dal and spices, these vadas are a classic South Indian snack that's perfect for tea-time or anytime."
    },
    {
        id: 345611,
        name: "Chicken Manchurian",
        category: "cuisines",
        tags: ["main course", "chicken manchurian", "non-vegetarian"],
        quantity: 1,
        originalPrice: 299,
        discountPrice: 249,
        offer: "17% off",
        rating: 4.7,
        reviews: 300,
        time: "25-30 mins",
        shipping: "free",
        ingredients: [
            "Chicken",
            "Soy Sauce",
            "Ginger-Garlic",
            "Bell Peppers",
            "Onions"
        ],
        smallImage: cuisine16,
        bigImage: cuisine16,
        details: {
            nutrition_info: {
                calories: 320,
                protein: 18,
                carbohydrates: 25,
                fat: 14
            },
            restaurant: {
                name: "Manchurian Express",
                distance: "1.8km",
                rating: "4.7",
                reviews: "295",
                restaurant: "50 Manchurian Street",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:00 AM to 10:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user67.jpg",
                name: "manchurianLover345",
                rating: 4.8,
                comment: "The Chicken Manchurian from Manchurian Express is a flavorful delight. The sauce is perfect!"
            },
            {
                image: "user68.jpg",
                name: "chickenEnthusiast",
                rating: 4.7,
                comment: "This Chicken Manchurian is a must-try for Chinese food lovers. The chicken is tender, and the sauce is delicious."
            },
            {
                image: "user69.jpg",
                name: "foodieCravings",
                rating: 4.7,
                comment: "I can't resist this Chicken Manchurian. It's my go-to choice for Chinese cuisine."
            }
        ],
        description: "Indulge in the savory delight of Chicken Manchurian from Manchurian Express. Made with tender chicken pieces and a flavorful sauce, this dish is a Chinese cuisine favorite."
    },
    {
        id: 456789,
        name: "Aalu Tikki",
        category: "cuisines",
        tags: ["snacks", "tikki", "aalu tikki", "vegetarian"],
        quantity: 1,
        originalPrice: 25,
        discountPrice: 20,
        offer: "20% off",
        rating: 4.6,
        reviews: 250,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Potatoes",
            "Spices",
            "Green Chutney",
            "Tamarind Chutney"
        ],
        smallImage: cuisine22,
        bigImage: cuisine22,
        details: {
            nutrition_info: {
                calories: 110,
                protein: 2,
                carbohydrates: 15,
                fat: 5
            },
            restaurant: {
                name: "Tikki Delights",
                distance: "1.5km",
                rating: "4.6",
                reviews: "245",
                restaurant: "35 Tikki Lane",
                availability: {
                    days: "Monday to Sunday",
                    hours: "10:00 AM to 8:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user70.jpg",
                name: "tikkiLover456",
                rating: 4.7,
                comment: "The Aalu Tikki from Tikki Delights is a classic street food delight. So flavorful!"
            },
            {
                image: "user71.jpg",
                name: "snackEnthusiast",
                rating: 4.5,
                comment: "These Aalu Tikkis are a great snack option. The chutneys add a burst of flavor."
            },
            {
                image: "user72.jpg",
                name: "foodieCravings",
                rating: 4.6,
                comment: "I can't resist these Aalu Tikkis. They're a classic Indian street food."
            }
        ],
        description: "Savor the flavors of Aalu Tikki from Tikki Delights. Made with spiced potatoes and served with green and tamarind chutney, these tikkis are a popular street food snack."
    },
    {
        id: 131342,
        name: "Butter Chicken",
        category: "cuisines",
        tags: ["main course", "butter chicken", "non-vegetarian"],
        quantity: 1,
        originalPrice: 329,
        discountPrice: 279,
        offer: "15% off",
        rating: 4.9,
        reviews: 400,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Chicken",
            "Tomato-Based Gravy",
            "Cream",
            "Spices",
            "Butter"
        ],
        smallImage: cuisine32,
        bigImage: cuisine32,
        details: {
            nutrition_info: {
                calories: 380,
                protein: 20,
                carbohydrates: 15,
                fat: 18
            },
            restaurant: {
                name: "Butterlicious",
                distance: "2.2km",
                rating: "4.9",
                reviews: "390",
                restaurant: "100 Butter Street",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 10:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user1016.jpg",
                name: "butterChickenLover",
                rating: 4.9,
                comment: "The Butter Chicken from Butterlicious is sheer indulgence. Creamy, rich, and absolutely delicious!"
            },
            {
                image: "user1017.jpg",
                name: "chickenEnthusiast",
                rating: 4.8,
                comment: "This Butter Chicken is a flavor explosion. The creamy gravy is perfect."
            },
            {
                image: "user1018.jpg",
                name: "foodieCravings",
                rating: 4.9,
                comment: "I can't resist this Butter Chicken. It's a must-try for Indian food lovers."
            }
        ],
        description: "Indulge in the creamy delight of Butter Chicken from Butterlicious. Tender chicken pieces cooked in a rich tomato-based gravy with cream and butter."
    },
    {
        id: 412314,
        name: "Chole Bhature",
        category: "cuisines",
        tags: ["main course", "chole bhature", "vegetarian"],
        quantity: 1,
        originalPrice: 199,
        discountPrice: 149,
        offer: "25% off",
        rating: 4.9,
        reviews: 380,
        time: "30-35 mins",
        shipping: "free",
        ingredients: [
            "Chickpea Curry (Chole)",
            "Fried Bread (Bhature)",
            "Spices",
            "Onions"
        ],
        smallImage: cuisine34,
        bigImage: cuisine34,
        details: {
            nutrition_info: {
                calories: 350,
                protein: 10,
                carbohydrates: 45,
                fat: 15
            },
            restaurant: {
                name: "Bhature Delights",
                distance: "1.6km",
                rating: "4.9",
                reviews: "370",
                restaurant: "70 Bhature Lane",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:00 AM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user1007.jpg",
                name: "choleLover",
                rating: 4.9,
                comment: "The Chole Bhature from Bhature Delights is mouthwatering. The chole is rich and the bhature are fluffy!"
            },
            {
                image: "user1008.jpg",
                name: "veggieEnthusiast",
                rating: 4.8,
                comment: "This Chole Bhature is the best I've had in a long time. The flavors are on point."
            },
            {
                image: "user1009.jpg",
                name: "foodieCravings",
                rating: 4.9,
                comment: "I can't resist these Chole Bhature. They're my comfort food."
            }
        ],
        description: "Savor the deliciousness of Chole Bhature from Bhature Delights. This classic North Indian dish features spicy chickpea curry served with fluffy fried bread."
    },
    {
        id: 232412,
        name: "Paneer Tikka",
        category: "cuisines",
        tags: ["appetizer", "paneer tikka", "vegetarian"],
        quantity: 1,
        originalPrice: 249,
        discountPrice: 199,
        offer: "20% off",
        rating: 4.7,
        reviews: 320,
        time: "20-25 mins",
        shipping: "free",
        ingredients: [
            "Paneer (Indian Cottage Cheese)",
            "Yogurt",
            "Spices",
            "Tikka Marinade"
        ],
        smallImage: cuisine20,
        bigImage: cuisine20,
        details: {
            nutrition_info: {
                calories: 280,
                protein: 12,
                carbohydrates: 8,
                fat: 10
            },
            restaurant: {
                name: "Paneer Paradise",
                distance: "1.3km",
                rating: "4.6",
                reviews: "310",
                restaurant: "60 Paneer Street",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:00 AM to 10:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user1004.jpg",
                name: "paneerLover",
                rating: 4.8,
                comment: "The Paneer Tikka from Paneer Paradise is heavenly. So creamy and flavorful!"
            },
            {
                image: "user1005.jpg",
                name: "veggieEnthusiast",
                rating: 4.6,
                comment: "These Paneer Tikkas are a vegetarian delight. The marinade is perfect."
            },
            {
                image: "user1006.jpg",
                name: "foodieCravings",
                rating: 4.7,
                comment: "I can't resist these Paneer Tikkas. They're a must-try for vegetarians."
            }
        ],
        description: "Enjoy the succulent flavors of Paneer Tikka from Paneer Paradise. Made with marinated paneer grilled to perfection, this appetizer is a favorite among vegetarians."
    },
    {
        id: 234267,
        name: "Chicken Soup",
        category: "cuisines",
        tags: ["appetizer", "soup", "chicken"],
        quantity: 1,
        originalPrice: 129,
        discountPrice: 109,
        offer: "15% off",
        rating: 4.6,
        reviews: 280,
        time: "20-25 mins",
        shipping: "free",
        ingredients: [
            "Chicken",
            "Onions",
            "Carrots",
            "Celery",
            "Spices",
            "Broth"
        ],
        smallImage: cuisine31,
        bigImage: cuisine31,
        details: {
            nutrition_info: {
                calories: 150,
                protein: 12,
                carbohydrates: 7,
                fat: 8
            },
            restaurant: {
                name: "Soup Heaven",
                distance: "1.0km",
                rating: "4.7",
                reviews: "250",
                restaurant: "789 Broth Avenue, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:00 AM to 8:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user67.jpg",
                name: "chickenSoupFan",
                rating: 4.6,
                comment: "The Chicken Soup from Soup Heaven is soothing and delicious. Perfect for a light meal!"
            },
            {
                image: "user68.jpg",
                name: "soupLover456",
                rating: 4.5,
                comment: "I always order the Chicken Soup when I'm here. It's consistently great."
            },
            {
                image: "user69.jpg",
                name: "foodieCraver",
                rating: 4.8,
                comment: "Warm and comforting! The Chicken Soup never disappoints."
            }
        ],
        description: "Savor the comforting taste of Chicken Soup from Soup Heaven. Made with tender chicken, fresh vegetables, and flavorful spices, it's the perfect appetizer or light meal."
    },
    {
        id: 341178,
        name: "Dal Soup",
        category: "cuisines",
        tags: ["appetizer", "soup", "dal"],
        quantity: 1,
        originalPrice: 99,
        discountPrice: 79,
        offer: "20% off",
        rating: 4.4,
        reviews: 220,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Lentils",
            "Onions",
            "Tomatoes",
            "Spices",
            "Ghee"
        ],
        smallImage: cuisine9,
        bigImage: cuisine9,
        details: {
            nutrition_info: {
                calories: 120,
                protein: 8,
                carbohydrates: 15,
                fat: 4
            },
            restaurant: {
                name: "Dal Delight",
                distance: "0.9km",
                rating: "4.4",
                reviews: "200",
                restaurant: "567 Lentil Lane, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "10:00 AM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user78.jpg",
                name: "dalLover123",
                rating: 4.4,
                comment: "Dal Soup from Dal Delight is a simple pleasure. It's delicious and heartwarming."
            },
            {
                image: "user79.jpg",
                name: "soupEnthusiast",
                rating: 4.3,
                comment: "I enjoy the Dal Soup here. It's a great choice for a light and healthy start."
            },
            {
                image: "user80.jpg",
                name: "foodieCravings",
                rating: 4.5,
                comment: "Comfort food at its best! The Dal Soup is a classic favorite."
            }
        ],
        description: "Relish the wholesome taste of Dal Soup from Dal Delight. Made with lentils, aromatic spices, and a touch of ghee, it's a heartwarming appetizer."
    },
    {
        id: 454789,
        name: "Sambar",
        category: "cuisines",
        tags: ["main course", "Indian cuisine", "sambar"],
        quantity: 1,
        originalPrice: 179,
        discountPrice: 149,
        offer: "17% off",
        rating: 4.8,
        reviews: 350,
        time: "25-30 mins",
        shipping: "free",
        ingredients: [
            "Toor Dal",
            "Tamarind",
            "Vegetables",
            "Spices"
        ],
        smallImage: cuisine8,
        bigImage: cuisine8,
        details: {
            nutrition_info: {
                calories: 180,
                protein: 6,
                carbohydrates: 30,
                fat: 4
            },
            restaurant: {
                name: "Spice Delight",
                distance: "1.2km",
                rating: "4.7",
                reviews: "320",
                restaurant: "789 Spice Avenue, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:30 AM to 9:30 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user89.jpg",
                name: "sambarLover123",
                rating: 4.8,
                comment: "Spice Delight serves the best Sambar in town. It's a delightful South Indian dish!"
            },
            {
                image: "user90.jpg",
                name: "indianFoodie",
                rating: 4.7,
                comment: "I love the authentic taste of Sambar here. It's a must-try for Indian cuisine enthusiasts."
            },
            {
                image: "user91.jpg",
                name: "foodExplorer",
                rating: 4.9,
                comment: "Sambar at Spice Delight is a flavor explosion. The perfect blend of spices and vegetables."
            }
        ],
        description: "Experience the authentic flavors of Sambar from Spice Delight. Made with toor dal, tamarind, and a medley of vegetables, it's a South Indian classic."
    },
    {
        id: 567890,
        name: "Rasam",
        category: "cuisines",
        tags: ["soup", "Indian cuisine", "rasam"],
        quantity: 1,
        originalPrice: 99,
        discountPrice: 79,
        offer: "20% off",
        rating: 4.6,
        reviews: 290,
        time: "15-20 mins",
        shipping: "free",
        ingredients: [
            "Tomatoes",
            "Tamarind",
            "Spices",
            "Pepper",
            "Cumin",
            "Garlic"
        ],
        smallImage: cuisine3,
        bigImage: cuisine3,
        details: {
            nutrition_info: {
                calories: 80,
                protein: 2,
                carbohydrates: 18,
                fat: 0.5
            },
            restaurant: {
                name: "Rasam Bliss",
                distance: "0.7km",
                rating: "4.5",
                reviews: "250",
                restaurant: "678 Spice Lane, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "11:30 AM to 9:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user12.jpg",
                name: "rasamLover789",
                rating: 4.6,
                comment: "Rasam Bliss serves the most comforting Rasam. It's a soothing soup with a kick!"
            },
            {
                image: "user13.jpg",
                name: "spiceConnoisseur",
                rating: 4.5,
                comment: "I'm a fan of Rasam, and this place does it right. Perfect balance of flavors."
            },
            {
                image: "user14.jpg",
                name: "foodieCravings",
                rating: 4.7,
                comment: "Rasam at Rasam Bliss is like a warm hug for your taste buds. Highly recommended!"
            }
        ],
        description: "Savor the tangy and aromatic flavors of Rasam from Rasam Bliss. Made with tomatoes, tamarind, and a blend of spices, it's a comforting Indian soup."
    },
    {
        id: 678901,
        name: "Kadhi",
        category: "cuisines",
        tags: ["main course", "Indian cuisine", "kadhi"],
        quantity: 1,
        originalPrice: 159,
        discountPrice: 139,
        offer: "12% off",
        rating: 4.5,
        reviews: 260,
        time: "25-30 mins",
        shipping: "free",
        ingredients: [
            "Yogurt",
            "Gram Flour",
            "Spices",
            "Curry Leaves",
            "Mustard Seeds"
        ],
        smallImage: cuisine28,
        bigImage: cuisine28,
        details: {
            nutrition_info: {
                calories: 120,
                protein: 5,
                carbohydrates: 12,
                fat: 6
            },
            restaurant: {
                name: "Kadhi Delight",
                distance: "0.9km",
                rating: "4.4",
                reviews: "230",
                restaurant: "789 Curry Avenue, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "12:00 PM to 8:00 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user23.jpg",
                name: "kadhiLover123",
                rating: 4.5,
                comment: "Kadhi Delight serves authentic and delicious Kadhi. It's a classic Indian dish!"
            },
            {
                image: "user24.jpg",
                name: "indianFoodie",
                rating: 4.4,
                comment: "I'm a fan of Kadhi, and this place never disappoints. Creamy and flavorful."
            },
            {
                image: "user25.jpg",
                name: "foodieCraver",
                rating: 4.6,
                comment: "Kadhi at Kadhi Delight is a must-try. It's comfort food at its best."
            }
        ],
        description: "Indulge in the creamy and flavorful Kadhi from Kadhi Delight. Made with yogurt, gram flour, and aromatic spices, it's a classic Indian main course dish."
    },
    {
        id: 789012,
        name: "Badam Milk",
        category: "cuisines",
        tags: ["beverage", "badam milk", "almonds"],
        quantity: 1,
        originalPrice: 129,
        discountPrice: 109,
        offer: "15% off",
        rating: 4.7,
        reviews: 310,
        time: "10-15 mins",
        shipping: "free",
        ingredients: [
            "Milk",
            "Almonds",
            "Sugar",
            "Cardamom"
        ],
        smallImage: cuisine7,
        bigImage: cuisine7,
        details: {
            nutrition_info: {
                calories: 150,
                protein: 5,
                carbohydrates: 15,
                fat: 8
            },
            restaurant: {
                name: "Milk Delight",
                distance: "0.8km",
                rating: "4.6",
                reviews: "290",
                restaurant: "456 Almond Street, Cityville",
                availability: {
                    days: "Monday to Sunday",
                    hours: "10:30 AM to 9:30 PM"
                }
            }
        },
        customer_reviews: [
            {
                image: "user34.jpg",
                name: "milkLover123",
                rating: 4.7,
                comment: "The Badam Milk from Milk Delight is a delightful treat. It's creamy and nutty."
            },
            {
                image: "user35.jpg",
                name: "nuttyCraver",
                rating: 4.6,
                comment: "I love the richness of this Badam Milk. It's the perfect beverage for almond enthusiasts."
            },
            {
                image: "user36.jpg",
                name: "beverageEnthusiast",
                rating: 4.8,
                comment: "Badam Milk at Milk Delight is my go-to drink. It's simply delicious."
            }
        ],
        description: "Sip on the creamy and nutty goodness of Badam Milk from Milk Delight. Made with milk, almonds, and a hint of cardamom, it's a soothing and nutritious beverage."
    }
    //   aalu paratha,
]
export default cuisines;