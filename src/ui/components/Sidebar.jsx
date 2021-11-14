import React from "react";
import Typography from '@mui/material/Typography'
import HomeOutlined from '../assets/home.svg'
import { CategoryOutlined, Logout, Money, NewReleases } from "@mui/icons-material";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Typography variant="h4" sx={{ color: "#1976d2" }}>Cryptoverse</Typography>
            <Typography variant="body2" sx={{ 
                    color: "gray",
                    flex: 1,
                    marginBottom: 1,
                    marginTop: 1
                 }}>Menu</Typography>
            <SidebarItem selected title={"Home"} Icon={HomeOutlined} />
            <SidebarItem title={"Cryptocurrencies"} Icon={CategoryOutlined}/>
            <SidebarItem title={"Exchanges"} Icon={Money}/>
            <SidebarItem title={"News"} Icon={NewReleases}/>
            <SidebarItem title={"Logout"} Icon={Logout}/>
        </div>
    )
}

const SidebarItem = ({selected = false, title, Icon}) => {
    return (
        <div className={
            selected ? "sidebar_item selected": "sidebar_item"
        }>
            <div className={selected ? "icon_wrapper selected" : "icon_wrapper" }>
            {
                title == "Home" ? <object data={Icon} width="30" height="30" className={"icon"}> </object>
                : <Icon sx={{color: "white"}} />
            }
            </div>
            <Typography variant="body1" sx={{ 
                    color: selected ? "black" : "gray",
                    flex: 1,
                    marginLeft: 1,
                    fontWeight: "bold"
                 }}>{title}</Typography>
        </div>
    )
}

export default Sidebar;