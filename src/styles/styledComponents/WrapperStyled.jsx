import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";
export const WrapperStyled = styled(Box)`
.announcementBanner{
    padding: 17px 0;
    &.hide{
        display: none;
    }
    .announcementBannerInner{
        position: relative;
        padding-right: 30px;
        .announcementCloseBtn{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            color: ${primaryColors.white};
            font-size: 18px;
            font-weight: 600;
            min-width: initial;
            line-height: 1;
            padding: 0;
        }
        p{
            color: ${primaryColors.white};
            margin-bottom: 0;
            font-size: 20px;
            font-weight: 500;
        }
    }
}
`