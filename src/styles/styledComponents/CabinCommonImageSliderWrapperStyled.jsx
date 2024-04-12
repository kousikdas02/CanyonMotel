import { Box, styled } from "@mui/material";
import { assets } from "../../json/assets";
import { primaryColors } from "../../mui-theme/_muiPalette";

export const CabinCommonImageSliderWrapperStyled = styled(Box)`
overflow: hidden;
height: 100%;
.slick-slider{
    height: 100%;
     div{
        height: 100%;
    }
}
.cabinImageSliderEach{
    height: 100%;
    img{
        height: 100%;
        object-fit: cover;
    }
}
     .slick-arrow {
            width: 30px;
            height: 30px;
            opacity: 0.6;
            /* filter: invert(1) brightness(100%); */
            background-color: ${primaryColors.white};
            border-radius: 100%;
            z-index: 9;
            transition: 0.4s all ease;
            &::before{
                display: none;
            }

            &:hover{
                opacity: 1;
            }
            
            &.slick-prev{
                background-image: url(${assets.sliderLeftArw});
                background-repeat: no-repeat;
                background-position: center left 4px;
                background-size: 20px;
                left: -100px;
                padding-right: 2px;
            }
            &.slick-next{
                background-image: url(${assets.sliderRightArw});
                 background-repeat: no-repeat;
                background-position: center right 4px;
                background-size: 20px;
                right: -100px;
                padding-left: 2px;
            }
          
        }

        &:hover{
            .slick-arrow{
                &.slick-prev{
                    left: 15px;
                }
                &.slick-next{
                    right: 15px;
                }
            }
        }
`