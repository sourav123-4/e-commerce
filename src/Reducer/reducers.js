import {  RECEIVE_PRODUCTS } from "./Action-type";

const initialState = { };

const PostReducer = (state=initialState,{type, data})=>{
    switch(type){
        case RECEIVE_PRODUCTS:
            return data;
        default:
            return state;
    }
};

export default PostReducer;