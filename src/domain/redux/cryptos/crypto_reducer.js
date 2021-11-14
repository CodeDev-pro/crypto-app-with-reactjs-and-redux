import { GET_CRYPTOS_FAILURE, GET_CRYPTOS_SUCCESS, GET_CYPTOS_LOADING } from "./crypto_type"

const initialState = {
    cryptos: [],
    loading: false,
    error: ''
}

export const cryptoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CYPTOS_LOADING: 
            return {
                ...state,
                loading: true,
                error: ""
            }
            break;
        case GET_CRYPTOS_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        case GET_CRYPTOS_SUCCESS: 
            return {
                cryptos: action.payload,
                loading: false,
                error: ""
            }
            break;
        default:
            return {
                ...state,
                loading: false,
                error: ""
            }
            break;
    }
}