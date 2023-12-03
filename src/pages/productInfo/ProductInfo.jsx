import React, { useState, useEffect } from 'react';
import allCategories from '../../data/allCategories';
import './productInfo.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// icons 
import { FaStar, FaCartPlus } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'
import { BiSolidTimer } from 'react-icons/bi'
import { BsFillBagHeartFill, BsFillDropletFill, BsPinFill } from 'react-icons/bs'
import { PiShareFatLight } from 'react-icons/pi'
import { AiFillFire } from 'react-icons/ai'
import { LuDna } from 'react-icons/lu'
import { GiCoconuts } from 'react-icons/gi'
import { TbLocationFilled } from 'react-icons/tb'
import { GiPathDistance } from 'react-icons/gi'
import { MdTimelapse } from 'react-icons/md'
import { HiCalendarDays } from 'react-icons/hi2'

// components
import Button from '../../components/button/Button';
import Sandwitchmenu from '../../components/sandwitchMenu/Sandwitchmenu';

// img 
import user1 from './user1.png'
import user2 from './user2.png'
import user3 from './user3.png'
import restaurantImg from './restaurantImg.png'
import circleGreen from '../../assets/icons/circleGreen.png'


// redux 
import { useDispatch } from 'react-redux';
import { addItems } from '../../features/cartSlice'
import { addNotification } from '../../features/notificationsSlice'


export default function ProductInfo() {
    const [tab, setTab] = useState("description")
    const [singleProductData, setSingleProductData] = useState(null);
    const { Name } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        const name = Name;

        for (const category of allCategories) {
            for (const product of category) {
                if (product.name === name) {
                    setSingleProductData(product);
                    return;
                }
            }
        }
        setSingleProductData(null);
    }, [Name]);

    // get time
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

        return currentTime;
    }

    const currentTime = getCurrentTime();

    // addToCartHandler
    const addToCartHandler = (item) => {
        dispatch(addItems(item))
        dispatch(addNotification({
            title: "Item add to cart",
            message: `hello muzzu, the ${item.name} is succesfully added to cart with quantity of ${item.quantity}`,
            status: circleGreen,
            time: currentTime
        }))

    }
    // console.log("singleProductData", singleProductData);

    const sandwitchMenuLinks = [
        {
          lable:'back to shop',
          linkTo:"/",
          active:false
        },
        {
          lable:'categories',
          linkTo:"/products",
          active:false,
        },
        {
          lable:Name,
        //   lable:"item.name",
          linkTo:"/products",
          active:true,
        },
      ]

    return (
        
        <div className='ProductInfo'>
            {singleProductData ? (
                <>
                    <div className="singleProduct">
                        <Sandwitchmenu sandwitchMenuLinks={sandwitchMenuLinks} />

                        <div className="singleProductImages">
                            <div className="leftImages">
                                <img src={singleProductData.bigImage} alt="" />
                            </div>
                            <div className="rightImages">
                                <img src={singleProductData.smallImage} alt="" />
                                <div className="more">
                                    <img src={singleProductData.smallImage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="singleProductBody">
                            <div className="singleProductNameAndRating">
                                <h1 className='singleProductName' >{singleProductData.name}</h1>
                                <div className="singleProductRatingAndReviews">
                                    <div className="rating">
                                        <FaStar />
                                        <span>{singleProductData.rating}</span>
                                    </div>
                                    <span className="reviews">({singleProductData.reviews} reviews)</span>
                                </div>
                            </div>
                            <div className="singleProductCategoryAndDeliveryDetails">
                                <p className='singleProductTags'>
                                    <span>{singleProductData.category} ·</span>
                                    {
                                        singleProductData.tags.map((tag, index) => <span key={index}>{tag} ·</span>)
                                    }

                                </p>
                                <div className='singleProductDeliveryDetails'>
                                    <span>{singleProductData.details.restaurant.name}</span>
                                    <div className='singleProductShippingAndTime'>
                                        <div>< MdDeliveryDining /> {singleProductData.shipping} delivery</div>
                                        <div>< BiSolidTimer /> {singleProductData.time}</div>
                                    </div>
                                </div>
                            </div>
                            <p className="priceAndDiscount">
                                <span className='discountPrice' >₹{singleProductData.discountPrice} for one</span>
                                <span className='originalPrice'>₹{singleProductData.originalPrice} for one</span>
                                <span className='offer'>{singleProductData.offer}</span>
                            </p>
                            <div className="addtoCartWishlistAndShare">
                                <div className="ATCAndWishlist">
                                    <div className='productInfoATC' onClick={() => addToCartHandler(singleProductData)} >
                                        <FaCartPlus />
                                        <span>ADD TO CART</span>
                                    </div>
                                    <Link className='productInfoWishList' to='/'>
                                        <BsFillBagHeartFill />
                                        <span>Wishlist</span>
                                    </Link>
                                </div>
                                <Link className='productInfoShare' to='/'>
                                    <PiShareFatLight />
                                </Link>
                            </div>
                        </div>
                        <div className="singleProducInfoTabs">
                            <ul className='singleProductInfoTabsMenus'>
                                <li className={tab === "description" ? "singleProductInfoTabsMenu clicked" : "singleProductInfoTabsMenu"} onClick={() => setTab("description")} >Description</li>
                                <li className={tab === "details" ? "singleProductInfoTabsMenu clicked" : "singleProductInfoTabsMenu"} onClick={() => setTab("details")} >Details</li>
                                <li className={tab === "aboutRestraunt" ? "singleProductInfoTabsMenu clicked" : "singleProductInfoTabsMenu"} onClick={() => setTab("aboutRestraunt")} >About Restraunt</li>
                                <li className={tab === "reviews" ? "singleProductInfoTabsMenu clicked" : "singleProductInfoTabsMenu"} onClick={() => setTab("reviews")} >Reviews</li>
                            </ul>
                            <div className="singleProductInfoTabsInfo">
                                {
                                    tab === "description" ? <p className='singleProductInfoTabsDescription'>
                                        {singleProductData.description}
                                        {singleProductData.description}
                                    </p>
                                        : tab === "details" ? <ul className="singleProductInfoTabsDetails">
                                            <div className="nutritionInfo">
                                                <h1>Nutrition Info</h1>
                                                <ul className='nutritionList'>
                                                    {
                                                        Object.keys(singleProductData.details.nutrition_info).map((key, index) => (
                                                            <div key={index} className='nutritionListItems'>
                                                                <p className='nutritionListItem'>{
                                                                    key === "calories" ? <span  ><AiFillFire />key</span>
                                                                        : key === "protein" ? <span  ><LuDna />protein</span>
                                                                            : key === "carbohydrates" ? <span  ><GiCoconuts />carbohydrates</span>
                                                                                : key === "fat" ? <span  ><BsFillDropletFill />fat</span>
                                                                                    : key
                                                                }</p>
                                                                <p className='nutritionValue'> {":  " + singleProductData.details.nutrition_info[key]}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>

                                            <div className="ingredients">
                                                <h1>Ingredients</h1>
                                                <ul className='ingredientsList'>
                                                    {
                                                        singleProductData.ingredients.map((item, index) =>
                                                            <li key={index} className='ingredientsListItem'>
                                                                {
                                                                    item
                                                                }
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </ul>
                                            : tab === "reviews" ? <div className="singleProductInfoTabsReviewslist">
                                                <div className="singleProductInfoTabsReviews">
                                                    <div className="singleProductInfoTabsReview">
                                                        <div className="singleProductInfoTabsReviewUserImage">
                                                            <img src={user1} alt={singleProductData.customer_reviews[0].image} />
                                                        </div>
                                                        <div className="singleProductInfoTabsReviewUserInfo">
                                                            <div className="nameDateAndRating">
                                                                <div className="nameAndDate">
                                                                    <span className='singleProductInfoTabsReviewUserInfoName' >{singleProductData.customer_reviews[0].name}</span>
                                                                    <span className='singleProductInfoTabsReviewUserInfoDate' >2 days ago</span>
                                                                </div>
                                                                <span className='singleProductInfoTabsReviewUserInfoRating' >
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                </span>
                                                            </div>
                                                            <p className="singleProductInfoTabsReviewUserInfoUserComment">
                                                                {singleProductData.customer_reviews[0].comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="singleProductInfoTabsReview">
                                                        <div className="singleProductInfoTabsReviewUserImage">
                                                            <img src={user2} alt={singleProductData.customer_reviews[1].image} />
                                                        </div>
                                                        <div className="singleProductInfoTabsReviewUserInfo">
                                                            <div className="nameDateAndRating">
                                                                <div className="nameAndDate">
                                                                    <span className='singleProductInfoTabsReviewUserInfoName' >{singleProductData.customer_reviews[1].name}</span>
                                                                    <span className='singleProductInfoTabsReviewUserInfoDate' >2 days ago</span>
                                                                </div>
                                                                <span className='singleProductInfoTabsReviewUserInfoRating' >
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                </span>
                                                            </div>
                                                            <p className="singleProductInfoTabsReviewUserInfoUserComment">
                                                                {singleProductData.customer_reviews[1].comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="singleProductInfoTabsReview">
                                                        <div className="singleProductInfoTabsReviewUserImage">
                                                            <img src={user3} alt={singleProductData.customer_reviews[2].image} />
                                                        </div>
                                                        <div className="singleProductInfoTabsReviewUserInfo">
                                                            <div className="nameDateAndRating">
                                                                <div className="nameAndDate">
                                                                    <span className='singleProductInfoTabsReviewUserInfoName' >{singleProductData.customer_reviews[2].name}</span>
                                                                    <span className='singleProductInfoTabsReviewUserInfoDate' >2 days ago</span>
                                                                </div>
                                                                <span className='singleProductInfoTabsReviewUserInfoRating' >
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                    <FaStar />
                                                                </span>
                                                            </div>
                                                            <p className="singleProductInfoTabsReviewUserInfoUserComment">
                                                                {singleProductData.customer_reviews[2].comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reviewForm">
                                                    <div className="starsRating">
                                                        <span>your Rating</span>
                                                        <div className="stars">
                                                            <span> <FaStar /> </span>
                                                            <span> <FaStar /> </span>
                                                            <span> <FaStar /> </span>
                                                            <span> <FaStar /> </span>
                                                            <span> <FaStar /> </span>
                                                        </div>

                                                    </div>
                                                    <div className="reviewInputBox">
                                                        <div className="nameAndEmail">
                                                            <input type="text" placeholder="name" />
                                                            <input type="email" placeholder="email" />
                                                        </div>
                                                        <textarea placeholder='your review' rows="10"></textarea>
                                                    </div>
                                                    <Button text="send">
                                                        {/* <img src="" alt="" /> */}
                                                        <TbLocationFilled />
                                                    </Button>
                                                </div>
                                            </div>
                                                : tab === "aboutRestraunt" ? <div className="singleProductInfoTabsAboutRestaurant">
                                                    <div className="singleProductInfoTabsAboutRestaurantImg">
                                                        <img src={restaurantImg} alt="" />
                                                    </div>
                                                    <div className="singleProductInfoTabsAboutRestaurantInfo">
                                                        <div className="singleProductInfoTabsAboutRestaurantInfoNameAndRating">
                                                            <h1 className="singleProductInfoTabsAboutRestaurantInfoName">{singleProductData.details.restaurant.name}</h1>
                                                            <div className='singleProductInfoTabsAboutRestaurantInfoRatingAndAddress'>
                                                                <p className='singleProductInfoTabsAboutRestaurantInfoRating'>
                                                                    <span><FaStar /></span>
                                                                    <span>
                                                                        {singleProductData.details.restaurant.rating}
                                                                        ({singleProductData.details.restaurant.reviews}reviews)
                                                                    </span>
                                                                </p>
                                                                <p className='singleProductInfoTabsAboutRestaurantInfoReview'>
                                                                    <span><BsPinFill /></span>
                                                                    <span>
                                                                        {singleProductData.details.restaurant.address}
                                                                    </span>
                                                                </p>

                                                            </div>
                                                        </div>
                                                        <div className="singleProductInfoTabsAboutRestaurantInfoDistanceAndAvailablity">
                                                            <p className='singleProductInfoTabsAboutRestaurantInfoDistance'>
                                                                <GiPathDistance /> <span>{singleProductData.details.restaurant.distance}</span>
                                                            </p>
                                                            <div className='singleProductInfoTabsAboutRestaurantInfoAvailablity'>
                                                                <p className="singleProductInfoTabsAboutRestaurantInfoAvailablityTime">
                                                                    <MdTimelapse /> <span>{singleProductData.details.restaurant.availability.hours}</span>
                                                                </p>
                                                                <p className="singleProductInfoTabsAboutRestaurantInfoAvailablityDays">
                                                                    <HiCalendarDays /> <span>{singleProductData.details.restaurant.availability.days}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : ""
                                }
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}
