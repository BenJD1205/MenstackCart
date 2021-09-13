import React from 'react'
import './SliderDrawer.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const SliderDrawer = ({show,click}) => {
    const sliderDrawerClass =["sliderdrawer"];
    if(show){
        sliderDrawerClass.push("show")
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty), 0)
    }

    return (
        <div className={sliderDrawerClass.join(" ")}>
            <ul className="sliderdrawer__links" onClick={click}>
                <li>    
                    <Link to="/cart" >
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart<span className="sliderdrawer__cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SliderDrawer
