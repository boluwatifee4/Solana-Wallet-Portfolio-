import { combineReducers } from "redux";
import userReducers from "./userReducers";
import solanaReducer from "./solanaReducer";



const rootReducer = combineReducers({
    // ...yourReducers
    user: userReducers,
    solana: solanaReducer
});


export default rootReducer;