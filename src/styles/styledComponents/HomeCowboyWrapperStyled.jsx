import { primaryColors } from "../../mui-theme/_muiPalette";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
export const HomeCowboyWrapperStyled = styled(Box)`
    background-color: ${primaryColors.black};
    padding: 50px 0 100px;
    p{
        color: ${primaryColors.white};
        line-height: 2;
    }
`