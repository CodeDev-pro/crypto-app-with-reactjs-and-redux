import { Link, Checkbox, FormControlLabel, Grid, Avatar, TextField, Box, Button, Typography, buttonClasses } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import React from 'react'
import BitcoinImage from '../assets/bitcoin_1.jpg'
import './Auth.css'

export default function Auth() {
    return (
        <div className="auth">
            <img src={BitcoinImage} className="bitcoin_image" />
            <Grid container xs>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <Box sx={{
                        width: "100%",
                        height: "100vh",
                        boxSizing: "border-box",
                        padding: "30px"
                    }}>
                        <div className="auth_container">
                            
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
