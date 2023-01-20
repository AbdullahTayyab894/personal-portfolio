import React from 'react'
import {Box,} from '@mui/material'
import Main from './DrawerSidebar'
import About from './DrawerAbout'

const Drawer = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Main />
                <About />
            </Box>
        </>
    )
}

export default Drawer