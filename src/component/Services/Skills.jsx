import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { SkillApi } from './SkillAPi'

const Skills = () => {
    return (
        <div style={{
            background: "#f8f9fa",
        }}>
            <Typography variant='h3' sx={{
                color: "black",
                textAlign: "center",
                padding: "30px 0px 30px 0px"
            }}>
                What I Do?
            </Typography>
            <Grid container id="skill" >
                {
                    SkillApi.map((item, i) => {
                        const { id, name, img } = item;
                        return (
                            <Grid item sm={4} md={3} sx={{
                                width: "300px",
                                height: "280px",
                                background: "white",
                                margin: "15px",
                                margin: "auto",
                                background: "#f8f9fa",
                            }}>
                                <img src={img} alt="" width="200px" height="200px" style={{
                                    display: "block",
                                    margin: "auto",
                                    paddingTop: "40px"
                                }} />
                                <Typography sx={{
                                    color: "black",
                                    paddingTop: "10px",
                                    textAlign: "center",
                                }}>
                                    {name}
                                    <Box sx={{
                                        width: "50px",
                                        margin: "auto",
                                        paddingTop: "10px",
                                        borderBottom: "3px solid #20c997",

                                    }}>
                                    </Box>
                                </Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Skills