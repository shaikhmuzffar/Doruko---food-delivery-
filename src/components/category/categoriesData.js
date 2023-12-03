import burger1 from '../../assets/burgers/burger1.png'
import burger2 from '../../assets/burgers/burger2.png'
import burger3 from '../../assets/burgers/burger3.png'
import burger4 from '../../assets/burgers/burger4.png'
import burger5 from '../../assets/burgers/burger5.png'
import burger6 from '../../assets/burgers/burger6.png'

import pizza1 from '../../assets/pizzas/pizza1.png'
import pizza2 from '../../assets/pizzas/pizza2.png'
import pizza3 from '../../assets/pizzas/pizza3.png'
import pizza4 from '../../assets/pizzas/pizza4.png'
import pizza5 from '../../assets/pizzas/pizza5.png'
import pizza6 from '../../assets/pizzas/pizza6.png'
import pizza7 from '../../assets/pizzas/pizza7.png'
import pizza8 from '../../assets/pizzas/pizza8.png'

import cuisine1 from '../../assets/cuisines/cuisine1.png'
import cuisine2 from '../../assets/cuisines/cuisine2.png'
import cuisine3 from '../../assets/cuisines/cuisine3.png'
import cuisine4 from '../../assets/cuisines/cuisine4.png'
import cuisine5 from '../../assets/cuisines/cuisine5.png'
import cuisine6 from '../../assets/cuisines/cuisine6.png'
import cuisine7 from '../../assets/cuisines/cuisine7.png'
import cuisine8 from '../../assets/cuisines/cuisine8.png'

import sweet1 from '../../assets/sweets/sweets1.png'
import sweet2 from '../../assets/sweets/sweets2.png'
import sweet3 from '../../assets/sweets/sweets3.png'
import sweet4 from '../../assets/sweets/sweets4.png'
import sweet5 from '../../assets/sweets/sweets5.png'
import sweet6 from '../../assets/sweets/sweets6.png'
import sweet7 from '../../assets/sweets/sweets7.png'
import sweet8 from '../../assets/sweets/sweets8.png'

import vegan1 from '../../assets/vegan/vegan1.png'
import vegan2 from '../../assets/vegan/vegan2.png'
import vegan3 from '../../assets/vegan/vegan3.png'
import vegan4 from '../../assets/vegan/vegan4.png'
import vegan5 from '../../assets/vegan/vegan5.png'
import vegan6 from '../../assets/vegan/vegan6.png'
import vegan7 from '../../assets/vegan/vegan7.png'

export const categoriesData = [
    [
        {
          image_url: cuisine2,
          name: "Chinese Cuisine",
          price_in_rupees: 220,
          rating: 4.4,
          tags: ["Chinese", "Chicken", "Peanuts", "Spicy"],
          quantity:1
        },
        {
          image_url: sweet4,
          name: "Gulab Jamun",
          price_in_rupees: 120,
          rating: 4.8,
          tags: ["Indian", "Dessert", "Gulab Jamun"],
          quantity:1
        },
        {
          image_url: sweet3,
          name: "Strawberry Cheesecake",
          price_in_rupees: 280,
          rating: 4.6,
          tags: ["Dessert", "Cheesecake", "Strawberry"],
          quantity:1
        },
        {
          image_url: vegan5,
          name: "Vegan Tofu Stir-Fry",
          price_in_rupees: 190,
          rating: 4.6,
          tags: ["Vegan", "Stir-Fry", "Tofu", "Vegetables", "Soy Sauce"],
          quantity:1
        },
        {
          image_url: burger3,
          name: "Spicy BBQ Burger",
          price_in_rupees: 170,
          rating: 4.7,
          tags: ["Spicy", "BBQ Sauce", "Beef"],
          quantity:1
        },
        {
          image_url: vegan4,
          name: "Vegan Chickpea Curry",
          price_in_rupees: 200,
          rating: 4.4,
          tags: ["Vegan", "Curry", "Chickpea", "Spicy"],
          quantity:1
        },
        {
          image_url: sweet2,
          name: "Vanilla Ice Cream",
          price_in_rupees: 80,
          rating: 4.5,
          tags: ["Dessert", "Ice Cream", "Vanilla"],
          quantity:1
        },
        {
          image_url: vegan6,
          name: "Caesar Salad",
          price_in_rupees: 150,
          rating: 4.3,
          tags: ["Vegan", "Salad", "Caesar", "Romaine Lettuce", "Croutons"],
          quantity:1
        },
        {
          image_url: pizza5,
          name: "BBQ Chicken Pizza",
          price_in_rupees: 240,
          rating: 4.6,
          tags: ["BBQ Sauce", "Chicken", "Red Onion"],
          quantity:1
        },
        // {
        //   image_url: burger4,
        //   name: "Mushroom Swiss Burger",
        //   price_in_rupees: 160,
        //   rating: 4.4,
        //   tags: ["Mushroom", "Swiss Cheese", "Beef"]
        // },
        // {
        //   image_url: cuisine3,
        //   name: "Indian Cuisine",
        //   price_in_rupees: 280,
        //   rating: 4.7,
        //   tags: ["Indian", "Chicken", "Creamy Tomato Sauce"]
        // },
        // {
        //   image_url: pizza6,
        //   name: "Mushroom Truffle Pizza",
        //   price_in_rupees: 250,
        //   rating: 4.8,
        //   tags: ["Mushroom", "Truffle Oil", "Mozzarella"]
        // },
        // {
        //   image_url: sweet6,
        //   name: "Tiramisu",
        //   price_in_rupees: 220,
        //   rating: 4.7,
        //   tags: ["Dessert", "Italian", "Tiramisu"]
        // },
        // {
        //   image_url: burger5,
        //   name: "Vegan Black Bean Burger",
        //   price_in_rupees: 140,
        //   rating: 4.3,
        //   tags: ["Vegan", "Black Bean Patty", "Plant-Based"]
        // },
        // {
        //   image_url: vegan7,
        //   name: "Vegan Coconut Curry Noodles",
        //   price_in_rupees: 210,
        //   rating: 4.8,
        //   tags: ["Vegan", "Noodles", "Coconut Curry", "Vegetables"]
        // },
        // {
        //   image_url: vegan1,
        //   name: "Vegan Buddha Bowl",
        //   price_in_rupees: 180,
        //   rating: 4.6,
        //   tags: ["Vegan", "Bowl", "Quinoa", "Roasted Vegetables", "Tahini Dressing"]
        // },
        // {
        //   image_url: sweet5,
        //   name: "Chocolate Chip Cookies",
        //   price_in_rupees: 100,
        //   rating: 4.4,
        //   tags: ["Dessert", "Cookies", "Chocolate Chip"]
        // },
        // {
        //   image_url: cuisine6,
        //   name: "Mediterranean Cuisine",
        //   price_in_rupees: 150,
        //   rating: 4.4,
        //   tags: ["Mediterranean", "Appetizer", "Chickpea", "Tahini"]
        // },
        // {
        //   image_url: pizza8,
        //   name: "Pesto Veggie Pizza",
        //   price_in_rupees: 220,
        //   rating: 4.6,
        //   tags: ["Pesto Sauce", "Mixed Vegetables", "Mozzarella"]
        // },
        // {
        //   image_url: cuisine5,
        //   name: "Japanese Cuisine",
        //   price_in_rupees: 300,
        //   rating: 4.8,
        //   tags: ["Japanese", "Sushi", "Assorted", "Fresh"]
        // },
        // {
        //   image_url: sweet7,
        //   name: "Fruit Salad",
        //   price_in_rupees: 150,
        //   rating: 4.5,
        //   tags: ["Dessert", "Salad", "Fruit"]
        // },
        // {
        //   image_url: sweet8,
        //   name: "Rice Pudding (Kheer)",
        //   price_in_rupees: 180,
        //   rating: 4.6,
        //   tags: ["Indian", "Dessert", "Rice Pudding", "Kheer"]
        // },
        // {
        //   image_url: vegan2,
        //   name: "Vegan Chocolate Avocado Mousse",
        //   price_in_rupees: 160,
        //   rating: 4.7,
        //   tags: ["Vegan", "Dessert", "Chocolate", "Avocado"]
        // },
        // {
        //   image_url: pizza1,
        //   name: "Margherita Pizza",
        //   price_in_rupees: 200,
        //   rating: 4.5,
        //   tags: ["Classic", "Tomato", "Mozzarella", "Basil"]
        // },
        // {
        //   image_url: burger6,
        //   name: "Double Bacon Burger",
        //   price_in_rupees: 180,
        //   rating: 4.8,
        //   tags: ["Bacon", "Double Patty", "Savory"]
        // },
        // {
        //   image_url: sweet1,
        //   name: "Chocolate Cake",
        //   price_in_rupees: 250,
        //   rating: 4.7,
        //   tags: ["Dessert", "Chocolate", "Cake"]
        // }
      ],
    [
        {
            image_url:burger1,
            name: "Classic Cheeseburger",
            price_in_rupees: 150,
            rating: 4.5,
            tags: ["Classic", "Cheese", "Beef", "American"],
          quantity:1
        },
        {
            image_url:burger2,
            name: "Vegetarian Deluxe Burger",
            price_in_rupees: 120,
            rating: 4.2,
            tags: ["Vegetarian", "Deluxe", "Veggie Patty"],
          quantity:1
        },
        {
            image_url:burger3,
            name: "Spicy BBQ Burger",
            price_in_rupees: 170,
            rating: 4.7,
            tags: ["Spicy", "BBQ Sauce", "Beef"],
          quantity:1
        },
        {
            image_url:burger4,
            name: "Mushroom Swiss Burger",
            price_in_rupees: 160,
            rating: 4.4,
            tags: ["Mushroom", "Swiss Cheese", "Beef"],
          quantity:1
        },
        {
            image_url:burger5,
            name: "Vegan Black Bean Burger",
            price_in_rupees: 140,
            rating: 4.3,
            tags: ["Vegan", "Black Bean Patty", "Plant-Based"],
          quantity:1
        },
        {
            image_url:burger6,
            name: "Double Bacon Burger",
            price_in_rupees: 180,
            rating: 4.8,
            tags: ["Bacon", "Double Patty", "Savory"],
          quantity:1
        },
        // {
        //     image_url:burger6,
        //     name: "Teriyaki Chicken Burger",
        //     price_in_rupees: 155,
        //     rating: 4.6,
        //     tags: ["Teriyaki", "Chicken", "Asian"]
        // },
        // {
        //     name: "Greek Lamb Burger",
        //     price_in_rupees: 190,
        //     rating: 4.5,
        //     tags: ["Lamb", "Greek", "Mediterranean"]
        // },
        // {
        //     name: "Jalapeño Popper Burger",
        //     price_in_rupees: 165,
        //     rating: 4.4,
        //     tags: ["Jalapeño", "Cream Cheese", "Spicy"]
        // },
        // {
        //     name: "Fisherman's Catch Burger",
        //     price_in_rupees: 175,
        //     rating: 4.6,
        //     tags: ["Seafood", "Fish", "Tartar Sauce"]
        // }
    ],
    [
        {
            image_url:pizza1,
            name: "Margherita Pizza",
            price_in_rupees: 200,
            rating: 4.5,
            tags: ["Classic", "Tomato", "Mozzarella", "Basil"],
          quantity:1
        },
        {
            image_url:pizza2,
            name: "Pepperoni Pizza",
            price_in_rupees: 220,
            rating: 4.7,
            tags: ["Pepperoni", "Cheese", "Spicy", "Classic"],
          quantity:1
        },
        {
            image_url:pizza3,
            name: "Vegetarian Supreme Pizza",
            price_in_rupees: 230,
            rating: 4.4,
            tags: ["Vegetarian", "Supreme", "Mixed Vegetables"],
          quantity:1
        },
        {
            image_url:pizza4,
            name: "Hawaiian Pizza",
            price_in_rupees: 210,
            rating: 4.3,
            tags: ["Ham", "Pineapple", "Cheese", "Sweet and Savory"],
          quantity:1
        },
        {
            image_url:pizza5,
            name: "BBQ Chicken Pizza",
            price_in_rupees: 240,
            rating: 4.6,
            tags: ["BBQ Sauce", "Chicken", "Red Onion"],
          quantity:1
        },
        {
            image_url:pizza6,
            name: "Mushroom Truffle Pizza",
            price_in_rupees: 250,
            rating: 4.8,
            tags: ["Mushroom", "Truffle Oil", "Mozzarella"],
          quantity:1
        },
        {
            image_url:pizza7,
            name: "Supreme Meat Lover's Pizza",
            price_in_rupees: 260,
            rating: 4.5,
            tags: ["Meat Lover's", "Pepperoni", "Sausage", "Bacon"],
          quantity:1
        },
        {
            image_url:pizza8,
            name: "Pesto Veggie Pizza",
            price_in_rupees: 220,
            rating: 4.6,
            tags: ["Pesto Sauce", "Mixed Vegetables", "Mozzarella"],
          quantity:1
        },
        // {
        //     name: "Four Cheese Pizza",
        //     price_in_rupees: 230,
        //     rating: 4.7,
        //     tags: ["Four Cheese", "Gorgonzola", "Mozzarella", "Parmesan"]
        // },
        // {
        //     name: "Spicy Mexican Taco Pizza",
        //     price_in_rupees: 240,
        //     rating: 4.4,
        //     tags: ["Mexican", "Spicy", "Ground Beef", "Jalapeños"]
        // }
    ],
    [
        {
            image_url:cuisine1,
            name: "Italian Cuisine",
            price_in_rupees: 250,
            rating: 4.6,
            tags: ["Italian", "Pasta", "Bacon", "Creamy"],
          quantity:1
        },
        {
            image_url:cuisine2,
            name: "Chinese Cuisine",
            price_in_rupees: 220,
            rating: 4.4,
            tags: ["Chinese", "Chicken", "Peanuts", "Spicy"],
          quantity:1
        },
        {
            image_url:cuisine3,
            name: "Indian Cuisine",
            price_in_rupees: 280,
            rating: 4.7,
            tags: ["Indian", "Chicken", "Creamy Tomato Sauce"],
          quantity:1
        },
        {
            image_url:cuisine4,
            name: "Mexican Cuisine",
            price_in_rupees: 180,
            rating: 4.6,
            tags: ["Mexican", "Tacos", "Pork", "Pineapple"],
          quantity:1
        },
        {
            image_url:cuisine5,
            name: "Japanese Cuisine",
            price_in_rupees: 300,
            rating: 4.8,
            tags: ["Japanese", "Sushi", "Assorted", "Fresh"],
          quantity:1
        },
        {
            image_url:cuisine6,
            name: "Mediterranean Cuisine",
            price_in_rupees: 150,
            rating: 4.4,
            tags: ["Mediterranean", "Appetizer", "Chickpea", "Tahini"]
        }
    ]
    ,
    [
        {
            image_url:sweet1,
            name: "Chocolate Cake",
            price_in_rupees: 250,
            rating: 4.7,
            tags: ["Dessert", "Chocolate", "Cake"],
          quantity:1
        },
        {
            image_url:sweet2,
            name: "Vanilla Ice Cream",
            price_in_rupees: 80,
            rating: 4.5,
            tags: ["Dessert", "Ice Cream", "Vanilla"],
          quantity:1
        },
        {
            image_url:sweet3,
            name: "Strawberry Cheesecake",
            price_in_rupees: 280,
            rating: 4.6,
            tags: ["Dessert", "Cheesecake", "Strawberry"],
          quantity:1
        },
        {
            image_url:sweet4,
            name: "Gulab Jamun",
            price_in_rupees: 120,
            rating: 4.8,
            tags: ["Indian", "Dessert", "Gulab Jamun"],
          quantity:1
        },
        {
            image_url:sweet5,
            name: "Chocolate Chip Cookies",
            price_in_rupees: 100,
            rating: 4.4,
            tags: ["Dessert", "Cookies", "Chocolate Chip"],
          quantity:1
        },
        {
            image_url:sweet6,
            name: "Tiramisu",
            price_in_rupees: 220,
            rating: 4.7,
            tags: ["Dessert", "Italian", "Tiramisu"],
          quantity:1
        },
        {
            image_url:sweet7,
            name: "Fruit Salad",
            price_in_rupees: 150,
            rating: 4.5,
            tags: ["Dessert", "Salad", "Fruit"],
          quantity:1
        },
        {
            image_url:sweet8,
            name: "Rice Pudding (Kheer)",
            price_in_rupees: 180,
            rating: 4.6,
            tags: ["Indian", "Dessert", "Rice Pudding", "Kheer"],
          quantity:1
        },
        // {
        //     name: "Cupcakes",
        //     price_in_rupees: 120,
        //     rating: 4.3,
        //     tags: ["Dessert", "Cupcakes"]
        // },
        // {
        //     name: "Apple Pie",
        //     price_in_rupees: 200,
        //     rating: 4.6,
        //     tags: ["Dessert", "Pie", "Apple"]
        // }
    ]
    ,
    [
        {
            image_url:vegan1,
            name: "Vegan Buddha Bowl",
            price_in_rupees: 180,
            rating: 4.6,
            tags: ["Vegan", "Bowl", "Quinoa", "Roasted Vegetables", "Tahini Dressing"],
          quantity:1
        },
        {
            image_url:vegan2,
            name: "Vegan Chocolate Avocado Mousse",
            price_in_rupees: 160,
            rating: 4.7,
            tags: ["Vegan", "Dessert", "Chocolate", "Avocado"],
          quantity:1
        },
        {
            image_url:vegan3,
            name: "Vegan Sushi Roll",
            price_in_rupees: 220,
            rating: 4.5,
            tags: ["Vegan", "Sushi", "Avocado", "Cucumber", "Carrot"],
          quantity:1
        },
        {
            image_url:vegan4,
            name: "Vegan Chickpea Curry",
            price_in_rupees: 200,
            rating: 4.4,
            tags: ["Vegan", "Curry", "Chickpea", "Spicy"],
          quantity:1
        },
        {
            image_url:vegan5,
            name: "Vegan Tofu Stir-Fry",
            price_in_rupees: 190,
            rating: 4.6,
            tags: ["Vegan", "Stir-Fry", "Tofu", "Vegetables", "Soy Sauce"],
          quantity:1
        },
        {
            image_url:vegan6,
            name: "Caesar Salad",
            price_in_rupees: 150,
            rating: 4.3,
            tags: ["Vegan", "Salad", "Caesar", "Romaine Lettuce", "Croutons"],
          quantity:1
        },
        {
            image_url:vegan7,
            name: "Vegan Coconut Curry Noodles",
            price_in_rupees: 210,
            rating: 4.8,
            tags: ["Vegan", "Noodles", "Coconut Curry", "Vegetables"],
          quantity:1
        },
        // {
        //     name: "Chickpea and Spinach Curry",
        //     price_in_rupees: 190,
        //     rating: 4.5,
        //     tags: ["Vegan", "Curry", "Chickpea", "Spinach"]
        // }
    ]
]

export default categoriesData;