import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const FooterWrapperStyled = styled(Box)`
background-color: ${primaryColors.black};

.footerTop{
    padding: 50px 0 0;
        .footerTopRow{
            display: flex;
            flex-wrap: wrap;
            .footerTopCol {
                .footerLogo{
                    width: 300px;
                }
                .footerTitle{
                    color: ${primaryColors.white};
                }
            }
        }
}

`