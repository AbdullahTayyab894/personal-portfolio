import { Box, Typography, Button,Grid } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import Main from '../Home/DrawerSidebar'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#20c997' : '#308fe8',
    },
}));

const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = './Abdullah Tayyab Resume.pdf';
    link.click();
};
const Resume = () => {
    return (
        <>
        <Grid container>
            <Main />
            <Grid xs={12} md={9} sx={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
            }}>
                <Typography variant='h5' paddingTop="20px" fontWeight="bold" textAlign="center">My Education</Typography>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "justify",
                    paddingTop: "30px",
                }}>
                    <Box sx={{
                        maxWidth: "450px",
                        border: "1px solid #EBECF0",
                        borderRadius: "10px",
                        padding: "20px"
                    }}>
                        <Typography sx={{
                            lineHeight: "2em"
                        }}><span style={{
                            background: "#20c997",
                            padding: "2px 10px 2px 10px",
                            borderRadius: "5px",
                            color: "white"
                        }}>2018-2022</span></Typography>
                        <Typography sx={{
                            fontWeight: "bold",
                            lineHeight: "2em"
                        }}>BS-IT</Typography>
                        <Typography sx={{
                            color: "red",
                            lineHeight: "2em"
                        }}>GCUF</Typography>
                        <Typography sx={{
                            color: "#4C4D4D",
                        }}>Information technology is the use of computers to create, process, store, retrieve and exchange all kinds of data and information. IT forms part of information and communications technology.</Typography>
                    </Box>
                    <Box sx={{
                        width: "450px",
                        border: "1px solid #EBECF0",
                        borderRadius: "10px",
                        padding: "20px",
                        marginTop: "10px"
                    }}>
                        <Typography sx={{
                            lineHeight: "2em"
                        }}><span style={{
                            background: "#20c997",
                            padding: "2px 10px 2px 10px",
                            borderRadius: "5px",
                            color: "white"
                        }}>2022-2022</span></Typography>
                        <Typography sx={{
                            fontWeight: "bold",
                            lineHeight: "2em"
                        }}>Diploma in Mern Stack Technology</Typography>
                        <Typography sx={{
                            color: "red",
                            lineHeight: "2em"
                        }}>Gamica Cloud</Typography>
                        <Typography sx={{
                            color: "#4C4D4D",
                        }}>MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only.</Typography>
                    </Box>
                </Box>
                <Typography variant='h5' fontWeight="bold" textAlign="center" paddingTop="20px">My Experience</Typography>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "justify",
                    paddingTop: "10px"
                }}>
                    <Box sx={{
                        width: "450px",
                        border: "1px solid #EBECF0",
                        borderRadius: "10px",
                        padding: "20px",
                        marginTop: "10px"
                    }}>
                        <Typography sx={{
                            lineHeight: "2em"
                        }}><span style={{
                            background: "#20c997",
                            padding: "2px 10px 2px 10px",
                            borderRadius: "5px",
                            color: "white"
                        }}>2022-Continue</span></Typography>
                        <Typography sx={{
                            fontWeight: "bold",
                            lineHeight: "2em"
                        }}>Mern Stack Development</Typography>
                        <Typography sx={{
                            color: "red",
                            lineHeight: "2em"
                        }}>Gamica Cloud</Typography>
                        <Typography sx={{
                            color: "#4C4D4D",
                        }}>MERN stack is a collection of technologies that enables faster application development. The main purpose of using MERN stack is to develop apps using JavaScript only.</Typography>
                    </Box>
                    <Box sx={{
                        width: "450px",
                        border: "1px solid #EBECF0",
                        borderRadius: "10px",
                        padding: "20px",
                        marginTop: "10px"
                    }}>
                        <Typography sx={{
                            lineHeight: "2em"
                        }}><span style={{
                            background: "#20c997",
                            padding: "2px 10px 2px 10px",
                            borderRadius: "5px",
                            color: "white"
                        }}>2023-Continue</span></Typography>
                        <Typography sx={{
                            fontWeight: "bold",
                            lineHeight: "2em"
                        }}>SEO and Article Writing</Typography>
                        <Typography sx={{
                            color: "red",
                            lineHeight: "2em"
                        }}>Self Practice</Typography>
                        <Typography sx={{
                            color: "#4C4D4D",
                        }}>Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h5' fontWeight="bold" textAlign="center" padding="20px 0px 10px 0px">My Skills</Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        width: "100%",
                        marginBottom: "30px",
                    }}>
                        <Box sx={{
                            width: "450px",
                        }}>
                            <Box sx={{

                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Typography>HTML</Typography>
                                <Typography>90 %</Typography>
                            </Box>
                            <BorderLinearProgress variant="determinate" value={90} />
                        </Box>
                        <Box sx={{
                            width: "450px",
                        }}>
                            <Box sx={{

                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Typography>CSS</Typography>
                                <Typography>90 %</Typography>
                            </Box>
                            <BorderLinearProgress variant="determinate" value={90} />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        width: "100%",
                        marginBottom: "30px",
                    }}>
                        <Box sx={{
                            width: "450px",
                        }}>
                            <Box sx={{

                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Typography>JavaScript</Typography>
                                <Typography>65 %</Typography>
                            </Box>
                            <BorderLinearProgress variant="determinate" value={65} />
                        </Box>
                        <Box sx={{
                            width: "450px",
                        }}>
                            <Box sx={{

                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Typography>React</Typography>
                                <Typography>70 %</Typography>
                            </Box>
                            <BorderLinearProgress variant="determinate" value={70} />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        width: "100%",
                        marginBottom: "30px"
                    }}>
                        <Box sx={{
                            width: "450px",
                        }}>
                            <Box sx={{

                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Typography>MUI</Typography>
                                <Typography>80 %</Typography>
                            </Box>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Box>
                        <Box sx={{
                            width: "450px",
                        }}>
                            <Box sx={{

                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Typography>BootStrap</Typography>
                                <Typography>80 %</Typography>
                            </Box>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "190px",
                        margin: "auto",
                        marginBottom: "30px",
                        paddingTop: "30px",
                    }}>
                        <Button
                            endIcon={<DownloadIcon />}
                            sx={{
                                color: "gray",
                                border: "2px solid gray",
                                padding: "10px 30px 10px 30px",
                                borderRadius: "var(--bs-border-radius-pill)!important",
                                '&:hover': {
                                    background: "gray",
                                    border: "none",
                                    color: "white"
                                }
                            }}
                            onClick={onDownloadResume}>Download CV</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Resume