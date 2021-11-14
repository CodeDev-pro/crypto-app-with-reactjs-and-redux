export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"
export const SET_VALUE = "SET_VALUE"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const setValue = (value) => {
    return {
        type: SET_VALUE,
        payload: value
    }
}