import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider';
import { type } from '@testing-library/user-event/dist/type';

const Products = (props) => {
    const { id, title, rating, price, image } = props;

    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };
    return (
        <div className='product'>
            <div className="product_information">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_) => (<p>⭐</p>))
                    }
                </div>
            </div>
            <img className=" " src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Products
