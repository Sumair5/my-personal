import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css"; // Custom CSS (optional)
import logo from '../assets/logo.png'; // Adjust the path as needed


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ✅ MUI AppBar (Navbar) */}
      <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* ✅ Drawer Button (☰) on Left Side */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>

          {/* ✅ Logo & Title (Hidden on Mobile) */}
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white", display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ height: "40px", width: "120px", marginRight: "10px" }} />
            {/* Sumair's Portfolio */}
          </Typography>

          {/* ✅ Navigation Links (Hidden on Mobile) */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cv">CV</Link>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* ✅ Drawer for Mobile Menu (Left Side) */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220, padding: "10px" }}>
          {/* ✅ Drawer Logo & Title */}
          <Link to="/" onClick={() => setDrawerOpen(false)} style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "black", marginBottom: "10px" }}>
            <img src={logo} alt="Logo" style={{ height: "40px", width: "100px", marginRight: "10px" }} />
            <Typography variant="h6">Sumair's Portfolio</Typography>
          </Link>

          {/* ✅ Drawer Navigation Links */}
          <List>
            <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/cv" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="CV" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
