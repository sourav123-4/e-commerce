
import { ADD_TO_CART } from "../Action-types/cartActionType";
const initialState = { mycart:[] }
const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {...state, mycart:action.data};
        default:
            return state;
    }
} ;

export default cartReducer;