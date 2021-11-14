import { Grid, Typography } from '@mui/material';
import React from 'react';
import CryptoItem from '../components/CryptoItem';
import CustomToolbar from '../components/CustomToolbar'
import Sidebar from '../components/Sidebar'
import './Home.css'

const GlobalStats = () => {

    const StatItem = () => {
        return (
            <Grid item xs={6}>
                <Typography variant="caption" sx={{ color: "gray", marginBottom: 1 }}>
                    Total Cryptocurrencies
                </Typography>
                <Typography variant="h6" sx={{ color: "gray", marginBottom: 1 }}>
                    12,150
                </Typography>
            </Grid>
        )
    }

    return (
        <div className="global_stats">
            <Typography variant="h4" sx={{ color: "black", marginBottom: 1 }}>
                Global Crypto Stats
            </Typography>
            <Grid container spacing={2}>
                <StatItem />
                <StatItem />
                <StatItem />
                <StatItem />
                <StatItem />
                <StatItem />
            </Grid>
        </div>
    )
}

const TopCryptos = () => {
    <div className="top_cryptos">
            <Typography variant="h4" sx={{ color: "black", marginBottom: 1 }}>
                Top Ten Cryptos In The World
            </Typography>
            <Grid container spacing={2}>
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
                <CryptoItem />
            </Grid>
        </div>
}

const Home = () => {
    return (
        <div className="home">
            <GlobalStats />
            <TopCryptos />
        </div>
    )
}

export default Home
