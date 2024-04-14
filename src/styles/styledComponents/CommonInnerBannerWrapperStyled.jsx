import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";
export const CommonInnerBannerWrapperStyled = styled(Box)`
.innerBanner{
    position: relative;

    &::before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    figure{
        line-height: 0;
        display: flex;
        img{
            width: 100%;
            height: 465px;
            object-fit: cover;

            @media (max-width: 1199px) {
                height: 320px;
            }
            @media (max-width: 899px) {
                height: 200px;
            }
        }
    }
    .innerBannerDetails{
        position: absolute;
        left: 0;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        text-align: center;
        h1{
            color: ${primaryColors.white};
            text-transform: uppercase;
        }
    }
}
`