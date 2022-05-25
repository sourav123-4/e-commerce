import {  RECEIVE_PRODUCTS, GET_PRODUCT_DETAILS, GET_LIMIT_DATA } from "./Action-type";

const initialState = { products:[], pdetails:[], limitproducts:[]};

const PostReducer = (state=initialState,action)=>{
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return {...state, products: action.data};
        case GET_PRODUCT_DETAILS:
            console.log("id",action)
            return {...state, pdetails:action.id};
        case GET_LIMIT_DATA:
            return {...state, limitproducts:action.number};
        default:
            return state;
    }
};

export default PostReducer;