import {  
    RECEIVE_PRODUCTS, 
    GET_PRODUCT_DETAILS, 
    GET_PRODUCTS_CATEGORY_SUCCESS, 
    GET_LIMIT_DATA, ADD_NEW_PRODUCT 
  } from "../Action-types/productActionType";

const initialState ={ products:[], pdetails:[], limitproducts:[], categories:[] }

const PostReducer = ( state = initialState, action ) => {
     
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return { ...state, products: action.data };
    case GET_PRODUCT_DETAILS:
      return { ...state, pdetails:action.id };
    case GET_LIMIT_DATA:
      return { ...state, limitproducts:action.number };
    case GET_PRODUCTS_CATEGORY_SUCCESS:
      return { ...state, categories: action.categories };
    case ADD_NEW_PRODUCT:
      return { ...state, products:[...state.products,action.data]};
    default:
      return state;
  }
};

export default PostReducer;