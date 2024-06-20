import React, { useEffect, useState } from 'react'
import { HeaderWrapperStyled } from '../../styles/styledComponents/HeaderWrapperStyled'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../json/assets';
import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
import CustomButton from '../../ui/CustomButton/CustomButton';
const Header = () => {
  const drawerWidth = 240;
  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Our Rooms",
      path: "/our-rooms",
    },
    {
      name: "Your Stay",
      path: "/your-stay",
    },
    {
      name: "Special Deals",
      path: "/special-deals",
    },
    {
      name: "Local Adventures",
      path: "/local-adventures",
    },
    {
      name: "Policies / Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },


  ];

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const drawer = (
    <Box className="mobileMenuDrawer">
      <Button className='mobileMenuDrawerCloseBtn' onClick={toggleDrawer(false)}>X</Button>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <NavLink to={item.path} onClick={() => { toggleDrawer(false); scrollToTop() }} className={(navData) => (navData.isActive ? "active" : 'none')}>
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Box className="hamburgerBookBtn">
        <CustomButton buttonColor='black' className="homeBannerBookBtn" onClick={() => window.open('https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226', '_blank')}>
          BOOK A ROOM
        </CustomButton>
      </Box>
      <Box className="hamburgerContactList_wrap">
        <List disablePadding className='hamburgerContactList'>
          <ListItem>
            <Link to="tel:970-725-3395"><i><CallIcon /></i> 970-725-3395</Link>
          </ListItem>
          {/* <ListItem>
            <Link to="mailto:res@tetoncourt.com"><i><EmailIcon /></i> res@tetoncourt.com</Link>
          </ListItem> */}
          <ListItem>
            Canyon Motel <br />
            <span style={{ fontSize: "15px" }}>221 Byers Avenue</span> <br />
            <span style={{ fontSize: "15px" }}>Hot Sulphur Springs, CO  80451</span>
          </ListItem>
        </List>

      </Box>
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
                onClick={toggleDrawer(true)}
                className='headerMenuIcon'
              >

                <MenuIcon />
              </IconButton>

            </Box>
            {/* <Link to="/" className='headerLogo'>
            <img src={assets.logo} alt="header logo" />
          </Link> */}
            <Box className="headerMenu" sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <List className='left_nav '>
                <ListItem>
                  <NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/our-rooms">
                    Our Rooms
                  </NavLink >
                </ListItem>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/your-stay">Your Stay</NavLink ></ListItem>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/special-deals">Special Deals</NavLink ></ListItem>
              </List>

              <NavLink className={(navData) => (navData.isActive ? "active headerLogo" : 'headerLogo')} to="/" ><img src={assets.logo} alt="header logo" /></NavLink >
              <List className='right_nav '>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/local-adventures">Local Adventures</NavLink ></ListItem>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/terms-conditions">Policies</NavLink ></ListItem>
                <ListItem><NavLink className={(navData) => (navData.isActive ? "active" : '')} to="/contact-us">Contact Us</NavLink ></ListItem>
              </List>

            </Box>
          </Toolbar>
        </Container>

      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={open} onClose={toggleDrawer(false)}

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