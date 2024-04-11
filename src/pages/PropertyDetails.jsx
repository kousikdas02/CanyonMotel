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
                      <p>This historic rustic motel located in the heart of the "Cowboy Capital Of The World", is truly one of a kind.  The Vaquero Motel is located right off Main Street in Bandera, Texas, walking distance to all the great shopping, restaurants, and nightlife Bandera has to offer.  Enjoy sitting on the patio of one of your "Vaquero" inspired cabins, with your own fire pit, feeding the deer that roam the property, all just steps away from the Medina River.  Located in the beautiful Texas Hill Country, this areas history has a blend of Indian, Polish, Western and Mexican cultures, giving Bandera and The Vaquero Motel a unique ambiance not found elsewhere in Texas. The word "Vaquero" is Spanish for herder of cattle, or "Cowboy".  The cowboy tradition of ranching was inherited from the Spanish and Mexican vaqueros. That style of ranching was imported to the Americas after it was discovered that the dry climate and sparse grass would be sufficient for what the large herds of cattle would require.  Bandera itself is known for its deep roots in Texas country music, with many honky tonk bars that allow you to do some two-stepping, or simply listen to live music performed by renown country artists, all within walking distance of your cabin.</p>
                      </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="cmn-sec-aftr-prprty-banner">
                      <p>When you arrive to Bandera and the The Vaquero Motel, you will experience a feeling of going back in Texas history, and experience what it would be like to be a modern day cowboy, but with all the luxuries and comforts of a boutique motel.  There are ample amount of things to do in the Texas Hill Country.  For motorcycle enthusiasts, begin the journey of the 100 mile ride known as the Twisted Sisters from Bandera.  If you're a wine aficionado,  stop by and visit one of the many local wineries and vineyards, or spend time in the great outdoors at one of our two State Natural Areas.  Experience the cowboy lifestyle by attending a rodeo, gunfight reenactment, or simply taking in a scenic horseback ride along one of many trails, all just minutes from the motel. There is never a dull moment while visiting this area and experiencing this new rustic boutique motel. You will enjoy mingling with the locals in all the restaurants and unique shops - you'll be amazed at just how friendly everyone is.  At The Vaquero Motel, you will go back in time to when the wild mustangs and cattle roamed, and experience the cowboy way but in a rustic and luxurious cabin, all while taking in the scenery of the beautiful Texas Hill Country.</p>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
          </Box>
          <OurRoom/>   
          <OurRoomTypes/>   
              
      </PropertyDetailsWrapperStyled>
    </Wrapper>
    
  )
}

export default PropertyDetails