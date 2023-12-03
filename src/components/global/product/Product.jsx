import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'

// images 
import ratingStar from '../../../assets/icons/star.png'
// import plus from '../../../assets/icons/plus.png'

// icons
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaCircleInfo } from 'react-icons/fa6'

// dispach
import { useDispatch } from 'react-redux'
import { addItems } from '../../../features/cartSlice'
import { addNotification } from '../../../features/notificationsSlice'

// img
import circleGreen from '../../../assets/icons/circleGreen.png'
// import circleGrey from '../../../assets/icons/circleGrey.png'



export default function Product({ data }) {
    const { smallImage, name, rating, tags, discountPrice } = data;
    const dispatch = useDispatch()

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

        // Add leading zeros to minutes if needed
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

        return currentTime;
    }

    const currentTime = getCurrentTime();



    const addToCartHandler = (item) => {
        dispatch(addItems(item))
        dispatch(addNotification({
            title: "Item add to cart",
            message: `hello muzzu, the ${item.name} is succesfully added to cart with quantity of ${item.quantity}`,
            status: circleGreen,
            time: currentTime
        }))

    }
    return (
        <div  className="product">
            <div className="productImg">
                <img src={smallImage} alt="" />
                <div className="productIcons">
                    <AiFillPlusCircle className='addToCartIcon' onClick={() => addToCartHandler(data)} />
                    <Link to={`/category/${name}`} style={{ textDecoration: "none", color: "#393939" }} >
                        <FaCircleInfo className='productInfoIcon' />
                    </Link>
                </div>

            </div>
            <div className="productInfo">
                <div className="nameAndRating">
                    <h1 className="productName">{name.length < 18 ? name : name.slice(0, 18) + "..."}</h1>
                    <small><img src={ratingStar} alt="" />{rating}</small>
                </div>
                <div className="tagsAndPrice">
                    <small className="productTags">{tags.slice(0, 2).join(" · ").toLowerCase()}</small>
                    <small>{discountPrice}₹ for one</small>
                </div>
            </div>

        </div>
    )
}
