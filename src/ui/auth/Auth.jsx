import { Grid, Box, Checkbox, FormControlLabel, Link } from '@mui/material'
import React from 'react'
import BitcoinImage from '../assets/bitcoin_1.jpg'
import './Auth.css'
import Login from './Login';
import Signup from './Signup';

export default function Auth() {
    return (
        <div className="auth">
            <img src={BitcoinImage} className="bitcoin_image" />
            <Grid container xs>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Box sx={{
                        width: "100%",
                        height: "100vh",
                        boxSizing: "border-box",
                        padding: "30px"
                    }}>
                        <div className="auth_container">
                            <div className="auth_navigator">
                                <div className="navigator navigator_login">
                                    Login
                                </div>
                                <div className="navigator navigator_sign_up selected">
                                    Signup
                                </div>
                            </div>
                            <Signup />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    )
}
