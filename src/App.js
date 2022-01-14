import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { mainTheme } from "./styles/muiThemes";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
