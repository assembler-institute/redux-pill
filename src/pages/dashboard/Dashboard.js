import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="container">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Type of home</th>
            <th scope="col">Bedrooms</th>
            <th scope="col">Equipment</th>
            <th scope="col">Condition</th>
            <th scope="col">Price range</th>
            <th scope="col">Pub. date</th>
            <th scope="col">+ filters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-outline-dark btn-lg mt-5">
        Download insights
      </button>
    </div>
  );
}
