import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetails, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart:cartReducer,
    getProducts:getProductsReducer,
    getProductDetails:getProductDetails
})

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITAL_STATE = {
    cart:{
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;