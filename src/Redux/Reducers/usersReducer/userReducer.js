import { RECEIVE_ALL_USERS } from "../../Action-types/usersActionType";

const initialState = {users: []};

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case "RECEIVE_ALL_USERS":
            return {
                ...state, users : action.data
            }
        default:
            return {...state}
    }
}

export default userReducer;