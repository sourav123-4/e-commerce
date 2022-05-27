import { combineReducers } from "redux";
import PostReducer from "./productReducers";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers ({
    product: PostReducer,
    cart: cartReducer,
});

export default rootReducer; 