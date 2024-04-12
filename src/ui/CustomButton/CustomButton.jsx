import React from 'react'
import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import { primaryColors } from '../../mui-theme/_muiPalette';



export const CustomButtonWrapperStyled = styled(Button)`
&.cmnBlackBtn{
    background-color: ${primaryColors.black};
    color: ${primaryColors.white};
    border: 1px solid ${primaryColors.black};
    padding: 9px 30px;

    &:hover{
        background-color: transparent;
        color: ${primaryColors.black};
    }

    &.hoverWhite{
      &:hover{
        background-color: ${primaryColors.white};
        border-color: ${primaryColors.white};
      }
    }
}
&.cmnWhiteBtn{
    background-color: ${primaryColors.white};
    color: ${primaryColors.black};
    border: 1px solid ${primaryColors.white};
    padding: 9px 30px;

    &:hover{
        background-color: transparent;
        color: ${primaryColors.white};
    }
}


`

const CustomButton = ({children, className, buttonType, varient, ...props}) => {
  return (
    <CustomButtonWrapperStyled onClick={props.onClick}  className={`${buttonType === "white" ? "cmnWhiteBtn" : "cmnBlackBtn"} ${className || ""
  } ${varient === "hoverWhite" ? "hoverWhite" : ""}` } >
        {children}
    </CustomButtonWrapperStyled>
  )
}

export default CustomButton