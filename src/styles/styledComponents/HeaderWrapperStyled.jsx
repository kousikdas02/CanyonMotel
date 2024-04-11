import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";




export const HeaderWrapperStyled = styled(Box)`
  .headerContainer {
    background-color: ${primaryColors.black} !important;
    padding: 15px 0;
    transition: all 0.4s ease;

    &.fixed{
        background-color: ${primaryColors.white} !important;

        .headerMenu{
            ul{
                li{
                    a{
                        color: ${primaryColors.black};

                        &::after{
                            background-color: ${primaryColors.black};
                        }
                    }
                }
            }
        }
    }
  }
  
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
.headerMenu{
    margin: 0 auto;
    ul{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0 -10px;

        li{
            width: initial;
            padding: 0 10px;
            a{
                &.headerLogo{
                    width: 250px;

                    &::after{
                        display: none;
                    }
                }
                position: relative;
                color: ${primaryColors.white};
                padding-bottom: 3px;

                &::after{
                    position: absolute;
                    content: "";
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    width: 0;
                    background-color: ${primaryColors.white};
                    transition: 0.3s all ease;
                }

                &:hover{
                    &::after, &.footerActive{
                        width: 100%;
                    }
                }
            }
        }
    }
}
`