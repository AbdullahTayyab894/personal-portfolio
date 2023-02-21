import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: 'center',
      background: "black",
      color: "white",
      height: "100%"
    }}>
      <Link to="/" style={{
        textDecoration: "none",
        color: "white"
      }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Abdulah Tayyab
        </Typography>
      </Link>
      <Divider />
      <Box className='menu' >
        <List >
          <a href='#home' style={{
            textDecoration: "none",
            color: "white",
          }}>
            <ListItem lineHeight="3em" sx={{
              '&:hover': {
                color: "#20c997",
              },
            }} >Home</ListItem>
          </a>
          <a href='#about' style={{
            textDecoration: "none",
            color: "white",
          }}>
            <ListItem lineHeight="3em" sx={{
              '&:hover': {
                color: "#20c997",
              }
            }}>About Me</ListItem>
          </a>
          <a href="#skill" style={{
            textDecoration:"none",
            color:"white"
          }}>
            <ListItem lineHeight="3em" sx={{
              '&:hover': {
                color: "#20c997",
              }
            }}>What I Do</ListItem>
          </a>
          <a href='#resume' style={{
            textDecoration: "none",
            color: "white",
          }}>
            <ListItem lineHeight="3em" sx={{
              '&:hover': {
                color: "#20c997",
              }
            }}>Resume</ListItem>
          </a>
          <a href='#project' style={{
            textDecoration: "none",
            color: "white",
          }}>
            <ListItem lineHeight="3em" sx={{
              '&:hover': {
                color: "#20c997",
              }
            }}>Portfolio</ListItem>
          </a>
        </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        background: "black",
        color: "white"
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={{
              textDecoration: "none",
              color: "white"
            }}>
              Abdullah Tayyab
            </Link>
          </Typography>
          <Box sx={{
            display: { xs: 'none', sm: 'block' },
            justifyContent: "space-between"
          }}>
            <a href='#home' style={{
              textDecoration: "none",
            }}>
              <Button lineHeight="3em" sx={{
                color:"white",
                '&:hover': {
                  color: "#20c997",
                },
              }} >Home</Button>
            </a>
            <a href='#about' style={{
              textDecoration: "none",
            }}>
              <Button lineHeight="3em" sx={{
                color:"white",
                '&:hover': {
                  color: "#20c997",
                }
              }}>About Me</Button>
            </a>
            <a href="#skill" style={{
              textDecoration:"none",
            }}>
              <Button lineHeight="3em" sx={{
                color:"white",
                '&:hover': {
                  color: "#20c997",
                }
              }}>What I Do</Button>
            </a>
            <a href='#resume' style={{
              textDecoration: "none",
            }}>
              <Button lineHeight="3em" sx={{
                color:"white",
                '&:hover': {
                  color: "#20c997",
                }
              }}>Resume</Button>
            </a>
            <a href='#project' style={{
              textDecoration: "none",
            }}>
              <Button lineHeight="3em" sx={{
                color:"white",
                '&:hover': {
                  color: "#20c997",
                }
              }}>Portfolio</Button>
            </a>
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