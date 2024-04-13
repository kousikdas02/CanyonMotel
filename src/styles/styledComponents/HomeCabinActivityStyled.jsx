import { primaryColors } from "../../mui-theme/_muiPalette";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
export const HomeCabinActivityStyled = styled(Box)`
 background-color: ${primaryColors.black};
.homeCabinActivityCard{
    padding: 200px 30px 200px;
    position: relative;
    z-index: 1;
    text-align: center;

    @media (max-width: 899px) {
        padding: 120px 30px;
    }
   
    &::before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
    h2{
        font-size: 36px;
        margin-bottom: 15px;
        color: ${primaryColors.white};
        @media (max-width: 1199px) {
            font-size: 35px;
        }
        @media (max-width: 899px) {
            font-size: 30px;
        }
    }
}
` 