import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { assets } from '../json/assets';

const OurRoomTypes = () => { 
  return (

    <Box className="our-room-types-wrp">
        <Typography variant='h2'>OUR ROOM TYPES</Typography>
        <Box className="container">
            <Grid className="our-room-types-wrp-first" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-types-wrp-img">
                    <figure>
                       <img src={assets.roomspic1} alt="Rooms 1"/>
                    </figure>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-types-content">
                        <Typography variant='h2'>Deluxe King (Single King Bed)</Typography>
                        <p>The Deluxe King rooms sleep 1-2 adults and feature a work desk or comfortable reading chair, one comfortable pillow-top king bed, a fridge and microwave, television with Amazon FireStick, WiFi, and a Keurig coffee maker with K-cups, and bathrooms with shower-tub combinations. Rooms are approximately 190 sq. ft. One room offers a pull-out loveseat-sized sofa.</p>
                    </Box>
                </Grid>
            </Grid> 
            <Grid className="our-room-types-wrp-second" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-types-wrp-img">
                    <Typography variant='h2'>PROPERTY AMENITIES</Typography>
                        <Box className="our-room-amenties-wrp">
                            <Typography variant='h2'>Deluxe Double (2 Double Beds)</Typography>
                            <p>The Deluxe Double sleeps 1-4 adults and features either a work desk or reading chair, two comfortable double/full sized beds, mini-fridge and microwave, kitchenette, television with Amazon FireStick, WiFi, Keurig coffee maker with K-cups, full bathroom with tub and shower. Approximately 220 sq. ft.</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-content">
                        <figure>
                        <img src={assets.roomspic2} alt="Rooms 2"/>
                        </figure>
                    </Box>
                </Grid>
            </Grid> 
            <Grid className="our-room-types-wrp-third" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-types-wrp-img">
                    <figure>
                       <img src={assets.roomspic3} alt="Rooms 1"/>
                    </figure>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-types-content">
                        <Typography variant='h2'>AirCon Deluxe Double (2 Double Beds)</Typography>
                        <p>Similar to our Deluxe Double room, but with Air Conditioning. The rooms sleep 1-4 adults and feature either a work desk or reading chair, two comfortable double/full sized beds, mini-fridge and microwave, kitchenette, television with Amazon FireStick, WiFi, Keurig coffee maker with K-cups, full bathroom with tub and shower. Approximately 220 sq. ft.</p>
                    </Box>
                </Grid>
            </Grid> 
            <Grid className="our-room-types-wrp-fourth" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-types-wrp-img">
                    <Typography variant='h2'>PROPERTY AMENITIES</Typography>
                        <Box className="our-room-amenties-wrp">
                            <Typography variant='h2'>Superior Double (2 Double Beds)</Typography>
                            <p>The Superior Doubles are our largest rooms. These rooms sleep 1-4 (some rooms sleep more than 4) and feature either a work desk or reading chair, two comfortable double/full sized beds, a fridge and microwave and dining table, kitchenette, television with Amazon FireStick, WiFi, and a Keurig coffee maker with K-cups. Some rooms have showers and others have shower-tub combinations. Some have a separate sofa or love seat. Rooms vary in size from 250-450 sq. ft.</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-content">
                        <figure>
                        <img src={assets.roomspic4} alt="Rooms 2"/>
                        </figure>
                    </Box>
                </Grid>
            </Grid> 
        </Box>
    </Box>

  )
}

export default OurRoomTypes