import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'

// components
import SectionHeading from '../../components/global/sectionHeading/SectionHeading'
import Sandwitchmenu from '../../components/sandwitchMenu/Sandwitchmenu'

// imgs 
import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'
import noItemImg from '../../assets/Images/otherBanners/noItemCart.png'
import arrowLeft from '../../assets/Images/icons/arrowLeft.png'


// using redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../features/cartSlice'


export default function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()


  const removeHandler = (id) => {
    dispatch(removeItem(id))
  }

  const increaseQuantityHandler = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  }
  const decreaseQuantityHandler = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  }

  const total = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.discountPrice * item.quantity;
  }, 0);


  const sandwitchMenuLinks = [
    {
      lable:'back to shop',
      linkTo:"/",
      active:false
    },
    {
      lable:'cart',
      linkTo:"/cart",
      active:true,
    },
  ]

  return (
    <>
      <div className="orderSection">
      <Sandwitchmenu sandwitchMenuLinks={sandwitchMenuLinks} />
        <SectionHeading title="Your Cart" arrows={false} />
        {
          cartItems.length > 0 ?
            <div className="orderedItems">
              <table >
                <thead className='cartHeader'>
                  <tr>
                    <th className='productsTitle' colSpan="2">Products</th>
                    <th className='productsQTY' >Qty</th>
                    <th className='productsPrice' >Price</th>
                    <th className='productsActions' >Actions</th>
                  </tr>
                </thead>
                <tbody className='cartProducts'>
                  {
                    cartItems.map((item, index) => {
                      const { smallImage, name, discountPrice, quantity } = item;
                      const restroname = item.details.restaurant.name
                      return (<CartItem key={index}  smallImage={smallImage} name={name} restroname={restroname} discountPrice={discountPrice} quantity={quantity} removeHandler={removeHandler} increaseQuantityHandler={increaseQuantityHandler} decreaseQuantityHandler={decreaseQuantityHandler} />)
                    }
                    )
                  }


                </tbody>
              </table>
            </div>
            :
            <div className="cartWithNoItem2">
              <img src={noItemImg} alt="" />
            </div>
        }

        {
          cartItems.length > 0 ? <div className="paymentAndCheckout">
            <div className="promoCodeAndBill">
              <div className="promoBox">
                <p>have a promo code?</p>
                <span>apply promo code to get discount</span>
                <div className="promoInput">
                  <input type="text" placeholder='dis-40' />
                  <button className='btn-primary'>apply</button>
                </div>
              </div>
              <div className="billBox">
                <div className='subAmmount'>
                  <div className="subTotalLine">
                    <span>sub total</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="couponCodeLine">
                    <span>coupon code</span>
                    <span>0</span>
                  </div>
                  <div className="shippingLine">
                    <span>shipping</span>
                    <span>₹40</span>
                  </div>
                </div>
                <div className='seperater'></div>
                <div className="totalAmmount">
                  <span>total</span>
                  <span>₹{total + 40}</span>
                </div>
              </div>
            </div>

            <div className="cartUserAction">
              <button className='btn-secondary'>continue shopping</button>
              <button className='btn-primary' >checkout</button>
            </div>
          </div>
            : <div>
              <Link to="/" className='addSomthing2'>continue shopping <img src={arrowLeft} alt="" /></Link>
            </div>
        }




      </div>

    </>
  )
}


const CartItem = ({ smallImage, name, discountPrice,restroname, removeHandler, quantity, increaseQuantityHandler, decreaseQuantityHandler }) => {
  // console.log(decreaseQuantityHandler)
  return (
    <tr>
      <td colSpan="1">
        <div className='cartproductImg'>
          <img src={smallImage} alt="" />
        </div>
      </td>
      <td >
        <div className='cartProductInfo'>
          <span className='cartProductCategory'>burger · spicy</span>
          <h2 className='cartProductName'>{name.length < 20 ? name : name.slice(0, 18) + "..."}</h2>
          <span className='cartProductRestro' >{restroname}</span>
        </div>
      </td>
      <td>
        <div className="cartCounter">
          <div className="cartPlus" onClick={() => increaseQuantityHandler(name)}>
            <img src={plus} />
          </div>
          <div className='cartCounterValue'>
            <span >{quantity}</span>
          </div>
          <div className="cartPlus" onClick={() => decreaseQuantityHandler(name)} >
            <img src={minus} />
          </div>
        </div>
      </td>
      <td>
        <div className='cartProductPrice'>
          <span>{discountPrice}₹</span>
        </div>
      </td>
      <td>
        <div className="cartProductAction">
          <button className='btn-primary' onClick={() => removeHandler(name)}>remove</button>
        </div>
      </td>
    </tr>
  )
}