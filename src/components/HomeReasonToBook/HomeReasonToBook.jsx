import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import ShoppingIcon from '../../ui/icons/ShoppingIcon';
import DiningIcon from '../../ui/icons/DiningIcon';
import { assets } from '../../json/assets';
import CameraIcon from '../../ui/icons/CameraIcon';
import BestPriceIcon from '../../ui/icons/BestPriceIcon';
import { HomeReasonToBookWrapperStyled } from '../../styles/styledComponents/HomeReasonToBookWrapperStyled';
import { primaryColors } from '../../mui-theme/_muiPalette';


export const ReasonToBookData = [
    {
        icon: <ShoppingIcon/>,
        title: "SHOPPING",
        text: "The best shopping within walking distance in town!",
        hasImage: null,
    },
    {
        icon: <DiningIcon/>,
        title: "DINING",
        text: "The best restaurants within walking distance!",
        hasImage: assets.diningBg,
    },
    {
        icon: <CameraIcon/>,
        title: "BEAUTIFUL VIEWS",
        text: "Enjoy the views of the roaming deer and the Medina River!",
        hasImage: assets.beautifulViewBg,
    },
    {
        icon: <BestPriceIcon/>,
        title: "BEST PRICE GUARANTEE",
        text: "Book on this website to get the best deal!",
        hasImage: null,
    }
]

const HomeReasonToBook = () => {
  return (
    <HomeReasonToBookWrapperStyled className='cmn_gap'>
        <Container fixed>
            <Box className="cmn_head">
                <Typography variant="h2">
                    BOOK ONLINE ON THIS WEBSITE
                </Typography>
                <Typography variant="h3">4 reasons why to choose our motel in Bandera, Texas</Typography>
            </Box>

            <Box className="bookReason">
                <Grid container columnSpacing={5} rowSpacing={4} className='bookReasonGrid'>
                    {
                        ReasonToBookData.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Box className={item.hasImage === null ? " bookReasonCard" : "bookReasonCard hasBackdrop"} style={ item.hasImage === null ? { backgroundColor: primaryColors.steelBlue,} : {backgroundImage: `url(${item.hasImage})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                    <Box className="bookReasonCardnIcon">
                                        {item.icon}
                                    </Box>
                                    <Box className="bookReasonCardText">
                                        <Typography variant="h5">{item.title}</Typography>
                                        <Typography variant="body1">{item.text}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
          
        </Container>
            
    </HomeReasonToBookWrapperStyled>
  )
}

export default HomeReasonToBook