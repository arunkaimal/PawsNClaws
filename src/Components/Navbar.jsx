import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info-subtle">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            Paws'N'Claws
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                  })}
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/cats"}
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                  })}
                >
                  Cats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/dogs"}
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                  })}
                >
                  Dogs
                </NavLink>
              </li>
            </ul>
            <NavLink to={"/cart"}>
            <div className="cart-icon me-3 fs-4 text-light bg-dark text-center px-3 rounded">
            <i className="fa-solid fa-cart-plus"></i>
            </div>
            </NavLink>
            <NavLink to={"/login"}>
              <button className="btn btn-light bg-dark text-light float-sm-end">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
