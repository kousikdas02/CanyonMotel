import React, { useState } from 'react'
import { TermsConditionsWrapperStyled } from '../styles/styledComponents/TermsConditionsWrapperStyled'
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner'
import { assets } from '../json/assets'
import Wrapper from '../layout/Wrapper/Wrapper'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, List, ListItem, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet, HelmetProvider } from 'react-helmet-async'
const TITLE = 'Teton Court Motel - Terms and Conditions';
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
                                    Booking and Cancellation Policies
                                </AccordionSummary>

                                
                                <AccordionDetails>
                                    <Typography variant='h6'>Cancellation Policy:</Typography>
                                    <Typography variant='body1'>
                                        <b>For regular reservations made through us:</b> 72 hours, or by 6 PM local time three days prior to the first night of your stay.
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            Room cancellations must be made at least 72 hours (7 days for hunters) prior to arrival via email (res@tetoncourt.com) or phone (307) 367-3367.
                                        </ListItem>
                                        <ListItem>If cancellations are requested less than 72 hours (7 days for hunters) prior to check in, the penalty is the <b>full amount</b> of your reservation.</ListItem>
                                        <ListItem>No shows will be charged the <b>full amount</b> of your reservation.</ListItem>
                                        <ListItem>Reservations made through third-party sites (Expedia.com, Hotels.com, Booking.com etc.) may have longer cancellation policies and those policies would apply instead. Reservations booked on those websites <b>must</b> be canceled on the website where you made your reservation.</ListItem>
                                    </List>

                                    <Typography variant='h6'>Forms of payment::</Typography>
                                    <List>
                                        <ListItem>
                                            We accept the following credit cards: Visa, MasterCard, Discover and American Express.
                                        </ListItem>
                                        <ListItem>
                                            You may pay cash when you check-in, but we require valid credit card information to cover incidentals.
                                        </ListItem>
                                        <ListItem>
                                            We don't accept personal checks in most situations.
                                        </ListItem>
                                    </List>

                                    <Typography variant='body1'>When making a reservation, please provide a valid credit card.</Typography>
                                    <List>
                                        <ListItem>
                                            We reserve the right to charge or authorize your card up to 72 hours prior to your arrival.
                                        </ListItem>
                                        <ListItem>
                                            If your card is declined, we will attempt to contact you by the phone number we have on your reservation, by email, or by messages through a third-party booking website (if you made them through that website).
                                        </ListItem>
                                        <ListItem>
                                            If your card is declined and we don't get a response within a reasonable amount of time, your reservations will become non-guaranteed, which means we have the right to resell your room.
                                        </ListItem>
                                        <ListItem>
                                            We normally receive last-minute guests looking for rooms; if we don't hear from you by 4 PM on the day of your planned arrival, we may sell the room.
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Pet Policies
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        We accept pets in <b>some</b> rooms, however, we have rooms that need to remain pet-free to accommodate our guests with pet allergies.
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            All pets traveling with you that enter our property need to be declared in advance or upon arrival. A pet fee is required if the pet enters the room for any duration of time.
                                        </ListItem>
                                        <ListItem>
                                            A separate pet fee applies for all pets (some exceptions apply). This is not included in your rate through third-party websites and is due when checking in.
                                        </ListItem>
                                        <ListItem>
                                            The pet fee is $15 per pet per night (may be negotiable for multiple night stays).
                                        </ListItem>
                                        <ListItem>
                                            If pets are not declared (or underdeclared), a $50 cleaning fee will be charged for each pet not delcared in advance or at check-in.
                                        </ListItem>
                                        <ListItem>
                                            Pets must be housebroken or a separate deposit must be taken.
                                        </ListItem>
                                        <ListItem>
                                            Please clean up after your pet while on our property.
                                        </ListItem>
                                        <ListItem>
                                            Pets must never be left unattended in rooms or not within your control.
                                        </ListItem>
                                        <ListItem>
                                            Guests are financially responsible for their pet's (or their guest's pet's) behavior, any damage, excessive and/or exceptional cleaning charge may apply. This includes, but is not limited to: pet odors and pet stains.
                                        </ListItem>
                                        <ListItem>
                                            Do not bathe your pet in the room without checking with us first, otherwise a cleaning fee may apply. In many cases, we can provide water and towels for you to clean your pet outside of the room.
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
                                    Room Deposit and Damage Polices
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body1'>
                                        <b>All Teton Court Motel rooms are non-smoking</b> of any kind, including cigarettes, cigars, marijuana, incense, and peace pipes.
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            Please use buckets for butts and smoke outside in areas away from other guest's room windows.
                                        </ListItem>
                                        <ListItem>
                                            A $500 fee will be charged to your card for any evidence of smoking inside rooms.
                                        </ListItem>
                                        <ListItem>
                                            No burning of candles or incense inside of the rooms.
                                        </ListItem>
                                    </List>
                                    <Typography variant='body1'>
                                        <b>There is no cooking</b> (except microwaving) in rooms that don't have a kitchenette. In our kitchenette rooms, please wash all used dishes, pots and pans before your departing or <b>$25</b> "dirty dish cleaning fee" will be applied to your card.
                                    </Typography>
                                    <Typography variant='body1'>
                                        <b>Room Damage/Missing Items/Excessive Cleaning:</b> If rooms are damaged or left extremely dirty during a stay, guests will be charged the amount it costs to replace damaged item <b>+ $50.00</b> /hour labor fees to return the room to its original state. This includes (but is not limited to) missing/damaged bedding, towels, windows, TVs, remote controls, fans, window screens, appliances, fixtures, furniture, doors, lights, mirrors, etc.
                                    </Typography>
                                    <Typography variant='body1'>
                                        <b>Towels:</b> Please do not use towels or washcloths for makeup removal, hair dying, clean shoes/car/bike/dishes, as the stains will stay permanently. If you do, you will be charged for the cost of replacement. If needed, we do provide you free makeup removal pad and clean rags.
                                    </Typography>
                                    <Typography variant='body1'>
                                        <b>Lost Keys:</b> A $20 charge per key will be assessed to the credit card on file if the room key(s) are not returned at check-out.
                                    </Typography>
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
                                        Check-in begins at: <b>4:00 PM</b>
                                    </Typography>
                                    <Typography variant='body1'>
                                        Check-out ends at: <b>10:00 AM</b>
                                    </Typography>
                                    <Typography variant='body1'>
                                        Early check-in: earliest check-in will be 3:30 PM without charge, subject to advanced approval and availability.
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            Between 12 noon and 2 PM: $40 early check-in fee applies
                                        </ListItem>
                                        <ListItem>
                                            Between 2 PM and 3:30 PM: $20 early check-in fee applies

                                        </ListItem>
                                    </List>
                                    <Typography variant='body1'>
                                        Fpr check-out, please leave your room keys inside the room on the night stand or dresser or in the key drop-box (beside the entrance door outside of our office).
                                    </Typography>
                                    <Typography variant='body1'>
                                        For a late check-out, the latest check-out without an additional charge will be 11 AM. After 11 AM the late check-out fee will be:
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            Between 11 AM and 1 PM: $20 late check-out fee applies
                                        </ListItem>
                                        <ListItem>
                                            Between 1 PM and 2 PM:  $40 late check-out fee applies
                                        </ListItem>
                                        <ListItem>
                                            Between 2 PM and 3 PM:  $60 late check-out fee applies
                                        </ListItem>
                                        <ListItem>
                                            After 3 pm: a full night's charge applies.
                                        </ListItem>
                                    </List>
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
                                        As with all of the smaller properties in town, we do not have a swimming pool. However, Pinedale has an excellent aquatic center that is open to the public and is located four blocks from the Teton Court. It offers an Olympic sized indoor pool with lap lanes, a shallow pool with slides and a lazy river, and a hot tub. It also offers a full gym, and a rock climbing wall.
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
                                        Between late May/early June and late September, the Teton Court office is open from 9 AM to 9 PM each day. We reside on the property so can arrange for arrivals after hours if necessary. Late arrivals can be arranged by calling or texting (307) 367-3367 or by emailing us in advance.
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
                                        As with all of the smaller properties in town, we do not have a swimming pool. However, Pinedale has an excellent aquatic center that is open to the public and is located four blocks from the Teton Court. It offers an Olympic sized indoor pool with lap lanes, a shallow pool with slides and a lazy river, and a hot tub. It also offers a full gym, and a rock climbing wall.
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
                                        Between late May/early June and late September, the Teton Court office is open from 9 AM to 9 PM each day. We reside on the property so can arrange for arrivals after hours if necessary. Late arrivals can be arranged by calling or texting (307) 367-3367 or by emailing us in advance.
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