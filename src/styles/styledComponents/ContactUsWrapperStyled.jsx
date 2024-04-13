import { styled } from "@mui/material/styles";
import { Box } from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const ContactUsWrapperStyled = styled(Box)`
.contactUs{
    background-color: ${primaryColors.black};
    .contactUsForm{
        background-color: ${primaryColors.white};
        padding: 100px 100px;

        .cmn_head{
            h2{
                
            }
        }
        p{
           
            text-align: center;
            margin-bottom: 40px;
        }
        label{
            display: block;
            margin-bottom: 5px;
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
            padding-top: 50px;
            text-align: center;
            .contactFormSubmitBtn{
                padding: 9px 70px;
            }
        }
        
    }
}
.contactUsLocation{
    background-color: rgba(255,255,255,0.85);
    .contactLocationMap{
        width: 100%;
        height: 100%;
    }

    .contactUsInfo{
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .contactUsInfoList{
            margin-bottom: 15px;
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
`