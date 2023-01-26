import React from 'react'
import { Card, Typography, CardContent, CardMedia, CardActionArea, Grid, Button, Box } from '@mui/material'
import { projectdata } from './projectapi'
import Main from '../Home/DrawerSidebar'
import { MDBRipple } from 'mdb-react-ui-kit';
import './Projects.css'

const Projects = () => {
    return (
        <>
            <Main />
            <Box marginLeft="250px">

                <Typography variant='h3' sx={{
                    color: "black",
                    textAlign: "center"
                }}>
                    Projects
                </Typography>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                    padding: "40px",
                    textAlign: "center",
                }}>
                    {
                        projectdata.map((item) => {
                            const { name, img, image, url } = item;
                            return (
                                <Grid item xs={12} sm={6} md={4} >
                                        <div className="container">
                                            <img src={img}  className="image" width="100%" />
                                                <div className="middle">
                                                    <div className="text">John Doe</div>
                                                </div>
                                        </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}
export default Projects

