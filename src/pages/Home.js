import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiTruck, FiArrowRight } from "react-icons/fi";
import mascot from "../assets/img/image 1.png";
import "./Home.css";

const steps = [
  { id: 1, icon: <FiSearch />, title: "Search", text: "find the medicine you need" },
  { id: 2, icon: <FiShoppingCart />, title: "Order", text: "choose your pharmacy and place your order" },
  { id: 3, icon: <FiTruck />, title: "Receive", text: "get your medicine delivered to your door" },
];

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/medicines?search=${search}`);
  }

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Medicine, just <span>a few clicks</span> away.
          </h1>
          <p>
            Order your medicine from trusted pharmacies and get them delivered
            right to your door
          </p>
          <button className="order-btn" onClick={() => navigate("/medicines")}>
            Order now <FiArrowRight />
          </button>

          <form className="hero-search" onSubmit={handleSearch}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search for medicines, health products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        <img src={mascot} alt="Lamiva mascot" className="hero-img" />
      </section>

      <section className="how">
        <h2>How does Lamiva work ?</h2>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className="step-icon">{step.icon}</div>
              <span className="step-number">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;