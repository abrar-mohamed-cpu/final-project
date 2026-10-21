import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from "react-use-cart";
import App from "./App";
import { AllData } from "./Data/AllData";
import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import "./index.css";
import "./responsive.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "medicines", element: <Medicines /> },
      { path: "categories", element: <Categories /> },
      { path: "categories/:slug", element: <CategoryPage /> },
      { path: "contact", element: <div>Contact</div> },
      { path: "cart", element: <Cart /> },
      { path: "address", element: <Address /> },
      { path: "login", element: <div>Login</div> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllData>
    <CartProvider>
      <ScrollToTop />
      <RouterProvider router={router} />
    </CartProvider>
  </AllData>
);