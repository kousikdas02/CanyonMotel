import { Box, styled } from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";

export const OurLocationWrapperStyled = styled(Box)`
border-top: 5px solid ${primaryColors.black};
background-color: rgba(255,255,255,0.85);
    p{
        text-align: center;
        font-size: 18px;
        margin-bottom: 30px;
    }
    .locationFrame{
        width: 100%;
        display: flex;
    }
`