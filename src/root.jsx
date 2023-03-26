import * as React from "react";
import DRAWER from "./pages/DRAWER";
import APPBAR from "./pages/APPBAR";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { useState } from "react";
const drawerWidth = 240;

function Root() {
  const [myMode, setmyMode] = useState(
    localStorage.getItem("currtheme") === null
      ? "dark"
      : localStorage.getItem("currtheme") === "dark"
      ? "light"
      : "dark"
  );
  const theme = useTheme();
  const [drawerType, setdrawerType] = useState("permanent");
  const [blockornone, setblockornone] = useState("none");
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
    },
  });
  console.log(theme.palette.mode);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <APPBAR
        {...{drawerWidth,setdrawerType,setblockornone}}
        />
        <DRAWER
        {...{drawerWidth,theme,setdrawerType,setblockornone,blockornone,drawerType,setmyMode,myMode}}
        />
        <Box
          sx={{
            ml: { sm: `${drawerWidth}px` },
            mt: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;
