import React from 'react'
import { ContactUsWrapperStyled } from '../styles/styledComponents/ContactUsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner';
import { assets } from '../json/assets';
import { Box, Container, Grid, List, ListItem, TextField, Typography } from '@mui/material';
import CustomButton from '../ui/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const TITLE = 'Teton Court Motel - Contact Us';
const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <Wrapper>
   <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
      <ContactUsWrapperStyled style={{ background: `url(${assets.contactUsBanner})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
        <CommonInnerBanner innerBannerImage={assets.contactUsBanner} innerBannerText="Contact Us" />
        <Box className="contactUs cmn_gap">
          <Container fixed>
            <Box className="contactUsForm">
              <Box className="cmn_head">
                <Typography variant='h2'>
                  CONTACT US
                </Typography>
              </Box>
              <Typography variant='body1'>
                Interested in booking your next stay at Teton Court Motel? We'd love to hear from you - contact us using the form below, and we'll get right back to you. We look forward to serving you.
              </Typography>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Grid container columnSpacing={4} rowSpacing={3}>
                  <Grid item lg={4} md={6} xs={12}>
                    <label htmlFor="name">Name:</label>
                    <TextField id="name" variant="outlined" {...register("Name", {required: "Please enter your name."})}  />
                    {errors.Name && (
                      <Typography variant='body1' className="errorMsg">{errors.Name?.message}</Typography>
                    )}
                  </Grid>
                  <Grid item lg={4} md={6} xs={12}>
                    <label htmlFor="email">Email:</label>
                    <TextField id="email" type='email' variant="outlined" {...register("Email", {required: "Please enter your email.", pattern: /^\S+@\S+$/i})} />
                    {errors.Email && (
                      <Typography variant='body1' className="errorMsg">{errors.Email?.message}</Typography>
                    )}
                  </Grid>
                  <Grid item lg={4} md={6} xs={12}>
                    <label htmlFor="phone">Phone:</label>
                    <TextField id="phone" type="tel" variant="outlined" {...register("Phone", {required: "Please enter your phone number.", minLength: 6, maxLength: 12})} />
                    {errors.Phone && (
                      <Typography variant='body1' className="errorMsg">{errors.Phone?.message}</Typography>
                    )}
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                    <label htmlFor="message">Message:</label>
                    <TextField multiline rows={3} id="message" variant="outlined" {...register("Message", {required: "Please enter your message."})} />
                    {errors.Message && (
                      <Typography variant='body1' className="errorMsg">{errors.Message?.message}</Typography>
                    )}
                  </Grid>
                </Grid>
                <Box className="contactFormSubmit">
                  <CustomButton className="contactFormSubmitBtn" buttonTypeSubmit buttonColor="black">
                    SUBMIT
                  </CustomButton>
                </Box>
              </form>
            </Box>
          </Container>
        </Box>
        <Box className="contactUsLocation cmn_gap">
          <div className="contactUsLocationInner">
          <Container maxWidth="xl">
            <Grid container columnSpacing={6} rowSpacing={3}>
              <Grid item md={6} xs={12} className='contactLocationCol'>
                <iframe className='contactLocationMap' title='Teton Court Motel location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2327222041195!2d-109.86190152438617!3d42.86793190286542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875796abc23c9e27%3A0xc1608bf7c8e5a7fd!2sTeton%20Court%20Motel!5e0!3m2!1sen!2sin!4v1712902104878!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} ></iframe>
              </Grid>
              <Grid item md={6} xs={12} className='contactUsInfoCol'>
                <Box className="contactUsInfo">
                  <Box className="cmn_head" textAlign="left">
                    <Typography variant='h2'>
                      SURROUNDINGS & DIRECTIONS
                    </Typography>
                  </Box>
                  <Typography variant='body1'>Conveniently located between 11th Street and Main Street:</Typography>

                  <List className='contactUsInfoList'>
                    <ListItem>Walking distance to the best shopping and restaurants</ListItem>
                    <ListItem>Quick giddy up to Frontier Times Museum and General Store</ListItem>
                    <ListItem>Located 1 hour from Downtown San Antonio and 2 hours from Austin</ListItem>
                    <ListItem>Take Route 16 or Highway 173 to arrive into Bandera</ListItem>
                    <ListItem>A scenic 45 minute drive to Fredericksburg's vineyards</ListItem>
                    <ListItem>Beautiful 20 mile drive to Lake Medina</ListItem>
                    <ListItem>Short 10 Miles to the Hill Country State Natural Park</ListItem>
                    <ListItem>Hilly 45 minute drive to Lost Maples State Natural Area</ListItem>
                    <ListItem>A stones throw away to the Medina River</ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
          </div>
            
        </Box>
      </ContactUsWrapperStyled>
    </Wrapper>
  )
}

export default ContactUs