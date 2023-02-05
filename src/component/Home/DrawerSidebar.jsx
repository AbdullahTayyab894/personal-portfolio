import React, { useState } from 'react'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import my2 from '../../images/my2.jpeg'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled, { css } from 'styled-components';

const Main = () => {

    const StyleRegisterComponent = styled.div`
    background: rgba(0, 0, 0, 0.9);
    color: white;
    textAlign: center;
    min-width:232px;
    padding: 40px 0px 51px 0px;
    height:635px;
    top:0px;
    position:sticky;

    @media (max-width:900px){
        position:"relative"
    }
    `;
    return (
        <>
            <Grid xs={12} md={2} sx={{
                textAlign:"center"
            }}>
                <StyleRegisterComponent >
                    <img src={my2} alt="Personal Photo"
                        style={{
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            border: "7px solid #393E46"
                        }} />
                    <Typography lineHeight="4em">Abdullah Tayyab</Typography>
                    <Link to="/" className="tab" style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        <Typography lineHeight="3em" sx={{
                            '&:hover': {
                                color: "#20c997",
                            },
                        }} >Home</Typography>
                    </Link>
                    <Link to="/about" className="tab" style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        <Typography lineHeight="3em" sx={{
                            '&:hover': {
                                color: "#20c997",
                            }
                        }}>About Me</Typography>
                    </Link>
                    <Link to="/service" style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        <Typography lineHeight="3em" sx={{
                            '&:hover': {
                                color: "#20c997",
                            }
                        }}>What I Do</Typography>
                    </Link>
                    <Link to="/resume" style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        <Typography lineHeight="3em" sx={{
                            '&:hover': {
                                color: "#20c997",
                            }
                        }}>Resume</Typography>
                    </Link>
                    <Link to="/project" style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        <Typography lineHeight="3em" sx={{
                            '&:hover': {
                                color: "#20c997",
                            }
                        }}>Portfolio</Typography>
                    </Link>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: "20px",
                        justifyContent: "space-evenly",
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
                </StyleRegisterComponent>
            </Grid>
        </>
    )
}

export default Main