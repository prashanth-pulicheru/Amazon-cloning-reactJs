import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            {/* <img  className="checkout_ad"  src="https://m.media-amazon.com/images/I/61i014HA6xL._SX3000_.jpg" alt="" /> */}
            {basket?.length === 0 ? (
                <div className='shopping_heading'>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <div className='checkout_title_subtotal'>
                        <h2 className='checkout_title'>Your Shopping Basket</h2>
                        <div>
                            {
                                basket.length > 0 && (
                                    <div className='checkout_right'>
                                        <Subtotal/>
                                       
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {basket.map((item) => {
                        return (<CheckoutProduct key={item.id} item={item} />)
                    })}
                </div>
            )}


        </div>
    )
}

export default Checkout
