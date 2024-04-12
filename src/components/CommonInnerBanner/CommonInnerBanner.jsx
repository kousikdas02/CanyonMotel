import React from 'react'
import { CommonInnerBannerWrapperStyled } from '../../styles/styledComponents/CommonInnerBannerWrapperStyled'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box';

const CommonInnerBanner = ({innerBannerImage, innerBannerText}) => {
  return (
    <CommonInnerBannerWrapperStyled>
      <Box className="innerBanner">
        <Box className="container">
            <figure>
              <img src={innerBannerImage} alt="property details"/>
            </figure>
            <Box className="innerBannerDetails">
              <Container fixed>
                <Typography variant='h1'>{innerBannerText}</Typography>
              </Container>
            </Box>
        </Box>
      </Box>
    </CommonInnerBannerWrapperStyled>
  )
}

export default CommonInnerBanner