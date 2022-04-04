import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { mainTheme } from "./styles/muiThemes";
import Auth from "./pages/Auth/Auth";
import { checkSession } from "./utils/localStorage";
import { signInSuccess } from "./redux/auth/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isAuth = checkSession();
    if (isAuth) {
      dispatch(signInSuccess(isAuth));
    }
  }, []);
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
