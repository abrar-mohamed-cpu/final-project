import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";
import { USD_TO_EGP } from "../Data/config";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addItem } = useCart();
  const price = Math.round(product.price * USD_TO_EGP);

  return (
    <div className="product-card">
      <FiHeart className="heart" />
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>EGP {price}</p>
      <div className="card-actions">
        <button
          className="add-btn"
          onClick={() => addItem({ ...product, price })}
        >
          Add To CART
        </button>
        <FiShoppingCart size={22} />
      </div>
    </div>
  );
}

export default ProductCard;