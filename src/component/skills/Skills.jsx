import { Box, Card, Typography, CardContent, CardMedia, CardActionArea, Grid } from '@mui/material'
import { data } from './api'

const Skills = () => {
    return (
        <div id="skills" style={{
            background: "black",
            color: "white",
            paddingTop: "20px"
        }}>
            <Typography variant='h3' sx={{
                color: "cyan",
                textAlign: "center"
            }}>
                Skills
            </Typography>
            <Typography variant="h5" textAlign="center">
                All your digitals need... Covered
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                padding: "40px"
            }}>
                {
                    data.map((item, index) => {
                        const { name, image, detail } = item;
                        return (
                            <Grid item xs={12} sm={6} md={4} >
                                <Card data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {detail}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}
export default Skills