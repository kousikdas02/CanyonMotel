import React from 'react'
import { HomeWrapperStyled } from '../styles/styledComponents/HomeWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import HomeMotelInfo from '../components/HomeMotelInfo/HomeMotelInfo'
import HomeReasonToBook from '../components/HomeReasonToBook/HomeReasonToBook'
import HomeCabinActivity from '../components/HomeCabinActivity/HomeCabinActivity'
import HomeCowboy from '../components/HomeCowboy/HomeCowboy'
import HomeBookStay from '../components/HomeBookStay/HomeBookStay'
import Testimonial from '../components/Testimonial/Testimonial'
import HomeContact from '../components/HomeContact/HomeContact'
import HomeGallery from '../components/HomeGallery/HomeGallery'
import OurLocation from '../components/OurLocation/OurLocation'
// eslint-disable-next-line no-unused-vars
import NewsLetter from '../components/NewsLetter/NewsLetter'
import { assets } from '../json/assets'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const TITLE = 'Canyon Motel - Home';

const Home = () => {
  return (
    <Wrapper>
     <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <HomeWrapperStyled style={{ background: `url(${assets.homeBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        <HomeBanner />
        <HomeMotelInfo />
        <HomeReasonToBook />
        <HomeCabinActivity />
        <HomeCowboy />
        <HomeBookStay />
        <Testimonial />
        <HomeContact />
        <HomeGallery />
        <OurLocation />
        {/* <NewsLetter /> */}
      </HomeWrapperStyled>

    </Wrapper>
  )
}

export default Home