import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import avatar from "../images/avatar.jpg"
import { indigo, orange } from '@mui/material/colors';

const primary = indigo[600];

function NavBar() {
    return (
        <AppBar 
            component="nav"
            sx={{
                width : "80%",
                background : primary,
                backgroundColor:'#670f8c'
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Testing Ninja
                </Typography>
                <Avatar alt="user" src={avatar} />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;