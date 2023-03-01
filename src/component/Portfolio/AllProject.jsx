import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import { projectdata } from './projectapi'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './project.css'


const AllProject = () => {
  return (
    <>
      <Grid container id="project" margin="50px 0px 50px 0px">
        <Grid xs={12} md={12} sx={{
          background: "#f8f9fa",
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
                        padding: "0px 20px 0px 20px",
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        // marginBottom: "40px",
                      }}>
                        <Box className='blog-post'>
                          <Box className='blog-post__image'>
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
                        padding: "0px 20px 0px 20px",
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        // marginBottom: "20px",
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
                          <Box className='blog-post__image'>
                            <img src={img} alt={name} className="color"/>
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
      </Grid>
    </>
  )
}

export default AllProject