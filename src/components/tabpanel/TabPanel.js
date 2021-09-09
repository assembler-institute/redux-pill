import React from "react";
import { NavLink } from "react-router-dom";
import "./tabpanel.css";

export default function TabPanel() {
  return (
    <div className="navigation">
      <NavLink className="navItems mt-3" to="/dashboard">
        Dashboard 🚀
      </NavLink>
      <NavLink className="navItems mt-3" to="/homelisting">
        Home listing 🏠
      </NavLink>
      <NavLink className="navItems mt-3" to="/filters">
        Filters 🔥
      </NavLink>
    </div>
  );
}
