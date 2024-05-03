import React from 'react'
import { OurLocationWrapperStyled } from '../../styles/styledComponents/OurLocationWrapperStyled'
import { Box, Container, Typography } from '@mui/material'

const OurLocation = () => {
  return (
    <OurLocationWrapperStyled className='cmn_gap'>
        <Container>
            <Box className="cmn_head">
                <Typography variant="h2">OUR LOCATION</Typography>
            </Box>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, saepe.</Typography>
            
            <iframe className='locationFrame' title='Canyon Motel location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.108991537721!2d-106.10590002400603!3d40.07298087149702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a217b91158a61%3A0xccc6684bc327e6b9!2sCanyon%20Motel!5e0!3m2!1sen!2sin!4v1714733641605!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} ></iframe>
        </Container>
    </OurLocationWrapperStyled>
  )
}

export default OurLocation