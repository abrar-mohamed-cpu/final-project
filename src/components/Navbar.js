import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";
import logo from "../assets/img/Group 4.png";
import "./Navbar.css";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="Lamiva" className="navbar-logo" />
      </Link>

      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/medicines">Medicines</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="navbar-actions">
        <Link to="/medicines" aria-label="Search">
          <FiSearch size={26} />
        </Link>
        <Link to="/cart" aria-label="Cart" className="cart-link">
          <FiShoppingCart size={26} />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <Link to="/login" className="login-btn">
          login / sign up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;