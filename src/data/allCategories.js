import cuisines from "./cuisines"
import fastFood from "./fastFoods"
import nonVeg from "./nonVeg"
import pizzas from './pizzas'
import sweets from "./sweets"

const cuisinesItem = Math.floor(Math.random() * cuisines.length);
const fastFoodItem = Math.floor(Math.random() * fastFood.length);
const nonVegItem = Math.floor(Math.random() * nonVeg.length);
const sweetsItem = Math.floor(Math.random() * sweets.length);
const pizzaItem = Math.floor(Math.random() * pizzas.length);
const cuisinesItem2 = Math.floor(Math.random() * cuisines.length);
const fastFoodItem2 = Math.floor(Math.random() * fastFood.length);
const nonVegItem2 = Math.floor(Math.random() * nonVeg.length);
const sweetsItem2 = Math.floor(Math.random() * sweets.length);

const all =[
    cuisines[cuisinesItem],
    fastFood[fastFoodItem],
    nonVeg[nonVegItem],
    sweets[sweetsItem],
    pizzas[pizzaItem],
    cuisines[cuisinesItem2],
    fastFood[fastFoodItem2],
    nonVeg[nonVegItem2],
    sweets[sweetsItem2],
]

const allCategories =[all,fastFood,pizzas,cuisines,sweets,nonVeg];
export default allCategories;