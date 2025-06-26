import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => (
  <Box id="about" sx={{ bgColor: '#141414', py: 8 }}>
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom color="#FFF">
        About Me
      </Typography>
      <Typography variant="body1" paragraph color="#EEE">
        Hello! I'm Matheus Sena, a passionate photographer currently living in Lisbon...
      </Typography>
      <Typography variant="body1" paragraph color="#EEE">
        I believe in resilience and the power of storytelling through images...
      </Typography>
      <Typography variant="body1" color="#EEE">
        Join me as I explore the world, one photograph at a time.
      </Typography>
    </Container>
  </Box>
);

export default About;
