import React from "react";
import "./filters.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Filters() {
  function handleOutputRange() {
    const slider = document.getElementById("customRange2");
    var output = document.getElementById("rangeValue");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  }

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
      <div className="row">
        <div className="col-md-3">
          <p className="filtersTitle mt-5">Type of home</p>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flatChecked"
              />
              <label className="form-check-label" htmlFor="flatChecked">
                Flat/Apartment
              </label>
            </div>
            <div className="form-check house">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="houseChecked"
              />
              <label className="form-check-label" htmlFor="houseChecked">
                House
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="duplexChecked"
              />
              <label className="form-check-label" htmlFor="duplexChecked">
                Duplex
              </label>
            </div>
            <div className="form-check penthouse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="PenthousesChecked"
              />
              <label className="form-check-label" htmlFor="PenthousesChecked">
                Penthouses
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <p className="filtersTitle">Bedrooms</p>
          <span className="badge rounded-pill bg-dark">1</span>
          <span className="badge rounded-pill bg-dark">2</span>
          <span className="badge rounded-pill bg-dark">3</span>
          <span className="badge bg-dark text-light">4 or +</span>
        </div>
        <div className="col-md-4 mt-5">
          <p className="filtersTitle">Equipment</p>
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Indiferent</option>
            <option defaultValue="1">Full equipment</option>
            <option defaultValue="2">Kitchen</option>
            <option defaultValue="3">Forniture</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">Condition</p>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                New homes
              </label>
            </div>
            <div className="form-check house">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Good condition
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Needs renovation
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">Price range</p>
          <label htmlFor="customRange2" className="form-label">
            Choose your price
          </label>
          <input
            onChange={handleOutputRange}
            type="range"
            className="form-range"
            min="100"
            max="10000"
            id="customRange2"
          />
          <p>
            <span id="rangeValue"></span>
          </p>
        </div>
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">Publication date</p>
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Today</option>
            <option value="1">Last 24h</option>
            <option value="2">Last 48h</option>
            <option value="3">Last week</option>
          </select>
        </div>
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">More filters</p>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Pets allowed
              </label>
            </div>
            <div className="form-check lift">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Lift
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Garden
              </label>
            </div>
            <div className="form-check penthouse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Air conditioning
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Swimming pool
              </label>
            </div>
            <div className="form-check terrace">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Terrace
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <button className="btn btn-outline-dark btn-lg">
            Go to your ideal home
          </button>
        </div>
      </div>
    </div>
  );
}
