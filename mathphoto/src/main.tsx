import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Azul vibrante como cor principal
      dark: '#0070c0', // Azul mais escuro para efeitos de hover
      contrastText: '#ffffff', // Texto branco nos botões
    },
    secondary: {
      main: '#F5F5F5', // Cinza claro como cor secundária (fundo)
      contrastText: '#141436', // Texto azul-escuro nos elementos
    },
    text: {
      primary: '#141436', // Azul-escuro para o texto principal
      secondary: '#333333', // Cinza escuro para subtítulos e texto adicional
    },
    success: {
      main: '#00C853', // Verde para ícones de sucesso ou botões de ação
    },
    background: {
      default: '#F5F5F5', // Fundo padrão
      paper: '#ffffff', // Fundo dos cards e containers
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#141436',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
    button: {
      textTransform: 'none', // Evitar tudo em maiúsculas nos botões
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
