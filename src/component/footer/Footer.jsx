import React from 'react'
import { Avatar, Box } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
    return (
        <div>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "20px",
                justifyContent: "space-evenly",
                background:"black"
            }}>
                <a href="https://www.facebook.com/this.abdullah.8/" target="_blank">
                    <Avatar sx={{
                        background: "transparent"
                    }}>
                        <FacebookOutlinedIcon />
                    </Avatar>
                </a>

                <a href="https://github.com/AbdullahTayyab894" target="_blank">
                    <Avatar sx={{
                        background: "transparent"
                    }}>
                        <GitHubIcon />
                    </Avatar>
                </a>

                <a href="https://www.linkedin.com/in/abdullahtayyab894/" target="_blank">
                    <Avatar sx={{
                        background: "transparent"
                    }}>
                        <LinkedInIcon />
                    </Avatar>
                </a>
                <a href="https://wa.me/+923184579618" target="_blank">
                    <Avatar sx={{
                        background: "transparent"
                    }}>
                        <WhatsAppIcon />
                    </Avatar>
                </a>
            </Box>
        </div>
    )
}

export default Footer