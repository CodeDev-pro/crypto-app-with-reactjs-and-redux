import React from 'react'
import { EmailOutlined, LockOutlined, PersonOutlined } from '@mui/icons-material'


function CustomTextField({ type }) {
    let inputType = "email"

    const Icon = () => {
        if(type == "Email") {
            inputType = "email"
            return (<EmailOutlined sx={{ color: "#d3d3d3" }} /> )
        } else if(type == "Password") {
            inputType = "password"
            return (<LockOutlined sx={{ color: "#d3d3d3" }} />)
        } else if(type == "Retype Password") {
            inputType = "password"
            return (<LockOutlined sx={{ color: "#d3d3d3" }} />)
        } else {
            inputType = "text"
            return (<PersonOutlined sx={{ color: "#d3d3d3" }} />)
        }
    }

    return (
        <div className="textfield">
            <div className="input-wrapper">
                <Icon />
                <input type={inputType} className="input input-email" placeholder={type} />
            </div>
        </div>
    )
}

export default CustomTextField
