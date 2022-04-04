import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import withLayout from "../../hoc/withLayout/withLayout";
import "./Auth.scss";

function Auth() {
  const { isSigningIn } = useSelector((state) => state.auth);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "12rem",
          margin: "10rem 0",
        }}
      >
        {isSigningIn ? (
          <Typography variant="h5">
            Laravel is SO slow... please, wait a few seconds
          </Typography>
        ) : (
          <>
            <Login />
            <SignUp />
          </>
        )}
      </Box>
    </>
  );
}

export default withLayout(Auth);
