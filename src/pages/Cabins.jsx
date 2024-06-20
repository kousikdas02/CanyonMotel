import React from 'react'
import { CabinsWrapperStyled } from '../styles/styledComponents/CabinsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { assets } from '../json/assets'
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import CustomButton from '../ui/CustomButton/CustomButton'
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter'
import CabinCommonImageSlider from '../components/CabinCommonImageSlider/CabinCommonImageSlider'
import { Helmet, HelmetProvider } from 'react-helmet-async'



const cabinData = [
  {
    title: "Deluxe Queen Room with Kitchenette",
    subtitle: "2 Queen sized beds",
    persons: "Deluxe Queen Room sleep maximum 6 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "Cable television",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "A kitchenette with stove top",
      },
      {
        amenities: "110-120 volt circuits",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "Refigerator",
      },

    ],
    roomSize: "280ft2, include 2 Queen sized beds, both mattress were updated to Serta Presidential Suite II Pillow Top in May 2017, the mattress was worth $1,300.00; 1 sofa rolls out to a double bed. ",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
  {
    title: "Queen Room with Two Queen Beds",
    subtitle: "2 Queen sized beds",
    persons: "Queen Room with Two Queen Beds sleeps maximum 4 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "Cable television",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "Telephone",
      },
      {
        amenities: "Refrigerator",
      },
      {
        amenities: "110-120 volt circuits",
      },
      {
        amenities: "Coffee maker",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Pay-per-view channels",
      },
      {
        amenities: "Free toiletries",
      },
      {
        amenities: "Alarm clock",
      },

    ],
    roomSize: "288 ft2, include 2 Queen sized beds, both mattress were updated to Serta Presidential Suite II Pillow Top at  May 2017, mattress was worth $1,300.00.  This room has shower, has a seating area and a flat-screen cable TV with a DVD player. A microwave, a refrigerator and coffee-making facilities are also provided. ",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
  {
    title: "King Room with Spa Bath",
    subtitle: "2 Double Beds",
    persons: "The rooms sleep maximum 2 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "Cable television - fee",
      },
      {
        amenities: "Coffee maker",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Pay-per-view channels",
      },
      {
        amenities: "Spa tub",
      },
      {
        amenities: "Alarm clock",
      },
      {
        amenities: "Refrigerator",
      },
      {
        amenities: "110-120 volt circuits",
      },
      {
        amenities: "Ceiling fan",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "Telephone",
      },
      {
        amenities: "Free toiletries",
      },

    ],
    roomSize: "King Room with Spa Bath is our nicest room, many guests love it. This room has 1 King Sized bed, mattress is Serta Presidential Suite II Pillow Top, very comfortable. It also has a Jetted tub, the bathroom is very nice.",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
  {
    title: "Basic Queen Bed",
    subtitle: " The rooms sleep maximum 2 adults",
    persons: "The Superior Doubles are our largest rooms. These rooms sleep 1-4 (some rooms sleep more than 4)",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "Cable television",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "110-120 volt circuits",
      },
      {
        amenities: "Ceiling fan",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Refridgerator",
      },
      

    ],
    roomSize: "The room size is very small, good for 1 person, Okay for 2 people. But both rooms, we updated carpet , mattress at May 2017, mattress are Serta Presidential Suite II Pillow Top, comfortable. For room 6, the bathroom was remodeled at May 2017, has nice shower. Both rooms, have mini fridge, microwave, flat screen tv. ",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
  {
    title: "King Room",
    subtitle: "1 King sized bed",
    persons: "The rooms sleep maximum 2 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "two comfortable double/full sized beds",
      },
      {
        amenities: "Cable television",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Pay-per-view channels",
      },
      {
        amenities: "Free toiletries",
      },
      {
        amenities: "Alarm clock",
      },
      {
        amenities: "110-120 volt circuits",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "Telephone",
      },
      {
        amenities: "Refrigerator",
      },

    ],
    roomSize: "Room include 1 King sized bed and a chair pull out a twin sized bed.  The mattress was updated to Serta Presidential Suite II Pillow Top at May 2017.  This room features mountain views, a private entrance and a flat-screen cable TV with a DVD player. A microwave, a refrigerator and coffee-making facilities are also provided. ",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
      assets.cabinImage4,
      assets.cabinImage5,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
  {
    title: "Standard Room",
    subtitle: "1 Queen and 1 Double beds",
    persons: "The rooms sleep maximum 4 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "Cable television",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "AM / FM radio",
      },
      {
        amenities: "Pay-per-view channels",
      },
      {
        amenities: "Toiletries",
      },
      {
        amenities: "Outdoor dining area",
      },
      {
        amenities: "Coffee maker",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "Telephone",
      },
      {
        amenities: "Alarm clock",
      },
      {
        amenities: "Refrigerator",
      },

    ],
    roomSize: "Room has 1 Queen and 1 Double beds, queen mattress was updated to Serta Presidential Suite II Pillow Top May 2017, worth $1,300. Queen bed and Double bed are not side by side, but 90 degree.  Rooms feature mountain and city view, a private entrance and a flat-screen cable TV with a DVD player. A microwave, a refrigerator and coffee-making facilities are also provided.",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
      assets.cabinImage4,
      assets.cabinImage5,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
  {
    title: "King Room with Kitchennette",
    subtitle: "1 king sized bed",
    persons: "The rooms sleep maximum 4 adults",
    roomAmenitiesTitle: "Room Amenities :",
    roomAmenitiesList: [
      {
        amenities: "Cribs upon request",
      },
      {
        amenities: "Cable television",
      },
      {
        amenities: "Hairdryer",
      },
      {
        amenities: "AM / FM radio",
      },
      {
        amenities: "Pay-per-view channels",
      },
      {
        amenities: "Toiletries",
      },
      {
        amenities: "Outdoor dining area",
      },
      {
        amenities: "Coffee maker",
      },
      {
        amenities: "Microwave",
      },
      {
        amenities: "Wireless internet (WiFi)",
      },
      {
        amenities: "Telephone",
      },
      {
        amenities: "Alarm clock",
      },
      {
        amenities: "Refrigerator",
      },

    ],
    roomSize: "Has 1 king sized bed, with kitchen. The mattress is Serta Presidential Suite II  Pilow Top, comfortable. Room has shower, mini fridge, microwave and flat screen tv.",
    cabinImageSliderList: [
      assets.cabinImage1,
      assets.cabinImage2,
      assets.cabinImage3,
      assets.cabinImage4,
      assets.cabinImage5,
    ],
    linkPath: "https://hotels.cloudbeds.com/en/reservation/Eh6jxv?ga_sess_id=1173083113.1718897226",
  },
]

const TITLE = 'Canyon Motel - Cabins';
const Cabins = () => {
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <CabinsWrapperStyled style={{ background: `url(${assets.cabinBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        
        <CommonInnerBanner innerBannerImage={assets.cabinBanner} innerBannerText="Our Rooms" />

        <Box className="eachCabinWrap">
          {
            cabinData.map((cabin, index) => {
              return (
                <Box className="eachCabin cmn_gap" key={index}>
                  <Box className="eachCabinInner">
                    <Container maxWidth="xl">
                      <Grid container>
                        <Grid item lg={6} xs={12} className='cabinImgSlider'>
                          {
                            <CabinCommonImageSlider cabinImageSliderList={cabin.cabinImageSliderList} />
                          }
                        </Grid>
                        <Grid item lg={6} xs={12} className='cabinContentCol'>
                          <Box className="cmn_head">
                            <Typography variant='h2'>{cabin.title}</Typography>
                          </Box>
                          <Typography variant='h5'>{cabin.subtitle}</Typography>

                          <Typography variant='body1'><b>Room size :</b> {cabin.roomSize}</Typography>
                          <Typography variant='h6'>{cabin.roomAmenitiesTitle}</Typography>
                          <List disablePadding className='roomAmenitiesList'>
                            {
                              cabin.roomAmenitiesList.map((item, index) => (
                                <ListItem key={index}>
                                  {item.amenities}
                                </ListItem>
                              ))
                            }
                          </List>
                          <Typography variant='body1' className='personPerRoom'><b>Occupancy:</b> {cabin.persons}</Typography>
                          <CustomButton buttonColor="black" onClick={() => window.open(cabin.linkPath, '_blank')}>
                            BOOK NOW
                          </CustomButton>
                        </Grid>
                      </Grid>
                    </Container>

                  </Box>
                </Box>
              )
            })
          }

        </Box>
        {/* <NewsLetter /> */}


      </CabinsWrapperStyled>
    </Wrapper>
  )
}

export default Cabins