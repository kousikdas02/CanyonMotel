import React from 'react'
import { NewsLetterStyledWrapper } from '../../styles/styledComponents/NewsLetterStyledWrapper'
import { Backdrop, Box, Button, Container, Fade, Modal, Stack, TextField, Typography } from '@mui/material'
import CustomButton from '../../ui/CustomButton/CustomButton'


const NewsLetter = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <NewsLetterStyledWrapper>
            <Container fixed>
                <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
                    <Typography variant='h5'>CLICK HERE TO RECEIVE OUR NEWSLETTER</Typography>
                    <CustomButton buttonType="black" onClick={handleOpen}>
                        SIGN UP
                    </CustomButton>
                </Stack>

            </Container>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className="newsLetterModal">
                        <Button className="newsLetterModalCloseBtn" onClick={handleClose}>X</Button>
                        <Typography variant="h4">
                            Join Our Newsletter
                        </Typography>
                        <Typography variant='h6'>Sign up for our mailing list & get the latest news and updates</Typography>
                        <TextField className='newsLetterModalInput' variant="outlined" placeholder='Enter your email' />
                        <CustomButton buttonType="black" onClick={handleOpen}>
                            SUBMIT
                        </CustomButton>
                    </Box>
                </Fade>
            </Modal>
        </NewsLetterStyledWrapper>
    )
}

export default NewsLetter