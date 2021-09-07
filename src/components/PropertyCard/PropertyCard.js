import React from "react";

function PropertyCard({ property }) {
  return (
    <div className="d-flex flex-column">
      <p>{property.name}</p>
    </div>
  );
}

export default PropertyCard;
