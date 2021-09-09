import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Filters from "./components/filters/Filters.js";
import TabPanel from "./components/tabpanel/TabPanel.js";
import { useEffect } from "react";
import { GetApi } from "./reducer/ApiReducer";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetApi());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <TabPanel />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/filters">
            <Filters />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
