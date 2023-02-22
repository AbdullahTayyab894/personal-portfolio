import React, { useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { projectdata } from './projectapi'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './project.css'
import { Link } from 'react-router-dom';


const ProjectsDisplay = () => {

  const [limit, setLimit] = useState(4);
  return (
    <>
      <Box sx={{
        width: "100%",
        background: "#f8f9fa",
        paddingBottom:"50px"
      }}>
        <Box sx={{
          width: "60rem",
          margin: "auto"
        }}>
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
                    ) : (
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
                    )
                  }
                </Box>
              )
            })
          }
        </Box>
        <Box sx={{
          width: "250px",
          margin: "auto",
        }}>
          <Link to="/project" style={{
            textDecoration: "none"
          }}>
            <Button sx={{
              width: "200px",
              background:"#20c997",
              color:"white",
              "&:hover":{
                background:"#20c997",
                boxShadow:"2px 2px 10px gray"
              }
            }}>Show More</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default ProjectsDisplay