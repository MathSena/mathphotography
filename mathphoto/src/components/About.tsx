import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ backgroundColor: '#141414', padding: '50px 0' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 3 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF', textAlign: 'justify', marginBottom: 2 }}>
          Hello! I'm Matheus Sena, a passionate photographer currently living in Lisbon, Portugal. My journey through life has been filled with ups and downs, but each experience has shaped who I am today. Growing up in Brazil, I was deeply influenced by music, football, and the vibrant culture around me.
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF', textAlign: 'justify', marginBottom: 2 }}>
          I believe in the power of resilience and the importance of friendship and loyalty. These values have guided me through some of the toughest moments in my life. Whether it was finding solace in music during difficult times, or embracing new cultures and experiences through travel, I have always sought to capture the beauty of the world around me.
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF', textAlign: 'justify', marginBottom: 2 }}>
          My mission is to use my personal and professional journey to inspire others, creating lasting memories through my lens. I aim to become a renowned photographer, recognized for my ability to see beyond the surface and capture the essence of every moment. I am always eager to learn and grow, adapting to new environments and exploring different forms of artistic expression.
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF', textAlign: 'justify' }}>
          Join me as I continue to explore the world, one photograph at a time, always looking for new perspectives and stories to tell. Let's capture the beauty of life together.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
