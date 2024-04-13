import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";
export const ActivitiesWrapperStyled = styled(Box)`
    .activityContentText{
        margin-bottom: 20px;
    }
    .activityWrap{
        .activityEach{
            border-bottom: 5px solid ${primaryColors.black};

            &:last-child{
                border-bottom: 0;
            }
            &:nth-of-type(odd){
            background-color: rgba(255,255,255,0.85);
            }
            &:nth-of-type(even){
                background-color: ${primaryColors.white};
                .MuiGrid-container{
                    flex-direction: row-reverse;
                }
            
            }
            .activityImg{
                height: 100%;
                display: flex;
                img{
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                }
            }
            .activityContent{
                padding: 40px 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }
        }
    }
`