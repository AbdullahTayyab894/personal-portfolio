import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import { projectdata } from './projectapi'
import Main from '../Home/DrawerSidebar'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './project.css'

const ProjectsDisplay = () => {
  return (
    <>
    <Grid container>
      <Main />
      <Grid xs={12} md={10} sx={{
        background: "#f8f9fa"
      }}>
        <Typography variant='h3' sx={{
          color: "black",
          textAlign: "center",
          padding: "20px 0px 20px 0px"
        }}>
          Projects
        </Typography>
        {
          projectdata.map((item, i) => {
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
                      <Grid item sm={4} md={5} sx={{
                        background: "white",
                        minHeight: "300px",
                        padding: "20px",
                        borderRadius: "5px",
                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                      }}>
                        <Box sx={{
                          display: "flex",
                        }}>
                          <Typography variant='h4' sx={{
                            color: "#20c997"
                          }}>
                            {id}.
                          </Typography>
                          <Typography variant='h4' sx={{
                            color: "#4C4D4D"
                          }}>
                            {name}
                          </Typography>
                        </Box>
                        <Typography sx={{
                          color: "#324d67",
                          fontFamily: "sans-serif",
                          lineHeight: "2em",
                          textAlign: "justify"

                        }}>
                          {detail}
                        </Typography>
                        <a href={url} target="_blank">
                          <OpenInNewIcon sx={{
                            color: "#20c997",
                          }} />
                        </a>
                      </Grid>
                      <Grid item sm={4} md={6} className="color" sx={{
                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                      }}>
                        <img src={img} alt="" width="100%" height="300px" />
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container sx={{
                      width: "100%",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginBottom: "40px",
                    }}>
                      <Grid item sm={4} md={6} className="color">
                        <img src={img} alt="" width="100%" height="300px" sx={{
                          boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                        }} />
                      </Grid>
                      <Grid item sm={4} md={5} sx={{
                        background: "white",
                        minHeight: "300px",
                        padding: "20px",
                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                      }}>
                        <Box sx={{
                          display: "flex",
                        }}>
                          <Typography variant='h4' sx={{
                            color: "#20c997"
                          }}>
                            {id}.
                          </Typography>
                          <Typography variant='h4' sx={{
                            color: "#4C4D4D"
                          }}>
                            {name}
                          </Typography>
                        </Box>
                        <Typography sx={{
                          color: "#324d67",
                          fontFamily: "sans-serif",
                          lineHeight: "2em",
                          textAlign: "justify"
                        }}>
                          {detail}
                        </Typography>
                        <a href={url} target="_blank">
                          <OpenInNewIcon sx={{
                            color: "#20c997"
                          }} />
                        </a>
                      </Grid>
                    </Grid>
                  )
                }
              </Box>
            )
          })
        }
      </Grid>
    </Grid>
    </>
  )
}

export default ProjectsDisplay