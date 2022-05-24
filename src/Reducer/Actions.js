import { 
    GET_ALL_PRODUCTS,
    RECEIVE_PRODUCTS,
} from "./Action-type";

export const getAllCategories = () =>{
    return {
        type: GET_ALL_PRODUCTS,
    };
};

export const receiveProducts = (data)=>{
    return {
        type: RECEIVE_PRODUCTS,
        data,
    };
};