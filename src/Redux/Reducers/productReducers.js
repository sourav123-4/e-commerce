import {  RECEIVE_PRODUCTS, GET_PRODUCT_DETAILS, GET_CATEGORY_DATA, GET_LIMIT_DATA, ADD_NEW_PRODUCT } from "../Action-types/productActionType";

const initialState ={ products:[], pdetails:[], limitproducts:[], categorydata:[] }

const PostReducer = (state=initialState,action)=>{
    
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return {...state, products: action.data};
        case GET_PRODUCT_DETAILS:
            console.log("id",action)
            return {...state, pdetails:action.id};
        case GET_LIMIT_DATA:
            return {...state, limitproducts:action.number};
        case GET_CATEGORY_DATA:
            return {...state, categorydata:action.category};
        case ADD_NEW_PRODUCT:
            return {...state, products:[...state.products,action.data]};
        default:
            return state;
    }
};

export default PostReducer;