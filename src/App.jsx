import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation
} from "react-router-dom";
import AOS from "aos";

import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import BulkOrder from "./components/BulkOrder";
import Cart from "./components/Cart";

import chickenCurry from "./assets/images/chicken-curry-cut.jpg";
import chickenBreast from "./assets/images/chicken-breast.jpg";
import chickenDrumsticks from "./assets/images/chicken-drumsticks.jpg";
import chickenWings from "./assets/images/chicken-wings.jpg";
import muttonChops from "./assets/images/mutton-chops.jpg";
import muttonKeema from "./assets/images/mutton-keema.jpg";
import muttonRibs from "./assets/images/mutton-ribs.jpg";
import muttonShoulder from "./assets/images/mutton-shoulder.jpg";
import beefSteak from "./assets/images/beef-steak.jpg";

import "./assets/style/style.css";

export const meatProducts = [
  {
    id: 1,
    name: "Chicken Curry Cut",
    category: "Chicken",
    price: 299,
    image: chickenCurry,
    description: "Fresh cuts for curries and everyday meals."
  },
  {
    id: 2,
    name: "Chicken Breast",
    category: "Chicken",
    price: 349,
    image: chickenBreast,
    description: "Lean cuts for grilling and meal preparation."
  },
  {
    id: 3,
    name: "Chicken Drumsticks",
    category: "Chicken",
    price: 319,
    image: chickenDrumsticks,
    description: "Juicy drumsticks for roasting or frying."
  },
  {
    id: 4,
    name: "Chicken Wings",
    category: "Chicken",
    price: 339,
    image: chickenWings,
    description: "Great for grills, snacks and spicy wings."
  },
  {
    id: 5,
    name: "Mutton Chops",
    category: "Mutton",
    price: 899,
    image: muttonChops,
    description: "Rich, tender chops for special meals."
  },
  {
    id: 6,
    name: "Mutton Keema",
    category: "Mutton",
    price: 799,
    image: muttonKeema,
    description: "Minced mutton for kebabs and curries."
  },
  {
    id: 7,
    name: "Mutton Ribs",
    category: "Mutton",
    price: 949,
    image: muttonRibs,
    description: "Flavorful ribs for slow cooking and grilling."
  },
  {
    id: 8,
    name: "Mutton Shoulder",
    category: "Mutton",
    price: 849,
    image: muttonShoulder,
    description: "A versatile cut for slow-cooked dishes."
  },
  {
    id: 9,
    name: "Premium Beef Steak",
    category: "Beef",
    price: 699,
    image: beefSteak,
    description: "A hearty steak cut for special meals."
  }
];

function AOSRouteRefresh() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

function Navbar({ count }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bz-navbar">
      <div className="container">
        <Link
          className="navbar-brand bz-brand"
          to="/"
          onClick={closeMenu}
        >
          <img
            src="/logo.jpg"
            className="brand-logo"
            alt="ButcherZone logo"
          />
        </Link>

        <button
          className="navbar-toggler bz-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" onClick={closeMenu}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bulkorder" className="nav-link" onClick={closeMenu}>
                Bulk Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" onClick={closeMenu}>
                Cart <span className="cart-count">{count}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bz-footer">
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          <div className="col-md-4">
            <img
              src="/logo.jpg"
              className="footer-logo"
              alt="ButcherZone"
            />
            <p>Fresh cuts. Honest quality. Better meals.</p>
          </div>

          <div className="col-md-4">
            <h5>Explore</h5>
            <Link to="/">Home</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/bulkorder">Bulk Orders</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">Shopping Cart</Link>
          </div>

          <div className="col-md-4">
            <h5>Get in Touch</h5>
            <p>Bengaluru, Karnataka, India</p>
            <p>+91 1111 1111</p>
            <p>hello@butcherzone.com</p>
          </div>
        </div>

        <hr />
        <p className="copyright">
          © 2026 ButcherZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);

      if (found) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...current, { ...product, qty: 1 }];
    });
  }

  function updateQty(id, change) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty + change }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  function removeItem(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <HashRouter>
      <AOSRouteRefresh />
      <Navbar count={count} />

      <main className="page-gap">
        <Routes>
          <Route
            path="/"
            element={<Home products={meatProducts} addToCart={addToCart} />}
          />
          <Route
            path="/products"
            element={
              <Products products={meatProducts} addToCart={addToCart} />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bulkorder" element={<BulkOrder />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQty={updateQty}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}