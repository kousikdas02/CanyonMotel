import React, { useEffect, useState } from 'react'
import { HeaderWrapperStyled } from '../../styles/styledComponents/HeaderWrapperStyled'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../json/assets';
const Header = () => {
  const drawerWidth = 240;
  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Rooms",
      path: "/rooms",
    },
    {
      name: "Your Stay",
      path: "/your-stay",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "Local Adventures",
      path: "/local-adventures",
    },


  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState);
  // };
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };
  // };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box  className="mobileMenuDrawer">
      <Button className='mobileMenuDrawerCloseBtn' onClick={handleDrawerClose}>X</Button>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <NavLink to={item.path} onClick={handleDrawerClose} className={(navData) => (navData.isActive ? "active" : 'none')}>
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
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
            <Box className="mobileHeaderMenu">
              <NavLink className={(navData) => (navData.isActive ? "active headerLogo" : 'headerLogo')} to="/" ><img src={assets.logo} alt="header logo" /></NavLink >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                className='headerMenuIcon'
              >

                <MenuIcon />
              </IconButton>

            </Box>
            {/* <Link to="/" className='headerLogo'>
            <img src={assets.logo} alt="header logo" />
          </Link> */}
            <Box className="headerMenu" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <List className='left_nav '>
                <ListItem>
                  <NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/rooms">
                    Rooms
                  </NavLink >
                </ListItem>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/your-stay">Your Stay</NavLink ></ListItem>
              </List>

              <NavLink className={(navData) => (navData.isActive ? "active headerLogo" : 'headerLogo')} to="/" ><img src={assets.logo} alt="header logo" /></NavLink >
              <List className='right_nav '>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/contact-us">Contact Us</NavLink ></ListItem>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/local-adventures">Local Adventures</NavLink ></ListItem>
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
         
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
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