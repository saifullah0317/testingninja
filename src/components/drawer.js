import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { pink,purple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import logoNinja from "../images/logoNinja.jpg";

const drawerWidth = "20%";
const primary = pink[900];
const hover = purple[700];
const navButtons = [
    {
        id: 1,
        text: "Generate test",
        icon: <DrawOutlinedIcon />,
        path: "/generate"
    }, {
        id: 2,
        text: "My tests",
        icon: <ApartmentOutlinedIcon />,
        path: "/myTests"
    }, {
        id: 3,
        text: "Result database",
        icon: <StorageOutlinedIcon />,
        path: "/results"
    },  {
        id: 4,
        text: "Add Emails",
        icon: <SupervisorAccountOutlinedIcon />,
        path: "/addemails"
    },{
        id: 5,
        text: "My Account",
        icon: <SupervisorAccountOutlinedIcon />,
        path: "#"
    }, {
        id: 5,
        text: "Sign out",
        icon: <ExitToAppOutlinedIcon />,
        path: "#"
    }
]

function SideBar() {
    const navigate = useNavigate();
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: primary,
                        backgroundColor:'#670f8c'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Avatar onClick={() => navigate("/")} sx={{width:"100px",height:"100px",margin: "30px auto", cursor: "pointer" }} alt="logo" src={logoNinja} />
                <Divider />
                <List>
                    {navButtons.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton
                                onClick={() => navigate(item.path)}
                                sx={{
                                    '&:hover': {
                                        background: hover,
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{color:"#ffffff"}}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText sx={{color:"#ffffff"}} primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default SideBar;