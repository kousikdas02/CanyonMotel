import React from 'react'
import { Grid, Typography, Container } from '@mui/material';
import { assets } from '../../json/assets';
import { HomeCowboyWrapperStyled } from '../../styles/styledComponents/HomeCowboyWrapperStyled';


const HomeCowboy = () => {
  return (
    <HomeCowboyWrapperStyled>
        <Container fixed>
        <Grid container alignItems="center" columnSpacing={5}>
            <Grid item md={6} xs={12} data-aos="zoom-in">
                <figure>
                    <img src={assets.homeCowboy} width="100%" alt="" />
                </figure>
            </Grid>
            <Grid item md={6} xs={12}>
                <Typography variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, numquam accusamus tempore odit sapiente maxime nemo debitis porro nobis voluptate facilis fugit dolor rerum ullam magnam eaque nostrum, eum aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laborum nisi dolores sint molestias eligendi libero, dolorem cum qui similique, error alias laudantium iure officiis aspernatur asperiores fugiat quo eos?
                </Typography>
            </Grid>
        </Grid>
        </Container>
          
    </HomeCowboyWrapperStyled>
  )
}

export default HomeCowboy