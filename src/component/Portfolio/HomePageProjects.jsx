import React, { useState } from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'
import { projectdata } from './projectapi'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import './project.css'


const HomePageProjects = () => {
    const [limit, setLimit] = useState(4);

    return (
        <>
            <Grid container
                sx={{
                    background: "#f8f9fa",
                    padding: "50px 0px 50px 0px"
                }}
            >
                <Grid xs={12} md={12} >
                    <Typography variant='h3' sx={{
                        color: "black",
                        textAlign: "center",
                        padding: "20px 0px 20px 0px"
                    }}>
                        Projects
                    </Typography>
                    {
                        projectdata.slice(0, limit).map((item, i) => {
                            const { name, img, url, id, detail } = item;
                            return (
                                <Box >
                                    {
                                        id % 2 !== 0 ? (
                                            <Grid container sx={{
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                                marginBottom: "40px",
                                            }}>
                                                <Box className='blog-post'>
                                                    <Box className='blog-post__img'>
                                                        <img src={img} alt={name} className="color" />
                                                    </Box>
                                                    <Box className='blog-post__info'>
                                                        <Box className='blog-post__date'>
                                                            <span style={{
                                                                color: "#20c997"
                                                            }}>{id}: </span>
                                                            <span> {name}</span>
                                                        </Box>
                                                        <Typography textAlign="justify">{detail}</Typography>
                                                        <a href={url} target="_blank" className='blog-post__cta'>
                                                            <OpenInNewIcon sx={{
                                                                color: "white"
                                                            }} />
                                                        </a>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ) : (
                                            <Grid container sx={{
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                                marginBottom: "40px",
                                            }}>
                                                <Box className='blog-post blog--post' >
                                                    <Box className='blog-post__info'>
                                                        <Box className='blog-post__date'>
                                                            <span style={{
                                                                color: "#20c997"
                                                            }}>{id}: </span>
                                                            <span> {name}</span>
                                                        </Box>
                                                        <Typography textAlign="justify">{detail}</Typography>
                                                        <a href={url} target="_blank" className='blog-post__cta'>
                                                            <OpenInNewIcon sx={{
                                                                color: "white"
                                                            }} />
                                                        </a>
                                                    </Box>
                                                    <Box className='blog-post_img'>
                                                        <img src={img} alt={name} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    }
                                </Box>
                            )
                        })
                    }
                </Grid>
                <Box sx={{
                    width: "170px",
                    margin: "auto",
                }}>
                    <Link to="/project" style={{
                        textDecoration: "none"
                    }}>
                        <Button sx={{
                            background: "#20c997",
                            color: "white",
                            borderRadius: "5px",
                            fontSize: "20px",
                            padding: "10px 20px",
                            "&:hover": {
                                background: "#20d997",
                                boxShadow: "2px 2px 10px gray",
                            }
                        }}>Show More</Button>
                    </Link>
                </Box>
            </Grid>
        </>
    )
}

export default HomePageProjects