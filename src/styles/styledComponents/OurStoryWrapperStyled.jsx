import { Box, styled } from "@mui/material";

export const OurStoryWrapperStyled = styled(Box)`
    .cmn_head{
        margin-bottom: 40px;
    }
    .ourStoryConent{
        .ourStoryImg{
            display: flex;
            float: left;
            max-width: 40%;
            margin: 0 30px 20px 0;
            @media (max-width: 599px) {
                max-width: initial;
                margin: 0 0 30px;
            }
        }
    }
`