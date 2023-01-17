
import React from 'react'
import { Card, Typography, CardContent, CardMedia, CardActionArea, Grid, Button } from '@mui/material'
import { projectdata } from './projectapi'

const Projects = () => {
    return (
        <div id='projects' style={{
            marginTop:"20px"
        }}>
            <Typography variant='h3' sx={{
                color: "black",
                textAlign:"center"
            }}>
                Projects
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                padding: "40px",
                textAlign: "center",
            }}>
                {
                    projectdata.map((item, index) => {
                        const { name, image, url } = item;
                        return (
                            <Grid item xs={12} sm={6} md={4} >
                                <Card 
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="350"
                                            image={image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                            </Typography>
                                            <a href={item.url} target="_blank" style={{
                                                textDecoration: "none"
                                            }}>
                                                <Button variant='contained' sx={{
                                                    width: "130px",
                                                    color: "white",
                                                }}>
                                                    Open
                                                </Button>
                                            </a>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            {/* <Grid id="service" container sx={{
                pl: "70px",
                pt: "50px",
            }}>


                <Grid item md={12} sx={{
                    textAlign: "center",
                }}>

                    <Typography variant='h3' sx={{
                        color: "black",
                    }}>
                        Projects
                    </Typography>
                </Grid>
                <Grid container>
                    {
                        projectdata.map((item, i) => {

                            return (
                                <Grid item xs={12} md={4} sx={{
                                    mt: "20px",
                                    mb: "30px"
                                }}>
                                    <Card sx={{
                                        // width: "340px",
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                width="340"
                                                height="180"
                                                image={item.image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography variant="h5" sx={{
                                                    textAlign:"center",
                                                    mb:"20px"
                                                }}>
                                                    {item.name}
                                                </Typography>
                                                <a href={item.url} target="_blank" style={{
                                                    textDecoration:"none"
                                                }}>
                                                    <Button variant='contained' sx={{
                                                        width:"100px",
                                                        color:"white",
                                                        ml:"100px",
                                                    }}>
                                                        Open
                                                    </Button>
                                                </a>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid> */}
        </div>
    )
}
export default Projects