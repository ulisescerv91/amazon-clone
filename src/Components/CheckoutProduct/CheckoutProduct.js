import React from 'react'
import { useStateValue } from '../../StateProvider';
import Stars from '../Stars/Stars'
import './CheckoutProduct.css'


export default function CheckoutProduct({ product }) {
    const { id, title, image, price, rating } = product;
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={image} alt="product" className="checkoutProduct__img" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__info__title">{title}</p>
                <p className="checkoutProduct__info__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__info__rating">
                    <Stars numberStars={rating} />
                </div>
                <button
                    className='checkoutProduct__info__button'
                    onClick={removeFromBasket}
                >Remove from Basket</button>
            </div>
        </div>
    )
}
