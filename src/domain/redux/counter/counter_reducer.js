import { DECREMENT, INCREMENT, RESET, SET_VALUE } from "./counter_type"

const initialState = {
    count: 0
}

export const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {
                count: state.count + 1
            }
            break;
        case DECREMENT: 
            return {
                count: state.count - 1
            }
            break;
        case SET_VALUE: 
            return {
                count: action.payload
            }
            break;
        case RESET: 
            return {
                count: 0
            }
            break;
        default: 
            return {
                count: 0
            }
        
    }

}