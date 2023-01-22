import React from 'react'
import {Box,} from '@mui/material'
import Main from './DrawerSidebar'
import DrawerAbout from './DrawerAbout'
import './drawer.css'

const Drawer = () => {
    return (
        <>
            <Box className='drawer' 
            sx={{
                display: "block",
                flexDirection: "row"
            }}
            >
                <Main />
                <DrawerAbout />
            </Box>
        </>
    )
}

export default Drawer