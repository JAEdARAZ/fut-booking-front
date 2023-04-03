import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

interface NavBarDrawerProps {
  navItems: Array<{ title: string, path: string, icon: JSX.Element }>
  onClick: () => void
}

export default function NavBarDrawer({ onClick, navItems }: NavBarDrawerProps) {
  return (
    <>
      <Box sx={{ width: 250 }}>
        <nav aria-label="main mailbox folders">
          <List>
            {navItems.map((item) => (
              <ListItem
                onClick={onClick}
                component={NavLink}
                to={item.path}
                key={item.title}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  )
}