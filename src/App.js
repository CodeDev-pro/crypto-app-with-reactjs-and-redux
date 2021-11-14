import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, setValue } from "./domain/redux/counter/counter_type";
import { getCryptos } from "./domain/redux/cryptos/crypto_type";
import Auth from "./ui/auth/Auth";
import "./App.css"

const App = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cryptos);
    const [count, setCount] = useState(state)
    console.log(state)
    return(
        <div className = "app">
            <Auth />
        </div>
    )
}

export default App;