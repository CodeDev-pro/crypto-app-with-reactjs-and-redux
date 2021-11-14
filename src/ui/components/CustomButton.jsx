import { ArrowForwardIosOutlined } from '@mui/icons-material'
import React from 'react'

function CustomButton() {
    return (
        <button className="custom_button">
            <span>Sign up</span>
            <ArrowForwardIosOutlined sx={{ justifySelf: "end" }} />
        </button>
    )
}

export default CustomButton
