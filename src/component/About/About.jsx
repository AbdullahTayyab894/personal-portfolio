import { Typography, Box, Button, Grid } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import CountUp from 'react-countup';

const About = () => {

  const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = './Abdullah Tayyab Resume.pdf';
    link.click();
  };
  const onDownloadCoverLetter = () => {
    const link = document.createElement("a");
    link.href = './abdullah tayyab cover-letter.pdf';
    link.click();
  }

  return (
    <>
      <Grid container id="about">
        <Grid item xs={12} md={12} >
          <Typography variant='h4' sx={{
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: "70px"
          }}>
            Know Me More
          </Typography>
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "20px",
          }}>
            <Box sx={{
              maxWidth: "600px",
            }}>
              <Typography variant='h4' fontWeight="bold" textAlign="center">I'm <span style={{
                color: "#20c997",
                lineHeight: "3em"
              }}>Abdullah Tayyab</span>, a Web Developer</Typography>
              <Typography color="#4C4D4D" lineHeight="2em" padding="0px 20px 0px 20px">I'm a Mern Stack Front-end web developer. I've 6 months of experience in HTML, CSS, JavaScript, ReactJS, Redux, MUI and complete different projects.</Typography>
            </Box>
            <Box sx={{
              maxWidth: "300px",
              marginTop: "30px"
            }}>
              <Typography color="#4C4D4D" lineHeight="3em" borderBottom="1px solid #eaeaea">  <span style={{
                fontWeight: "bold",
              }}>Name:</span> Abdullah Tayyab</Typography>
              <Typography color="#4C4D4D" lineHeight="3em" borderBottom="1px solid #eaeaea">  <span style={{
                fontWeight: "bold"
              }}>Email:</span> <span style={{
                color: "#20c997"
              }}> abdullahtayyab894@gmail.com</span></Typography>
              <Typography color="#4C4D4D" lineHeight="3em" borderBottom="1px solid #eaeaea">  <span style={{
                fontWeight: "bold"
              }}>Age:</span> 23</Typography>
              <Typography color="#4C4D4D" lineHeight="3em" borderBottom="1px solid #eaeaea">  <span style={{
                fontWeight: "bold"
              }}>From:</span> Kasur,Panjab,Pakistan</Typography>
              <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "20px"
              }}>
                <Button
                  endIcon={<DownloadIcon />}
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    background: "#20c997",
                    padding: "10px 30px 10px 30px",
                    borderRadius: "var(--bs-border-radius-pill)!important",
                    '&:hover': {
                      background: "#20a997",
                    }
                  }}
                  onClick={onDownloadResume}>CV</Button>
                <Button
                  endIcon={<DownloadIcon />}
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    background: "#20c997",
                    padding: "10px 30px 10px 30px",
                    borderRadius: "50%",
                    fontWeight: "500",
                    borderWidth: "2px",
                    borderRadius: "var(--bs-border-radius-pill)!important",
                    transition: "all 0.5s ease",
                    '&:hover': {
                      background: "#20a997",
                    }
                  }}
                  onClick={onDownloadCoverLetter}>Cover Letter</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "30px",
            maxWidth: "700px",
            color: "#4C4D4D",
            textAlign: "center"
          }}>
            <Box sx={{
              marginBottom:"30px"
            }}>
              <Typography variant='h2'>
                <CountUp end={6} duration={1} />+
              </Typography>
              <Typography variant='h5'>Months of Experiences</Typography>
            </Box>
            <Box>
              <Typography variant='h2'>
                <CountUp end={10} duration={1} />+
              </Typography>
              <Typography variant='h5'>Projects Completed</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default About