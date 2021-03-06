import { 
    GET_ALL_PRODUCTS,
    RECEIVE_PRODUCTS,
    GET_PRODUCT_DETAILS,
    GET_LIMIT_DATA,
    ADD_NEW_PRODUCT,
    GET_PRODUCTS_CATEGORY_FETCH
} from "../Action-types/productActionType";

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

export const getProductDetails =(id)=>{
    return {
        type:GET_PRODUCT_DETAILS,
        id,
    };
};

export const getLimitProducts =(number)=>{
    return {
        type:GET_LIMIT_DATA,
        number,
    };
};

export const getProductCategoryFetch = (category) => {
    return {
        type: GET_PRODUCTS_CATEGORY_FETCH,
        category,
    }
};

export const addNewProduct =(products)=>{
    return {
        type:ADD_NEW_PRODUCT,
        products,
    };
};