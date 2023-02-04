import React from 'react'
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
  const state = useSelector((state)=> state.handleCard)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">PRODUCTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/facebook">FACEBOOK</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                 <i classNameName="fa fa-sign-in me-2"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                 <i classNameName="fa fa-registered me-2"></i> Register
              </NavLink>
              <NavLink to="/Cart" className="btn btn-outline-dark ms-2">
                 <i className="fa fa-cart-arrow-down me-2"></i> Cart(
                  {state.length}
                 )
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
