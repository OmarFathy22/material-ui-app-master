import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Link, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileIcon from "../images/profile_icon.png";
function APPBAR({ drawerWidth, setdrawerType,setblockornone }) {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "65px",
          padding: "0 10px",
        }}
      >
        <IconButton
          aria-label=""
          sx={{
            display: { sm: "none", xm: "block" },
            mr: "6px",
          }}
          onClick = {
            () => {
              setdrawerType("temporary") 
              setblockornone("block")
            }
          }
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="#" color="inherit" underline="none">
            My Expenses
          </Link>
        </Typography>
        <Typography mr={2} variant="body1" color="inherit">
          Omar Fathy
        </Typography>
        <Avatar alt="Omar Sharp" src={ProfileIcon} />
      </AppBar>
    </div>
  );
}

export default APPBAR;
