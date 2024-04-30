import React from 'react'
import { ActivitiesDetailsWrapperStyled } from '../styles/styledComponents/ActivitiesDetailsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner';
import { assets } from '../json/assets';
import PropTypes from 'prop-types';
import { Box, Container, Grid, List, ListItem, Tab, Tabs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton/CustomButton';

const TITLE = 'Teton Court Motel - Local Adventures Attractions';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ActivitiesDetails = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Wrapper>
            <HelmetProvider>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
            </HelmetProvider>
            <ActivitiesDetailsWrapperStyled >
                <CommonInnerBanner innerBannerImage={assets.activitiyBanner} innerBannerText="Lorem, ipsum dolor." />
                <Box className="attractions_wrap cmn_gap">
                    <Container fixed>
                        <Box>
                            <Tabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Attraction 1" {...a11yProps(0)} />
                                <Tab label="Attraction 2" {...a11yProps(1)} />
                                <Tab label="Attraction 3" {...a11yProps(2)} />
                                <Tab label="Attraction 4" {...a11yProps(3)} />
                                <Tab label="Attraction 5" {...a11yProps(4)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Grid container columnSpacing={3} rowSpacing={4}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone: </b> </Typography>
                                                    <Link to="tel:123456789">123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                        <Grid container columnSpacing={3} rowSpacing={4}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                        <Grid container columnSpacing={3} rowSpacing={4}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone: </b> </Typography>
                                                    <Link to="tel:123456789">123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                        <Grid container columnSpacing={3} rowSpacing={4}>
                                
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>r
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                        <Grid container columnSpacing={3} rowSpacing={4}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone: </b> </Typography>
                                                    <Link to="tel:123456789">123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Box className="attractionCard">
                                        <Box className="attractionCard_img">
                                            <figure>
                                                <img src={assets.activitiy1} alt="" />
                                            </figure>
                                        </Box>
                                        <Box className="attractionCard_content">
                                            <Typography variant='h5'>Lorem, ipsum.</Typography>
                                            <Typography variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus accusantium esse molestias odio eum voluptatibus beatae accusamus. Sit nesciunt reiciendis atque ex culpa? Voluptas iure tempora et distinctio quasi...
                                            </Typography>

                                            <List>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Phone:</b></Typography>
                                                    <Link to="tel:123456789"> 123456789</Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography variant='body1'><b>Address:</b></Typography>
                                                    <Typography variant='body1'>123, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus.</Typography>
                                                </ListItem>
                                            </List>

                                            <CustomButton buttonColor="black" onClick={() => window.open('https://google.com', '_blank')}>
                                                LEARN MORE
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Container>
                </Box>
            </ActivitiesDetailsWrapperStyled>
        </Wrapper>
    )
}

export default ActivitiesDetails