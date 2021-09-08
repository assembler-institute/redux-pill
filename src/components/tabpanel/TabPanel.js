import React from 'react'
import { NavLink } from "react-router-dom";

export default function TabPanel() {
  return (
    <div className="navigation">
      <NavLink to="/dashboard">dashboard</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/homelisting">Home listing</NavLink>
    </div>
  )
}
