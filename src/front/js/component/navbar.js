import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-light">
      <div className="container-fluid p-2">
        <div className="row d-flex justify-content-around">
          <div className="col-6">
            <Link to="/">
              <span className="navbar-brand mb-0 h1">Menu</span>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="col-3">
              <Link to="/registro">
                <button className="btn btn-primary">Register</button>
              </Link>
            </div>
            <div className="col-3 d-flex flex-direction-">
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
