
import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import chickenCategory from "../assets/images/category-chicken.jpg";
import muttonCategory from "../assets/images/category-mutton.jpg";
import beefCategory from "../assets/images/category-beef.jpg";
import specialCategory from "../assets/images/category-special.jpg";

export default function Home({ products, addToCart }) {
  const categories = [
    { name: "Chicken", image: chickenCategory },
    { name: "Mutton", image: muttonCategory },
    { name: "Beef", image: beefCategory },
    { name: "Special Cuts", image: specialCategory }
  ];

  return (
    <>
      <section className="home-hero" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 hero-copy">
              <span className="eyebrow">FRESHNESS YOU CAN TRUST</span>
              <h1>
                FRESH CUTS.
                <br />
                BETTER <span>MEALS.</span>
              </h1>
              <p>
                Quality cuts, carefully prepared and ready for your kitchen.
                Find your favorite cuts at ButcherZone.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="btn bz-btn">
                  Shop Fresh Cuts ↗
                </Link>
                <Link to="/bulkorder" className="btn bz-outline">
                  Bulk Enquiries
                </Link>
              </div>

              <div className="hero-stats">
                <div><strong>9</strong><small>Popular cuts</small></div>
                <div><strong>Fresh</strong><small>Prepared with care</small></div>
                <div><strong>Quality</strong><small>Everyday value</small></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-photo" data-aos="zoom-in">
                <img src={hero} alt="Premium meat cuts on a butcher board" />
                <div className="photo-label">
                  <span>THE BUTCHER'S PICK</span>
                  <strong>Quality in every cut.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-strip" data-aos="fade-up">
        <div className="container">
          <div className="row text-center g-3">
            <div className="col-6 col-md-3">
              <strong>01</strong><h6>Carefully Selected</h6>
              <p>Quality-focused cuts</p>
            </div>
            <div className="col-6 col-md-3">
              <strong>02</strong><h6>Cut Your Way</h6>
              <p>Choose your preferences</p>
            </div>
            <div className="col-6 col-md-3">
              <strong>03</strong><h6>Everyday Value</h6>
              <p>Clear product pricing</p>
            </div>
            <div className="col-6 col-md-3">
              <strong>04</strong><h6>Bulk Enquiries</h6>
              <p>For food businesses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SHOP BY CATEGORY</span>
              <h2>Find your favorite cuts.</h2>
            </div>
            <Link to="/products" className="text-link">View all products ↗</Link>
          </div>

          <div className="row g-4 mb-5">
            {categories.map((category, index) => (
              <div
                className="col-6 col-lg-3"
                key={category.name}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <Link to="/products" className="category-card">
                  <img src={category.image} alt={category.name} />
                  <span>{category.name} ↗</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="section-heading">
            <div>
              <span className="eyebrow">PICK YOUR CUT</span>
              <h2>Popular at the counter.</h2>
            </div>
          </div>

          <div className="row g-4">
            {products.slice(0, 4).map((product, index) => (
              <div
                className="col-6 col-lg-3"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="meat-card">
                  <div className="meat-image">
                    <img src={product.image} alt={product.name} />
                    <span className="category-tag">{product.category}</span>
                  </div>
                  <div className="meat-info">
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <div className="price-row">
                      <strong>₹{product.price}<small> / kg</small></strong>
                      <button
                        className="add-btn"
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bulk-banner" data-aos="fade-right">
        <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
          <div>
            <span className="eyebrow">FOR BUSINESSES</span>
            <h2>Need meat in larger quantities?</h2>
            <p>Tell us what you need for your restaurant, catering service or event.</p>
          </div>
          <Link to="/bulkorder" className="btn bz-btn">
            Request a Bulk Quote ↗
          </Link>
        </div>
      </section>
    </>
  );
}
