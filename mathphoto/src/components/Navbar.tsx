import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton,
  Box, Drawer, List, ListItem, ListItemText,
  ListItemButton, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';

const navItems = ['home', 'about', 'portfolio', 'contact'];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#141436' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Matheus Sena
          </Typography>

          {/* Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map(i => (
              <Typography
                key={i}
                variant="button"
                component={ScrollLink}
                to={i}
                smooth
                duration={500}
                offset={-70}
                sx={{
                  cursor: 'pointer',
                  '&:hover': { color: theme.palette.primary.light }
                }}
              >
                {i.toUpperCase()}
              </Typography>
            ))}
          </Box>

          {/* Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {navItems.map(i => (
            <ListItem key={i} disablePadding>
              <ListItemButton
                component={ScrollLink}
                to={i}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={i.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
