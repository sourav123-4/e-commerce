import { FETCH_ALL_USERS, RECEIVE_ALL_USERS } from "../Action-types/usersActionType";

export const fetchAllUsers = () =>{
    return {
        type: FETCH_ALL_USERS,
    }
}
export const receiveUsers = (data) => {
    return {
        type : RECEIVE_ALL_USERS,
        data,
    }
}