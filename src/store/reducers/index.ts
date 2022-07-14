import { combineReducers } from "redux";
import userReducers from "./userReducers";



const rootReducer = combineReducers({
    // ...yourReducers
    user: userReducers,
});


export default rootReducer;