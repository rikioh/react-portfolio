import React from "react";

function Navbar() {

  return (

      <nav className="navbar navbar-expand-lg navbar-dark"> 
        <a className="navbar-brand" href="/">Rikio Campbell</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <a className="nav-link text-light" href="/Portfolio"> Portfolio </a>
          <a className="nav-link text-light" href="/Contact"> Contact </a>
          <a className="nav-link active text-light" href="/">About </a>
        </button>
      </nav>
    );

}

export default Navbar;

