import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:900px)"); // Responsive check
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = ["Services", "Blog", "Contact Us", "Our Team", "Careers"];
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          <img src="/Vector.svg" alt="Logo" width="129" height="65" />
        </Typography>
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List sx={{ width: 250 }}>
                {navLinks.map((link) => (
                  <ListItem button key={link}>
                    <ListItemText primary={link} />
                  </ListItem>
                ))}
                <ListItem>
                  <Button variant="outlined" sx={{ width: "100%" }}>
                    Sign In
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link}
                color="inherit"
                sx={{ textTransform: "none", mx: 1 }}
              >
                {link}
              </Button>
            ))}
            <Button variant="outlined" sx={{ textTransform: "none", ml: 2 }}>
              Sign In
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
