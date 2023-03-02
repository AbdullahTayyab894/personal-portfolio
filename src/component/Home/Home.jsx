import React from 'react'
import { Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import IconButton from '@mui/material/IconButton';
import web4 from "../../images/web4.jpg"
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import { Link } from 'react-router-dom';

const DrawerAbout = () => {

    const divStyle = {
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${web4})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    };

    return (
        <div style={divStyle} >
            <Box >
                <Box textAlign="center" >
                    <Typography variant='h4'>Welcome</Typography>
                    <TypeAnimation
                        sequence={["I'm Abdullah Tayyab.", 2000, "I'm a Mern Stack Developer.", 2000]}
                        speed={10}
                        deletionSpeed={50}
                        wrapper="h1"
                        repeat={Infinity}
                    />
                    <Typography variant='h5'>Based in Kasur,Pakistan</Typography>
                    <Link to="/about" style={{
                        textDecoration: "none"
                    }}>
                        <IconButton aria-label="Home">
                            <KeyboardDoubleArrowDownSharpIcon sx={{
                                color: "white",
                                paddingTop: "20px",
                                fontSize: "80px",
                                "&:hover":{
                                    color:"#20c997"
                                }
                            }} />
                        </IconButton>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default DrawerAbout