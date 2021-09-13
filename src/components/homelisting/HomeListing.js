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
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title">{property.street}</h5>
                    <hr />
                    <div className="d-flex flex-row justify-content-between alignt-items-center ">
                      <h6 className="card-title">{property.city}</h6>
                      <h6 className="card-title">{property.type}</h6>
                    </div>
                    <div className="d-flex flex-row justify-content-between alignt-items-center ">
                      <p>{property.condition}</p>
                      <p>Bedrooms: {property.room}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between alignt-items-center">
                      <p>{property.equipment}</p>
                      {!property.pet ? (
                        <p>Pets: Not allowed</p>
                      ) : (
                        <p>Pets: Allowed</p>
                      )}
                    </div>
                    <div className="d-flex flex-row justify-content-between alignt-items-center">
                      {!property.swimming_pool ? <></> : <p>swimming pool</p>}
                      {!property.lift ? <></> : <p>With lift</p>}
                    </div>
                    <div className="d-flex flex-row justify-content-between alignt-items-center">
                      {!property.air_conditioning ? (
                        <></>
                      ) : (
                        <p>air conditioning</p>
                      )}
                      {!property.terrace ? <></> : <p>With terrace</p>}
                    </div>
                  </div>
                  <div>
                    <h6 className="text-dark">price: {property.price}€</h6>
                    <Link to="#" className="btn btn-outline-dark">
                      Rent now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
