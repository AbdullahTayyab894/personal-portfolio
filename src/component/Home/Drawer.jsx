import React from 'react'
import {Box,} from '@mui/material'
import Main from './DrawerSidebar'
import DrawerAbout from './DrawerAbout'
import About from '../About/About'

const Drawer = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Main />
                <DrawerAbout />
            </Box>
        </>
    )
}

export default Drawer