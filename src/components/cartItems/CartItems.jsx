import './cartItems.css'


import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'

const CartItem = ({data}) => {
  const { image_url,name,rating,tags,price_in_rupees } = data;
  
    return (
      <tr>
        <td colSpan="1">
          <div className='cartproductImg'>
            <img src={image_url} alt="" />
          </div>
        </td>
        <td >
          <div className='cartProductInfo'>
            <span className='cartProductCategory'>burger · spicy</span>
            <h2 className='cartProductName'>{name}</h2>
            <span className='cartProductRestro' >Spice and dice restaurent</span>
          </div>
        </td>
        <td>
          <div className="cartCounter">
            <div className="cartPlus">
              <img src={plus} />
            </div>
            <div className='cartCounterValue'>
              <span >1</span>
            </div>
            <div className="cartMinus">
              <img src={minus} />
            </div>
          </div>
        </td>
        <td>
          <div className='cartProductPrice'>
            <span>{price_in_rupees}₹</span>
          </div>
        </td>
        <td>
          <div className="cartProductAction">
            <button className='btn-primary'>remove</button>
          </div>
        </td>
      </tr>
    )
  }
  export default CartItem;