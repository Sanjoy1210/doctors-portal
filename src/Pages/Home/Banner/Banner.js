import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
  background: `url(${bg})`,
  backgroundSize: 'cover'
}

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400
}

const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={{ ...verticalCenter, textAlign: 'left' }}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius veniam pariatur amet atque, quae deserunt commodi enim itaque laboriosam eligendi.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sx={{ mt: 13 }}>
          <img src={chair} alt="" width="90%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;