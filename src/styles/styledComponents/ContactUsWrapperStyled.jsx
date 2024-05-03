import { styled } from "@mui/material/styles";
import { Box } from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const ContactUsWrapperStyled = styled(Box)`
.contactUs{
    background-color: ${primaryColors.steelBlue};
    .contactUsForm{
        background-color: ${primaryColors.white};
        padding: 100px 100px;
        @media (max-width: 899px) {
            padding: 50px 50px;
        }
        @media (max-width: 599px) {
            padding: 35px 30px;
        }
        .cmn_head{
            h2{
                
            }
        }
        p{
           
            text-align: center;
            margin-bottom: 40px;

            &.errorMsg{
                color: ${primaryColors.errorMain};
                padding-top: 5px;
                text-align: left;
                margin-bottom: 0;
                font-weight: 500;
            }
        }
        label{
            display: block;
            margin-bottom: 5px;

            span{
                color: ${primaryColors.errorMain};
                font-size: 16px;
                line-height: 1.5;
                font-family: "Raleway", sans-serif;
                font-weight: 400;
            }
        }
        .MuiTextField-root{
            width: 100%;

            input{
                min-height: 30px;
                border: 0;
            }
            .MuiInputBase-root {
                .MuiOutlinedInput-notchedOutline{
                        border-color: ${primaryColors.black};
                    }
                &.Mui-focused{
                    .MuiOutlinedInput-notchedOutline{
                        border-color: ${primaryColors.black};
                    }
                }
            }
        }

        .contactFormSubmit{
            padding-top: 30px;
            text-align: center;
            @media (max-width: 899px) {
                padding-top: 30px;
            }
            .contactFormSubmitBtn{
                padding: 9px 70px;

                &.Mui-disabled{
                    color: rgba(255,255,255,0.5);
                }
            }
        }
        
    }
}
.contactUsLocation{
    background-color: rgba(255,255,255,0.85);
    .contactLocationCol{
        @media (max-width: 899px) {
            order: 1;
        }
    }
    .contactLocationMap{
        width: 100%;
        height: 100%;

        @media (max-width: 899px) {
            min-height: 400px;
        }
        @media (max-width: 599px) {
            min-height: 350px;
        }
    }

    .contactUsInfo{
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 899px) {
            padding: 0;
        }

        .contactUsInfoList{
            padding-left: 20px;
            li{
                position: relative;
                padding: 0 0 0 15px;
                margin-bottom: 10px;
                text-transform: capitalize;
                &:last-child{
                    margin-bottom: 0;
                }
                &::before{
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 10px;
                    width: 6px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: ${primaryColors.black};
                }
            }
        }
    }

}
.customCaptcha{
    padding-top: 30px;
    .MuiStack-root {
        margin-bottom: 20px;
        .MuiTextField-root{
            width: initial;
        }
    }
    p{
        margin-bottom: 0 !important;
        &.catchaInfoText{
            text-align: left;
            margin-bottom: 15px !important;
        }
        &.catchaError {
            text-align: left;
            color: ${primaryColors.errorMain};
            margin-bottom: 15px !important;
        }
    }
    .contactFormSubmitBtn{
        padding: 5px 20px;
    }
}
`