import React, {useState} from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FeedIcon from "@mui/icons-material/Feed";
import PhotoIcon from "@mui/icons-material/Photo";
import { Link } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { Typography } from "@mui/material";

const drawerWidth = 240;

const menu = [
  {
    id: 1,
    content: "Dashboard",
    icon: <DashboardIcon />,
    path: '/'
  },
  {
    id: 2,
    content: "Todo",
    icon: <ListAltIcon />,
    path: '/todo'
  },
  {
    id: 3,
    content: "Post",
    icon: <FeedIcon />,
    path: '/post'
  },
  {
    id: 4,
    content: "Photo",
    icon: <PhotoIcon />,
    path: '/photo'
  },
];

function SideBar() {

  const drawer = (
    <div >
      <Typography align="center" variant="h5" sx={
        {color: '#eb8934',
         padding: '1rem 0',
        }
      }
      >Relay Example</Typography>
      <Divider />
      <Divider />
      <List>
        {menu.map((item) => (
          <ListItem sx={{color: 'white', ":hover" : {color: 'orange'}}} component={Link} to={item.path} key={item.id}>
            <ListItemIcon sx={{color: 'white'}} >{item.icon}</ListItemIcon>
            <ListItemText primary={item.content} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },  }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: 'black'
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
