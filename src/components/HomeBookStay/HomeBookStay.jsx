import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CustomButton from '../../ui/CustomButton/CustomButton';
import { assets } from '../../json/assets';
import { HomeBookStayWrapperStyled } from '../../styles/styledComponents/HomeBookStayWrapperStyled';



const HomeBookStay = () => {
  return (
    <HomeBookStayWrapperStyled>
        <Box className="homeBookStay" style={{backgroundImage: `url(${assets.homeBookStay})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <Container fixed>
                <Box className="homeBookStayInner">
                    <Typography variant="h2">BOOK YOUR NEXT STAY TODAY</Typography>
                    <CustomButton buttonColor="black"  onClick={() => window.open('https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226', '_blank')}>
                        BOOK NOW
                    </CustomButton>
                </Box>
            </Container>
        </Box>
    </HomeBookStayWrapperStyled>
  )
}

export default HomeBookStay