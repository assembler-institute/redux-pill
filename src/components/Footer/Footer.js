import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 75 }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="white"
            component="div"
            sx={{ margin: "1.2rem auto" }}
          >
            We choose the best house for you
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
