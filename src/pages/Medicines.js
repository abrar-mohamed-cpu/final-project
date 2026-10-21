import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { ProductsContext } from "../Data/AllData";
import { categoryMap } from "../Data/config";
import ProductCard from "../components/ProductCard";
import "./Medicines.css";

function Medicines() {
  const { products, loading, error } = useContext(ProductsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const medicines = products.filter((p) =>
    categoryMap.medicines.includes(p.category)
  );

  const shown = medicines.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> &gt; Medicines
      </p>

      <div className="page-search">
        <FiSearch />
        <input
          type="text"
          placeholder="Search for medicines, health products"
          value={search}
          onChange={(e) => setSearchParams({ search: e.target.value })}
        />
      </div>

      {loading && <p className="message">Loading...</p>}
      {error && <p className="message">{error}</p>}
      {!loading && !error && shown.length === 0 && (
        <p className="message">No products found</p>
      )}

      <div className="products-grid">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Medicines;