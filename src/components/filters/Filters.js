import React from "react";
import "./filters.css";

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
      <div className="row">
        <div className="col-md-3">
          <p className="filtersTitle mt-5">Type of home</p>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Flat/Apartment
              </label>
            </div>
            <div class="form-check house">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                House
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Duplex
              </label>
            </div>
            <div class="form-check penthouse">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Penthouses
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <p className="filtersTitle">Bedrooms</p>
          <span class="badge rounded-pill bg-dark">1</span>
          <span class="badge rounded-pill bg-dark">2</span>
          <span class="badge rounded-pill bg-dark">3</span>
          <span class="badge bg-dark text-light">4 or +</span>
        </div>
        <div className="col-md-4 mt-5">
          <p className="filtersTitle">Equipment</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>Indiferent</option>
            <option value="1">Full equipment</option>
            <option value="2">Kitchen</option>
            <option value="3">Forniture</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">Condition</p>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                New homes
              </label>
            </div>
            <div class="form-check house">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Good condition
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Needs renovation
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">Price range</p>
          <label for="customRange2" class="form-label">
            Choose your price
          </label>
          <input
            onChange={handleOutputRange}
            type="range"
            class="form-range"
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
          <select class="form-select" aria-label="Default select example">
            <option selected>Today</option>
            <option value="1">Last 24h</option>
            <option value="2">Last 48h</option>
            <option value="3">Last week</option>
          </select>
        </div>
        <div className="col-md-3 mt-5">
          <p className="filtersTitle">More filters</p>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Pets allowed
              </label>
            </div>
            <div class="form-check lift">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Lift
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Garden
              </label>
            </div>
            <div class="form-check penthouse">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Air conditioning
              </label>
            </div>
          </div>
          <div className="firstFilter">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Swimming pool
              </label>
            </div>
            <div class="form-check terrace">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
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
