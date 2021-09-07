import React from "react";

import PropertyCard from "../PropertyCard";

function PropertiesList() {
  // Redux properties
  const properties = [{ name: "p1" }, { name: "p2" }];

  return (
    <div className="d-flex flex-column">
      {properties.map((property) => {
        return <PropertyCard property={property} />;
      })}
    </div>
  );
}

export default PropertiesList;
