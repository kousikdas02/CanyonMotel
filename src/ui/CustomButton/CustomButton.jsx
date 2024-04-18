import React from 'react'
import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import { primaryColors } from '../../mui-theme/_muiPalette';



export const CustomButtonWrapperStyled = styled(Button)`
   background-color: ${primaryColors.steelBlue};
    color: ${primaryColors.white};
    border: 1px solid transparent;
    padding: 9px 30px;

    &:hover{
        background-color: ${primaryColors.buttonPrimary};
        /* color: ${primaryColors.buttonPrimary}; */
    }
/* &.cmnBlackBtn{
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
} */


`

const CustomButton = ({children, className, buttonTypeSubmit, varient, buttonColor, disabled, ...props}) => {
  return (
    <CustomButtonWrapperStyled onClick={props.onClick} type={buttonTypeSubmit ? "submit" : "button"}  className={`${buttonColor === "white" ? "cmnWhiteBtn" : "cmnBlackBtn"} ${className || ""
  } ${varient === "hoverWhite" ? "hoverWhite" : ""}` } disabled={disabled} >
        {children}
    </CustomButtonWrapperStyled>
  )
}

export default CustomButton