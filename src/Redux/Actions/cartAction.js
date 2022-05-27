import { ADD_TO_CART } from "../Action-types/cartActionType";

export const addToCart = (data)=>{
    return {
        type : ADD_TO_CART,
        data,
    }
}