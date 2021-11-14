import { HomeOutlined } from '@mui/icons-material'
import { Box, Typography, Grid } from "@mui/material"
import React from 'react'

const CryptoItem = () => {
    return (
        <Grid item xs={3}>
            <div className="crypto_item">
                <Box className="crypto_item_top_section" sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center"
                }}>
                    <Typography variant="body1" sx={{ color: "gray", marginBottom: 1 }}>
                        1. Bitcoin
                    </Typography>
                    <HomeOutlined />
                </Box>
                <Typography variant="body2" sx={{ color: "gray", marginBottom: 1 }}>
                    Price: 44.3K
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", marginBottom: 1 }}>
                    Market Cap: 836.78
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", marginBottom: 1 }}>
                    Daily Change: -3.37%
                </Typography>
            </div>
        </Grid>
    )
}

export default CryptoItem
