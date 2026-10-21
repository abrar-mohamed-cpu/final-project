import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "react-use-cart";
import logo from "../assets/img/Group 4.png";
import "./Navbar.css";

function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="Lamiva" className="navbar-logo" />
      </Link>

      <nav
        className={open ? "navbar-links open" : "navbar-links"}
        onClick={() => setOpen(false)}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/medicines">Medicines</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login" className="mobile-login">
          Login / Sign up
        </NavLink>
      </nav>

      <div className="navbar-actions">
        <Link to="/search" aria-label="Search">
          <FiSearch size={26} />
        </Link>
        <Link to="/cart" aria-label="Cart" className="cart-link">
          <FiShoppingCart size={26} />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <Link to="/login" className="login-btn">
          login / sign up
        </Link>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;