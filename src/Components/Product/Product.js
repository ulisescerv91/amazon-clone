import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'
export default function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();//dispatch - how manipulate the data

    const addToBasket = () => {
        /**
       * IMPLEMENT REACT CONTEXT
       * Step 3: - Dispatch the item to data layer
       *    - Move to header.js to watch the next
       */
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })// This going to add the item  to the global dataLayer and would be access by all components

    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__info__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__info__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span key={i}>⭐</span>
                            )
                            )
                    }


                </div>
            </div>
            <img
                src={image}
                alt="product"
                className="product__image" />
            <button className="product__button" onClick={addToBasket}>
                Add to Bascket
            </button>
        </div>
    )
}
