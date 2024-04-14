import React from 'react'
import { ActivitiesWrapperStyled } from '../styles/styledComponents/ActivitiesWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import { assets } from '../json/assets'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter'
import { Box, Container, Grid, Typography } from '@mui/material'
import CustomButton from '../ui/CustomButton/CustomButton'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export const activityData = [
  {
    img: assets.activitiy1,
    title: "HORSEBACK RIDING",
    textContent: [
      {
        eachText: "Saddle up and explore the city of Bandera the best way possible, on a horse!  Whether you're an experienced equestrian, or want to just ride for the first time, Outlaw Outfitters has what you're looking for.  They will take you down the scenic Medina River and look at the wildlife, or ride into town, and grab a refreshment at one of the saloons.  Or, get out of the city and go back in time to enjoy 5400 acres of remote, primitive, quiet hills with spectacular views for miles.  Ride with the best to experience the beauty of the Bandera Texas Hill Country!",
      },
      {
        eachText: "For more information on Outlaw Outfitters, click on the Learn More tab below to visit their website."
      },
    ],
    linkPath: "https://www.google.com/",
    aos: "normal",
  },
  {
    img: assets.activitiy2,
    title: "SCENIC RIDES",
    textContent: [
      {
        eachText: "Always one of the top-rated drives in North America commonly referred to as the Three Sisters or 3 Twisted Sisters, Highways 335, 336, and 337 has its beginnings in the town of Medina.  This 100-mile loop is, without a doubt, among the best, most challenging motorcycle rides in the state. The route follows canyons and climbs jagged, steep hills; the roads offer many tight, twisty curves with shear drop offs alongside and not much in the way of guardrails. In one 15-mile section, there are approximately 65 curves! Even the most experienced riders will squeeze that handle just a bit tighter.",
      },
    ],
    linkPath: "https://www.google.com/",
    aos: "reverse",
  },
  {
    img: assets.activitiy3,
    title: "SHOPPING",
    textContent: [
      {
        eachText: "Whether you're looking to shop for a new pair of boots, t-shirts, furniture, or crafts made from a Texas artisan, you will be sure to find it in Bandera.  One Texas store stands out from the crowd, the Spirits of Texas shop.  A quick 1 minute walk from your cabin, this little Texas shop has everything you might be looking for, and it's probably been made in Texas.  From Kinky Friedman's Man in Black Tequila, or bubbling soda's, this little shop has everything you might need.",
      },
      {
        eachText: "For more information on the Spirit of Texas, click on the Learn More tab below to visit their website.",
      },
    ],
    linkPath: "https://www.google.com/",
    aos: "normal",
  },
  {
    img: assets.activitiy4,
    title: "DINING",
    textContent: [
      {
        eachText: "With many restaurants to choose from within walking distance of your cabin, TJ’s @ The Old Forge Restaurant and Bar stands out as one that is a must try while in Bandera.  An American full-service restaurant and bar, TJ’s@ The Old Forge atmosphere is modern western. The restaurant is 5,400 square feet upstairs and downstairs with a full bar on each floor and covered outside seating. TJ’s has an 80″ projection TV and several big screen TVs upstairs and downstairs to watch your favorite sports event.  The menu includes steaks, seafood, burgers, sandwiches, pastas and other delicious entrees, appetizers and desserts.  They are a perfect venue for events such as wedding receptions, business meetings, reunions, etc.",
      },
      {
        eachText: "For more information on TJ's @ The Old Forge, click on the Learn More tab below to visit their website.",
      },
    ],
    linkPath: "https://www.google.com/",
    aos: "reverse",
  },
  {
    img: assets.activitiy5,
    title: "NIGHTLIFE",
    textContent: [
      {
        eachText: "WIth all the honky tonk bars and dance halls you can boot scootin' boogie to, one bar stands out from the rest.  The 11th Street Cowboy Bar, the biggest little bar in Texas, is a quick 1 minute walk from your cabin.  With dancing and live music, you never know what famous musician is going to be playing that night.  Join them on Wednesday nights, for Steak Night.  Just bring your own meat, and grill it on their Texas sized BBQ grills, they provide all the fixings.",
      },
      {
        eachText: "For more information on 11th Street Cowboy Bar, click on the Learn More tab below to visit their website.",
      },
    ],
    linkPath: "https://www.google.com/",
    aos: "normal",
  },
]

const TITLE = 'Teton Court Motel - Activities';
const Activities = () => {
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <ActivitiesWrapperStyled style={{ background: `url(${assets.activityBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        <CommonInnerBanner innerBannerImage={assets.activitiyBanner} innerBannerText="THINGS TO DO IN BANDERA, TEXAS" />
        <Box className="activityWrap">
          {
            activityData.map((eachData, index) => (
              <Box className="activityEach cmn_gap" key={index}>
                <Container fixed>
                  <Grid container columnSpacing={5} rowSpacing={4}>
                    <Grid item md={6} xs={12} data-aos={eachData.aos === "normal" ? "fade-right" : eachData.aos === "reverse" && "fade-left"}>
                      <figure className="activityImg">
                        <img src={eachData.img} alt="activity" />
                      </figure>
                    </Grid>
                    <Grid item md={6} xs={12} data-aos={eachData.aos === "normal" ? "fade-left" : eachData.aos === "reverse" && "fade-right"}>
                      <Box className="activityContent">
                        <Box className="cmn_head" textAlign="left">
                          <Typography variant='h2'>{eachData.title}</Typography>
                        </Box>
                        <Box className="activityContentText">
                          {
                            eachData.textContent.map((eachText, index) => {
                              return (
                                <Typography variant='body1' key={index}>{eachText.eachText}</Typography>
                              )
                            })
                          }
                        </Box>
                        <CustomButton buttonColor="black" onClick={() => window.open(`${eachData.linkPath}`, '_blank')}>
                          LEARN MORE
                        </CustomButton>
                      </Box>
                    </Grid>
                  </Grid>

                </Container>
              </Box>
            ))
          }
        </Box>
        {/* <NewsLetter /> */}
      </ActivitiesWrapperStyled>
    </Wrapper>
  )
}

export default Activities