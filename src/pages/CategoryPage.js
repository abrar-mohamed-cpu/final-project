import { useContext } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { ProductsContext } from "../Data/AllData";
import { categoryMap, categoriesInfo } from "../Data/config";
import ProductCard from "../components/ProductCard";
import "./Medicines.css";

function CategoryPage() {
  const { slug } = useParams();
  const { products, loading, error } = useContext(ProductsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const info = categoriesInfo.find((c) => c.slug === slug);

  if (!info) {
    return <p className="message">Category not found</p>;
  }

  const shown = products
    .filter((p) => categoryMap[slug].includes(p.category))
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/categories">Categories</Link>{" "}
        &gt; {info.name}
      </p>

      <div className="page-search">
        <FiSearch />
        <input
          type="text"
          placeholder={`Search in ${info.name}`}
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

export default CategoryPage;
