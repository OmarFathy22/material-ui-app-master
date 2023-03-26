import { Button, Stack, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function CustomizedButtons({title,price}) {
  const navigate = useNavigate();

  return (
    <Stack ml="20px" spacing={2} direction="row">
      <ColorButton variant="contained"
      onClick={() => {
         fetch("http://localhost:3200/mydata", {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify({title,price}),
        }).then(() => {
          navigate("/")
        })
      }}
      >Submit
      <ChevronRightIcon/></ColorButton>
    </Stack>
  );
}