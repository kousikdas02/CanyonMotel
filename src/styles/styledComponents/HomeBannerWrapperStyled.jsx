import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";
export const HomeBannerWrapperStyled =  styled(Box)`
padding: 200px 0;
position: relative;
z-index: 1;
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
    }
}
.bannerCalendar{
    padding-top: 30px;
    .bannerCalendarStack{
        .bannerCalendarInput{
            label{
                display: block;
                color: ${primaryColors.white};
                margin-bottom: 5px;
            }
            fieldset{
                display: none;
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
    .homeBannerBookBtn{
        &:hover{
            background-color: ${primaryColors.white};
            border-color: ${primaryColors.white};
        }
    }
}
`