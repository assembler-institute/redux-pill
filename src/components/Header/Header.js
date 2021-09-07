import React from "react";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center header bg-dark px-4">
      <h1 className="text-light">Flat Finder</h1>

      <button type="button" className="btn btn-dark">
        Login
      </button>
    </div>
  );
}

export default Header;
