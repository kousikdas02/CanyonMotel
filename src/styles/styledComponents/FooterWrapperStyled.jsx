import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const FooterWrapperStyled = styled(Box)`
background-color: ${primaryColors.black};

.footerTop{
    padding: 50px 0 30px;
    border-bottom: 1px solid ${primaryColors.white};
    .footerTopRow{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
        .footerTopCol {
            padding: 0 15px;
            flex: 0 0 auto;
            &.footerTopColPadding{
                padding-top: 20px;
            }
            &.footerTopLogoCol{
                width: 29%;
            }
            &.footerTopLocationContactCol{
                width: 32%;
            }
            &.footerTopSitemapCol{
                width: 15%;
            }
            &.footerTopSocialCol{
                width: 24%;
            }
            .footerLogo{
                width: 300px;
            }
            p{
                color: ${primaryColors.white};
                margin-bottom: 16px;
                font-size: 14px;
                &.footerTitle{
                    color: ${primaryColors.white};
                    margin-bottom: 16px;
                    font-size: 18px;
                    font-family: "Yeseva One", serif;
                }
                &.footerLocationDetails{
                    max-width: 250px;
                }

            }
            .footerConactLinkList{
                li{
                    padding: 0;
                    margin-bottom: 7px;
                    &:last-child{
                        margin-bottom: 0;
                    }

                    a{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: ${primaryColors.white};
                        i{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-right: 10px;
                        }
                    }
                }
            }
            .footerSiteMapList{
                padding: 0;
                li{
                    margin-bottom: 7px;
                    &:last-child{
                        margin-bottom: 0;
                    }
                    padding: 0;
                    a{
                        color: ${primaryColors.white};
                        position: relative;
                        font-size: 14px;
                        padding-bottom: 3px;
                        &::after{
                            position: absolute;
                            content: "";
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1px;
                            width: 0;
                            background-color: ${primaryColors.white};
                            transition: 0.3s all ease;
                        }
                        &.active{
                            &::after{
                                width: 100%;
                            }
                        }
                        &:hover{
                            &::after{
                                width: 100%;
                            }
                        }
                    }
                }
            }
            .footerBookBtn{
                margin-bottom: 15px;
            }
            .footerSocialList{
                li{
                    padding: 0;
                    a{
                        border: 2px solid ${primaryColors.white};
                        border-radius: 100%;
                        padding: 0;
                        width: 37px;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover{
                            transform: rotate(360deg);
                        }
                    }
                }
            }

        }
    }
}
.footerBot{
    padding: 30px 0 50px;
    ul{
        margin: 0 -15px -10px;
        display: flex;
        flex-wrap: wrap;
        li{
            width: initial;
            padding: 0 15px;
            margin-bottom: 10px;
            display: block;
            color: ${primaryColors.white};
            a{
                color: ${primaryColors.white};
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}

`