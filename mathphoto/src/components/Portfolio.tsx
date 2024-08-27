import React from 'react';
import { Container, Typography, Grid, Box, styled } from '@mui/material';

// Estilo personalizado para as fotos no portfólio
const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

// Array com os caminhos das imagens para o portfólio
const images = [
  '/src/assets/1.jpg',
  '/src/assets/2.jpg',
  '/src/assets/3.jpg',
  '/src/assets/4.jpg',
  '/src/assets/5.jpg',
  '/src/assets/6.jpg',
  '/src/assets/7.jpg',
  '/src/assets/8.jpg',
  '/src/assets/9.jpg',
];

// Estilos personalizados para textos com a fonte parecida com a Apple
const StyledTypography = styled(Typography)({
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  color: '#FFFFFF',
});

const Portfolio: React.FC = () => {
  return (
    <Box id="portfolio" sx={{ backgroundColor: '#000000', padding: '50px 0' }}>
      <Container maxWidth="lg">
        <StyledTypography variant="h2" sx={{ textAlign: 'center', marginBottom: 3 }}>
          My Work
        </StyledTypography>

        <StyledTypography variant="body1" sx={{ textAlign: 'center', marginBottom: 5 }}>
          Welcome to my photography portfolio. I am Matheus Sena, a photographer based in Lisbon, Portugal. My passion lies in capturing the essence of moments, blending technical skills with creative vision to produce unique and memorable images. From the vibrant streets of different cities to the serene landscapes, each photograph tells a story, a glimpse into the world through my lens.
        </StyledTypography>

        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <StyledImage
                src={src}
                alt={`portfolio image ${index + 1}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
