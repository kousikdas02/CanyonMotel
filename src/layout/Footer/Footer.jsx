import React from 'react'
import { FooterWrapperStyled } from '../../styles/styledComponents/FooterWrapperStyled'
import { Box, Container, List, ListItem, Stack } from '@mui/material'
import { Link, NavLink, } from 'react-router-dom'
import { assets } from '../../json/assets'
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from "../../ui/CustomButton/CustomButton"
import FacebookIcon from "../../ui/icons/FacebookIcon"
import InstagramIcon from "../../ui/icons/InstagramIcon"
import TwitterIcon from "../../ui/icons/TwitterIcon"
export const foooterSiteMaop = [
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
    name: "Contact Us",
    path: "/contact-us",
  },

]
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};
const Footer = () => {

  return (
    <FooterWrapperStyled>
      <Container fixed>
        <Box className="footerTop">
          <Box className="footerTopRow">
            <Box className="footerTopCol footerTopLogoCol">
              <Link to="/" className='footerLogo' onClick={scrollToTop}>
                <img src={assets.logo} alt="header logo" />
              </Link>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopLocationContactCol">
              <Typography variant='body1' className="footerTitle">OUR LOCATION</Typography>
              <Typography variant='body1'>
                <b>Physical Address:</b>
                <br />
                (UPS & FedEx for all gear and packages)
              </Typography>
              <Typography variant='body1' className='footerLocationDetails'>
              221 Byers Avenue <br />
Hot Sulphur Springs, CO  80451
              </Typography>
              <Typography variant='body1'>
                <b>Mailing Address:</b>
                <br />
                (USPS mail only, no packages)
              </Typography>
              <Typography variant='body1'>
              PO Box 109 <br />
Hot Sulphur Springs, CO  80451
              </Typography>
              <List disablePadding className='footerConactLinkList'>
                <ListItem>
                  <Link to="tel:970-725-3395"><i><CallIcon /></i> 970-725-3395</Link>
                </ListItem>
                <ListItem>
                  <Link to="info@canyonmotelcolorado.com"><i><EmailIcon /></i> info@canyonmotelcolorado.com</Link>
                </ListItem>
              </List>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopSitemapCol">
              <Typography variant='body1' className="footerTitle">SITE MAP</Typography>
              <List disablePadding className='footerSiteMapList'>
                {
                  foooterSiteMaop.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <NavLink onClick={scrollToTop} className={(navData) => (navData.isActive ? "active" : 'none')} to={item.path}>{item.name}</NavLink>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopSocialCol">
              <Typography variant='body1' className="footerTitle">HOURS</Typography>
              <Typography variant='body1'>Our reservation and front desk team are available daily from 9am to 6pm CST.</Typography>
              <CustomButton buttonColor='white' className='footerBookBtn' onClick={() => window.open('https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226', '_blank')}>
              BOOK A ROOM
              </CustomButton>

              <List className='footerSocialList'>
                <ListItem disablePadding>
                  <Link to="#"><FacebookIcon /></Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="#"><InstagramIcon /></Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="#"><TwitterIcon /></Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        <Box className="footerBot">
          <Stack className='footerBotRow' direction="row" flexWrap={"wrap"} justifyContent="space-between" spacing={2}>
            <Box className="footerBotLeft">
              <List disablePadding>
                <ListItem>
                  &copy; 2024 <Link onClick={scrollToTop} to="/">Canyon Motel.</Link> All rights reserved.
                </ListItem>
              </List>
            </Box>
            <Box className="footerBotRight">
              <List disablePadding>
                <ListItem>
                  <NavLink onClick={scrollToTop} to="/terms-conditions" className={(navData) => (navData.isActive ? "active" : 'none')}>
                  Terms & Conditions   / Privacy & Cookie Statement
                  </NavLink>
                </ListItem>
                
              </List>
            </Box>
          </Stack>
        </Box>

      </Container>
    </FooterWrapperStyled>
  )
}

export default Footer