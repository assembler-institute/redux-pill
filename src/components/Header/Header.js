import React from "react";
import { Link } from "react-router-dom";

import { HOME_URL } from "../../constants/routes";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center header bg-dark px-4">
      <Link to={HOME_URL}>
<<<<<<< HEAD
        <h1 className="text-light">Flat Finder</h1>
=======
        <h1 className="text-light page-title">Flat Finder</h1>
>>>>>>> master
      </Link>
      <button type="button" className="btn btn-dark">
        Login
      </button>
    </div>
  );
}

export default Header;
