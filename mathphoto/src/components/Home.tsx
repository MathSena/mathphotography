import React from 'react';
import { Container, Grid, Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);

const StyledButton = styled('button')(({ theme }) => ({
  border: '2px solid #FFFFFF',
  borderRadius: '20px',
  padding: '10px 20px',
  color: '#FFFFFF',
  background: 'transparent',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': { backgroundColor: '#808080', color: '#000' }
}));

const StyledHome = styled(Box)({
  backgroundColor: '#000',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
    zIndex: -1
  }
});

const Home: React.FC = () => (
  <StyledHome>
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ color: '#FF69B4', fontFamily: 'Arial, sans-serif' }}
          >
            Matheus Sena
          </MotionTypography>
          <Typography variant="h6" sx={{ color: '#FF69B4', mb: 3 }}>
            Photographer / Developer
          </Typography>
          {/* Aqui basta usar href que o Button já vira <a> */}
          <StyledButton as="a" href="#contact">
            Contact
          </StyledButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/src/assets/profile.jpg"
            alt="Matheus Sena"
            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>
      </Grid>
    </Container>
  </StyledHome>
);

export default Home;
