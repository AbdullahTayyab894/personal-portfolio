import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const withLink = (to, children) => <a to={to}>{children}</a>;
const actions = [
    { icon: (<a href="https://www.facebook.com/this.abdullah.8/" target="_black"><FacebookOutlinedIcon /></a>), name: 'FaceBook' },

    { icon: (<a href="https://github.com/AbdullahTayyab894" target="_black"><GitHubIcon /></a>), name: 'FaceBook' },

    { icon: (<a href="https://www.linkedin.com/in/abdullahtayyab894/" target="_black"><LinkedInIcon /></a>), name: 'FaceBook' },

    { icon: (<a href="https://wa.me/+923184579618" target="_black"><WhatsAppIcon /></a>), name: 'FaceBook' },
];

const Footer = () => {

    const [open, setOpen] = React.useState(false);
    return (
        <div style={{
            minHeight: "70px",
            background: "black",
            position: "relative",
        }}>
            <Box sx={{
                maxWidth: "35%",
                margin: "auto",
                paddingTop:"25px"
            }}>
                <Typography sx={{
                    color: "white",
                    textAlign: "center"
                }}>
                    COPYRIGHT© 2023
                    <span style={{
                        color: "#20c997",
                        padding: "0px 10px 0px 10px"
                    }}>
                        ABDULLAH TAYYAB
                    </span>
                    ALL RIGHT RESERVED
                </Typography>
            </Box>
            <Box sx={{
                position: "fixed",
                right: 0,
                bottom: 30,
                color: "red"
            }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => { setOpen(true) }}
                        >
                        </SpeedDialAction>
                    ))}
                </SpeedDial>
            </Box>
        </div>
    )
}

export default Footer