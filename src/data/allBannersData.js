import allCategories from './allCategories'
// category banners 
import burgerBanner from '../assets/Images/categoryBanners/burger.png'
import pizzaBanner from '../assets/Images/categoryBanners/pizza.png'
import cuisinesBanner from '../assets/Images/categoryBanners/cuisines.png'
import nonvegBanner from '../assets/Images/categoryBanners/nonVeg.png'
import vegBanner from '../assets/Images/categoryBanners/veg.png'
import sweetsBanner from '../assets/Images/categoryBanners/sweets.png'

// categoryInfo banners
import burgerCategoryInfo from '../assets/Images/categoryInfoBanners/fastFood.png'
import cuisineCategoryInfo from '../assets/Images/categoryInfoBanners/cuisines.png'
import nonVegCategoryInfo from '../assets/Images/categoryInfoBanners/nonVeg.png'
import vegCategoryInfo from '../assets/Images/categoryInfoBanners/veg.png'
import sweetsCategoryInfo from '../assets/Images/categoryInfoBanners/sweets.png'
import pizzasCategoryInfo from '../assets/Images/categoryInfoBanners/pizzas.png'
import fastFood from './fastFoods'

const fastFoodCategoryLength = allCategories[1].length;
const pizzasCategoryLength = allCategories[2].length;
const cuisinesCategoryLength = allCategories[3].length;
const sweetsCategoryLength = allCategories[4].length;
const nonVegCategoryLength = allCategories[5].length;
// console.log("fastFoodCategoryLength",fastFoodCategoryLength)

const bannerDatas =[{
    bannerImg:burgerBanner,
    categoryInfoBannerImg:burgerCategoryInfo,
    category:"fastfood",
    flexDir:"end",
    bannerTitle:"Burgers Bliss",
    bannerSubTitle:"explore varities of flavorful paties",
    categoryInfoTitle:"Enjoy a World of Quick Bites",
    categoryInfoSubTitle:" Crispy, Crunchy, and Always Tasty!",
    bannerItems:fastFoodCategoryLength+" items",
    route:"fastfood"
  },
  {
    bannerImg:pizzaBanner,
    categoryInfoBannerImg:pizzasCategoryInfo,
    category:"pizzas",
    flexDir:"start",
    bannerTitle:"Pizza Plaza",
    bannerSubTitle:"From Margherita to Meat Lovers, dive into range",
    categoryInfoTitle:"Explore the Pizza Paradise ",
    categoryInfoSubTitle:"Delicious, Cheesy, and Irresistible pizzas",
    bannerItems:pizzasCategoryLength+" items",
    route:"pizzas"
  },
  {
    bannerImg:cuisinesBanner,
    categoryInfoBannerImg:cuisineCategoryInfo,
    category:"cuisines",
    flexDir:"end",
    bannerTitle:"Cuisine Carousel",
    bannerSubTitle:"Journey Through Culinary Wonders",
    categoryInfoTitle:"Journey Through Global Flavors",
    categoryInfoSubTitle:"Diverse, Authentic, and Uniquely Delicious!",
    bannerItems:cuisinesCategoryLength+" items",
    route:"cuisines"
  },
  {
    bannerImg:nonvegBanner,
    categoryInfoBannerImg:nonVegCategoryInfo,
    flexDir:"end",
    category:"nonveg",
    bannerTitle:"Non-Veg Nirvana",
    bannerSubTitle:"Satisfy Your Cravings with Savory Meat Delicacies",
    categoryInfoTitle:"Savor the Carnivore's Delight",
    categoryInfoSubTitle:" Flavorful, Juicy, and Unforgettable Nonveg Creations!",
    bannerItems:nonVegCategoryLength+" items",
    route:"nonveg"
  },
  {
    bannerImg:vegBanner,
    categoryInfoBannerImg:vegCategoryInfo,
    flexDir:"start",
    category:"veg",
    bannerTitle:"Veggie Vibes",
    bannerSubTitle:"Flavorful Creations for Veggie Lovers",
    categoryInfoTitle:"Embrace the Green Goodness",
    categoryInfoSubTitle:"Fresh, Nutritious, and Packed with Flavor!",
    bannerItems:0+" items",
    route:"veg"
  },
  {
    bannerImg:sweetsBanner,
    categoryInfoBannerImg:sweetsCategoryInfo,
    flexDir:"start",
    category:"sweets",
    bannerTitle:"Sweet Sensations",
    bannerSubTitle:"Satisfy Your Sweet Tooth with Heavenly Treats",
    categoryInfoTitle:"Indulge in Sweet Bliss",
    categoryInfoSubTitle:"Selection of Confections, Desserts, and Delights!",
    bannerItems:sweetsCategoryLength+" items",
    route:"sweets"
  },
]
export default bannerDatas;