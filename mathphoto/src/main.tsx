import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#141414', // Cor principal (cinza escuro)
    },
    background: {
      default: '#000000', // Cor de fundo (preto)
      paper: '#141414', // Papel (cinza escuro)
    },
    text: {
      primary: '#FFFFFF', // Texto principal (branco)
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Fonte padrão
    h1: {
      fontSize: '2.5rem',
      color: '#FFFFFF', // Branco para o título
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF', // Branco para o corpo do texto
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
