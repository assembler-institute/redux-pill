import React from "react";
import "./styles.css";
import {
  DatePicker,
  Select,
  CheckBox,
  RangeSlider,
  Input,
  Icon,
} from "@ui5/webcomponents-react";

function FilterPage() {
  return (
    //Filter Side
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-13">
          <div className="grid search">
            <div className="grid-body">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="grid-title">
                    <i className="fa fa-filter"></i> Filters
                  </h3>
                  <div className="filter-box">
                    <h6>Type of Home:</h6>
                    <div className="checkbox">
                      <CheckBox text="Flat/Apartment" className="checkboxes" />
                      <CheckBox text="House" className="checkboxes" />
                      <CheckBox text="Duplex" className="checkboxes" />
                      <CheckBox text="Penthouse" className="checkboxes" />
                    </div>
                  </div>
                  <div className="filter-box">
                    <h6>Condition:</h6>
                    <div className="checkbox">
                      <CheckBox text="New homes" className="checkboxes" />
                      <CheckBox text="Good condition" className="checkboxes" />
                      <CheckBox
                        text="Needs renovation"
                        className="checkboxes"
                      />
                    </div>
                  </div>
                  <div className="filter-box">
                    <h6>Bedrooms:</h6>
                    <Select>
                      <option>1</option>
                      <option>3</option>
                      <option>3</option>
                      <option>4 or +</option>
                    </Select>
                  </div>
                  <div className="filter-box">
                    <h6>Bathrooms:</h6>
                    <Select>
                      <option>1</option>
                      <option>3</option>
                      <option>3 or +</option>
                    </Select>
                  </div>
                  <div className="filter-box">
                    <h6>Price Range:</h6>
                    <RangeSlider
                      className="slider"
                      min="50000"
                      max="500000"
                      showTooltip="true"
                      startValue="150000"
                      endValue="500000"
                      step="50000"
                    />
                  </div>
                  <div className="filter-box">
                    <h6>Publication date:</h6>
                    <DatePicker />
                  </div>
                  <div className="filter-box">
                    <h6>More Filters:</h6>
                    <div className="checkbox">
                      <CheckBox text="Pets allowed" />
                      <CheckBox text="Air conditioning" />
                      <CheckBox text="Lift" />
                      <CheckBox text="Garden" />
                      <CheckBox text="Swimming pool" />
                      <CheckBox text="Terrace" />
                    </div>
                  </div>
                  {/* Result Side  */}
                  <div className="col-md-9">
                    <h3>
                      <i className="fa fa-file-o"></i> Results
                    </h3>
                    <hr></hr>
                    <div className="input-group">
                      <Input
                        icon={<Icon name="search" />}
                        className="search-bar"
                        placeholder="Search here..."
                      />
                      <span className="input-group-btn">
                        <button className="btn-search" type="button">
                          Search
                        </button>
                      </span>
                    </div>

                    {/* <p>Showing all results matching {searchResultHere}</p> */}

                    <div className="padding"></div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Order by <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a href="#">Name</a>
                            </li>
                            <li>
                              <a href="#">Date</a>
                            </li>
                            <li>
                              <a href="#">View</a>
                            </li>
                            <li>
                              <a href="#">Rating</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6 text-right">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default active"
                          >
                            <i className="fa fa-list"></i>
                          </button>
                          <button type="button" className="btn btn-default">
                            <i className="fa fa-th"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td className="number text-center">1</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/FF8C00"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 1</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$350</td>
                          </tr>
                          <tr>
                            <td className="number text-center">3</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/5F9EA0"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 3</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$1,050</td>
                          </tr>
                          <tr>
                            <td className="number text-center">3</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 3</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$550</td>
                          </tr>
                          <tr>
                            <td className="number text-center">4</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/8A3BE3"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 4</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$330</td>
                          </tr>
                          <tr>
                            <td className="number text-center">5</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 5</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </span>
                            </td>
                            <td className="price text-right">$540</td>
                          </tr>
                          <tr>
                            <td className="number text-center">6</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/6495ED"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 6</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$870</td>
                          </tr>
                          <tr>
                            <td className="number text-center">7</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/DC143C"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 7</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$630</td>
                          </tr>
                          <tr>
                            <td className="number text-center">8</td>
                            <td className="image">
                              <img
                                src="https://via.placeholder.com/400x300/9933CC"
                                alt=""
                              ></img>
                            </td>
                            <td className="product">
                              <strong>Product 8</strong>
                              <br></br>This is the product description.
                            </td>
                            <td className="rate text-right">
                              <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td className="price text-right">$1,550</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <ul className="pagination">
                      <li className="disabled">
                        <a href="#">«</a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">»</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
