import React from "react";
import { useDispatch } from "react-redux";
import "./filters.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Filters() {
  const dispatch = useDispatch();

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

  function handleCondition(e) {
    dispatch({
      type: "toggle/condition",
      payload: { condition: e.target.value },
    });
  }

  function handleEquipment(e) {
    dispatch({
      type: "toggle/equipment",
      payload: { equipment: e.target.value },
    });
  }

  function handlePrice(e) {
    const slider = document.getElementById("priceRange");
    const output = document.getElementById("sliderValue");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      output.innerHTML = this.value;
    };

    dispatch({
      type: "toggle/price",
      payload: { price: slider.value },
    });
  }

  function handlePublicationDate(e) {
    dispatch({
      type: "toggle/publicationDate",
      payload: { publicationDate: e.target.value },
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
                  type="radio"
                  value="new home"
                  name="conditionRadio"
                  id="newHomeRadio"
                  onClick={handleCondition}
                />
                <label className="form-check-label" htmlFor="newHomeRadio">
                  New homes
                </label>
              </div>
              <div className="form-check house">
                <input
                  className="form-check-input"
                  type="radio"
                  value="good condition"
                  name="conditionRadio"
                  id="goodConditionRadio"
                  onClick={handleCondition}
                />
                <label
                  className="form-check-label"
                  htmlFor="goodConditionRadio">
                  Good condition
                </label>
              </div>
            </div>
            <div className="firstFilter">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="needs renovation"
                  name="conditionRadio"
                  id="needsRenovationRadio"
                  onClick={handleCondition}
                />
                <label
                  className="form-check-label"
                  htmlFor="needsRenovationRadio">
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
            <select
              className="form-select"
              aria-label="select"
              onChange={handleEquipment}>
              <option defaultValue="Indiferent">Indiferent</option>
              <option value="Full equipment">Full equipment</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Forniture">Forniture</option>
            </select>
          </div>
          <div className="col-md-4 mt-1">
            <p className="filtersTitle">Price range</p>
            <label htmlFor="priceRange" className="form-label">
              Choose your price
            </label>
            <input
              onChange={handlePrice}
              type="range"
              className="form-range"
              defaultValue="100"
              min="100"
              max="10000"
              id="priceRange"
            />
            <p>
              <span id="sliderValue">100</span>
            </p>
          </div>
          <div className="col-md-4 mt-1">
            <p className="filtersTitle">Publication date</p>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handlePublicationDate}>
              <option defaultValue="today">Today</option>
              <option value="24h">Last 24h</option>
              <option value="48h">Last 48h</option>
              <option value="last week">Last week</option>
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
