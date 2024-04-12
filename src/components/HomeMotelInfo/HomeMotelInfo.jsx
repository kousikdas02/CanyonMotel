import React from 'react'
import { HomeMotelInfoWrapperStyled } from '../../styles/styledComponents/HomeMotelInfoWrapperStyled'
import { Container, Typography, Box } from '@mui/material'
import CustomButton from '../../ui/CustomButton/CustomButton'
const HomeMotelInfo = () => {
  return (
    <HomeMotelInfoWrapperStyled>
        <Container fixed>
            <Box className="homeMotelInfoInner">
                <Box className="cmn_head">
                    <Typography variant="h2">
                        TETON COURT MOTEL
                    </Typography>
                </Box>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore autem quod rerum laboriosam. Aliquam ullam voluptatum alias? Recusandae sed dolore consequatur architecto praesentium assumenda illo cupiditate ipsum dolor corrupti. Cum!</Typography>
                <CustomButton variant="black">LEARN MORE</CustomButton>
            </Box>
        </Container>
    </HomeMotelInfoWrapperStyled>
  )
}

export default HomeMotelInfo