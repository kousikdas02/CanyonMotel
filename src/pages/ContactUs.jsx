import React from 'react'
import { ContactUsWrapperStyled } from '../styles/styledComponents/ContactUsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import { Helmet } from 'react-helmet'


const TITLE = 'Teton Court Motel - Contact Us';
const ContactUs = () => {
  return (
    <Wrapper>
       <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <ContactUsWrapperStyled>ContactUs</ContactUsWrapperStyled>
    </Wrapper>
  )
}

export default ContactUs