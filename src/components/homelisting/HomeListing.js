import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./homelisting.css";

export default function HomeListing() {
  return (
    <div className="container">
      <form>
        <input
          className="searchBar mt-5 col-md-4"
          type="text"
          placeholder="Type your goal city"
          autoFocus
        />
        <SearchIcon className="searchIcon" />

        <div className="lineSearch"></div>
      </form>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card">
            <img alt="" src="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" className="btn btn-outline-dark">
                Rent now!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img alt="" src="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" className="btn btn-outline-dark">
                Rent now!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img alt="" src="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" className="btn btn-outline-dark">
                Rent now!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img alt="" src="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" className="btn btn-outline-dark">
                Rent now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
