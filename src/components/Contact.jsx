
import React, { useState } from "react";
import contactBanner from "../assets/images/contact-banner.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        className="page-banner"
        data-aos="fade-down"
        style={{
          backgroundImage: `linear-gradient(90deg, #111e, #1118), url(${contactBanner})`
        }}
      >
        <div className="container">
          <span className="eyebrow">WE'RE HERE TO HELP</span>
          <h1>Let's Talk.</h1>
          <p>Questions about products or orders? Send us a message.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="eyebrow">CONTACT DETAILS</span>
              <h2>Come say hello.</h2>
              <p className="muted-copy">
                Get in touch with our team during business hours.
              </p>

              <div className="contact-detail">
                <span>01</span>
                <div>
                  <h6>Visit Us</h6>
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>02</span>
                <div>
                  <h6>Call Us</h6>
                  <p>+91 1111 1111</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>03</span>
                <div>
                  <h6>Email Us</h6>
                  <p>hello@butcherzone.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>04</span>
                <div>
                  <h6>Business Hours</h6>
                  <p>Monday–Saturday, 8 AM–8 PM</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="form-panel">
                <h3>Send us a message</h3>
                <p className="muted-copy">Fill in your details below.</p>

                {submitted ? (
                  <div className="success-message">
                    <h5>Thank you!</h5>
                    <p>
                      Your form passed browser validation. This demo does not
                      send messages to a real email address.
                    </p>
                    <button
                      className="btn bz-btn"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Your Name</label>
                        <input
                          className="form-control"
                          required
                          placeholder="Full name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Subject</label>
                        <input
                          className="form-control"
                          required
                          placeholder="How can we help?"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          required
                          placeholder="Write your message..."
                        />
                      </div>

                      <div className="col-12">
                        <button className="btn bz-btn w-100">
                          Send Message ↗
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
