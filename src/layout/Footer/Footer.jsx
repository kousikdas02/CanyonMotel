import React from 'react'
import { FooterWrapperStyled } from '../../styles/styledComponents/FooterWrapperStyled'
import { Box, Container, List, ListItem, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { assets } from '../../json/assets'
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from "../../ui/CustomButton/CustomButton"
import FacebookIcon from "../../ui/icons/FacebookIcon"
export const foooterSiteMaop = [
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

]
const Footer = () => {

  return (
    <FooterWrapperStyled>
      <Container fixed>
        <Box className="footerTop">
          <Box className="footerTopRow">
            <Box className="footerTopCol footerTopLogoCol">
              <Link to="/" className='footerLogo'>
                <img src={assets.logo} alt="header logo" />
              </Link>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopLocationContactCol">
              <Typography variant='body1' className="footerTitle">OUR LOCATION</Typography>
              <Typography variant='body1' className='footerLocationDetails'>Teton Court Motel
                123 E Magnolia Street
                Pinedale, WY 82941
                </Typography>
              <List disablePadding className='footerConactLinkList'>
                <ListItem>
                  <Link to="tel:(307) 367-3367"><i><CallIcon /></i> (307) 367-3367</Link>
                </ListItem>
                <ListItem>
                  <Link to="mailto:res@tetoncourt.com"><i><EmailIcon /></i> res@tetoncourt.com</Link>
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
                        <Link to={item.path}>{item.name}</Link>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Box>
            <Box className="footerTopCol footerTopColPadding footerTopSocialCol">
              <Typography variant='body1' className="footerTitle">HOURS</Typography>
              <Typography variant='body1'>Our reservation and front desk team are available daily from 9am to 6pm CST.</Typography>
              <CustomButton buttonType='white' className='footerBookBtn'>
                BOOK ONLINE
              </CustomButton>

              <List className='footerSocialList'>
                <ListItem disablePadding>
                  <Link to="#"><FacebookIcon /></Link>
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
                    &copy; 2024 <Link to="/">Teton Court Motel.</Link> All rights reserved.
                  </ListItem>
                </List>
              </Box>
              <Box className="footerBotRight">
                <List disablePadding>
                  <ListItem>
                    <Link to="#">
                      Terms & Conditions
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">
                      Privacy & Cookie Statement
                    </Link>
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