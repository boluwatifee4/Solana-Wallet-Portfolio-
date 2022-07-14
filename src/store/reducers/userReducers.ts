import { GET_USER_INFO } from "../types/types";


// Language: typescript
// Path: web3\src\store\reducers\userReducers.ts
// Compare this snippet from web3\src\store\store.ts:

const initialState = {
    loading: false,
    user: {},
    error: null,
};

export default (state = initialState, action:any) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                loading: true,
                user: action.payload,
            };
        default:
            return state;
    }
}