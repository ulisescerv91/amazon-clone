import React from 'react'
import './Product.css'

export default function Product({ title, image, price, rating }) {
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
            <button className="product__button">
                Add to Bascket
            </button>
        </div>
    )
}
