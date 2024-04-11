import React from 'react'
import { WrapperStyled } from '../../styles/styledComponents/WrapperStyled'
import Header from '../Header/Header'
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
const Wrapper = ({ children }) => {
  return (
    <WrapperStyled>
      <Header />
      <Box className="bodyContent">
        {children}
      </Box>
      <Footer />
    </WrapperStyled>
  )
}

export default Wrapper