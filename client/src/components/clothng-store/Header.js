import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.store);
  return (
    <nav
      id="nav"
      className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
    >
      <NavLink to="/">
        <span
          style={{ color: "#b76e79", letterSpacing: "2px" }}
          className="navbar-brand font-weight-bolder"
        >
          GRIT
        </span>
      </NavLink>
      {cart.length > 0 && (
        <button type="button" class="btn btn-primary btn-sm">
          <i class="fas fa-shopping-cart"></i>{" "}
          <span class="badge badge-light"> {cart.length} </span>
        </button>
      )}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/" exact={true}>
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/store">
              {" "}
              Store{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              {" "}
              Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
