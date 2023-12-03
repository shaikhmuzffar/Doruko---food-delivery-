import sweet1 from '../assets/Images/sweets/sweet1.png'
import sweet2 from '../assets/Images/sweets/sweet2.png'
import sweet3 from '../assets/Images/sweets/sweet3.png'
import sweet4 from '../assets/Images/sweets/sweet4.png'
import sweet5 from '../assets/Images/sweets/sweet5.png'
import sweet6 from '../assets/Images/sweets/sweet6.png'
import sweet7 from '../assets/Images/sweets/sweet7.png'
import sweet8 from '../assets/Images/sweets/sweet8.png'
import sweet9 from '../assets/Images/sweets/sweet9.png'
import sweet10 from '../assets/Images/sweets/sweet10.png'
import sweet11 from '../assets/Images/sweets/sweet11.png'
import sweet12 from '../assets/Images/sweets/sweet12.png'
import sweet13 from '../assets/Images/sweets/sweet13.png'
import sweet14 from '../assets/Images/sweets/sweet14.png'

// banner
import sweetsBanner from '../assets/Images/categoryBanners/sweets.png'


const sweets = [
            {
                id: 987654,
                name: "Kheer",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "kheer", "dinner"],
                quantity: 1,
                originalPrice: 199,
                discountPrice: 149,
                offer: "25% off",
                rating: 4.5,
                reviews: 150,
                time: "20-30 mins",
                shipping: "free",
                ingredients: [
                    "Rice",
                    "Milk",
                    "Sugar",
                    "Cardamom",
                    "Almonds",
                    "Pistachios"
                ],
                smallImage: sweet4,
                bigImage: sweet4,
                details: {
                    nutrition_info: {
                        calories: 200,
                        protein: 4,
                        carbohydrates: 30,
                        fat: 6
                    },
                    restaurant: {
                        name: "Sweets Paradise",
                        distance: "2km",
                        rating: "4.5",
                        reviews: "145",
                        address: "70 washington Square",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:00 AM to 8:00 PM"
                        }
                    },

                },
                customer_reviews: [
                    {
                        image: "user1.jpg",
                        name: "sweetTooth123",
                        rating: 4.7,
                        comment: "This Kheer is a true comfort dessert. Creamy and delicious."
                    },
                    {
                        image: "user2",
                        name: "dessertLover55",
                        rating: 4.9,
                        comment: "I love the subtle aroma of cardamom in this Kheer. Simply divine."
                    },
                    {
                        image: "user3",
                        name: "festiveEater",
                        rating: 4.8,
                        comment: "Perfect for celebrations or just as a sweet treat. Highly recommended."
                    }
                ],
                description: "Indulge in the creamy delight of our Kheer, a traditional Indian rice pudding infused with milk, sugar, and aromatic cardamom. Each spoonful is a heavenly experience, with the richness of milk and the sweetness of sugar combining to create a luscious dessert that's perfect for any occasion.",
            },
            {
                id: 123456,
                name: "Motichoor Laddu",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "motichoor laddu", "dessert"],
                quantity: 1,
                originalPrice: 149,
                discountPrice: 119,
                offer: "20% off",
                rating: 4.8,
                reviews: 200,
                time: "15-20 mins",
                shipping: "free",
                ingredients: [
                    "Gram Flour",
                    "Ghee",
                    "Sugar",
                    "Cardamom",
                    "Saffron",
                    "Pistachios"
                ],
                smallImage: sweet9,
                bigImage: sweet9,
                details: {
                    nutrition_info: {
                        calories: 180,
                        protein: 2,
                        carbohydrates: 30,
                        fat: 6
                    },
                    restaurant: {
                        name: "Sweets Delight",
                        distance: "3km",
                        rating: "4.7",
                        reviews: "190",
                        address: "45 Sweet Street",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:00 AM to 7:00 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user4.jpg",
                        name: "sweetTooth456",
                        rating: 4.8,
                        comment: "Motichoor Laddu at Sweets Delight is a burst of flavors. Highly recommended!"
                    },
                    {
                        image: "user5.jpg",
                        name: "dessertFanatic22",
                        rating: 4.7,
                        comment: "I can't get enough of these Motichoor Laddus. They're addictive!"
                    },
                    {
                        image: "user6.jpg",
                        name: "foodieInLove",
                        rating: 4.9,
                        comment: "Perfectly sweet and melt-in-your-mouth goodness. A must-try dessert."
                    }
                ],
                description: "Indulge in the delightful taste of Motichoor Laddu, a classic Indian sweet made from tiny, fried gram flour balls soaked in sugar syrup. The aromatic cardamom and saffron give it a rich flavor that's perfect for satisfying your sweet cravings."
            },
            {
                id: 789012,
                name: "Rasgulla",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "rasgulla", "dessert"],
                quantity: 1,
                originalPrice: 99,
                discountPrice: 79,
                offer: "20% off",
                rating: 4.6,
                reviews: 180,
                time: "10-15 mins",
                shipping: "free",
                ingredients: [
                    "Paneer",
                    "Sugar",
                    "Water",
                    "Cardamom",
                    "Rose Water"
                ],
                smallImage: sweet14,
                bigImage: sweet14,
                details: {
                    nutrition_info: {
                        calories: 100,
                        protein: 2,
                        carbohydrates: 20,
                        fat: 2
                    },
                    restaurant: {
                        name: "Sweet Delights",
                        distance: "1.5km",
                        rating: "4.6",
                        reviews: "175",
                        address: "25 Sweet Lane",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "8:00 AM to 9:00 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user7.jpg",
                        name: "sweetTooth789",
                        rating: 4.5,
                        comment: "Rasgulla from Sweet Delights is soft, spongy, and simply delicious."
                    },
                    {
                        image: "user8.jpg",
                        name: "dessertCraver90",
                        rating: 4.7,
                        comment: "I can't resist the sweet syrupy goodness of these Rasgullas."
                    },
                    {
                        image: "user9.jpg",
                        name: "foodieForever",
                        rating: 4.8,
                        comment: "The perfect treat to satisfy your sweet tooth. Highly recommended!"
                    }
                ],
                description: "Indulge in the delightful taste of Rasgulla, a popular Indian sweet made from soft and spongy cottage cheese balls soaked in a fragrant sugar syrup. These heavenly treats are flavored with cardamom and rose water, making them a favorite dessert for all occasions."
            },
            {
                id: 456789,
                name: "Mango Pudding",
                category: "sweets",
                tags: ["desserts", "pudding", "mango", "fruit"],
                quantity: 1,
                originalPrice: 129,
                discountPrice: 109,
                offer: "15% off",
                rating: 4.7,
                reviews: 210,
                time: "15-20 mins",
                shipping: "free",
                ingredients: [
                    "Fresh Mangoes",
                    "Milk",
                    "Sugar",
                    "Gelatin",
                    "Vanilla Extract"
                ],
                smallImage: sweet11,
                bigImage: sweet11,
                details: {
                    nutrition_info: {
                        calories: 150,
                        protein: 3,
                        carbohydrates: 25,
                        fat: 4
                    },
                    restaurant: {
                        name: "Mango Delights",
                        distance: "2.5km",
                        rating: "4.7",
                        reviews: "205",
                        address: "35 Mango Avenue",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:00 AM to 8:00 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user10.jpg",
                        name: "mangoLover123",
                        rating: 4.8,
                        comment: "Mango Pudding at Mango Delights is a tropical delight. So creamy and full of mango flavor!"
                    },
                    {
                        image: "user11.jpg",
                        name: "dessertExplorer",
                        rating: 4.7,
                        comment: "I can't get enough of this Mango Pudding. It's like a taste of paradise in every spoonful."
                    },
                    {
                        image: "user12.jpg",
                        name: "foodieAdventures",
                        rating: 4.9,
                        comment: "If you love mangoes, you must try this Mango Pudding. It's the best I've ever had!"
                    }
                ],
                description: "Indulge in the tropical delight of Mango Pudding, a creamy dessert made from fresh ripe mangoes, milk, sugar, and a hint of vanilla. Each spoonful is a burst of fruity goodness that will transport you to a tropical paradise."
            },
            {
                id: 567890,
                name: "Besan Laddu",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "besan laddu", "dessert"],
                quantity: 1,
                originalPrice: 149,
                discountPrice: 129,
                offer: "13% off",
                rating: 4.6,
                reviews: 190,
                time: "20-25 mins",
                shipping: "free",
                ingredients: [
                    "Gram Flour (Besan)",
                    "Ghee",
                    "Sugar",
                    "Cardamom",
                    "Almonds",
                    "Cashews"
                ],
                smallImage: sweet5,
                bigImage: sweet5,
                details: {
                    nutrition_info: {
                        calories: 160,
                        protein: 3,
                        carbohydrates: 20,
                        fat: 8
                    },
                    restaurant: {
                        name: "Laddu Delights",
                        distance: "1.8km",
                        rating: "4.6",
                        reviews: "185",
                        address: "55 Laddu Street",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "8:30 AM to 7:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user13.jpg",
                        name: "ladduLover567",
                        rating: 4.7,
                        comment: "Besan Laddu from Laddu Delights is a classic favorite. So rich and flavorful!"
                    },
                    {
                        image: "user14.jpg",
                        name: "dessertConnoisseur",
                        rating: 4.5,
                        comment: "These Besan Laddus are melt-in-your-mouth deliciousness. A must-try sweet treat!"
                    },
                    {
                        image: "user15.jpg",
                        name: "foodieCravings",
                        rating: 4.8,
                        comment: "I can't resist these Besan Laddus. Perfectly sweet and nutty."
                    }
                ],
                description: "Indulge in the delightful taste of Besan Laddu, a traditional Indian sweet made from roasted gram flour, ghee, sugar, and aromatic cardamom. These golden, nutty balls are a sweet treat that captures the essence of Indian cuisine."
            },
            {
                id: 678901,
                name: "Mango Barfi",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "barfi", "mango", "dessert"],
                quantity: 1,
                originalPrice: 159,
                discountPrice: 139,
                offer: "12% off",
                rating: 4.7,
                reviews: 220,
                time: "25-30 mins",
                shipping: "free",
                ingredients: [
                    "Mango Pulp",
                    "Milk Powder",
                    "Sugar",
                    "Ghee",
                    "Cardamom",
                    "Pistachios"
                ],
                smallImage: sweet8,
                bigImage: sweet8,
                details: {
                    nutrition_info: {
                        calories: 170,
                        protein: 4,
                        carbohydrates: 25,
                        fat: 7
                    },
                    restaurant: {
                        name: "Barfi Delights",
                        distance: "2.2km",
                        rating: "4.7",
                        reviews: "215",
                        address: "45 Barfi Lane",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:30 AM to 8:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user16.jpg",
                        name: "mangoLover678",
                        rating: 4.8,
                        comment: "Mango Barfi from Barfi Delights is a burst of mango goodness. Truly delicious!"
                    },
                    {
                        image: "user17.jpg",
                        name: "dessertAficionado",
                        rating: 4.6,
                        comment: "These Mango Barfis are creamy and rich in mango flavor. A delightful dessert!"
                    },
                    {
                        image: "user18.jpg",
                        name: "foodieDelights",
                        rating: 4.9,
                        comment: "I can't get enough of these Mango Barfis. They're a taste of summer in every bite!"
                    }
                ],
                description: "Indulge in the delightful taste of Mango Barfi, a sweet Indian confection made from mango pulp, milk powder, and a touch of cardamom. These square-shaped treats are rich, creamy, and perfectly capture the essence of ripe mangoes."
            },
            {
                id: 789012,
                name: "Gulaab Jamun",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "gulaab jamun", "dessert"],
                quantity: 1,
                originalPrice: 119,
                discountPrice: 99,
                offer: "17% off",
                rating: 4.8,
                reviews: 240,
                time: "20-25 mins",
                shipping: "free",
                ingredients: [
                    "Khoya",
                    "Milk Powder",
                    "Sugar",
                    "Cardamom",
                    "Rose Water"
                ],
                smallImage: sweet7,
                bigImage: sweet7,
                details: {
                    nutrition_info: {
                        calories: 160,
                        protein: 3,
                        carbohydrates: 20,
                        fat: 8
                    },
                    restaurant: {
                        name: "Jamun Delights",
                        distance: "1.7km",
                        rating: "4.8",
                        reviews: "235",
                        address: "30 Jamun Street",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "8:30 AM to 7:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user19.jpg",
                        name: "jamunLover789",
                        rating: 4.9,
                        comment: "Gulaab Jamun from Jamun Delights is pure bliss. So soft and soaked in syrup!"
                    },
                    {
                        image: "user20.jpg",
                        name: "dessertEnthusiast",
                        rating: 4.7,
                        comment: "These Gulaab Jamuns are like little balls of heaven. Sweet and aromatic."
                    },
                    {
                        image: "user21.jpg",
                        name: "foodieCravings",
                        rating: 4.8,
                        comment: "I can't resist these Gulaab Jamuns. Perfectly sweet and indulgent."
                    }
                ],
                description: "Savor the sweetness of Gulaab Jamun, a popular Indian dessert made from khoya (milk solids) and flavored with cardamom. These soft, syrup-soaked dumplings are a favorite at celebrations and gatherings."
            },
            {
                id: 890123,
                name: "Kaju Katli",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "kaju katli", "dessert"],
                quantity: 1,
                originalPrice: 179,
                discountPrice: 149,
                offer: "17% off",
                rating: 4.9,
                reviews: 260,
                time: "15-20 mins",
                shipping: "free",
                ingredients: [
                    "Cashews",
                    "Sugar",
                    "Ghee",
                    "Cardamom",
                    "Saffron"
                ],
                smallImage: sweet6,
                bigImage: sweet6,
                details: {
                    nutrition_info: {
                        calories: 180,
                        protein: 4,
                        carbohydrates: 20,
                        fat: 10
                    },
                    restaurant: {
                        name: "Katli Delights",
                        distance: "2.0km",
                        rating: "4.9",
                        reviews: "255",
                        address: "40 Katli Lane",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:00 AM to 8:00 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user22.jpg",
                        name: "katliLover890",
                        rating: 4.9,
                        comment: "Kaju Katli from Katli Delights is a royal treat. Rich and melt-in-your-mouth."
                    },
                    {
                        image: "user23.jpg",
                        name: "dessertConnoisseur",
                        rating: 4.8,
                        comment: "These Kaju Katlis are pure indulgence. The cashews make them extra special."
                    },
                    {
                        image: "user24.jpg",
                        name: "foodieDelights",
                        rating: 4.9,
                        comment: "I can't resist these Kaju Katlis. A perfect balance of sweetness and nuts."
                    }
                ],
                description: "Experience the rich taste of Kaju Katli, a classic Indian sweet made from cashews, sugar, and flavored with cardamom. These diamond-shaped treats are a symbol of festive joy and are loved by all."
            },
            {
                id: 901234,
                name: "Pedha",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "pedha", "dessert"],
                quantity: 1,
                originalPrice: 99,
                discountPrice: 79,
                offer: "20% off",
                rating: 4.7,
                reviews: 180,
                time: "15-20 mins",
                shipping: "free",
                ingredients: [
                    "Milk",
                    "Sugar",
                    "Cardamom",
                    "Ghee",
                    "Pistachios",
                    "Saffron"
                ],
                smallImage: sweet5,
                bigImage: sweet5,
                details: {
                    nutrition_info: {
                        calories: 120,
                        protein: 3,
                        carbohydrates: 15,
                        fat: 5
                    },
                    restaurant: {
                        name: "Pedha Delights",
                        distance: "2.3km",
                        rating: "4.7",
                        reviews: "175",
                        address: "50 Pedha Lane",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:30 AM to 8:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user25.jpg",
                        name: "pedhaLover901",
                        rating: 4.8,
                        comment: "Pedha from Pedha Delights is a traditional delight. So creamy and flavorful!"
                    },
                    {
                        image: "user26.jpg",
                        name: "dessertAficionado",
                        rating: 4.6,
                        comment: "These Pedhas are a sweet revelation. Perfect for satisfying my sweet tooth."
                    },
                    {
                        image: "user27.jpg",
                        name: "foodieCravings",
                        rating: 4.7,
                        comment: "I can't resist these Pedhas. They're a true Indian delicacy."
                    }
                ],
                description: "Savor the creaminess of Pedha, a classic Indian sweet made from condensed milk, sugar, and flavored with cardamom. These round treats are a must-try for dessert lovers."
            },
            {
                id: 123456,
                name: "Rabdi",
                category: "sweets",
                tags: ["desserts", "indian cuisine", "rabdi", "milk dessert"],
                quantity: 1,
                originalPrice: 149,
                discountPrice: 129,
                offer: "13% off",
                rating: 4.6,
                reviews: 200,
                time: "20-25 mins",
                shipping: "free",
                ingredients: [
                    "Milk",
                    "Sugar",
                    "Saffron",
                    "Cardamom",
                    "Almonds",
                    "Pistachios"
                ],
                smallImage: sweet10,
                bigImage: sweet10,
                details: {
                    nutrition_info: {
                        calories: 140,
                        protein: 3,
                        carbohydrates: 20,
                        fat: 6
                    },
                    restaurant: {
                        name: "Rabdi Delights",
                        distance: "1.8km",
                        rating: "4.6",
                        reviews: "195",
                        address: "35 Rabdi Street",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "8:30 AM to 7:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user28.jpg",
                        name: "rabdiLover123",
                        rating: 4.7,
                        comment: "Rabdi from Rabdi Delights is a creamy delight. So aromatic and delicious!"
                    },
                    {
                        image: "user29.jpg",
                        name: "dessertEnthusiast",
                        rating: 4.5,
                        comment: "This Rabdi is a dessert dream. The saffron adds a wonderful flavor."
                    },
                    {
                        image: "user30.jpg",
                        name: "foodieDelights",
                        rating: 4.8,
                        comment: "I can't get enough of this Rabdi. Creamy, sweet, and absolutely delightful."
                    }
                ],
                description: "Indulge in the creamy goodness of Rabdi, a popular Indian milk-based dessert flavored with saffron and cardamom. Each spoonful is a journey to dessert paradise."
            },
            {
                id: 234567,
                name: "Chocolate-Strawberry Cake",
                category: "sweets",
                tags: ["cakes", "chocolate", "strawberry", "dessert"],
                quantity: 1,
                originalPrice: 199,
                discountPrice: 169,
                offer: "15% off",
                rating: 4.9,
                reviews: 230,
                time: "30-35 mins",
                shipping: "free",
                ingredients: [
                    "Chocolate Sponge Cake",
                    "Strawberry Cream",
                    "Chocolate Ganache",
                    "Fresh Strawberries"
                ],
                smallImage: sweet1,
                bigImage: sweet1,
                details: {
                    nutrition_info: {
                        calories: 220,
                        protein: 4,
                        carbohydrates: 30,
                        fat: 10
                    },
                    restaurant: {
                        name: "Cake Delights",
                        distance: "2.5km",
                        rating: "4.9",
                        reviews: "225",
                        address: "40 Cake Avenue",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:00 AM to 8:00 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user31.jpg",
                        name: "cakeLover234",
                        rating: 4.9,
                        comment: "This Chocolate-Strawberry Cake is a heavenly combination. Moist and flavorful!"
                    },
                    {
                        image: "user32.jpg",
                        name: "dessertAficionado",
                        rating: 4.8,
                        comment: "I'm in love with the rich chocolate and strawberry goodness of this cake."
                    },
                    {
                        image: "user33.jpg",
                        name: "foodieCravings",
                        rating: 4.9,
                        comment: "I can't resist this cake. It's a delightful indulgence for any occasion."
                    }
                ],
                description: "Treat yourself to the perfect blend of chocolate and strawberries with this Chocolate-Strawberry Cake. Moist chocolate sponge layers filled with strawberry cream and topped with rich chocolate ganache and fresh strawberries."
            },
            {
                id: 345678,
                name: "Gujia",
                category: "sweets",
                tags: ["sweets", "indian cuisine", "gujia", "dessert"],
                quantity: 1,
                originalPrice: 129,
                discountPrice: 109,
                offer: "15% off",
                rating: 4.7,
                reviews: 210,
                time: "25-30 mins",
                shipping: "free",
                ingredients: [
                    "Maida (All-Purpose Flour)",
                    "Khoya (Milk Solids)",
                    "Sugar",
                    "Ghee",
                    "Cardamom",
                    "Nuts"
                ],
                smallImage: sweet3,
                bigImage: sweet3,
                details: {
                    nutrition_info: {
                        calories: 180,
                        protein: 3,
                        carbohydrates: 20,
                        fat: 8
                    },
                    restaurant: {
                        name: "Gujia Delights",
                        distance: "2.2km",
                        rating: "4.7",
                        reviews: "205",
                        address: "55 Gujia Lane",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "9:30 AM to 8:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user34.jpg",
                        name: "gujiaLover345",
                        rating: 4.8,
                        comment: "Gujia from Gujia Delights is a sweet sensation. So crispy and delicious!"
                    },
                    {
                        image: "user35.jpg",
                        name: "dessertEnthusiast",
                        rating: 4.7,
                        comment: "These Gujias are a delightful treat. Perfect for any festive occasion."
                    },
                    {
                        image: "user36.jpg",
                        name: "foodieDelights",
                        rating: 4.9,
                        comment: "I can't resist these Gujias. They're a traditional favorite for a reason."
                    }
                ],
                description: "Indulge in the crispy delight of Gujia, a traditional Indian sweet pastry filled with a delicious mixture of khoya, sugar, and cardamom. These crescent-shaped treats are a must-try for festivals and celebrations."
            },
            {
                id: 456789,
                name: "Baked Baklava",
                category: "sweets",
                tags: ["desserts", "baklava", "pastry", "dessert"],
                quantity: 1,
                originalPrice: 149,
                discountPrice: 129,
                offer: "13% off",
                rating: 4.6,
                reviews: 190,
                time: "25-30 mins",
                shipping: "free",
                ingredients: [
                    "Phyllo Dough",
                    "Walnuts",
                    "Honey",
                    "Cinnamon",
                    "Clarified Butter"
                ],
                smallImage: sweet13,
                bigImage: sweet13,
                details: {
                    nutrition_info: {
                        calories: 180,
                        protein: 3,
                        carbohydrates: 25,
                        fat: 9
                    },
                    restaurant: {
                        name: "Baklava Delights",
                        distance: "2.0km",
                        rating: "4.6",
                        reviews: "185",
                        address: "35 Baklava Lane",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "8:30 AM to 7:30 PM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user37.jpg",
                        name: "baklavaLover456",
                        rating: 4.7,
                        comment: "Baked Baklava from Baklava Delights is a sweet delight. So crunchy and flavorful!"
                    },
                    {
                        image: "user38.jpg",
                        name: "dessertEnthusiast",
                        rating: 4.5,
                        comment: "This Baked Baklava is a taste of the Mediterranean. Absolutely delicious!"
                    },
                    {
                        image: "user39.jpg",
                        name: "foodieDelights",
                        rating: 4.8,
                        comment: "I can't resist these Baked Baklavas. They're a delightful treat for dessert lovers."
                    }
                ],
                description: "Savor the layers of flaky phyllo dough filled with a mixture of walnuts, cinnamon, and sweet honey in Baked Baklava. This Mediterranean pastry is a crunchy and sweet treat perfect for any occasion."
            },
            {
                id: 567890,
                name: "Waffle Stack",
                category: "sweets",
                tags: ["breakfast", "waffle", "stack", "morning"],
                quantity: 1,
                originalPrice: 119,
                discountPrice: 99,
                offer: "17% off",
                rating: 4.8,
                reviews: 230,
                time: "15-20 mins",
                shipping: "free",
                ingredients: [
                    "Waffle Batter",
                    "Maple Syrup",
                    "Fresh Berries",
                    "Whipped Cream"
                ],
                smallImage: sweet12,
                bigImage: sweet12,
                details: {
                    nutrition_info: {
                        calories: 280,
                        protein: 4,
                        carbohydrates: 40,
                        fat: 12
                    },
                    restaurant: {
                        name: "Waffle Heaven",
                        distance: "1.5km",
                        rating: "4.8",
                        reviews: "225",
                        address: "25 Waffle Street",
                        availability: {
                            days: "Monday to Sunday",
                            hours: "7:00 AM to 11:00 AM"
                        }
                    }
                },
                customer_reviews: [
                    {
                        image: "user40.jpg",
                        name: "waffleLover567",
                        rating: 4.9,
                        comment: "The Waffle Stack from Waffle Heaven is a breakfast dream. So fluffy and delicious!"
                    },
                    {
                        image: "user41.jpg",
                        name: "breakfastEnthusiast",
                        rating: 4.7,
                        comment: "These Waffle Stacks are a perfect morning treat. The maple syrup is divine."
                    },
                    {
                        image: "user42.jpg",
                        name: "foodieDelights",
                        rating: 4.8,
                        comment: "I can't resist these Waffle Stacks. They're a great way to start the day."
                    }
                ],
                description: "Start your day right with a delightful Waffle Stack. Fluffy waffles stacked high, drizzled with maple syrup, and topped with fresh berries and whipped cream. The perfect morning indulgence!"
            },
        ]
export default sweets;