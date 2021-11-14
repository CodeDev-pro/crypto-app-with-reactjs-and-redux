import React from 'react'
import { Grid, Box, Checkbox, FormControlLabel, Link } from '@mui/material'
import BitcoinImage from '../assets/bitcoin_1.jpg'
import CustomTextField from '../components/CustomTextField'
import ArrowOutlined from '@mui/icons-material/ArrowRightOutlined'
import CustomButton from '../components/CustomButton'

function Login() {
    return (
        <div className="login">
            <div className="spacer-vertical-20"></div>
            <Box
                component="form"
                autoComplete="on"
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <CustomTextField type="Firstname" />
                    <div className="spacer-horizontal-10"></div>
                    <CustomTextField type="Lastname" />
                </Box>
                <div className="spacer-vertical-10"></div>
                <CustomTextField type="Email" />
                <div className="spacer-vertical-10"></div>
                <CustomTextField type="Password" />
                <div className="spacer-vertical-10"></div>
                <CustomTextField type="Retype Password" />
                <div className="spacer-vertical-5"></div>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <CustomButton />
                <div className="spacer-vertical-10"></div>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Oops, I have an account? Login"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Login
