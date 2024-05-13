/* eslint-disable no-useless-escape */
import React, { useRef, useState } from 'react'
import { ContactUsWrapperStyled } from '../styles/styledComponents/ContactUsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner';
import { assets } from '../json/assets';
import { Box, Container, Grid, List, ListItem, Stack, TextField, Typography } from '@mui/material';
import CustomButton from '../ui/CustomButton/CustomButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import * as yup from 'yup' // importing functions from yup library
const TITLE = 'Canyon Motel - Contact Us';



export const userLogin = yup.object({
  // name can not be an empty string so we will use the required function
  name: yup.string().required("Please enter your name."),
  // email can not be an empty string so we will use the required function
  email: yup.string().email("Provide a valid Email address...").required("Please enter your email."),
  phone: yup.string().required("Please enter your phone number."),
  message: yup.string().required("Please enter your message."),
});


const ContactUs = () => {

  const form = useRef();
  const sendEmail = () => {
    emailjs.sendForm('service_1vrguon', 'template_e2f8fka', form.current, {
      publicKey: 'ZZA3R9qG5CaupXiwA',

    })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const formFields = { ...fields };
    const formErrors = {};
    let formIsValid = true;

    //Name
    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "Please enter your name.";
    }

    if (typeof formFields["name"] !== "undefined") {
      if (!formFields["name"].match(/^[a-zA-Z -]*$/)) {
        formIsValid = false;
        formErrors["name"] = "Only letters";
      }
    }

    //Email
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "Please enter your email.";
    }
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (typeof formFields["email"] !== "undefined") {

      if (!formFields["email"].match(isValidEmail)) {
        formIsValid = false;
        formErrors["email"] = "Invalid email.";
      }
    }
    const isValidPhone = /^[0-9\b\+\-\(\)]+$/;
    //Phone
    if (!formFields["phone"]) {
      formIsValid = false;
      formErrors["phone"] = "Please enter your phone number.";
    }

    if (typeof formFields["phone"] !== "undefined") {
      if (!formFields["phone"].match(isValidPhone)) {
        formIsValid = false;
        formErrors["phone"] = "Only numbers";
      }
    }

    //Phone
    if (!formFields["message"]) {
      formIsValid = false;
      formErrors["message"] = "Please enter your message.";
    }

    setErrors(formErrors)
    return formIsValid;
  }

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value
    })
    handleValidation();
  }

  // custom captcha
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const generateNewQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  };

  const handleCaptchaSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setIsCorrect(true);
      generateNewQuestion();
    } else {
      setIsCorrect(false);
      generateNewQuestion();
    }
    setUserAnswer('');
  };

  const handleCaptchaChange = (event) => {
    setUserAnswer(event.target.value);
  };
  const contactSubmit = (e) => {
    e.preventDefault();
    // if (handleValidation()) {
      if (isCorrect) {
        alert("Form submitted");
        sendEmail();
        setFields({});
      }
     else {
      // alert("Form has errors.")
    }
  }







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
                Interested in booking your next stay at Canyon Motel? We'd love to hear from you - contact us using the form below, and we'll get right back to you. We look forward to serving you.
              </Typography>
              <form ref={form} onSubmit={contactSubmit} >
                <Grid container columnSpacing={4} rowSpacing={3}>
                  <Grid item lg={4} md={6} xs={12}>
                    <label htmlFor="from_name">Name: <Typography variant='caption'>(Required)</Typography></label>
                    <TextField id="from_name" name="from_name" variant="outlined"
                      onChange={e => handleChange('name', e.target.value)} value={fields["name"] || ''}
                    />
                    <Typography variant='body1' className="errorMsg">{errors["name"]}</Typography>
                  </Grid>
                  <Grid item lg={4} md={6} xs={12}>
                    <label htmlFor="from_email">Email: <Typography variant='caption'>(Required)</Typography></label>
                    <TextField id="from_email" name="from_email" variant="outlined"
                      onChange={e => handleChange('email', e.target.value)} value={fields["email"] || ''}
                    />
                    <Typography variant='body1' className="errorMsg">{errors["email"]}</Typography>
                  </Grid>
                  <Grid item lg={4} md={6} xs={12}>
                    <label htmlFor="from_phone">Phone: <Typography variant='caption'>(Required)</Typography></label>
                    <TextField id="from_phone" type="tel" name="from_phone" variant="outlined"
                      onChange={e => handleChange('phone', e.target.value)} value={fields["phone"] || ''}
                    />
                    <Typography variant='body1' className="errorMsg">{errors["phone"]}</Typography>
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                    <label htmlFor="from_message">Message: <Typography variant='caption'>(Required)</Typography></label>
                    <TextField multiline rows={3} id="from_message" name="from_message" variant="outlined"
                      onChange={e => handleChange('message', e.target.value)} value={fields["message"] || ''}
                    />
                    <Typography variant='body1' className="errorMsg">{errors["message"]}</Typography>
                  </Grid>
                </Grid>
                {
                  !isCorrect === true &&
                  <Box className="customCaptcha">
                    <Typography variant='body1' className='catchaInfoText'>Help us fight spam! Answer the simple math question in the following field:</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant='body1'>{num1} + {num2} =</Typography>
                      <TextField id="captcha" value={userAnswer || ''} name="captcha" variant="outlined" onChange={handleCaptchaChange} />

                    </Stack>

                    {isCorrect === false && <Typography textAlign={'left'} className='catchaError' variant='body1'>Invalid captcha, please try again.</Typography>}

                    <CustomButton className="contactFormSubmitBtn" buttonTypeSubmit buttonColor="black" onClick={handleCaptchaSubmit}>
                      SUBMIT
                    </CustomButton>
                  </Box>
                }

                <Box className="contactFormSubmit">

                  <CustomButton className="contactFormSubmitBtn" buttonTypeSubmit buttonColor="black" disabled={!isCorrect}>
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
               
                  <iframe className='contactLocationMap' title='Canyon Motel location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.108991537721!2d-106.10590002400603!3d40.07298087149702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a217b91158a61%3A0xccc6684bc327e6b9!2sCanyon%20Motel!5e0!3m2!1sen!2sin!4v1714733641605!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} ></iframe>
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