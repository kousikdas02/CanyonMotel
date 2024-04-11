import React from 'react'
import { HomeWrapperStyled } from '../styles/styledComponents/HomeWrapperStyled'
import Header from '../layout/Header/Header'
import Wrapper from '../layout/Wrapper/Wrapper'
import HomeBanner from '../components/HomeBanner/HomeBanner'


const Home = () => {
  return (
    <Wrapper>
      <HomeWrapperStyled>
        <HomeBanner />
        Home
      </HomeWrapperStyled>

    </Wrapper>
  )
}

export default Home