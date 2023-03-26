import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomizedButtons from "./customizedBtn";

function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);

  return (
    <Box>
      <Box width="400px" component="form">
        <TextField
          autoComplete="off"
          inputProps={{ maxLength: 12 }}
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
          fullWidth
          label="Transaction Title"
          id="filled-start-adornment"
          sx={{ m: "20px", display: "block" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <TextField
        autoComplete="off"
        inputProps={{ maxLength: 6 }}
         onChange={
          (eo) => {
            setprice(Number(eo.target.value))
          }
         }
          fullWidth
          label="Amount"
          id="filled-start-adornment"
          sx={{ m: "20px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
        <CustomizedButtons title={title} price={price} />
      </Box>
    </Box>
  );
}

export default Create;
