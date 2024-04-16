import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";
export const HomeBannerWrapperStyled =  styled(Box)`
padding: 200px 0;
position: relative;
z-index: 1;
@media (max-width: 1199px) {
    padding: 120px 0;
}
@media (max-width: 899px) {
    padding: 80px 0;
}
&::before{
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
}
.homeBannerContent{
    text-align: center;
    z-index: 2;
    h1{
        color: ${primaryColors.white};
        font-weight: 400;
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    h2{
        color: ${primaryColors.white};
        font-size: 30px;
        font-weight: 400;
        font-family: "Old Standard TT", serif;
        text-transform: uppercase;
        line-height: 1.2;
        @media (max-width: 899px) {
            font-size: 25px;
        }
    }
}
.bannerCalendar{
    padding-top: 30px;
    @media (max-width: 899px) {
        padding-top: 15px;
    }
    .bannerCalendarStack{
        @media (max-width: 899px) {
            flex-wrap: wrap;
        }
        label{
                display: block;
                color: ${primaryColors.white};
                margin-bottom: 5px;
            }
        .bannerCalendarInput{
            @media (max-width: 899px) {
                width: 48%;
            }
            @media (max-width: 599px) {
                width: 100%;
                margin: 0 0 15px;
            }
            
            fieldset{
                display: none;
            }
            .MuiTextField-root{
                width: 100%;
            }
            .MuiInputBase-root {
                line-height: 1;
                
                input{
                    border: 2px solid ${primaryColors.white};
                    max-height: 44px;
                    padding: 10.5px 15px;
                    line-height: 1;
                    height: initial;
                    color: ${primaryColors.white};
                }
            }
        }
    }
    .bannerCalendarSubmit{
        @media (max-width: 899px) {
            width: 100%;
            margin-left: 0;
            text-align: center;
            padding-top: 20px;
        }
        @media (max-width: 599px) {
            padding-top: 0;
        }
    }
    .homeBannerBookBtn{
        /* &:hover{
            background-color: ${primaryColors.white};
            border-color: ${primaryColors.white};
        } */
    }
}
`