import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  productReducer,
  newProductReducer,
  productReviewsReducer,
  reviewReducer,
} from "./components/reducers/productReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./components/reducers/authReducers";

import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderReducer,
} from "./components/reducers/orderReducers";
import { cartReducer } from "./components/reducers/cartReducer";
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  product: productReducer,
  newProduct: newProductReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  auth: authReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newReview: newReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
