import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ backgroundColor: '#000000', padding: '50px 0' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#FFFFFF', marginBottom: 3 }}>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF', marginBottom: 2 }}>
          Let's work together! Contact me at: photographer@example.com
        </Typography>
        <Box>
          <IconButton aria-label="Instagram" sx={{ color: '#FFFFFF' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="Email" sx={{ color: '#FFFFFF' }}>
            <EmailIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
