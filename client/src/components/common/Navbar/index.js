import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";

const Navbar = ({ title, icon }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <i className={icon} /> {title}
            </Typography>
            <List
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <ListItem disablePadding>
                <ListItemButton to="/">
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about">
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
            </List>
            <Button
              color="inherit"
              sx={{ textTransform: "capitalize", fontSize: "16px" }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Management",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
