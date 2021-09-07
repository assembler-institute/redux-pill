import React from "react";

import "./PropertyCard.scss";

function PropertyCard({ foundProperty }) {
  return (
    <div className="d-flex property-card">
      <div className="left-card me-5 rounded">
        <img src={foundProperty.image} alt={foundProperty.city} />
      </div>
      <div className="right-card">
        <p>{foundProperty.id}</p>
        <p>{foundProperty.city}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
