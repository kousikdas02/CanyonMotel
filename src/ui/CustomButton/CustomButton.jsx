import React from 'react'
import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import { primaryColors } from '../../mui-theme/_muiPalette';



export const CustomButtonWrapperStyled = styled(Button)`
&.cmnBlackBtn{
    background-color: ${primaryColors.black};
    color: ${primaryColors.white};
    border: 1px solid ${primaryColors.black};
    padding: 5xp 10px;

    &:hover{
        background-color: transparent;
        color: ${primaryColors.black};
    }
}
&.cmnWhiteBtn{
    background-color: ${primaryColors.white};
    color: ${primaryColors.black};
    border: 1px solid ${primaryColors.white};
    padding: 5xp 10px;

    &:hover{
        background-color: transparent;
        color: ${primaryColors.white};
    }
}


`
interface props {
    children: React.ReactNode;
    className?: string;
    buttonType?: "white" | "black";
}
const CustomButton = ({children, className, buttonType}:props) => {
  return (
    <CustomButtonWrapperStyled      className={`${buttonType === "white" ? "cmnWhiteBtn" : "cmnBlackBtn"} ${className || ""
  }`}>
        {children}
    </CustomButtonWrapperStyled>
  )
}

export default CustomButton