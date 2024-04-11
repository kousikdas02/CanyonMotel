import React, { useCallback, useEffect, useState } from 'react'
import { HeaderWrapperStyled } from '../../styles/styledComponents/HeaderWrapperStyled'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material'
import { Link } from 'react-router-dom';
import { assets } from '../../json/assets';
const Header = (props) => {
  const drawerWidth = 240;
  const navItems = [
    {
      name : "Home",
      path : "/"
    },
    {
      name: "Cabins",
      path: "/cabins",
    },
    {
      name: "Property Details",
      path: "/property-details",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "Activities",
      path: "/activities",
    },
    

  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  return (
    <HeaderWrapperStyled sx={{ display: "flex" }}>
      <AppBar 
      component="nav"
      // position="static"
      elevation={0}
      className={`headerContainer ${scroll ? "fixed" : ""}`}
      >
        <Container fixed>
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
          {/* <Link to="/" className='headerLogo'>
            <img src={assets.logo} alt="header logo" />
          </Link> */}
          <Box className="headerMenu" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <List>
              <ListItem>
                <Link to="/cabins">
                  Cabins
                </Link>
              </ListItem>
              <ListItem><Link to="/property-details">Property Details</Link></ListItem>
              <ListItem><Link to="/" className='headerLogo'><img src={assets.logo} alt="header logo" /></Link></ListItem>
              <ListItem><Link to="/contact-us">Contact Us</Link></ListItem>
              <ListItem><Link to="/activities">Activities</Link></ListItem>
            </List>
           
          </Box>
        </Toolbar>
        </Container>
       
      </AppBar>
      <nav>
        <Drawer
          // container={container}
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
      </nav>
    </HeaderWrapperStyled>
  )
}

export default Header