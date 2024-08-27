import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, ListItemIcon, styled } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EventIcon from '@mui/icons-material/Event';
import PortraitIcon from '@mui/icons-material/Portrait';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// Estilo personalizado para o título dos serviços
const StyledTypography = styled(Typography)({
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  color: '#FFFFFF',
  textAlign: 'center',
  marginBottom: '20px',
  fontWeight: 'bold',
});

// Estilo personalizado para a lista de serviços
const StyledListItem = styled(ListItem)({
  backgroundColor: '#1F1F1F',
  margin: '10px 0',
  borderRadius: '8px',
  padding: '15px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#333333',
    transform: 'scale(1.02)',
  },
  color: '#FFFFFF',
});

const Services: React.FC = () => {
  return (
    <Box id="services" sx={{ backgroundColor: '#141414', padding: '50px 0' }}>
      <Container maxWidth="md">
        <StyledTypography variant="h2">
          Services
        </StyledTypography>
        <List>
          <StyledListItem>
            <ListItemIcon sx={{ color: '#FFFFFF' }}>
              <CameraAltIcon />
            </ListItemIcon>
            <ListItemText primary="Wedding Photography" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon sx={{ color: '#FFFFFF' }}>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Event Photography" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon sx={{ color: '#FFFFFF' }}>
              <PortraitIcon />
            </ListItemIcon>
            <ListItemText primary="Portrait Sessions" />
          </StyledListItem>
          <StyledListItem>
            <ListItemIcon sx={{ color: '#FFFFFF' }}>
              <PhotoCameraIcon />
            </ListItemIcon>
            <ListItemText primary="Product Photography" />
          </StyledListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Services;
