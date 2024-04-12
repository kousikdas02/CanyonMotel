import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { assets } from "../../json/assets";

export const TestimonialWrapperStyled = styled(Box)`
    padding: 100px 0;
    background-color: rgba(255,255,255,0.8);
    .cmn_head{
        margin-bottom: 35px;
    }
    .testimonialSlider{
        .slick-arrow {
            width: 25px;
            height: 25px;
            &::before{
                display: none;
            }

            &:hover{
                opacity: 0.6;
            }
            
            &.slick-prev{
                background: url(${assets.sliderLeftArw}) no-repeat center;
                background-size: 25px;
            }
            &.slick-next{
                background: url(${assets.sliderRightArw}) no-repeat center;
                background-size: 25px;
            }
          
        }
        .slick-dots{
                li{
                    button{
                        &:before {
                            font-size: 10px;
                        }
                    }
                }
                
            } 
        .sliderItem{
            text-align: center;
            padding: 0 30px 30px;
            p{
                font-size: 22px;
                margin-bottom: 10px;
            }
            h6{
                font-size: 18px;
            }
        }
    }
`