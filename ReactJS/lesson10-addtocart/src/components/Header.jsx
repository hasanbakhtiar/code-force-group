import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const {totalItems} = useCart();
  return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link to="/" className="navbar-brand" href="#">Main</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link"  to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link"  to="/products">Products</NavLink>
        </li>
    
      </ul>
    <Link  to="/cart" class="btn btn-warning position-relative">
    <BsCart3 />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {totalItems}
  </span>
</Link>
    </div>
  </div>
</nav>

  )
}

export default Header