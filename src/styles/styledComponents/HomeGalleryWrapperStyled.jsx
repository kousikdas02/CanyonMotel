import { Box, styled } from "@mui/material";

export const HomeGalleryWrapperStyled = styled(Box)`
background-color: rgba(255,255,255,0.85);
    figure{
        display: flex;
        width: 100%;
        img{
            width: 100%;
        }
    }
    .MuiGrid-item{
        @media (max-width: 899px) {
            margin-bottom: 30px;

            &:last-child{
                margin-bottom: 0;
            }
        }
    }
`