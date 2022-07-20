import { GET_SOL_PORTFOLIO } from "../types/types";
import { GET_NFT_METADATA } from "../types/types";

const initialState = {
    solPortfolio: [],
    loading: false,
    nfts: [],
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
        case GET_NFT_METADATA:
            return {
                ...state,
                nfts: action.payload,
                loading: false
            }
        default:
            return state;
    }
}