import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import '../App.css';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Header = () => {
  const theme = useTheme();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"));
  const colorMode = React.useContext(ColorModeContext);

  const handleClick = () => {
    setDarkMode(!darkMode); //estamos retomando el valor del valor inicial
  }

  return ( 
    <Box sx={{ flexGrow: 1 }} darkMode={ colorMode }>
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Hooks
        </Typography>

        <Typography color="inherit" >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {/* <Button type="button" color="inherit" >
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Button> */}
        {/* {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}
      </Toolbar>
    </AppBar>
  </Box>
   );
}
 
export default Header;