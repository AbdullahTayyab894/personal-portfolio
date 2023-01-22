import React from 'react'
import { Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import './drawer.css'

const DrawerAbout = () => {
    return (
        <>
                <Box className="container"
                    sx={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        marginLeft:"250px",
                        width: "calc(100% - 250px)",
                    }}>
                    <Box textAlign="center" >
                        <Typography variant='h4'>Welcome</Typography>
                        <TypeAnimation
                            sequence={["I'm Abdullah Tayyab.", 2000, "I'm a Mern Stack Front-End Developer.", 2000]}
                            speed={10}
                            deletionSpeed={50}
                            wrapper="h1"
                            repeat={Infinity}
                        />
                        <Typography variant='h5'>Based in Kasur,Pakistan</Typography>
                    </Box>
                </Box>
        </>
    )
}

export default DrawerAbout