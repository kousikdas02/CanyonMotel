import { Box, styled } from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";

export const HomeContactWrapperStyled = styled(Box)`
border-top : 5px solid ${primaryColors.black};
background-color: rgba(255,255,255,0.8);
.cmn_head{
    text-align: left;
}
.homeContactImage{
    figure{
        margin-bottom: 0;
        display: flex;
        width: 100%;
        img{
            width: 100%;
        }
    }
}
p{
    margin-bottom: 20px;
}
`