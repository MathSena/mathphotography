import React from 'react';
import { Box, Container, Grid, Typography, Button, styled } from '@mui/material';
import { motion } from 'framer-motion';

// Componente de texto animado
const MotionTypography = motion(Typography);

// Botão de estilo personalizado
const StyledButton = styled(Button)(({ theme }) => ({
  border: `2px solid #FFFFFF`,
  borderRadius: '20px',
  padding: '10px 20px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: '#FFFFFF',
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#808080', // Cinza no hover
    color: '#000000',
  },
}));

// Seção de "Home" com background beams e cor de fundo ajustada
const StyledHome = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000', // Cor de fundo ajustada
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 20px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 70%), repeating-linear-gradient(45deg, transparent, transparent 25%, rgba(20, 20, 20, 0.1) 25%, rgba(20, 20, 20, 0.1) 50%)',
    backgroundSize: '200% 200%',
    animation: 'moveBackground 10s infinite linear',
    zIndex: -1,
  },
  '@keyframes moveBackground': {
    '0%': {
      backgroundPosition: '0% 0%',
    },
    '100%': {
      backgroundPosition: '100% 100%',
    },
  },
}));

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Seção de Texto */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <MotionTypography
                variant="h2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                sx={{ color: '#FFFFFF', fontFamily: "'Arial', sans-serif" }}
              >
                Matheus Sena
              </MotionTypography>
              <Typography variant="h6" sx={{ color: '#FFFFFF', marginBottom: 3 }}>
                Photographer / Developer
              </Typography>
              <StyledButton
                variant="outlined"
                sx={{ marginBottom: 2 }}
              >
                Contact
              </StyledButton>
            </Box>
          </Grid>

          {/* Seção de Imagem */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/src/assets/profile.jpg" // Substitua pelo caminho correto da sua imagem
              alt="Matheus Sena"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                display: 'block',
                margin: { xs: '0 auto', md: '0' }, // Centraliza a imagem no mobile
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledHome>
  );
};

export default Home;
