import { Box, Typography } from '@mui/material'
import React from 'react'
import Main from '../Home/DrawerSidebar'
import { SkillApi } from './SkillAPi'

const Skills = () => {
    return (
        <>
            <Main />
            <Box sx={{
                height: "100%",
                display: "flex",
                flexWrap: "wrap",
                background: "#f8f9fa",
                marginLeft: "250px",
                justifyContent: "space-around"
            }}>
                {
                    SkillApi.map((item, i) => {
                        const { id, name, img } = item;
                        return (
                            <Box sx={{
                                width: "300px",
                                height: "280px",
                                background: "white",
                                margin: "15px"

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
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Skills