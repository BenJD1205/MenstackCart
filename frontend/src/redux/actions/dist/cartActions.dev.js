"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports.addToCart = void 0;

var actionTypes = _interopRequireWildcard(require("../constants/cartConstants"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var addToCart = function addToCart(id, qty) {
  return function _callee(dispatch, getState) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/products/".concat(id)));

          case 2:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: actionTypes.ADD_TO_CART,
              payload: {
                product: data._id,
                name: data.name,
                imageUrl: data.imageUrl,
                price: data.price,
                countInStock: data.countInStock,
                qty: qty
              }
            });
            localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.addToCart = addToCart;

var removeFromCart = function removeFromCart(id) {
  return function (dispatch, getState) {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  };
};

exports.removeFromCart = removeFromCart;