import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";

export const HomeMotelInfoWrapperStyled = styled(Box)`
background-color: rgba(255,255,255,0.8);
border-bottom: 5px solid ${primaryColors.black};
padding: 100px 0 50px;
.homeMotelInfoInner{
    text-align: center;
    p{
        font-size: 18px;
        font-family: "Old Standard TT", serif;
        margin-bottom: 30px;
    }

}
`