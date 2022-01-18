import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HouseCard from "../HouseCard/HouseCard";

export default function ResultBox() {
  const { hasError, isLoading, dataFetched } = useSelector(
    (state) => state.fetch
  );
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
        div: {
          padding: "1rem",
          borderRadius: "0.3rem",
          backgroundColor: "white",
        },
      }}
    >
      {hasError ? (
        <Typography variant="h6" gutterBottom component="div">
          Sorry! It seems that something went wrong
        </Typography>
      ) : null}
      {isLoading ? (
        <Typography variant="h6" gutterBottom component="div">
          Loading your perfect house...
        </Typography>
      ) : null}
      {dataFetched
        ? dataFetched.map((house) => {
            return <HouseCard key={house.id} house={house} />;
          })
        : null}
    </Box>
  );
}
