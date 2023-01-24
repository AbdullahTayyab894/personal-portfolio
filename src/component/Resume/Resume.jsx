import { Box, Typography } from '@mui/material'
import React from 'react'
import Main from '../Home/DrawerSidebar'
const Resume = () => {
    return (
        <>
            <Main />
            <Box sx={{
                marginLeft: "250px"
            }}>
                <Box sx={{
                    // width: "400px"
                    display: "flex"
                }}>
                    <Box sx={{
                        width: "50%"
                    }}>
                        <Typography>My Education</Typography>
                        <Box>
                            <Typography>2018-2022</Typography>
                            <Typography>BS-IT</Typography>
                            <Typography>GCUF</Typography>
                            <Typography>Information technology is the use of computers to create, process, store, retrieve and exchange all kinds of data and information. IT forms part of information and communications technology.</Typography>
                        </Box>
                        <Box>
                            <Typography>2022-2023</Typography>
                            <Typography>Diploma in Mern Stack Technology</Typography>
                            <Typography>Gamica Cloud</Typography>
                            <Typography>MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "50%"
                    }}>
                        <Typography>My Experience</Typography>
                        <Box sx={{
                            display: "flex",
                            flexWrap: "wrap"
                        }}>
                            <Box>
                                <Typography>2022-Continue</Typography>
                                <Typography>Mern Stack Development</Typography>
                                <Typography>Gamica Cloud</Typography>
                                <Typography>MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</Typography>
                            </Box>
                            <Box>
                                <Typography>2023-Continue</Typography>
                                <Typography>SEO and Article Writing</Typography>
                                <Typography>Self Practice</Typography>
                                <Typography>Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume