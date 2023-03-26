import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
function Home() {
  const [mydata, setmydata] = useState([]);
  let total_price = 0;
  useEffect(() => {
    fetch("http://localhost:3200/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);
  return (
    <Box>
      {mydata.map((item) => {
        total_price += item.price;
        return (
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: "350px",
              alignItems: "center",
              position: "relative",
              padding: "20px 35px 10px 10px",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                
              }}
            >
              <Typography variant="h6" sx={{mr:"20%"}}>{item.title}</Typography>
              <Typography variant="h6">{item.price}$</Typography>
            </Box>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3200/mydata/${item.id}`, {
                  method: "DELETE",
                });
                const newArray = mydata.filter((obj) => {
                  return obj.id !== item.id; 
                })
                setmydata(newArray)
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <CloseIcon sx={{ fontSize: "17px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Paper elevation={3} >
      <Typography variant="body1"
      sx={{textAlign:"center" , mt:"60px" , p:"10px"}}
      >👉 You Spent <span style={{color:"red" , fontSize:"17px",fontWeight:"bold"}}>{total_price}$</span></Typography>
      </Paper>
    </Box>
  );
}

export default Home;
