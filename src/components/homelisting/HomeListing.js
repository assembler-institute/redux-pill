import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homelisting.css";

export default function HomeListing({ allProperties = [] }) {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (undefined !== allProperties && allProperties.length) {
      setIsLoading(false);
      setProperties(allProperties);
    }
    // console.log(allProperties);
  }, [allProperties]);

  return (
    <div className="container-fluid">
      {isLoading ? (
        <></>
      ) : (
        <div className="row mt-5 px-5">
          {properties.map((property) => (
            <div key={property.id} className="col-md-3 mb-5">
              <div className="card">
                <div className="img_container">
                  <img alt={property.street} src={property.image} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{property.street}</h5>
                  <p className="card-text">{property.description}</p>
                  <Link to="" className="btn btn-outline-dark">
                    Rent now!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
