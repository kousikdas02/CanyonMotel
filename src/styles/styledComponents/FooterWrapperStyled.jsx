import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const FooterWrapperStyled = styled(Box)`
background-color: ${primaryColors.white};

.footerTop{
    padding: 50px 0 40px;
    border-bottom: 1px solid ${primaryColors.black};
    @media (max-width: 899px) {
        padding: 35px 0 30px;
    }
    .footerTopRow{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
        @media (max-width: 1199px) {
            justify-content: space-between;
            margin-bottom: -30px;
        }
        .footerTopCol {
            padding: 0 15px;
            flex: 0 0 auto;
            @media (max-width: 1199px) {
                margin-bottom: 30px;
            }
            @media (max-width: 599px) {
                text-align: center;
            }
            &.footerTopColPadding{
                padding-top: 20px;
                @media (max-width: 1199px) {
                    padding-top: 0;
                }
            }
            &.footerTopLogoCol{
                width: 29%;
                @media (max-width: 1199px) {
                    width: 100%;
                    text-align: center;
                }
                
            }
            &.footerTopLocationContactCol{
                width: 32%;
                @media (max-width: 1199px) {
                    width: calc(100% / 3);
                }
                @media (max-width: 599px) {
                    width: 100%;
                }
            }
            &.footerTopSitemapCol{
                width: 15%;
                @media (max-width: 1199px) {
                    width: calc(100% / 3);
                }
                @media (max-width: 599px) {
                    width: 100%;
                }
            }
            &.footerTopSocialCol{
                width: 24%;
                @media (max-width: 1199px) {
                    width: calc(100% / 3);
                }
                @media (max-width: 599px) {
                    width: 100%;
                }
            }
            .footerLogo{
                width: 300px;
                @media (max-width: 899px) {
                    width: 250px;
                }
                @media (max-width: 599px) {
                    width: 230px;
                }
            }
            p{
                color: ${primaryColors.black};
                margin-bottom: 16px;
                font-size: 14px;
                &.footerTitle{
                    color: ${primaryColors.black};
                    margin-bottom: 16px;
                    font-size: 18px;
                    font-family: "Yeseva One", serif;
                }
                &.footerLocationDetails{
                    max-width: 250px;

                    @media (max-width: 899px) {
                        max-width: initial;
                    }
                }

            }
            .footerConactLinkList{
                li{
                    padding: 0;
                    margin-bottom: 7px;
                    @media (max-width: 599px) {
                        justify-content: center;
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }

                    a{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: ${primaryColors.black};
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

                    @media (max-width: 599px) {
                        justify-content: center;
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }
                    padding: 0;
                    a{
                        color: ${primaryColors.black};
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
                            background-color: ${primaryColors.black};
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
                display: flex;
                align-items: center;
                margin: 0 -10px;

                @media (max-width: 599px) {
                    justify-content: center;
                }
                li{
                    padding: 0 10px;
                    width: initial;
                    a{
                        border: 2px solid ${primaryColors.black};
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
    @media (max-width: 899px) {
        padding: 25px 0;
    }
    .footerBotRow {
        @media (max-width: 1199px) {
            justify-content: center;
            .footerBotRight {
                margin-left: 0;
                margin-bottom: 10px;
            }
            .footerBotLeft {
                order: 1;
            }
        }
    }
    ul{
        margin: 0 -15px -10px;
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 899px) {
            justify-content: center;
        }
        li{
            width: initial;
            padding: 0 15px;
            margin-bottom: 10px;
            display: block;
            font-size: 14px;
            color: ${primaryColors.black};
            @media (max-width: 899px) {
                text-align: center;
            }
            a{
                color: ${primaryColors.black};
                font-size: 14px;
                &:hover, &.active{
                    text-decoration: underline;
                }
            }
        }
    }
}

`