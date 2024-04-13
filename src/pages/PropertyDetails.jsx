import React from 'react'
import { PropertyDetailsWrapperStyled } from '../styles/styledComponents/PropertyDetailsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { assets } from '../json/assets'
import { Container, Grid, List, ListItem } from '@mui/material'
import CustomButton from '../ui/CustomButton/CustomButton';
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const propDetailsFeatureData = [
  {
    title: "CLOSE TO WHERE YOU WANT TO BE",
    img: assets.proFeature1,
    aos: "normal",
    textContent: [
      {
        eachText: "The Teton Court Motel is your clean, comfortable, affordable lodging option in Pinedale, Wyoming. A refurbished hotel near the center of Pinedale and just minutes from the Bridger Wilderness, the Wind River Mountain Range, and visiting the Museum of the Mountain Man. Other nearby options include exploring or boating on Fremont Lake, Green River Lake and Island Lake, fishing the Green River, or relaxing in the Granite Hot Springs.",
      },
      {
        eachText: "We are located on a quiet street near the center of Pinedale, within walking distance of restaurants, supermarkets, and bars. We are one block off US 191 as you go to/from Jackson (1.5 hours) and the Grand Teton National Park (2 hours) and south entrance of Yellowstone National Park (2.5 hours).",
      }
    ]
  },
  {
    title: "OUR ROOMS",
    img: assets.proFeature2,
    aos: "reverse",
    textContent: [
      {
        eachText: "Each of our 17 rooms features private entry direct from the parking lot, private bathrooms, microwaves, small fridges, flat-screen TVs and complimentary WiFi. Eight of our rooms feature kitchenettes. Each room has been completely remodeled, with new carpet, mattresses, furniture, and bedding.",
      },
      {
        eachText: "The Teton Court Motel is ideal for those who seek a clean and comfortable room at an affordable price.",
      }
    ]
  },
  {
    title: "BENEFITS OF BOOKING DIRECTLY WITH US",
    img: assets.proFeature3,
    aos: "normal",
    textContent: [
      {
        eachText: "The Teton Court Motel offers clean and comfortable rooms near the heart of Pinedale. When booking through our website, you can obtain a confirmed booking with a 5% discount (compared with rates found on websites such as Booking.com and Expedia), easier (and more generous) cancellation policies, better guidance to get the best available room for your needs, and for those bringing their furry friends, a faster confirmation that a pet-friendly room is available.",
      },
    ]
  },
]

export const propertyAmenities = [
  {
    eachAmenities: "Renovated Rooms",
  },
  {
    eachAmenities: "Wireless high-speed internet (WiFi)",
  },
  {
    eachAmenities: "Comfortable and Clean",
  },
  {
    eachAmenities: "Connect Locally",
  },
  {
    eachAmenities: "Affordable",
  },
  {
    eachAmenities: "Book with Us and Save",
  },
]
const TITLE = 'Teton Court Motel - Property Details';
const PropertyDetails = () => {
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <PropertyDetailsWrapperStyled style={{ background: `url(${assets.propertyDetailsBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        <CommonInnerBanner innerBannerImage={assets.propertyDetailsBanner} innerBannerText="Property Details" />

        <Box className="motelInfo cmn_gap">
          <Container fixed>
            <Box className="cmn_head">
              <Typography variant='h2'>Motel Info Title</Typography>
            </Box>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, a est adipisci esse laborum molestiae, pariatur laboriosam, vel cumque reiciendis tempora. Necessitatibus soluta vero perspiciatis, veniam doloremque ab debitis esse.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam aperiam, quidem, reprehenderit quisquam consequatur fugit sunt asperiores quas nulla delectus dolorum quasi? Ut, facere mollitia. Unde ipsum ad architecto.
            </Typography>
          </Container>
        </Box>

        <Box className="propDetailsFeatureWrap">
          {
            propDetailsFeatureData.map((eachData, index) => (
              <Box className="propDetailsFeatureEach cmn_gap" key={index}>
                <Container fixed>
                  <Grid container columnSpacing={5} >
                    <Grid item md={6} data-aos={eachData.aos === "normal" ? "fade-right" : eachData.aos === "reverse" && "fade-left" }>
                      <Box className="featureImg">
                        <img src={eachData.img} alt="property details" />
                      </Box>
                    </Grid>
                    <Grid item md={6} data-aos={eachData.aos === "normal" ? "fade-left" : eachData.aos === "reverse" && "fade-right"}>
                      <Box className="featureContent">
                        <Box className="cmn_head">
                          <Typography variant='h2'>{eachData.title}</Typography>
                        </Box>
                        {
                          eachData.textContent.map((eachText, index) => {
                            return (
                              <Typography variant='body1' key={index}>{eachText.eachText}</Typography>
                            )
                          })
                        }
                      </Box>

                    </Grid>
                  </Grid>
                </Container>
              </Box>
            ))
          }
        </Box>

        <Box className="ourGround cmn_gap">
          <Container fixed>
            <Grid container columnSpacing={5} alignItems="center" >
              <Grid item md={6} xs={12} data-aos="zoom-in">
                <Box className="ourGroundImg">
                  <img src={assets.ourGround} alt="Our Ground" />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box className="ourGroundContent">
                  <Box className="cmn_head" textAlign="left">
                    <Typography variant='h2'>OUR GROUND</Typography>
                  </Box>
                  <Typography variant='body1'>Built on 1.5 acres of beautiful land, The Vaquero Motel features  serene views of the Medina River. Take a swim or float the Medina River with friends while taking in the scenic views of the Texas Hill Country.  With various walking trails along the river, find a picnic spot, and enjoy all the wildlife, not to mention all the horseback riding trails to explore.  Or if you rode in on a steel horse, begin the 100 mile journey of the famous Twisted Sisters Ride from Bandera.  There's something for everyone during your stay. We're here to serve you and make it the relaxing experience you deserve.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className="propertyAmenities cmn_gap">
          <Container fixed>
            <Grid container alignItems="center">
              <Grid item md={6} xs={12} data-aos="fade-right">
                <Box className="cmn_head">
                  <Typography variant='h2' textAlign="left">PROPERTY AMENITIES</Typography>
                </Box>
                <List disablePadding className='propertyAmenitiesList'>
                  {
                    propertyAmenities.map((eachAmenities, index) => (
                      <ListItem key={index}>
                        {eachAmenities.eachAmenities}
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
              <Grid item md={6} xs={12} data-aos="fade-left">
                <figure className='propertyAmenitiesImg'>
                  <img src={assets.propertyAmenities} alt="" />
                </figure>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className="bookingRules cmn_gap cmn_gap_top">
          <Container fixed>
            <Box className="bookingRulesInner cmn_gap">
              <Box className="cmn_head">
                <Typography variant='h2'>BOOKING RULES</Typography>
              </Box>
              <Box className="bookingRulesInnerText">
                <Typography variant='body1'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae rem dolorem omnis quisquam animi, deserunt iure deleniti veritatis beatae soluta fugit pariatur quaerat, voluptatum maiores natus! Fugit nam repudiandae non!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quos dolores aut deleniti aliquam rem, quia consequuntur veniam! In nisi vel alias esse illum repellat aliquam consequuntur id architecto aspernatur?
                </Typography>
              </Box>
              <CustomButton buttonColor="white">
                SEE TERMS & CONDITIONS
              </CustomButton>

            </Box>
          </Container>
        </Box>
        {/* <NewsLetter /> */}
      </PropertyDetailsWrapperStyled>
    </Wrapper>

  )
}

export default PropertyDetails