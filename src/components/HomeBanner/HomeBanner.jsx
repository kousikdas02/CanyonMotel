import React from 'react'
import { HomeBannerWrapperStyled } from '../../styles/styledComponents/HomeBannerWrapperStyled'
import { assets } from '../../json/assets'
import { Container, Typography, Box } from '@mui/material'
import CustomButton from '../../ui/CustomButton/CustomButton'
import 'jquery-ui/ui/widgets/datepicker';
const HomeBanner = () => {
   
    return (
        <HomeBannerWrapperStyled style={{ background: `url(${assets.canyonBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Container fixed>
                {/* <Box className="homeBannerLogo">
                    <figure>
                        <img src={assets.logo} alt="" />
                    </figure>
                </Box> */}
                <Box className="homeBannerContent">
                    <Typography variant="h1">
                        WELCOME TO <br />
                        Canyon Motel
                    </Typography>
                    <Typography variant="h2">Lorem ipsum dolor, sit amet consectetur.</Typography>

                </Box>
                

                <Box className="bookBtnWrap" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CustomButton buttonColor="black" onClick={() => window.open('https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226', '_blank')}>
                        BOOK NOW
                    </CustomButton>
                </Box>

            </Container>
        </HomeBannerWrapperStyled>
    )
}

export default HomeBanner