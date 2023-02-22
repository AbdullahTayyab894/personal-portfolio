import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
    return (
        <div style={{
            minHeight: "100px",
            background: "black"

        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                maxWidth: "30%",
                margin: "auto",
                padding: "10px 0px 10px 0px"
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
            <Box sx={{
                maxWidth: "35%",
                margin: "auto"
            }}>
                <Typography sx={{
                    color: "white",
                    textAlign:"center"
                }}>
                    COPYRIGHT© 2023 
                    <span style={{
                        color:"#20c997",
                        padding:"0px 10px 0px 10px"
                    }}>
                        ABDULLAH TAYYAB
                    </span>
                     ALL RIGHT RESERVED
                </Typography>
            </Box>
        </div>
    )
}

export default Footer