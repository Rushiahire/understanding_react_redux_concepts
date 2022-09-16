import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Nav.Link as={Link} to={'/'} >HOME</Nav.Link>
              </li>
              <li className="nav-item">
                
                <Nav.Link as={Link} to={'/data'} >DATA </Nav.Link>
              </li>

              <li className="nav-item">
                
                <Nav.Link as={Link} to={'/addData'} >Add Data</Nav.Link>
              </li>
             
              <li className="nav-item">
                
                <Nav.Link as={Link} to={'/viewData'} >View All Data</Nav.Link>
              </li>

              <li className="nav-item">
                
                <Nav.Link as={Link} to={'/shipping'} >Shipping</Nav.Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
