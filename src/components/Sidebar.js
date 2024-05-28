import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <Drawer open={isOpen} onClose={toggleSidebar}>
        <List>
            <ListItem button>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Contact US" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="About US" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Settings" />
            </ListItem>
        </List>
    </Drawer>
);

export default Sidebar;
