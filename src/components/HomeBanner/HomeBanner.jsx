import React from 'react'
import { HomeBannerWrapperStyled } from '../../styles/styledComponents/HomeBannerWrapperStyled'
import { assets } from '../../json/assets'
import { Container, Typography, Box, Stack, TextField } from '@mui/material'
import CustomButton from '../../ui/CustomButton/CustomButton'
const HomeBanner = () => {
  return (
    <HomeBannerWrapperStyled style={{background: `url(${assets.propertyDetails})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <Container fixed>
            <Box className="homeBannerContent">
                <Typography variant="h1">
                    WELCOME TO <br />
                    Teton Court Motel
                </Typography>
                <Typography variant="h2">Lorem ipsum dolor, sit amet consectetur.</Typography>

            </Box>
            <Box className="bannerCalendar">
                <Stack direction={"row"} spacing={2} justifyContent="center" alignItems="center" className='bannerCalendarStack'>
                    <Box className="bannerCalendarInput">
                        <label htmlFor="checkInDate">Check-in:</label>
                        <TextField id="checkInDate" variant="outlined" />
                    </Box>
                    <Box className="bannerCalendarInput">
                        <label htmlFor="checkOutDate">Check-out:</label>
                        <TextField id="checkOutDate" variant="outlined" />
                    </Box>
                    <Box className="bannerCalendarInput">
                    <label htmlFor="bookBtn">&nbsp;</label>
                    <CustomButton buttonType='black' className="homeBannerBookBtn">
                        BOOK NOW
                    </CustomButton>

                    </Box>
                </Stack>
            </Box>
        </Container>
    </HomeBannerWrapperStyled>
  )
}

export default HomeBanner