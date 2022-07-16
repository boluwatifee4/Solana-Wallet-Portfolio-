import { GET_SOL_PORTFOLIO } from "../types/types";


const initialState = {
    solPortfolio: [],
    loading: false,
    error:[]
}


export default function solanaReducer(state = initialState, action:any) {
    switch (action.type) {
        case GET_SOL_PORTFOLIO:
            return {
                ...state,
                solPortfolio: action.payload,
                loading: false
            }
        default:
            return state;
    }
}