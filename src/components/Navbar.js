import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleSidebar }) => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">
                Dashboard
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;
