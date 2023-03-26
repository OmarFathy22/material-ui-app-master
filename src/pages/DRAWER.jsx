import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton, ListItemButton } from "@mui/material";
import Create from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useEffect } from "react";
const DRAWER = ({ drawerWidth, theme, setmyMode, myMode ,drawerType , blockornone,setblockornone,setdrawerType }) => {
  const navigate = useNavigate();
  const location = useLocation(); 
  useEffect(() => {
  
  }, [drawerType]);
  const list = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Setting", icon: <SettingsIcon />, path: "/setting" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  return (
    <div>
      <Drawer
        sx={{
          display:{xs:blockornone , sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        open = {true}
        onClose = {
          () => {
            setdrawerType("permanent")
            setblockornone("none") 
          }
        }
        anchor="left"
      >
        <Divider />

        <List>
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <ListItemIcon>
              <IconButton
                onClick={() => {
                  setmyMode(myMode === "dark" ? "light" : "dark");
                  localStorage.setItem("currtheme", myMode);
                }}
              >
                {myMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <Divider />
          {list.map((item) => {
            return (
              <ListItemButton
              key={item.path}
              sx={{bgcolor:location.pathname === item.path ? "grey" : null , padding:"2px" }}
              onClick={() => {
                navigate(item.path);
              }}
              >
                <ListItem  >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default DRAWER;
