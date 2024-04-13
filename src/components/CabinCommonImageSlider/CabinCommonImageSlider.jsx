import React from 'react'
import { CabinCommonImageSliderWrapperStyled } from '../../styles/styledComponents/CabinCommonImageSliderWrapperStyled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@mui/material';
const CabinCommonImageSlider = ({cabinImageSliderList}) => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
  return (
    <CabinCommonImageSliderWrapperStyled>
          <Slider {...settings}>
            {
                cabinImageSliderList?.map((item, index) => (
                    <Box className="cabinImageSliderEach" key={index}>
                        <img src={item} key={index} alt="Cabin" />
                    </Box>
                ))
            }
          </Slider>
    </CabinCommonImageSliderWrapperStyled>
  )
}

export default CabinCommonImageSlider