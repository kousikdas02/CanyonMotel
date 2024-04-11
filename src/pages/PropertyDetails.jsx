import React from 'react'
import { PropertyDetailsWrapperStyled } from '../styles/styledComponents/PropertyDetailsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import OurRoom from '../components/OurRooms'
import OurRoomTypes from '../components/OurRoomTypes'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const PropertyDetails = () => {
  return (
    <Wrapper>
      <PropertyDetailsWrapperStyled>
        <CommonInnerBanner/>
        
          <Box className="aftr-banr-prprty-dtls-wrap">
              <Box className="container">
                <Box className="cmn_head">
                <Typography variant='h2'>BANDERA'S FIRST AND ONLY RUSTIC BOUTIQUE MOTEL</Typography>
                </Box>
                <Grid className="after-banner-prprty-wrap" container spacing={2}>
                  <Grid item xs={6}>
                      <Box className="cmn-sec-aftr-prprty-banner">
                      <p>The Teton Court Motel is your clean, comfortable, affordable lodging option in Pinedale, Wyoming. A refurbished hotel near the center of Pinedale and just minutes from the Bridger Wilderness, the Wind River Mountain Range, and visiting the Museum of the Mountain Man. Other nearby options include exploring or boating on Fremont Lake, Green River Lake and Island Lake, fishing the Green River, or relaxing in the Granite Hot Springs.</p>
                      </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="cmn-sec-aftr-prprty-banner">
                      <p>We are located on a quiet street near the center of Pinedale, within walking distance of restaurants, supermarkets, and bars. We are one block off US 191 as you go to/from Jackson (1.5 hours) and the Grand Teton National Park (2 hours) and south entrance of Yellowstone National Park (2.5 hours).</p>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
          </Box>
          <OurRoom/>   
          <OurRoomTypes/>   
          <Box className="our-policies-wrap">
              <Box className="cmn_head">
                <Typography variant='h2'>OUR POLICIES</Typography>
                <Box className="cowboy-deails-text">
                 
                </Box>
              </Box>
          </Box>   

          <Box className="faq-question-wrap">
              <Box className="cmn_head">
                <Typography variant='h2'>FREQUENTLY ASKED QUESTIONS</Typography>
                <Box className="cowboy-deails-text">
                  
                </Box>
              </Box>
          </Box>        
      </PropertyDetailsWrapperStyled>
    </Wrapper>
    
  )
}

export default PropertyDetails