import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';

const services = [
  {
    name: 'Fluoride Treatment',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ad aliquid amet molestiae nulla in possimus est? Tenetur, vel culpa?',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ad aliquid amet molestiae nulla in possimus est? Tenetur, vel culpa?',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ad aliquid amet molestiae nulla in possimus est? Tenetur, vel culpa?',
    img: whitening
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#1ABC9C', fontWeight: 700, mb: 2 }}>
            OUR SERVICES
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 10 }}>
            Services We Provide
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;