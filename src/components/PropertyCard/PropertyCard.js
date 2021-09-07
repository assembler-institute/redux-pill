import React from "react";

import "./PropertyCard.scss";

function PropertyCard({ foundProperty }) {
  return (
    <div className="d-flex property-card mb-5">
      <div className="left-card me-5">
        <img
          className="rounded"
          src={foundProperty.imageURL}
          alt={foundProperty.city}
        />
      </div>
      <div className="right-card">
        <p>{foundProperty.title}</p>
        <p>{foundProperty.city}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
