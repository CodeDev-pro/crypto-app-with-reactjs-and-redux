import axios from 'axios';
import CoinGecko from 'coingecko-api'

export const GET_CYPTOS_LOADING = "GET_CYPTOS_LOADING"
export const GET_CRYPTOS_SUCCESS = "GET_CRYPTOS_SUCCESS"
export const GET_CRYPTOS_FAILURE = "GET_CRYPTOS_FAILURE"
let cryptoClient = new CoinGecko();

const getCryptosLoading = () => {
    return {
        type: GET_CYPTOS_LOADING
    }
}

const getCryptosSuccess = (cryptoResponse) => {
    return {
        type: GET_CRYPTOS_SUCCESS,
        payload: cryptoResponse
    }
}

const getCryptosFailure = (error) => {
    return {
        type: GET_CRYPTOS_FAILURE,
        payload: error
    }
}

export const getCryptos = () => {
    return async (dispatch) => {
        dispatch(getCryptosLoading())
        try {
            const response = await cryptoClient.coins.all({
                order: CoinGecko.ORDER.GECKO_ASC,
                per_page: 50,
                page: 1
            })
            console.log(response.data)
            dispatch(getCryptosSuccess(response.data));
        } catch (error) {
            dispatch(getCryptosFailure(error))
        }
    }
}

class CryptoResponse {
    success
    message
    code
    data
    constructor(success, message, code, data) {
        this.success = success;
        this.code = code
        this.data = data
        this.message = message
    }

    getData() {
        return this.data;
    }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }
    
    isSuccess() {
        return this.success;
    }
}