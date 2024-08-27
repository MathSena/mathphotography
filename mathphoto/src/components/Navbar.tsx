import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#141414' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ color: '#FFFFFF' }}>
          MathSena Photography
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="#home" sx={{ color: '#FFFFFF' }}>
            Home
          </Button>
          <Button color="inherit" href="#about" sx={{ color: '#FFFFFF' }}>
            About
          </Button>
          <Button color="inherit" href="#portfolio" sx={{ color: '#FFFFFF' }}>
            Portfolio
          </Button>
          <Button color="inherit" href="#services" sx={{ color: '#FFFFFF' }}>
            Services
          </Button>
          <Button color="inherit" href="#contact" sx={{ color: '#FFFFFF' }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
