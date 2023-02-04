import React from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'
import { projectdata } from './projectapi'
import Main from '../Home/DrawerSidebar'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Projects = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Main />
            <Box marginLeft="250px">
                <Typography variant='h3' sx={{
                    color: "black",
                    textAlign: "center",
                    padding: "20px 0px 0px 0px"
                }}>
                    Projects
                </Typography>
                <Grid container sx={{
                    padding: "40px",
                    textAlign: "center",
                }}>
                    {
                        projectdata.map((item, i) => {
                            const { name, img, image, url } = item;
                            return (
                                <Grid item xs={12} sm={6} md={3} key={i}>
                                        <a href={url} target="_blank">
                                            <img src={img} width="240px" height="220px" style={{
                                                marginBottom: "15px"
                                            }} />
                                        </a>
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

