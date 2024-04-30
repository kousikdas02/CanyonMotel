import { Box, styled } from "@mui/material";
import { primaryColors } from "../../mui-theme/_muiPalette";

export const ActivitiesDetailsWrapperStyled = styled(Box)`
.MuiTabs-root {
    .MuiTabs-scrollButtons{
        display: flex !important;
    }
}
    .MuiTabs-root {
        margin-bottom: 40px;
    }
    .MuiButtonBase-root{
        &.MuiTab-root{
            color: ${primaryColors.black};
            font-weight: 600;
            &.Mui-selected{
                color: ${primaryColors.steelBlue};
                font-weight: 600;
            }
        }
    }
    .MuiTabs-indicator {
        background-color: ${primaryColors.steelBlue};
    }
    .attractionCard{
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);

        &:hover{
            .attractionCard_img{
            figure{
                
                img{
                    transform: scale(1.1);
                }
            }
        }
        }
        .attractionCard_img{
            figure{
                overflow: hidden;
                display: flex;
                line-height: 0;
                font-size: 0;
                margin-bottom: 15px;
                img{
                    transition: 0.3s all ease;
                    width: 100%;
                }
            }
        }

        .attractionCard_content{
            padding: 15px 20px;

            ul{
            padding: 0;
            margin-bottom: 15px;
            li{
                padding: 0;
                flex-wrap: wrap;
                margin-bottom: 10px;
                &:last-child{
                    margin-bottom: 0;
                }
                p{
                    margin: 0px;
                    padding-right: 5px;
                }
                a{
                    display: flex;
                    align-items: center;
                    color: ${primaryColors.steelBlue};
                    &:hover{
                        color: ${primaryColors.buttonPrimary};
                    }
                    i{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 5px;
                    }
                }
            }
        }
        }

        
    }
`