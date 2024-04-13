import React from 'react'
import { HomeGalleryWrapperStyled } from '../../styles/styledComponents/HomeGalleryWrapperStyled'
import { Container, Grid } from '@mui/material'
import { assets } from '../../json/assets'

const HomeGallery = () => {
  return (
    <HomeGalleryWrapperStyled className='cmn_gap cmn_gap_top'>
        <Container maxWidth="lg">
            <Grid container columnSpacing={3} >
                <Grid item md={4} xs={12} lg={4} data-aos="fade-right">
                    <figure>
                        <img src={assets.homeGalleryOne} alt="" />
                    </figure>
                </Grid>
                <Grid item md={4} xs={12} lg={4} data-aos="fade-up">
                    <figure>
                        <img src={assets.homeGalleryTwo} alt="" />
                    </figure>
                </Grid>
                <Grid item md={4} xs={12} lg={4} data-aos="fade-left">
                    <figure>
                        <img src={assets.homeGalleryThree} alt="" />
                    </figure>
                </Grid>
            </Grid>
        </Container>
    </HomeGalleryWrapperStyled>
  )
}

export default HomeGallery