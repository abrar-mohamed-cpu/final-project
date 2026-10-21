import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FiMapPin, FiCheck } from "react-icons/fi";
import "./Address.css";

function Address() {
  const { isEmpty, emptyCart } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    city: "",
    phone: "",
    street: "",
  });
  const [save, setSave] = useState(true);
  const [error, setError] = useState("");
  const [ordered, setOrdered] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLocation() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setForm({
          ...form,
          street: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        });
      },
      () => setError("Could not get your location")
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.fullName || !form.city || !form.phone || !form.street) {
      setError("Please fill in all fields");
      return;
    }

    if (save) {
      localStorage.setItem("lamivaAddress", JSON.stringify(form));
    }

    emptyCart();
    setOrdered(true);
  }

  if (ordered) {
    return (
      <div className="success">
        <div className="success-icon">
          <FiCheck />
        </div>
        <h2>Order Placed Successfully !</h2>
        <p>Thank you for shopping with Lamiva pharmacy.</p>
        <p>Your order has been confirmed and is on its way.</p>

        <div className="success-buttons">
          <Link to="/">Back to Home</Link>
          <Link to="/medicines">Continue Shopping</Link>
        </div>
      </div>
    );
  }

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
      <h2 className="address-title">Your Address</h2>
      <p className="address-sub">Complete your details and place your order</p>

      <form className="address-form" onSubmit={handleSubmit}>
        <p className="address-label">
          <FiMapPin /> Delivery address
        </p>

        <div className="address-grid">
          <label>
            Full Name
            <input name="fullName" value={form.fullName} onChange={handleChange} />
          </label>
          <label>
            City / Area
            <input name="city" value={form.city} onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label>
            Street Address
            <input name="street" value={form.street} onChange={handleChange} />
          </label>
        </div>

        <label className="save-row">
          <input
            type="checkbox"
            checked={save}
            onChange={(e) => setSave(e.target.checked)}
          />
          Save this address for the next time
        </label>

        <button type="button" className="location-btn" onClick={handleLocation}>
          <FiMapPin /> Use My Current Location
        </button>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="confirm-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default Address;