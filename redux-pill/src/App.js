import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilterPage from "./pages/FilterPage";

import { ThemeProvider } from "@ui5/webcomponents-react";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/filter-page" exact component={FilterPage} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
