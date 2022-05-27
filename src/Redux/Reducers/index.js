import { combineReducers } from "redux";
import PostReducer from "./productReducers";
import cartReducer from "./cartReducers/addToCart";

const rootReducer = combineReducers ({
    product: PostReducer,
    cart: cartReducer,
});

export default rootReducer; 