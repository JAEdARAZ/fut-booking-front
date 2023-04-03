import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Person3Icon from '@mui/icons-material/Person3';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavBarDrawer from './NavBarDrawer';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const navItems = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "Profile", path: "/profile", icon: <Person3Icon /> }
  ]

  return (
    <Box marginBottom={4}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            onClick={() => { navigate("/") }}
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            <Typography variant="h5" component="h2" sx={{ flexGrow: 1, textAlign: "center" }}>
              Husball United FC
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                component={NavLink}
                to={item.path}
                color="inherit"
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          <NavBarDrawer navItems={navItems} onClick={() => setOpen(false)} />
        </Drawer>
      </AppBar>
    </Box>
  );
}