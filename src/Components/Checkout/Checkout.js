import React from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'


export default function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout__left__ad" />
                <div>
                    <h2 className='checkout__title'>Your Shoppping Basket</h2>
                    {
                        basket.map((item, i) => <CheckoutProduct product={item} key={i} />)
                    }
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
