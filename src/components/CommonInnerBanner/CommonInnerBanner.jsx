import React from 'react'
import { CommonInnerBannerWrapperStyled } from '../../styles/styledComponents/CommonInnerBannerWrapperStyled'
import { Typography } from '@mui/material'
import { assets } from '../../json/assets';
import Box from '@mui/material/Box';

const CommonInnerBanner = () => {
  return (
    <CommonInnerBannerWrapperStyled>
      <Box className="inner-banner">
        <Box className="container">
            <figure>
              <img src={assets.propertyDetails} alt="property details"/>
            </figure>
            <Box className="inner-banner-details">
              <Typography variant='h1'>Property details</Typography>
            </Box>
        </Box>
      </Box>
    </CommonInnerBannerWrapperStyled>
  )
}

export default CommonInnerBanner