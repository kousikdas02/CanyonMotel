import React from 'react';
import Typography from '@mui/material/Typography';
import { TestimonialWrapperStyled } from '../../styles/styledComponents/TestimonialWrapperStyled';
import { Container, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderData =[
        {
            testimonialText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis optio nulla dolor, veritatis hic iure doloribus fugiat? Minima quidem quia assumenda dolores! Cum modi blanditiis neque molestias voluptas et veniam?",
            testimonialName: "John Smith",
        },
        {
            testimonialText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatibus cumque, reiciendis a quasi totam eum, repellendus asperiores nesciunt repellat quisquam similique magnam deserunt architecto facere ex dicta magni officia!",
            testimonialName: "Sean Paul",
        },
        {
            testimonialText: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sapiente autem quam similique sed ex placeat optio delectus obcaecati deleniti corrupti explicabo modi nam maiores eligendi doloribus molestiae laborum eius.",
            testimonialName: "Peter Parker",
        },
        {
            testimonialText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro possimus odit, ut, libero nam nostrum odio fugiat doloremque ex dicta rem tenetur numquam minima laboriosam iusto illo illum architecto!",
            testimonialName: "Bruce Wayne",
        },
    ]

    return (
        <TestimonialWrapperStyled>
            <Container fixed>
                <Box className="cmn_head">
                    <Typography variant="h2">WHAT OUR GUESTS SAY</Typography>
                </Box>
                <Box className="testimonialSlider">
                    <Slider {...settings}>
                       {
                        sliderData?.map((item, index) => (
                            <Box className="sliderItem" key={index}>
                                <Typography variant="body1">{item.testimonialText}</Typography>
                                <Typography variant="h6">{item.testimonialName}</Typography>
                            </Box>
                        ))
                       }
                    </Slider>
                </Box>
            </Container>
        </TestimonialWrapperStyled>
    )
}

export default Testimonial