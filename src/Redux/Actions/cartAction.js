import { ADD_TO_CART,REMOVE_FROM_CART } from "../Action-types/cartActionType";

export const addToCart = (data)=>{
    return {
        type : ADD_TO_CART,
        data,
    }
}

export const removeFromCart = (data)=>{
    return {
        type : REMOVE_FROM_CART,
        data,
    }
}