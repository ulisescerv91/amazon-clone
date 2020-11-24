import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'

export default function Header() {
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
                <div className="header__nav__option">
                    <span className="header__nav__option___lineOne">Hello</span>
                    <strong className="header__nav__option___lineTwo">Sing In</strong>
                </div>
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
                        <span className="header__nav__basket___lineTwo header__nav__basket__count">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
