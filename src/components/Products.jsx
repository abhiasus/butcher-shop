
import React, { useState } from "react";

export default function Products({ products, addToCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Chicken", "Mutton", "Beef"];

  const filtered = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="page-banner" data-aos="fade-down">
        <div className="container">
          <span className="eyebrow">FROM OUR COUNTER TO YOUR KITCHEN</span>
          <h1>Our Meat Collection</h1>
          <p>Nine cuts. Find the right one for your next great meal.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="catalog-tools">
            <div className="category-filters">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`filter-btn ${category === item ? "active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <input
              className="form-control search-input"
              placeholder="Search meat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="row g-4">
            {filtered.map((product, index) => (
              <div
                className="col-6 col-lg-4"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
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
                    </div>

                    <button
                      className="btn bz-btn w-100 mt-3"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state">
              No matching products found. Try another search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
