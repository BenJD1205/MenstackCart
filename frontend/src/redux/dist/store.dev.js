"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _cartReducers = require("./reducers/cartReducers");

var _productReducers = require("./reducers/productReducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Reducers
var reducer = (0, _redux.combineReducers)({
  cart: _cartReducers.cartReducer,
  getProducts: _productReducers.getProductsReducer,
  getProductDetails: _productReducers.getProductDetails
});
var middleware = [_reduxThunk["default"]];
var cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
var INITAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
};
var store = (0, _redux.createStore)(reducer, INITAL_STATE, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware)));
var _default = store;
exports["default"] = _default;