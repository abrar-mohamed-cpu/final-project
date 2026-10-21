import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { ProductsContext } from "../Data/AllData";
import { categoryMap, categoriesInfo } from "../Data/config";
import "./Categories.css";

function Categories() {
  const { products } = useContext(ProductsContext);

  function getImage(slug) {
    const product = products.find((p) => categoryMap[slug].includes(p.category));
    return product ? product.thumbnail : "";
  }

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> &gt; Categories
      </p>

      <div className="categories-grid">
        {categoriesInfo.map((cat) => (
          <div className="category-card" key={cat.slug}>
            <div className="category-img">
              {getImage(cat.slug) && <img src={getImage(cat.slug)} alt={cat.name} />}
            </div>
            <h3>{cat.name}</h3>
            <p>{cat.text}</p>
            <Link to={cat.link} className="browse-btn">
              Browse {cat.name} <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;