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
                        <Typography variant='h2'>CLOSE TO WHERE YOU WANT TO BE</Typography>
                        <p>The Teton Court Motel is your clean, comfortable, affordable lodging option in Pinedale, Wyoming. A refurbished hotel near the center of Pinedale and just minutes from the Bridger Wilderness, the Wind River Mountain Range, and visiting the Museum of the Mountain Man. Other nearby options include exploring or boating on Fremont Lake, Green River Lake and Island Lake, fishing the Green River, or relaxing in the Granite Hot Springs.</p>
                    </figure>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-content">
                       <img src={assets.propertyDetails} alt="Rooms 1"/>
                    </Box>
                </Grid>
            </Grid> 

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
                        <Typography variant='h2'>OUR ROOMS</Typography>
                        <p>Each of our 17 rooms features private entry direct from the parking lot, private bathrooms, microwaves, small fridges, flat-screen TVs and complimentary WiFi. Eight of our rooms feature kitchenettes. Each room has been completely remodeled, with new carpet, mattresses, furniture, and bedding. The Teton Court Motel is ideal for those who seek a clean and comfortable room at an affordable price.</p>
                    </Box>
                </Grid>
            </Grid> 
            
            <Grid className="our-room-main-wrp-first" container spacing={2}>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-content">
                        <Typography variant='h2'>BENEFITS OF BOOKING DIRECTLY WITH US
</Typography>
                        <p>The Teton Court Motel offers clean and comfortable rooms near the heart of Pinedale. When booking through our website, you can obtain a confirmed booking with a 5% discount (compared with rates found on websites such as Booking.com and Expedia), easier (and more generous) cancellation policies, better guidance to get the best available room for your needs, and for those bringing their furry friends, a faster confirmation that a pet-friendly room is available.</p>
                    </Box>
                    
                </Grid>
                <Grid item xs={6}>
                    <Box className="our-room-main-wrp-img">
                    <figure>
                       <img src={assets.highlights3} alt="Rooms 1"/>
                    </figure>
                    </Box>
                </Grid>
            </Grid> 

            <Grid className="our-room-main-wrp-second" container spacing={2}>

                <Grid item xs={12}>
                    <Box className="our-room-main-wrp-img">
                    <Typography variant='h2'>FALL IN LOVE WITH OUR AMENITIES</Typography>

                        <Box className="our-room-amenties-wrp">
                       
                            <Box className="container">

                                <Grid className="amenties-lst-wrp" container spacing={2}>

                                    <Grid item xs={4}>
                                        <Box className="our-room-main-wrp-img">
                                        <Typography variant='h3'>Renovated Rooms</Typography>
                                        <p>Although our property has served guests for 75 years, our rooms with pillow-top mattresses and comfortable sitting chairs or a workdesk in each room, were extensively renovated in the summer of 2020. Each room offers a small fridge and microwave, a smart TV with Amazon Fire Stick, a Keurig coffee maker with k-cups for coffee. Eight of our 17 rooms feature kitchenettes. We offer rooms with air conditioning and those that just have fans.</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box className="our-room-main-wrp-img">
                                        <Typography variant='h3'>Connect to the World...</Typography>
                                        <p>Wireless high-speed internet (WiFi) is offered free of charge to our guests. We offer smart TVs in each room, with an Amazon FireStick along with numerous complimentary channels and movies to indulge. Log into your Netflix account and binge on the latest offerings.</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box className="our-room-main-wrp-img">
                                        <Typography variant='h3'>Comfortable and Clean</Typography>
                                        <p>Our comfortable rooms, with pillow-top mattresses, are designed to meet your needs for your Pinedale stay. Because our property is only open during the summer months, our rooms have light overall use. Focusing on enhanced cleaning procedures to avoid the spread of COVID-19, we strive to keep our rooms clean and welcoming so you get a good night's (or several night's) rest. Each individual room's outdoor entrance allows direct entry from your vehicle to your room.</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box className="our-room-main-wrp-img">
                                        <Typography variant='h3'>..or Connect Locally</Typography>
                                        <p>Our property is located at the base of the Wind River Mountains, near numerous hiking and biking options. Boating and fishing at Lake Fremont or the Green River are moments away. At the end of your day, we are walking distance to downtown bars, restaurants, and breweries, as well as the courthouse and government offices of Sublette County. The area's largest supermarket is two blocks away.</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box className="our-room-main-wrp-img">
                                        <Typography variant='h3'>Affordable</Typography>
                                        <p>Our goal is to provide affordable and clean rooms with friendly service during the summer months. We offer several room configurations to meet the needs of different travelers. We focus on running a motel efficiently, so we don't offer breakfast (we leave that to several great breakfast places within a quick stroll) or a swimming pool (the public $22 Million Pinedale Aquatic Center is four blocks away).</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box className="our-room-main-wrp-img">
                                        <Typography variant='h3'>Book with Us and Save</Typography>
                                        <p>If you book through our website, we offer a 5% discount off the prices you would find through other third-party websites for the same room. We also offer other benefits, such as an easier and more generous cancellation policy, assistance with finding the best room for your needs, and better availability of pet-friendly rooms.</p>
                                        </Box>
                                    </Grid>
                                
                                </Grid>

                            </Box>

                        </Box>
                    </Box>
                </Grid>
                
            </Grid> 
        </Box>
    </Box>

  )
}

export default OurRoom