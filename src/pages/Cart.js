import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FiChevronUp, FiChevronDown, FiTrash2 } from "react-icons/fi";
import "./Cart.css";

const DELIVERY = 35;

function Cart() {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const navigate = useNavigate();

  if (isEmpty) {
    return (
      <div className="page">
        <p className="message">Your cart is empty</p>
        <p className="message">
          <Link to="/medicines">Continue Shopping</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> &gt; Cart
      </p>

      <div className="cart-header">
        <div>
          <h2>Your Cart ({totalUniqueItems})</h2>
          <p>Review your items and proceed to checkout</p>
        </div>
        <Link to="/medicines" className="continue-link">
          &lt; Continue Shopping
        </Link>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <span className="cart-name">{item.title}</span>
              <span className="cart-tag">{item.category}</span>
              <span className="cart-price">EGP {item.price}</span>

              <div className="qty">
                <span>{item.quantity}</span>
                <div className="qty-arrows">
                  <FiChevronUp
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  />
                  <FiChevronDown
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  />
                </div>
              </div>

              <FiTrash2
                className="trash"
                onClick={() => removeItem(item.id)}
              />
            </div>
          ))}
        </div>

        <div className="summary">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal ({totalUniqueItems} item)</span>
            <span>EGP {cartTotal}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>EGP {DELIVERY}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>EGP {cartTotal + DELIVERY}</span>
          </div>
          <button className="proceed-btn" onClick={() => navigate("/address")}>
            Proceed to finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;