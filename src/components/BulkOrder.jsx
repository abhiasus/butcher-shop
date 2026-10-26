
import React, { useState } from "react";
import bulkBanner from "../assets/images/bulkorder-banner.jpg";

export default function BulkOrder() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        className="bulk-hero"
        data-aos="fade-down"
        style={{
          backgroundImage: `linear-gradient(90deg, #111e, #1119), url(${bulkBanner})`
        }}
      >
        <div className="container">
          <span className="eyebrow">BUILT FOR BIGGER ORDERS</span>
          <h1>
            Good food starts
            <br />
            with <span>good cuts.</span>
          </h1>
          <p>Bulk-order enquiries for restaurants, caterers, hotels and events.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="eyebrow">BUSINESS ORDERS</span>
              <h2>Tell us what your kitchen needs.</h2>
              <p className="muted-copy">
                Share your requirements so your order can be discussed with
                the shop.
              </p>

              <div className="bulk-benefit">
                <strong>01</strong>
                <div>
                  <h6>Flexible Requirements</h6>
                  <p>Describe the cuts and quantities you need.</p>
                </div>
              </div>

              <div className="bulk-benefit">
                <strong>02</strong>
                <div>
                  <h6>Discuss Pricing</h6>
                  <p>Request a quote for your order size.</p>
                </div>
              </div>

              <div className="bulk-benefit">
                <strong>03</strong>
                <div>
                  <h6>Plan Ahead</h6>
                  <p>Share your preferred delivery schedule.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="form-panel">
                <h3>Request a Bulk Quote</h3>
                <p className="muted-copy">Fields marked * are required.</p>

                {submitted ? (
                  <div className="success-message">
                    <h5>Request Details Accepted!</h5>
                    <p>
                      This front-end demo does not send the enquiry to a
                      business. Connect a backend or email service to do that.
                    </p>
                    <button
                      className="btn bz-btn"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Contact Name *</label>
                        <input
                          className="form-control"
                          required
                          placeholder="Full name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Business Name *</label>
                        <input
                          className="form-control"
                          required
                          placeholder="Restaurant or company"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          placeholder="business@example.com"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Phone *</label>
                        <input
                          type="tel"
                          className="form-control"
                          required
                          placeholder="+91..."
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Meat Category *</label>
                        <select
                          className="form-select"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select category</option>
                          <option>Chicken</option>
                          <option>Mutton</option>
                          <option>Beef</option>
                          <option>Mixed Order</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          Estimated Quantity (kg) *
                        </label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          required
                          placeholder="e.g. 25"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Preferred Date</label>
                        <input type="date" className="form-control" />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          Additional Requirements
                        </label>
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Cuts, preparation preferences and other details..."
                        />
                      </div>

                      <div className="col-12">
                        <button className="btn bz-btn w-100">
                          Request Quote ↗
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
