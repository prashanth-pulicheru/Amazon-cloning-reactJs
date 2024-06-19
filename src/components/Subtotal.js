import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue()
    let total_amount = basket.reduce((sum,item) => sum+item.price,0);
  return (
    <div className='subtotal'>
        <p>Subtotal ({basket.length} items): <span>${total_amount.toFixed(2)}</span></p>
          <small className='subtotal_gift'>
            <input type="checkbox" /> This order contains a gift
          </small>
        <button className='sub-btn-total'>Proceed to Checkout</button>
      
    </div>
  )
}

export default Subtotal
