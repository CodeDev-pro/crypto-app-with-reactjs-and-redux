import React from 'react';
import CustomToolbar from '../components/CustomToolbar'
import Sidebar from '../components/Sidebar'
import Home from './Home'
import './CryptoApp.css'

const CryptoApp = () => {
    return (
        <div className="crypto_app">
            <CustomToolbar />
            <Sidebar />
            <Home />
        </div>
    )
}

export default CryptoApp