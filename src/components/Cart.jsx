
import React from "react";
import { Link } from "react-router-dom";
import cartBanner from "../assets/images/cart-banner.jpg";

export default function Cart({ cart, updateQty, removeItem }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="section-space cart-page" data-aos="fade-up">
      <div className="container">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1 className="cart-title">Your Shopping Cart.</h1>

        {cart.length === 0 ? (
          <div
            className="empty-cart"
            style={{
              backgroundImage: `linear-gradient(#ffffffed,#ffffffed), url(${cartBanner})`
            }}
          >
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is waiting.</h3>
            <p>Choose your favorite cuts and add them to your cart.</p>
            <Link to="/products" className="btn bz-btn">
              Explore Products ↗
            </Link>
          </div>
        ) : (
          <div className="row g-4 mt-2">
            <div className="col-lg-8">
              <div className="cart-table">
                {cart.map((item) => (
                  <div className="cart-row" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-product-info">
                      <h6>{item.name}</h6>
                      <p>₹{item.price} / kg</p>

                      <div className="qty-control">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.id, -1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <strong className="cart-line-total">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <Link to="/products" className="text-link continue-link">
                ← Continue Shopping
              </Link>
            </div>

            <div className="col-lg-4">
              <div className="summary-panel" data-aos="fade-left">
                <h4>Order Summary</h4>

                <div className="summary-line">
                  <span>Subtotal</span>
                  <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
                </div>

                <div className="summary-line">
                  <span>Delivery</span>
                  <span>Confirmed later</span>
                </div>

                <hr />

                <div className="summary-line summary-total">
                  <span>Estimated Total</span>
                  <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
                </div>

                <p className="muted-copy">
                  Delivery charges and product availability should be
                  confirmed with the shop.
                </p>

                <Link to="/contact" className="btn bz-btn w-100">
                  Enquire About Order ↗
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
