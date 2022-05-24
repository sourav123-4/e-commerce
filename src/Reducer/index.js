import { combineReducers } from "redux";
import PostReducer from "./reducers";

const rootReducer = combineReducers ({
    data: PostReducer,
});

export default rootReducer;