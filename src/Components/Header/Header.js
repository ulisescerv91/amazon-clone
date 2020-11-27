import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider'

import { Link } from 'react-router-dom'

export default function Header() {
    /**
       * IMPLEMENT REACT CONTEXT
       * Step 4: - Get the values of basket    
       */
    const [{ basket }, dispatch] = useStateValue();// Here we have access to the basket from the dataLayer of app
    return (
        <div className='header'>
            <Link to=''>
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon logo"
                    className='header__logo' />
            </Link>

            <div className="header__search">
                <input type="text" className='header__search__input' />
                <SearchIcon className='header__search__icon' />
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__nav__option">
                        <span className="header__nav__option___lineOne">Hello</span>
                        <strong className="header__nav__option___lineTwo">Sing In</strong>
                    </div>
                </Link>
                <div className="header__nav__option">
                    <span className="header__nav__option___lineOne">Return</span>
                    <strong className="header__nav__option___lineTwo"> Orders</strong>
                </div>
                <div className="header__nav__option">
                    <span className="header__nav__option___lineOne">Your</span>
                    <strong className="header__nav__option___lineTwo">Prime</strong>
                </div>
                <Link to='checkout'>
                    <div className="header__nav__basket">
                        <ShoppingBasketIcon />
                        <span className="header__nav__basket___lineTwo header__nav__basket__count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
