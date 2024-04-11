import React from 'react'
import { FooterWrapperStyled } from '../../styles/styledComponents/FooterWrapperStyled'
import { Box, Container, List, ListItem } from '@mui/material'
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
            <Box className="footerTopCol">
              <Link to="/" className='footerLogo'>
                <img src={assets.logo} alt="header logo" />
              </Link>
            </Box>
            <Box className="footerTopCol">
              <Typography variant='body1' className="footerTitle">OUR LOCATION</Typography>
              <Typography variant='body1'>1103 Maple St, Bandera TX, 78003</Typography>
              <List>
                <ListItem>
                  <Link to="tel:1234567890"><CallIcon /> 1234567890</Link>
                </ListItem>
                <ListItem>
                  <Link to="mailto:test@gmail.com"><EmailIcon /> test@gmail.com</Link>
                </ListItem>
              </List>
            </Box>
            <Box className="footerTopCol">
              <Typography variant='body1' className="footerTitle">SITE MAP</Typography>
              <List>
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
            <Box className="footerTopCol">
              <Typography variant='body1' className="footerTitle">HOURS</Typography>
              <Typography variant='body1'>Our reservation and front desk team are available daily from 9am to 6pm CST.</Typography>
              <CustomButton buttonType='white'>
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

        <Box className="footerBot"></Box>

      </Container>
    </FooterWrapperStyled>
  )
}

export default Footer