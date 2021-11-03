import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import appoinmentBg from '../../../images/appointment-bg.png';

const appoinmentBanner = {
  background: `url(${appoinmentBg})`,
  backgroundColor: 'rgba(45, 58, 74, 0.8)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 200
}

const AppoinmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5, pb: 3 }} style={appoinmentBanner} >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={doctor} alt="" style={{ width: '330px', marginTop: '-174px', height: '540px', objectFit: 'cover', position: 'relative', top: '29px' }} />
          </Grid>
          <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6" sx={{ color: '#1ABC9C', mb: 2 }}>
                APPOINMENT
              </Typography>
              <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, lineHeight: 1.4 }}>
                Make an Appoinment <br /> Today
              </Typography>
              <Typography sx={{ mt: 3, mb: 5, color: '#fff', fontSize: 16 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus, eveniet est necessitatibus ipsum sapiente repellat officia molestiae quibusdam? Tempore?
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#1ABC9C' }}>LEARN MORE</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppoinmentBanner;