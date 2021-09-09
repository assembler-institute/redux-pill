import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Filters from "./components/filters/Filters.js";
import TabPanel from "./components/tabpanel/TabPanel.js";
import "./App.css";

function App() {
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
