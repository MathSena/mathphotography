import React from 'react';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => (
  <Box>
    <Navbar />

    {/* Cada seção é um Element para o scroll suave */}
    <Element name="home"><Home /></Element>
    <Element name="about"><About /></Element>
    <Element name="portfolio"><Portfolio /></Element>
    <Element name="contact"><Contact /></Element>
  </Box>
);

export default App;
