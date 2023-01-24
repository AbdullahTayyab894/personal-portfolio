import React from 'react'
import Main from '../Home/DrawerSidebar'
import { Typography, Box } from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Services = () => {
    return (
        <>
            <Main />
            <Box sx={{
                marginLeft: "250px",
                background: "#f8f9fa",
                height: "100%",
                color: "#4C4D4D"
            }}>
                <Typography variant='h3' sx={{
                    textAlign: "center",
                    paddingTop: "50px",
                    fontWeight: "bold"
                }}>What I Do?</Typography>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "justify",
                    marginTop: "30px"
                }}>
                    <Box sx={{
                        display: "flex",
                        width: "450px"
                    }}>
                        <Box>
                            <DesktopWindowsOutlinedIcon sx={{
                                fontSize: "80px",
                                color: "#20c997",
                                marginRight: "20px",
                                background: "white",
                                padding: "15px",
                                borderRadius: "5px",
                                boxShadow: "4px 4px 4px gray"
                            }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">Web Development</Typography>
                            <Typography lineHeight="2em">
                                Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        width: "450px"
                    }}>
                        <Box>
                            <CampaignIcon sx={{
                                fontSize: "80px",
                                color: "#20c997",
                                marginRight: "20px",
                                background: "white",
                                padding: "15px",
                                borderRadius: "5px",
                                boxShadow: "4px 4px 4px gray"
                            }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">SEO</Typography>
                            <Typography lineHeight="2em">
                                Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "justify",
                    marginTop: "30px"
                }}>
                    <Box sx={{
                        display: "flex",
                        width: "450px"
                    }}>
                        <Box>
                            <PaletteIcon sx={{
                                fontSize: "80px",
                                color: "#20c997",
                                marginRight: "20px",
                                background: "white",
                                padding: "15px",
                                borderRadius: "5px",
                                boxShadow: "4px 4px 4px gray"
                            }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">Graphic Desiging</Typography>
                            <Typography lineHeight="2em">
                                Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        width: "450px"
                    }}>
                        <Box>
                            <AssignmentIcon sx={{
                                fontSize: "80px",
                                color: "#20c997",
                                marginRight: "20px",
                                background: "white",
                                padding: "15px",
                                borderRadius: "5px",
                                boxShadow: "4px 4px 4px gray"
                            }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">Article Writing</Typography>
                            <Typography lineHeight="2em">
                                Writing may be defined as any conventional system of marks or signs that represents the utterances of a language. Writing renders language visible. Whereas speech is ephemeral, writing is concrete and, by comparison, permanent.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Services