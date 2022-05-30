import { combineReducers } from "redux";
import PostReducer from "./productReducers";
import cartReducer from "./cartReducers/cartReducer";
import userReducer from '../Reducers/usersReducer/userReducer';
const rootReducer = combineReducers ({
    product: PostReducer,
    cart: cartReducer,
    user : userReducer,
});

export default rootReducer; 