import React, { useState, useEffect } from "react";
import withLayout from "../../HOC/withLayout";
import PropertiesList from "../../components/PropertiesList";

import { getAllProperties } from "../../api/propertiesApi";

function Dashboard() {
  const [loadedProperties, setLoadedProperties] = useState([]);

  const loadInitialProperties = async () => {
    try {
      const { data } = await getAllProperties();
      setLoadedProperties(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadInitialProperties();
  }, []);

  return (
    <div>
      <h1>Dashboard page</h1>
      <PropertiesList />
    </div>
  );
}

export default withLayout(Dashboard);
