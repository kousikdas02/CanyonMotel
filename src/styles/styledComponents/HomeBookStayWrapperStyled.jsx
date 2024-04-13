import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { primaryColors } from '../../mui-theme/_muiPalette';
export const HomeBookStayWrapperStyled = styled(Box)`
.homeBookStay{
    position: relative;
    z-index: 1;
    padding: 300px 0;
    text-align: center;

    @media (max-width: 1199px) {
        padding: 150px 0;
    }
    
    &::before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: -1;
    }
    h2{
        font-size: 56px;
        letter-spacing: -0.05em;
        color: ${primaryColors.white};
        text-shadow: rgb(0, 0, 0) 0px 3px 10px;
        margin-bottom: 35px;

        @media (max-width: 1199px) {
            font-size: 45px;
            margin-bottom: 25px;
        }
        @media (max-width:899px) {
            font-size: 40px;
        }
        @media (max-width: 599px) {
            font-size: 35px;
        }
    }
}
`