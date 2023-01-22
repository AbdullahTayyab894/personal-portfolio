import React from 'react'
import Main from '../Home/DrawerSidebar'
import { Typography, Box, Button } from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Services = () => {
    return (
        <>
            <Main />
            <Box sx={{
                marginLeft: "250px"
            }}>
                <Typography variant='h3' sx={{
                    textAlign: "center",
                    paddingTop: "50px",
                    fontWeight: "bold"
                }}>What I Do?</Typography>
                <Box>
                    <Box>
                        <Box></Box>
                        <Box></Box>
                    </Box>
                    <Box>
                        <Box></Box>
                        <Box></Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Services