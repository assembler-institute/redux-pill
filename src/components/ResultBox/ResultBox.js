import React from "react";
import { Box } from "@mui/material";

export default function ResultBox() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        borderRadius: "0.3rem",
        backgroundColor: "primary.light",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      }}
    ></Box>
  );
}
