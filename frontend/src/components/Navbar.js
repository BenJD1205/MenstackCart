import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = ({click}) => {
    
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            {/*Logo */}
            <div className="navbar__logo">
                <h2>Mern Shopping Cart</h2>
            </div>
            {/*Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/*Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo_badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {/*Icon */}
                        Shop
                        
                    </Link>
                </li>
            </ul>
            {/*Hamburger menu */}
            <div className="hamburger__menu" onClick={click}    >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;