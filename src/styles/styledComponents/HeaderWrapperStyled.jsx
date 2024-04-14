import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";




export const HeaderWrapperStyled = styled(Box)`
  .headerContainer {
    background-color: ${primaryColors.white} !important;
    padding: 15px 0;
    transition: all 0.4s ease;
    
    @media (max-width: 899px) {
        padding: 10px 0;
    }
    &.fixed{
        background-color: ${primaryColors.white} !important;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 8px 2px;

        .headerMenu{
            .headerLogo{
                width: 200px;
            }
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
    width: 100%;
    .headerLogo{
        width: 250px;
        margin: 0 20px;
        &::after{
            display: none;
        }
    }
    ul{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0 -10px;
        flex: 2 1 0;
        &.left_nav{
            justify-content: flex-end;
        }
        &.right_nav{
            justify-content: flex-start;
        }
        li{
            width: initial;
            padding: 0 10px;
            a{
                
                position: relative;
                color: ${primaryColors.black};
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
                    background-color: ${primaryColors.black};
                    transition: 0.3s all ease;
                }
              
                &:hover, &.active{
                    &::after{
                        width: 100%;
                    }
                }
            }
        }
    }
}
.mobileHeaderMenu{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 899px) {
        display: none;
    }

    .headerLogo{
        width: 180px;

        @media (max-width: 599px) {
            width: 150px;
        }
    }
    .headerMenuIcon{
        color: ${primaryColors.buttonPrimary};
    }
}

`