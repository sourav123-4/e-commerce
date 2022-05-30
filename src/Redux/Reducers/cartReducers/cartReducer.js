
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../Action-types/cartActionType";
const initialState = { mycart:[] }
const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const check = state.mycart.find(obj => obj.id === action.data.id);
            return check ? state : {...state,mycart:[...state.mycart,action.data]}
        case REMOVE_FROM_CART:
            const updatedata = state.mycart.filter(item => item.id !== action.data.id);
            state.mycart=updatedata;
            return {...state}
        default:
            return state;
    }
} ;

export default cartReducer;