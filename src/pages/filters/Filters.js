import React from "react";
import { useDispatch } from "react-redux";
import "./filters.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Filters() {
  const dispatch = useDispatch();

  function handleOutputRange() {
    const slider = document.getElementById("customRange2");
    var output = document.getElementById("rangeValue");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  }

  function handleTypeOfHouse(nameValue, inputValue) {
    dispatch({
      type: "toggle/typeOfHome",
      payload: {
        typeOfHome: {
          [nameValue]: inputValue,
        },
      },
    });
  }

  function handleMoreFilters(nameValue, inputValue) {
    dispatch({
      type: "toggle/moreFilters",
      payload: {
        moreFilters: {
          [nameValue]: inputValue,
        },
      },
    });
  }

  function handleMoreBedrooms(e) {
    dispatch({
      type: "toggle/bedrooms",
      payload: { bedrooms: e.target.value },
    });
  }

  return (
    <div className="container-fluid px-5">
      <div className="d-flex flex-row justify-content-center pt-3">
        <form className="d-flex flex-column searchBar__container">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <input
              className="searchBar w-100"
              type="text"
              placeholder="Type your goal city"
              autoFocus
            />
            <SearchIcon className="searchIcon" />
          </div>
          <div className="lineSearch"></div>
        </form>
      </div>
      <section className="px-5">
        <div className="row px-5">
          <div className="col-md-3 mt-4">
            <p className="filtersTitle mt-4s">Type of home</p>
            <div className="firstFilter">
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="flatCheckbox"
                  type="checkbox"
                  onChange={(e) =>
                    handleTypeOfHouse(e.target.name, e.target.checked)
                  }
                  id="flatChecked"
                />
                <label className="form-check-label" htmlFor="flatChecked">
                  Flat/Apartment
                </label>
              </div>
              <div className="form-check house">
                <input
                  className="form-check-input"
                  name="houseCheckbox"
                  type="checkbox"
                  onChange={(e) =>
                    handleTypeOfHouse(e.target.name, e.target.checked)
                  }
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
                  name="duplexCheckbox"
                  id="duplexChecked"
                  onChange={(e) =>
                    handleTypeOfHouse(e.target.name, e.target.checked)
                  }
                />
                <label className="form-check-label" htmlFor="duplexChecked">
                  Duplex
                </label>
              </div>
              <div className="form-check penthouse">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="penthouseCheckbox"
                  id="PenthousesChecked"
                  onChange={(e) =>
                    handleTypeOfHouse(e.target.name, e.target.checked)
                  }
                />
                <label className="form-check-label" htmlFor="PenthousesChecked">
                  Penthouses
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <p className="filtersTitle">More filters</p>
            <div className="firstFilter">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="petsAllowed"
                  name="petsAllowed"
                  onChange={(e) =>
                    handleMoreFilters(e.target.name, e.target.checked)
                  }
                />
                <label className="form-check-label" htmlFor="petsAllowed">
                  Pets allowed
                </label>
              </div>
              <div className="form-check lift">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="lift"
                  onChange={(e) =>
                    handleMoreFilters(e.target.name, e.target.checked)
                  }
                  id="lift"
                />
                <label className="form-check-label" htmlFor="lift">
                  Lift
                </label>
              </div>
            </div>
            <div className="firstFilter">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="garden"
                  onChange={(e) =>
                    handleMoreFilters(e.target.name, e.target.checked)
                  }
                  id="garden"
                />
                <label className="form-check-label" htmlFor="garden">
                  Garden
                </label>
              </div>
              <div className="form-check penthouse">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="airConditioning"
                  onChange={(e) =>
                    handleMoreFilters(e.target.name, e.target.checked)
                  }
                  id="airConditioning"
                />
                <label className="form-check-label" htmlFor="airConditioning">
                  Air conditioning
                </label>
              </div>
            </div>
            <div className="firstFilter">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="swimmingPool"
                  onChange={(e) =>
                    handleMoreFilters(e.target.name, e.target.checked)
                  }
                  id="swimmingPool"
                />
                <label className="form-check-label" htmlFor="swimmingPool">
                  Swimming pool
                </label>
              </div>
              <div className="form-check terrace">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terrace"
                  onChange={(e) =>
                    handleMoreFilters(e.target.name, e.target.checked)
                  }
                  id="terrace"
                />
                <label className="form-check-label" htmlFor="terrace">
                  Terrace
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <p className="filtersTitle">Bedrooms</p>
            <button
              className="btnBed btn btn-dark btn-sm"
              value="1"
              onClick={handleMoreBedrooms}>
              1
            </button>
            <button
              className="btnBed btn btn-dark btn-sm"
              value="2"
              onClick={handleMoreBedrooms}>
              2
            </button>
            <button
              className="btnBed btn btn-dark btn-sm"
              value="3"
              onClick={handleMoreBedrooms}>
              3
            </button>
            <button
              className="btnBed btn btn-dark btn-sm"
              value="4"
              onClick={handleMoreBedrooms}>
              4 or +
            </button>
          </div>
          <div className="col-md-3 mt-4">
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
        </div>
        <div className="row px-5">
          <hr className="mt-3" />
          <div className="col-md-4 mt-1">
            <p className="filtersTitle">Equipment</p>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Indiferent</option>
              <option defaultValue="1">Full equipment</option>
              <option defaultValue="2">Kitchen</option>
              <option defaultValue="3">Forniture</option>
            </select>
          </div>
          <div className="col-md-4 mt-1">
            <p className="filtersTitle">Price range</p>
            <label htmlFor="customRange2" className="form-label">
              Choose your price
            </label>
            <input
              onChange={handleOutputRange}
              type="range"
              className="form-range"
              defaultValue="100"
              min="100"
              max="10000"
              id="customRange2"
            />
            <p>
              <span id="rangeValue"></span>
            </p>
          </div>
          <div className="col-md-4 mt-1">
            <p className="filtersTitle">Publication date</p>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Today</option>
              <option value="1">Last 24h</option>
              <option value="2">Last 48h</option>
              <option value="3">Last week</option>
            </select>
          </div>
          <div className="col-md-12 mt-3">
            <button className="btn btn-outline-dark btn-lg">
              Go to your ideal home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
