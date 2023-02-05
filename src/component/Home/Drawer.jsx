import React from 'react'
import {Box, Grid,} from '@mui/material'
import Main from './DrawerSidebar'
import DrawerAbout from './DrawerAbout'
import './drawer.css'

const Drawer = () => {
    return (
        <>
            <Grid container >
                <Main />
                <DrawerAbout />
            </Grid>
        </>
    )
}

export default Drawer