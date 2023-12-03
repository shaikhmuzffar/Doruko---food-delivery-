import React from 'react'
import './sideCart.css'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../features/cartSlice'

import { Link } from 'react-router-dom'

// no item img
import noItemImg from '../../assets/Images/otherBanners/noItemCart.png'
import arrowLeft from '../../assets/Images/icons/arrowLeft.png'



// images
import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'
import cross from '../../assets/icons/cross.png'


export default function SideCart() {
    const sideCartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const removeHandler = (itemID) => {
        dispatch(removeItem(itemID))
    }

    const increaseQuantityHandler = (itemId) => {
        dispatch(increaseItemQuantity(itemId));
    }
    const decreaseQuantityHandler = (itemId) => {
        dispatch(decreaseItemQuantity(itemId));
    }
    console.log("S", sideCartItems)

    const total = sideCartItems.reduce((totalPrice, item) => {
        return totalPrice + item.discountPrice * item.quantity;
    }, 0);

    return (
        <div className='sideCartSection'>
            <h1 className='sideCartSectionTitle'>Your Cart</h1>
            {
                sideCartItems.length > 0 ?
                    <div className="sideCarItems">
                        {
                            sideCartItems.map((item) => {
                                const { smallImage, name, discountPrice, quantity } = item;
                                const restroname = item.details.restaurant.name
                                console.log("q", quantity)
                                return (
                                    <SideCartItem smallImage={smallImage} name={name} restroname={restroname} quantity={quantity} discountPrice={discountPrice} removeHandler={removeHandler} increaseQuantityHandler={increaseQuantityHandler} decreaseQuantityHandler={decreaseQuantityHandler} />
                                )
                            })
                        }
                    </div>
                    : <div className="cartWithNoItem">
                        <img src={noItemImg} alt="" />

                    </div>
            }

            {
                sideCartItems.length > 0 ? <div>
                    <div className='seperater'></div>
                    <div className="subtotalInfo">
                        <div className="subtotal">
                            <span>sub total</span>
                            <span className='ammount'>₹{total}</span>
                        </div>
                        <div className="deliveryFees">
                            <span>delivery fees</span>
                            <span className='ammount'>₹40</span>
                        </div>
                    </div>
                    <div className='seperater'></div>
                    <span className="totalInfo">
                        <span>total</span>
                        <span className='ammount'>₹{total + 40}</span>
                    </span>
                    <a href="" className='btn-primary sideCartCheckout' >Checkout</a>
                </div>
                    :
                    <div>
                        <Link to="/" className='addSomthing2'>continue shopping <img src={arrowLeft} alt="" /></Link>
                    </div>

            }

        </div>
    )
}

const SideCartItem = ({ smallImage, name, discountPrice, restroname, removeHandler, quantity, increaseQuantityHandler, decreaseQuantityHandler }) => {

    return (
        <div className="sideCartItem">
            <div className="sideCartItemImg">
                <img src={smallImage} />
            </div>
            <div className="sideCartItemInfo">
                <div className="nameAndRemove">
                    <h1>{name.length < 10 ? name : name.slice(0, 10) + '...'}</h1>

                    <img src={cross} alt="" onClick={() => removeHandler(name)} />
                </div>
                <span className='restroName'>{restroname}</span>
                <div className="priceAndCounter">
                    <div className="sideCartItemCounter">
                        <div className="minus" onClick={() => decreaseQuantityHandler(name)} >
                            <img src={minus} alt="" />
                        </div>
                        <div className="quantity" >
                            <span>{quantity}</span>
                        </div>

                        <div className="plus" onClick={() => increaseQuantityHandler(name)} >
                            <img src={plus} alt="" />
                        </div>
                    </div>
                    <span className="price">₹{discountPrice}</span>
                </div>
            </div>
        </div>
    )
}

