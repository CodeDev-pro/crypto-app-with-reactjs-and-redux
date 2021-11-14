import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./ui/auth/Auth";
import "./App.css"
import CryptoApp from "./ui/home/CryptoApp";

const App = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cryptos);
    const [count, setCount] = useState(state)
    console.log(state)
    return(
        <div className = "app">
            <CryptoApp />
        </div>
    )
}

export default App;