import { GET_SOL_PORTFOLIO } from "../types/types";
import axios from "axios";
import { Dispatch } from "redux";

const API_URL = `${process.env.REACT_APP_BIMA_WEB3}`;
const API_KEY = `${process.env.REACT_APP_BIMA_WEB3_API_KEY_TOKEN}`;

export const getSolPortfolio = (network:string, address:string) => async (dispatch:Dispatch) => {
    // console.log(API_URL);
    console.log("getSolPortfolio");
    try {
        const res = await axios.get(`${API_URL}account/${network}/${address}/portfolio`, {
            headers: {
                "x-api-key": API_KEY
            }
        });
        // console.log(res);
        dispatch({
            type: GET_SOL_PORTFOLIO,
            payload: res
        });
    } catch (err) {
        console.log(err);
    }
}