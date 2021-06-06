import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <a className="navbar-brand" href="/">Rikio Campbell</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //   </button>
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Rikio Campbell
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );

}

export default Navbar;

