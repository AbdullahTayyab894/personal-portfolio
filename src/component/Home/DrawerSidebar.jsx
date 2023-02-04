import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import my2 from '../../images/my2.jpeg'
import { Link } from 'react-router-dom';


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
                <Link to="/" style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <Typography lineHeight="2.5em" sx={{
                        '&:hover': {
                            color: "#20c997",
                        }
                    }}>Home</Typography>
                </Link>
                <Link to="/about" style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <Typography lineHeight="2.5em" sx={{
                        '&:hover': {
                            color: "#20c997",
                        }
                    }}>About Me</Typography>
                </Link>
                <Link to="/service" style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <Typography lineHeight="2.5em" sx={{
                        '&:hover': {
                            color: "#20c997",
                        }
                    }}>What I Do</Typography>
                </Link>
                <Link to="/resume" style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <Typography lineHeight="2.5em" sx={{
                        '&:hover': {
                            color: "#20c997",
                        }
                    }}>Resume</Typography>
                </Link>
                <Link to="/project" style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <Typography lineHeight="2.5em" sx={{
                        '&:hover': {
                            color: "#20c997",
                        }
                    }}>Portfolio</Typography>
                </Link>
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