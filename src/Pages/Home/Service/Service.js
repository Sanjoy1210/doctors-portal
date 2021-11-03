import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
  const { name, description, img } = service;

  return (
    <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
      <CardMedia
        component="img"
        style={{ width: 'auto', margin: 'auto' }}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2, mb: 3, textAlign: 'center', fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;