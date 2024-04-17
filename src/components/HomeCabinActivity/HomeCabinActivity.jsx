import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { assets } from '../../json/assets';
import CustomButton from '../../ui/CustomButton/CustomButton';
import {useNavigate} from "react-router-dom"
import { HomeCabinActivityStyled } from '../../styles/styledComponents/HomeCabinActivityStyled';

const HomeCabinActivity = () => {
    const navigate = useNavigate();
  return (
    <HomeCabinActivityStyled className='cmn_gap cmn_gap_btm'>
        <Grid container columnSpacing={2.5} rowSpacing={4}>
            <Grid item md={6} xs={12} data-aos="fade-right">
                <Box className="homeCabinActivityCard" style={{backgroundImage: `url(${assets.homeCabinActivityCabin})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <Typography variant="h2">CABINS</Typography>
                    <CustomButton buttonColor="black"   onClick={() => navigate('/cabins')}>
                        LEARN MORE
                    </CustomButton>
                </Box>
            </Grid>
            <Grid item md={6} xs={12} data-aos="fade-left">
                <Box className="homeCabinActivityCard" style={{backgroundImage: `url(${assets.homeCabinActivityActivities})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <Typography variant="h2">ACTIVITIES</Typography >
                    <CustomButton buttonColor="black"  onClick={() => navigate('/activities')} >
                        LEARN MORE
                    </CustomButton>
                </Box>
            </Grid>
        </Grid>
    </HomeCabinActivityStyled>
  )
}

export default HomeCabinActivity