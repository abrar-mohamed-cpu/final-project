import axios from "axios";
import { useState, useEffect, createContext } from "react";

const ProductsContext = createContext();

function AllData({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0")
      .then((res) => setProducts(res.data.products))
      .catch(() => setError("Something went wrong, please try again"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { AllData, ProductsContext };