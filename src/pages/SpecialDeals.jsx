import React from 'react'
import { SpecialDealsWrapperStyled } from '../styles/styledComponents/SpecialDealsWrapperStyled'
import Wrapper from '../layout/Wrapper/Wrapper';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CommonInnerBanner from '../components/CommonInnerBanner/CommonInnerBanner';
import { assets } from '../json/assets';
import { Box, Container, Typography } from '@mui/material';

const TITLE = 'Canyon Motel - Our Story';
const SpecialDeals = () => {
    return (

        <Wrapper>
            <HelmetProvider>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
            </HelmetProvider>
            <SpecialDealsWrapperStyled>
                <CommonInnerBanner innerBannerImage={assets.contactUsBanner} innerBannerText="Special Deals" />
                <Box className="special_deals cmn_gap">
                    <Container fixed>
                        <Box className="cmn_head">
                            <Typography variant='h2'>Lorem Ipsum.</Typography>
                        </Box>
                        <Box className="special_deals_content">
                            Special deals
                        </Box>
                    </Container>
                </Box>
            </SpecialDealsWrapperStyled>
        </Wrapper>
    )
}

export default SpecialDeals