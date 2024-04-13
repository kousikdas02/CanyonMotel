import { styled } from "@mui/material/styles";
import {Box} from "@mui/material"
import { primaryColors } from "../../mui-theme/_muiPalette";


export const CabinsWrapperStyled = styled(Box)`
.eachCabin{
    border-bottom: 5px solid ${primaryColors.black};
    position: relative;
    .eachCabinInner{
        position: relative;
    }
    .cabinImgSlider{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50%;
    }
    .cabinContentCol{
        padding-right: 100px;
        padding-top: 40px;
        padding-bottom: 40px;
    }
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
        .cabinImgSlider{
            right: initial;
            left: 0;
        }
        .cabinContentCol{
            padding-right: 0;
            padding-left: 40px;
        }
    }
    
    p{
        &.personPerRoom{
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
}

.cmn_head{
    text-align: left;
}
.roomAmenitiesList{
    margin-bottom: 15px;
    padding-left: 20px;
    li{
        position: relative;
        padding: 0 0 0 15px;
        margin-bottom: 5px;
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
`