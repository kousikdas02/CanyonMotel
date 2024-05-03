import React, { useState } from 'react'
import { TermsConditionsWrapperStyled } from '../styles/styledComponents/TermsConditionsWrapperStyled'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { assets } from '../json/assets'
import Wrapper from '../layout/Wrapper/Wrapper'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, List, ListItem, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet, HelmetProvider } from 'react-helmet-async'
const TITLE = 'Canyon Motel - Terms and Conditions';
const TermsConditions = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Wrapper>
           <HelmetProvider>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </HelmetProvider>
            <TermsConditionsWrapperStyled style={{ background: `url(${assets.propertyDetailsBg})`, backgroundRepeat: "repeat", backgroundSize: "auto", backgroundPosition: "50% 50%", backgroundAttachment: "fixed", }}>
                <CommonInnerBanner innerBannerImage={assets.termsConditionsBanner} innerBannerText="TERMS & CONDITIONS" />
                <Box className="policy cmn_gap">
                    <Container fixed>
                        <Box className="cmn_head">
                            <Typography variant='h2'>OUR POLICIES</Typography>
                        </Box>
                        <Box className="policyAccordion">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Age Requirements
                                </AccordionSummary>

                                
                                <AccordionDetails>
                              
                                    <Typography variant='body1'>
                                    Guests must be at least 18 years old to book a hotel room and be able to provide proper identification upon arrival.
                                    </Typography>
         
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Cancellation Policy
                                </AccordionSummary>
                                <AccordionDetails>
                                    
                                    <List>
                                        <ListItem>
                                            For regular reservations, 48 hours.
                                        </ListItem>
                                        <ListItem>
                                        For hunters: 168 hours (7 days) advance
                                        </ListItem>
                                        <ListItem>
                                        Room cancellations must be made at least 48 hours prior to arrival  (7 days for hunters)  via email (info@canyonmotelcolorado.com) or phone (970)725-3395
                                        </ListItem>
                                        <ListItem>
                                        If cancellations are requested less than 48 hours (7 days for hunters)  prior to check-in, the penalty is the full amount of your reservation.
                                        </ListItem>
                                        <ListItem>
                                        No shows will be charged the full amount of your reservation.
                                        </ListItem>
                                        <ListItem>
                                        Reservations made through third-party sites (Expedia.com, Hotels.com, Booking.com, etc.) must be canceled on the site where you made your reservation. The same cancellation policy applies to reservations made on those sites as reservations made on our own site.
                                        </ListItem>
                                        
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    All Canyon Motel rooms are non-smoking
                                </AccordionSummary>
                                <AccordionDetails>
                                    
                                    <List>
                                        <ListItem>
                                        Please use buckets for butts and smoke outside  away from other guests' room windows.  
                                        </ListItem>
                                        <ListItem>
                                        A <b>$500</b> fee will be charged to your card for any evidence of smoking inside rooms.
                                        </ListItem>
                                        <ListItem>
                                        No burning candles or incense inside of the rooms.
                                        </ListItem>
                                    </List>
                                    
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                    Check-in and Check-out Policies
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Check-in begins at: <b>3:00 PM</b>
                                    </Typography>
                                    <Typography variant='body1'>
                                        Check-out ends at: <b>10:00 AM</b>
                                    </Typography>
                                    
                                    <List>
                                        <ListItem>
                                        Early check-in: earliest check-in will be 1:30 pm without charge, before 1:30 pm, $20 early check-in fee will be applied. Please give us a call on the morning of your arrival day.
                                        </ListItem>
                                        <ListItem>
                                        Check-out, please leave room keys at drop-box beside the entrance door outside of the office. For late check-out fee will be:
                                        <List>
                                            <ListItem>10 am -11 am, $20</ListItem>
                                            <ListItem>11 am -12 pm, $40</ListItem>
                                            <ListItem>12 pm - 1 pm, $60</ListItem>
                                            <ListItem>after 1 pm, a full night charge.</ListItem>
                                        </List>
                                        </ListItem>
                                    </List>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                    Pets Policies
                                </AccordionSummary>
                                <AccordionDetails>
                                   
                                    
                                    <List>
                                        <ListItem>
                                            There is a <b>$20/day</b> per pet fee. 
                                        </ListItem>
                                        <ListItem>
                                        Service animals and well-behaved pets are welcome.
                                        </ListItem>
                                        <ListItem>
                                        Pets are permitted unless they pose a health or safety risk or are prohibited by law.
                                        </ListItem>
                                        <ListItem>
                                        Pets must never be left unattended in rooms or not within your control.
                                        </ListItem>
                                        <ListItem>
                                        Please clean up after your pet.
                                        </ListItem>
                                        <ListItem>
                                        You are financially responsible for your pet's behavior - any damage, excessive and/or exceptional cleaning charge at Canyon Motel (This includes, but is not limited to: pet odors and pet stains).  
                                        </ListItem>
                                        <ListItem>Any injuries to Canyon Motel employees or motel guests caused by your pet are the responsibility of the pet owner
Please be mindful of and minimize barking, especially early in the morning.</ListItem>
                                    </List>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                    Cooking in rooms
                                </AccordionSummary>
                                <AccordionDetails>
                                   
                                    
                                    <List>
                                        <ListItem>
                                        There is <b>no cooking</b> in rooms without a kitchenette. 
                                        </ListItem>
                                        <ListItem>
                                        In kitchen rooms, please wash all used dishes, pots, and pans before your departure, or a $50 “dirty dishes fee” will be applied to your card.
                                        </ListItem>
                                        <ListItem>
                                        Please use the barbecue grill area at your convenience and remember to turn off the gas nozzle on the tank when finished.

                                        </ListItem>
                                        
                                    </List>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                   Room Damage/Missing Items/Excessive Cleaning
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                        If rooms are damaged or left extremely dirty during a stay, guests will be charged the amount it costs to replace the damaged item +$50.00 /hr labor to return the room to its original state.
                                        </ListItem>
                                        <ListItem>
                                        This includes not limited to missing/damaged bedding, towels, windows, TVs, window screens, appliances, fixtures, furniture, doors, lights mirrors, etc.
                                        </ListItem>
                                    </List>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                   Towels
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                        Please do not use towels/washcloths for makeup removal, hair dying, clean shoes/car/bike/dishes, as the stains will stay permanently.
                                        </ListItem>
                                        <ListItem>
                                        If you do, you will be charged for the cost of replacement.
                                        </ListItem>
                                        <ListItem>
                                        If needed, we do provide you free makeup removal pad, clean rags.
                                        </ListItem>
                                    </List>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                   Lost Keys
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>A $10 lost key charge will be assessed to the credit card on file if the room key isn't returned at check-out.</Typography>
                                   
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                   Forms of payment
                                </AccordionSummary>
                                <AccordionDetails>
                                <List>
                                        <ListItem>
                                        We accept credit card Visa, MasterCard, Discover only. No AMEX.
                                        </ListItem>
                                        <ListItem>
                                        You can pay cash when check-in, but we require your valid credit card information for incidentals.  Sorry, no personal checks.

                                        </ListItem>
                                        <ListItem>
                                        We do authorize your credit card $50 upon check-in.
                                        </ListItem>
                                    </List>
                                   
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                   Notice about invalid/declined cards
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>When making a reservation, please provide a valid credit card, on busy days, we will charge your card within 48 hours prior to your arrival.</Typography>
                                   <Typography variant='body1'>
                                   <b>If your card is declined</b>, we normally contact you by phone calls, email or messages through third-party booking websites (e.g. Booking.com).  If you don't respond within a certain time, your reservations will no longer be guaranteed.  It therefore is our option to resell the room or hold the room for you.  iDuring busy times, we get many requests for rooms, and if we don't hear from you, we will most likely resell the room.  Therfore, we ask that you provide a valid credit card to hold a room for you. 
                                   </Typography>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                   Housekeeping
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>On a multiple night stay, we will only exchange towels & refresh toiletries upon request.</Typography>
                                  
                                   
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                    </Container>

                </Box>
                <Box className="policy cmn_gap">
                    <Container fixed>
                        <Box className="cmn_head">
                            <Typography variant='h2'>FREQUENTLY ASKED QUESTIONS</Typography>
                        </Box>

                        <Box className="policyAccordion">
                            <Accordion expanded={expanded === 'faqpanel1'} onChange={handleChange('faqpanel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel1-content"
                                    id="faqpanel1-header"
                                >
                                    Do you allow pets?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Yes, we accept well-behaved pets in some rooms. All pets must be declared in advance. A separate pet fee applies ($25 per pet for your entire stay). If pets are not delcared or underdeclared, we will charge a $100 cleaning fee for each undeclared pet. Pets must be housebroken or a separate refundable deposit against cleaning needs to be made.
                                    </Typography>
                                    <Typography variant='body1'>
                                        A pet fee is charged if a pet enters the room.
                                    </Typography>
                                    <Typography variant='body1'>
                                        Nearly all of the pets that stay with us are well-behaved, however, to ensure the enjoyment of all guests, pets cannot be left alone in the rooms nor can they create a nuisance by making excessive noise.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel2'} onChange={handleChange('faqpanel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel2-content"
                                    id="faqpanel2-header"
                                >
                                    What are your check-in/check-out times?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Check-in begins at 4 PM. Check-out is 10 AM. We do allow earlier check-ins and later check-outs if arranged in advance. Sometimes an additional fee will apply. Please see our policies for more information.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel3'} onChange={handleChange('faqpanel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel3-content"
                                    id="faqpanel3-header"
                                >
                                    Do you have a swimming pool?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        As with all of the smaller properties in town, we do not have a swimming pool. However, Pinedale has an excellent aquatic center that is open to the public and is located four blocks from the Canyon. It offers an Olympic sized indoor pool with lap lanes, a shallow pool with slides and a lazy river, and a hot tub. It also offers a full gym, and a rock climbing wall.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'faqpanel4'} onChange={handleChange('faqpanel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel4-content"
                                    id="faqpanel4-header"
                                >
                                    What hours are your office and lobby open?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Between late May/early June and late September, the Canyon office is open from 9 AM to 9 PM each day. We reside on the property so can arrange for arrivals after hours if necessary. Late arrivals can be arranged by calling or texting (307) 367-3367 or by emailing us in advance.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel5'} onChange={handleChange('faqpanel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel5-content"
                                    id="faqpanel5-header"
                                >
                                    Are you open year round?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        No, we are a seasonal property and open from late May/early June to late September each year.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel6'} onChange={handleChange('faqpanel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel6-content"
                                    id="faqpanel6-header"
                                >
                                    Do your rooms have air conditioning and heat?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        All rooms have heating.
                                    </Typography>
                                    <Typography variant='body1'>
                                        We do offer two types of rooms. Most of our rooms have quiet fans, but we also offer air conditioned rooms with 2 double beds.
                                    </Typography>
                                    <Typography variant='body1'>
                                        Due to the high elevation (nearly 7200 ft, or 2200 meters above sea level) and the crisp, dry air of Pinedale, summer days are warm but summer nights usually drop to the upper 30s to low 40s Fahrenheit (4-7 degrees Celsius). Most local residents and many guests find that a fan is sufficient for a comfortable night's sleep.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>


                        </Box>

                    </Container>
                </Box>
                <Box className="policy cmn_gap">
                    <Container fixed>
                        <Box className="cmn_head">
                            <Typography variant='h2'>Cookie Statements</Typography>
                        </Box>

                        <Box className="policyAccordion">
                            <Accordion expanded={expanded === 'faqpanel1'} onChange={handleChange('faqpanel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel1-content"
                                    id="faqpanel1-header"
                                >
                                    Do you allow pets?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Yes, we accept well-behaved pets in some rooms. All pets must be declared in advance. A separate pet fee applies ($25 per pet for your entire stay). If pets are not delcared or underdeclared, we will charge a $100 cleaning fee for each undeclared pet. Pets must be housebroken or a separate refundable deposit against cleaning needs to be made.
                                    </Typography>
                                    <Typography variant='body1'>
                                        A pet fee is charged if a pet enters the room.
                                    </Typography>
                                    <Typography variant='body1'>
                                        Nearly all of the pets that stay with us are well-behaved, however, to ensure the enjoyment of all guests, pets cannot be left alone in the rooms nor can they create a nuisance by making excessive noise.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel2'} onChange={handleChange('faqpanel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel2-content"
                                    id="faqpanel2-header"
                                >
                                    What are your check-in/check-out times?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Check-in begins at 4 PM. Check-out is 10 AM. We do allow earlier check-ins and later check-outs if arranged in advance. Sometimes an additional fee will apply. Please see our policies for more information.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel3'} onChange={handleChange('faqpanel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel3-content"
                                    id="faqpanel3-header"
                                >
                                    Do you have a swimming pool?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        As with all of the smaller properties in town, we do not have a swimming pool. However, Pinedale has an excellent aquatic center that is open to the public and is located four blocks from the Canyon. It offers an Olympic sized indoor pool with lap lanes, a shallow pool with slides and a lazy river, and a hot tub. It also offers a full gym, and a rock climbing wall.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'faqpanel4'} onChange={handleChange('faqpanel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel4-content"
                                    id="faqpanel4-header"
                                >
                                    What hours are your office and lobby open?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        Between late May/early June and late September, the Canyon office is open from 9 AM to 9 PM each day. We reside on the property so can arrange for arrivals after hours if necessary. Late arrivals can be arranged by calling or texting (307) 367-3367 or by emailing us in advance.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel5'} onChange={handleChange('faqpanel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel5-content"
                                    id="faqpanel5-header"
                                >
                                    Are you open year round?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        No, we are a seasonal property and open from late May/early June to late September each year.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'faqpanel6'} onChange={handleChange('faqpanel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faqpanel6-content"
                                    id="faqpanel6-header"
                                >
                                    Do your rooms have air conditioning and heat?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        All rooms have heating.
                                    </Typography>
                                    <Typography variant='body1'>
                                        We do offer two types of rooms. Most of our rooms have quiet fans, but we also offer air conditioned rooms with 2 double beds.
                                    </Typography>
                                    <Typography variant='body1'>
                                        Due to the high elevation (nearly 7200 ft, or 2200 meters above sea level) and the crisp, dry air of Pinedale, summer days are warm but summer nights usually drop to the upper 30s to low 40s Fahrenheit (4-7 degrees Celsius). Most local residents and many guests find that a fan is sufficient for a comfortable night's sleep.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>


                        </Box>

                    </Container>
                </Box>
            </TermsConditionsWrapperStyled>
        </Wrapper>
    )
}

export default TermsConditions