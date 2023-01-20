import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import my2 from '../../images/my2.jpeg'


const Main = () => {
    return (
        <>
            <Box sx={{
                background: "rgba(0, 0, 0, 0.9);",
                color: "white",
                width: "250px",
                height: "100%",
                textAlign: "center",
                position: "fixed",
                paddingTop: "40px"
            }}>
                <img src={my2} alt="Personal Photo"
                    style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        border: "7px solid #393E46"
                    }} />
                <Typography lineHeight="4em">Abdullah Tayyab</Typography>
                <Typography lineHeight="2.5em">Home</Typography>
                <Typography lineHeight="2.5em">About</Typography>
                <Typography lineHeight="2.5em">What i do</Typography>
                <Typography lineHeight="2.5em">Resume</Typography>
                <Typography lineHeight="2.5em">Portfolio</Typography>
                <Typography lineHeight="2.5em">Testimonial</Typography>
                <Typography lineHeight="2.5em">Contact</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}>
                    <Avatar sx={{
                        background: "transparent"
                    }}><FacebookOutlinedIcon /></Avatar>
                    <Avatar sx={{
                        background: "transparent"
                    }}><TwitterIcon /></Avatar>
                    <Avatar sx={{
                        background: "transparent"
                    }}><GitHubIcon /></Avatar>
                    <Avatar sx={{
                        background: "transparent"
                    }}><LinkedInIcon /></Avatar>
                </Box>
            </Box>
        </>
    )
}

export default Main