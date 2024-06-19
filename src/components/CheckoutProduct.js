import React from 'react'
import './CheckoutProduct.css'
import { type } from '@testing-library/user-event/dist/type'
import { useStateValue } from './StateProvider'



const CheckoutProduct = ({item}) => {
    const [{ basket }, dispatch ] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type:'REMOVE_FROM_BASKET',
        id: item.id
     })
    }
    return (
      <div className='checkout_product'>
          <img className='checkoutProduct_image' src={item.image} alt="" />
           <div className="checkout_product_info">
              <p className='checkoutProduct_title'>{item.title}</p>
              <p className='checkoutProduct_price'>
                  <small>$</small>
                  <strong>{item.price}</strong>
              </p>
              <div className="checkoutProduct_rating">
                      {
                          Array(item.rating).fill().map((_) => (<p>⭐</p>))
                      }
              </div>
              <button onClick={removeFromBasket}>Remove from basket</button>
           </div>
        
      </div>
    )
  }
export default CheckoutProduct
