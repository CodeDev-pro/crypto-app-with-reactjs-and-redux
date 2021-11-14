import { createStore, applyMiddleware, combineReducers } from 'redux'
import { countReducer } from '../counter/counter_reducer'
import thunk from 'redux-thunk'
import { cryptoReducer } from '../cryptos/crypto_reducer';

const rootReducer = combineReducers({
    cryptos: cryptoReducer,
    counter: countReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));