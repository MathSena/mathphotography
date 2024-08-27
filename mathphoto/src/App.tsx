import React from 'react';
import { Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </Box>
  );
};

export default App;