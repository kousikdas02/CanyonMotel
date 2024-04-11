import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { assets } from '../json/assets';

const OurRoom = () => {
  return (

    <Box className="our-room-main-wrp">
        <Box className="container">
            <Grid className="our-room-main-wrp-first" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-img">
                    <figure>
                       <img src={assets.rooms1} alt="Rooms 1"/>
                    </figure>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-content">
                        <Typography variant='h2'>BANDERA'S FIRST AND ONLY RUSTIC BOUTIQUE MOTEL</Typography>
                        <p>Built on 1.5 acres of beautiful land, The Vaquero Motel features  serene views of the Medina River. Take a swim or float the Medina River with friends while taking in the scenic views of the Texas Hill Country.  With various walking trails along the river, find a picnic spot, and enjoy all the wildlife, not to mention all the horseback riding trails to explore.  Or if you rode in on a steel horse, begin the 100 mile journey of the famous Twisted Sisters Ride from Bandera.  There's something for everyone during your stay. We're here to serve you and make it the relaxing experience you deserve.</p>
                    </Box>
                </Grid>
            </Grid> 
            <Grid className="our-room-main-wrp-second" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-img">
                    <Typography variant='h2'>PROPERTY AMENITIES</Typography>
                        <Box className="our-room-amenties-wrp">
                            <ul>
                                <li>WiFi</li>
                                <li>Smart TV's</li>
                                <li>Individual Fire Pits</li>
                                <li> Walking trails</li>
                                <li> Access to Medina River</li>
                                <li> Walking distance to park</li>
                                <li>Deer & Duck watching</li>
                                <li>Walking distance to shops & dining</li>
                                <li>Play Cornhole and Horse Shoes</li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-content">
                        <figure>
                        <img src={assets.rooms2} alt="Rooms 2"/>
                        </figure>
                    </Box>
                </Grid>
            </Grid> 
        </Box>
    </Box>

  )
}

export default OurRoom