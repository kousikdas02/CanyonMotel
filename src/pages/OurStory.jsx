import React from 'react'
import { OurStoryWrapperStyled } from '../styles/styledComponents/OurStoryWrapperStyled'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { Box, Container, Typography } from '@mui/material'
import { assets } from '../json/assets'
import Wrapper from '../layout/Wrapper/Wrapper'
import { Helmet, HelmetProvider } from 'react-helmet-async'


const TITLE = 'Teton Court Motel - Our Story';
const OurStory = () => {
  return (
    <Wrapper>
    <HelmetProvider>
         <Helmet>
           <title>{TITLE}</title>
         </Helmet>
       </HelmetProvider>
    <OurStoryWrapperStyled>
        <CommonInnerBanner innerBannerImage={assets.contactUsBanner} innerBannerText="Our Story" />
        <Box className="ourStory cmn_gap">
            <Container fixed>
                <Box className="cmn_head">
                    <Typography variant='h2'>Lorem Ipsum.</Typography>
                </Box>
                <Box className="ourStoryConent">
                    <figure className='ourStoryImg'>
                        <img src={assets.activitiy1} alt='' />
                    </figure>
             
                        <Typography variant='body1'>
                            Our story with the Jackalope Motor Lodge is grounded in our love for creating spaces where people <b>feel cared for, have fun, and find rest</b>.    
                        </Typography> 

                        <Typography variant='body1'>
                        We didnt set out in life dreaming of owning a motel to do all of that. However, sometimes life weaves together pieces of your story into an adventure that goes beyond your own imagination. And that is exactly what happened with us and the Jackalope. 
                        </Typography>
                        <Typography variant='h4'>
                            how we landed here…
                        </Typography>
                        <Typography variant='body1'>
                        We had lived an amazing big city life by the sea for a full decade, and our journey had been preparing us for some kind of change through career shifts, a global pandemic, the addition of a third little boy to our family, and a deep in your gut honest feeling. In the summer of 2020, our new friends had moved to Pinedale and invited us out to visit. After a short trip to see them, we quickly fell in love with the openness and kindness of the people, the beautiful scenery, and the slower pace of life that Wyoming provides. At one point in our visit we were driving by this vacant motel property and we noticed it was for sale. That was the first seed of curiosity planted where we started to connect the dots of our story to the idea that we could maybe just pull off turning over an older motel. 
                        </Typography>
                        <Typography variant='body1'>
                        We returned to our big city life, kept talking with friends and family through all of the ideas and what-ifs, and simply stayed stubbornly committed to figuring out how to purchase and revive this little corner of Pinedale. Well, our stubbornness paid off because here we are in Pinedale building something brand new through the birth of the Jackalope Motor Lodge.
                        </Typography>
                        <Typography variant='body1'>
                        Some tried and true values of ours are that people are what matter most, and connecting through our stories is where the best of life happens. 
                        </Typography>
                        <Typography variant='body1'>
                        As far as stories go, we’re almost past chapter one of our story. We purchased the Jackalope Motor Lodge on June 1st, 2021, and started renovations the very next day. The first round of renovations in that initial summer of 2021 looked like taking all of the rooms up to a baseline level - new beds, new paint, and a super deep scrubbing. In the winter of 2022 we moved deeper into the renovations by slowly taking each room offline and crafting it into what has now become the JML standard. As we head into 2023 and beyond we are continuing to dream about what this place can and will become. Each month we move closer to our final vision for what this property will become and we are so excited to unveil new amenities and upgrades regularly. We are certain that each time you visit you will find something fresh and new in this space! We would love for you to come and see what we are up to here at the Jack and experience the charm of this little town of Pinedale. 
                        </Typography>
                        <Typography variant='h4'>- <i>Lorem</i></Typography>
                    
                </Box>
            </Container>
        </Box>
    </OurStoryWrapperStyled>
    </Wrapper>
  )
}

export default OurStory