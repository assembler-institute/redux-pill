import React from "react";
import withLayout from "../../HOC/withLayout";

import { getAllProperties } from "../../api/propertiesApi";

function Dashboard() {
  async function loadProperties() {
    const { data } = getAllProperties();
    debugger;
    console.log(data);
  }

  loadProperties();

  return (
    <div>
      <h1>Dashboard page</h1>
      <code></code>
    </div>
  );
}

export default withLayout(Dashboard);
