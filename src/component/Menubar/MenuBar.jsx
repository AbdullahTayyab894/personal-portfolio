import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const drawerWidth = "100%";

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{
      position: 'relative',
      textAlign: 'center',
      background: "#20262E",
      color: "white",
      height: "100%"
    }}>
      <Box sx={{
        position: "absolute",
        right: 0,
        mr: "20px",
        height: "70px",
      }}>
        <CloseIcon
          onClick={handleDrawerToggle}
          sx={{
            lineHeight: "5em",
            marginTop: "9px",
            fontSize: "50px",
            "&:hover": {
              color: "#20c997"
            }
          }} />
      </Box>
      <Divider sx={{
        borderColor: "white",
      }} />
      <Box className='menu' sx={{
        width: "100%",
        marginTop: "60px"
      }}>
        <Box sx={{
          textAlign: "center",
          width: "100px",
          margin: "auto",
          lineHeight: "3.5em",
          fontSize: "20px",
        }}>
          <Link to="/" style={{
            textDecoration: "none",
            color: "white",
          }}>
            <Button sx={{
              color: "white",
              textAlign: "center",
              "&:hover": {
                color: "#20c997"
              }
            }}>
              Home
            </Button>
          </Link>
          <Link to="/about" style={{
            textDecoration: "none",
            color: "white"
          }}>
            <Button lineHeight="3em" sx={{
              color: "white",
              '&:hover': {
                color: "#20c997",
              }
            }}>About</Button>
          </Link>
          <Link to="/resume" style={{
            textDecoration: "none",
            color: "white",
          }}>
            <Button lineHeight="3em" sx={{
              color: "white",
              '&:hover': {
                color: "#20c997",
              }
            }}>Resume</Button>
          </Link>
          <Link to="/project" style={{
            textDecoration: "none",
            color: "white",
          }}>
            <Button lineHeight="3em" sx={{
              color: "white",
              '&:hover': {
                color: "#20c997",
              }
            }}>Projects</Button>
          </Link>
        </Box>
        <Box sx={{
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-around",
          width: "300px",
          margin: "auto"
        }}>
          <a href="https://www.facebook.com/this.abdullah.8/" target="_black"><FacebookOutlinedIcon sx={{
            color: "white",
            fontSize: "40px",
            "&:hover": {
              color: "#20c997",
            }
          }} /></a>
          <a href="https://github.com/AbdullahTayyab894" target="_black"><GitHubIcon sx={{
            color: "white",
            fontSize: "40px",
            "&:hover": {
              color: "#20c997",
            }
          }} /></a>
          <a href="https://www.linkedin.com/in/abdullahtayyab894/" target="_black"><LinkedInIcon sx={{
            color: "white",
            fontSize: "40px",
            "&:hover": {
              color: "#20c997",
            }
          }} /></a>
          <a href="https://wa.me/+923184579618" target="_black"><WhatsAppIcon sx={{
            color: "white",
            fontSize: "40px",
            "&:hover": {
              color: "#20c997",
            }
          }} /></a>
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        background: "#20262E",
        height: "65px",
      }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1, display: { xs: 'block', sm: 'block' },
              paddingLeft: "25px",
              '&:hover': {
                color: "#20c997",
              }
            }}
          >
            <Link to="/" style={{
              textDecoration: "none",
              color: "white",
            }}>
              Abdullah Tayyab
            </Link>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 0, display: { sm: 'none' },
              lineHeight: "3em",
            }}
          >
            <MenuIcon
              onClick={handleDrawerToggle}
              sx={{
                fontSize: "45px",
                "&:hover": {
                  color: "#20c997"
                }
              }} />
          </IconButton>

          <Box sx={{
            display: { xs: 'none', sm: 'block' },
            justifyContent: "space-between",
          }}>

            <Link to="/" style={{
              textDecoration: "none",
              color: "white"
            }}>
              <Button lineHeight="3em" sx={{
                color: "white",
                fontSize: "20px",
                '&:hover': {
                  color: "#20c997",
                }
              }}>
                Home
              </Button>
            </Link>
            <Link to="/about" style={{
              textDecoration: "none",
              color: "white",
            }}>
              <Button lineHeight="3em" sx={{
                color: "white",
                fontSize: "20px",
                '&:hover': {
                  color: "#20c997",
                }
              }}>About</Button>
            </Link>
            <Link to="/resume" style={{
              textDecoration: "none",
              color: "white",
            }}>
              <Button lineHeight="3em" sx={{
                fontSize: "20px",
                color: "white",
                '&:hover': {
                  color: "#20c997",
                }
              }}>Resume</Button>
            </Link>
            <Link to="/project" style={{
              textDecoration: "none",
              color: "white",
            }}>
              <Button lineHeight="3em" sx={{
                fontSize: "20px",
                color: "white",
                '&:hover': {
                  color: "#20c997",
                }
              }}>Projects</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;