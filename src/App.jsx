import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./index.css";

const improveItems = [
  "Cart upsells",
  "Product recommendations",
  "Subscription conversion",
  "Average order value",
  "Customer retention",
];

const includedItems = [
  "Cart upsell review",
  "Product recommendation review",
  "Subscription conversion review",
  "Retention opportunity review",
  "Short action plan with priority improvements",
];

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">Veltrix</div>
            <div className="brand-subtitle">
              Helping supplement brands increase revenue through smarter systems
            </div>
          </div>

          <nav className="nav-links">
            <a href="#improve">Services</a>
            <a href="#offer">Offer</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btn-dark btn-small" href="#contact">
            Request a Review
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-left">
              <p className="eyebrow">
                Helping supplement brands increase revenue through smarter systems
              </p>

              <h1 className="hero-title">
                AI Revenue Optimization for Supplement Brands
              </h1>

              <p className="hero-text">
                We help supplement brands increase average order value, improve
                subscription conversions, and grow customer retention through
                practical AI, reliable automation, and smarter revenue systems.
              </p>

              <div className="hero-actions">
                <a className="btn btn-dark" href="#contact">
                  Request a Review
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="card soft-card">
              <p className="card-label">Why this works</p>
              <h2 className="card-title">
                Unlock more revenue from the traffic you already have.
              </h2>
              <p className="card-text">
                Veltrix helps supplement brands identify overlooked revenue
                opportunities across cart upsells, product recommendations,
                subscriptions, and retention.
              </p>

              <div className="info-stack">
                <div className="info-box">
                  <p className="info-title">Focus</p>
                  <p className="info-text">
                    AOV, subscription conversion, and customer retention.
                  </p>
                </div>
                <div className="info-box">
                  <p className="info-title">Offer</p>
                  <p className="info-text">
                    Revenue Opportunity Review for Supplement Brands.
                  </p>
                </div>
                <div className="info-box">
                  <p className="info-title">Deliverable</p>
                  <p className="info-text">
                    A focused one-time review with clear observations, priority
                    opportunities, and next-step recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container trust-wrap">
          <div className="trust-box">
            <div className="trust-grid">
              <div>
                <p className="mini-label">Clear focus</p>
                <p className="mini-text">
                  Built around revenue opportunities that matter most for
                  supplement brands.
                </p>
              </div>
              <div>
                <p className="mini-label">Practical review</p>
                <p className="mini-text">
                  A straightforward review with useful observations, not generic
                  marketing talk.
                </p>
              </div>
              <div>
                <p className="mini-label">Direct contact</p>
                <p className="mini-text">
                  Simple contact with Veltrix to discuss fit, goals, and next
                  steps.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="improve" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">What We Help Improve</p>
              <h2 className="section-title">
                Key revenue opportunities across the customer journey
              </h2>
            </div>

            <div className="grid-three">
              {improveItems.map((item) => (
                <div key={item} className="card">
                  <div className="item-row">
                    <CheckCircle2 size={18} />
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head narrow">
              <p className="eyebrow">Short Description</p>
              <h2 className="section-title">
                Veltrix helps supplement brands make more money from the traffic
                they already have.
              </h2>
              <p className="section-text">
                We focus on key revenue opportunities across the customer
                journey, including cart upsells, product recommendations,
                subscription conversion, and customer retention.
              </p>
            </div>
          </div>
        </section>

        <section id="offer" className="section">
          <div className="container">
            <div className="section-head narrow">
              <p className="eyebrow">Offer</p>
              <h2 className="section-title">
                Revenue Opportunity Review for Supplement Brands
              </h2>
              <p className="section-text">
                A focused review designed to help supplement brands identify
                overlooked revenue opportunities across their store and customer
                journey.
              </p>
            </div>

            <div className="offer-grid">
              <div className="card">
                <p className="card-label">What’s Included</p>
                <div className="included-list">
                  {includedItems.map((item) => (
                    <div key={item} className="included-item">
                      <CheckCircle2 size={18} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card dark-card">
                <p className="card-label light">Outcome</p>
                <h3 className="dark-title">
                  Identify overlooked revenue opportunities.
                </h3>
                <p className="dark-text">
                  Uncover practical ways to improve AOV, strengthen subscription
                  performance, and increase customer retention.
                </p>

                <div className="dark-box">
                  <p className="card-label light">Price</p>
                  <p className="price">$300</p>
                  <p className="light-text">One-time review</p>
                </div>

                <div className="dark-box">
                  <p className="card-label light">Deliverable</p>
                  <p className="light-text">
                    A short revenue review with key observations, priority
                    opportunities, and clear next-step recommendations.
                  </p>
                </div>

                <a className="btn btn-light btn-full" href="#contact">
                  Request a Review
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-cta">
              <p className="card-label light">Call to Action</p>
              <h2 className="cta-title">
                Let’s identify revenue opportunities in your store.
              </h2>
              <p className="dark-text">
                A focused review to uncover practical ways to improve average
                order value, subscription performance, and retention.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-light"
                  href="mailto:veltrixgrowth.ai@gmail.com?subject=Revenue%20Opportunity%20Review"
                >
                  Request a Review
                </a>
                <a
                  className="btn btn-outline-light"
                  href="mailto:veltrixgrowth.ai@gmail.com?subject=Contact%20Veltrix"
                >
                  Contact Veltrix
                </a>
              </div>
            </div>

            <div className="card">
              <p className="card-label">Contact</p>
              <h3 className="card-title">Get in touch</h3>
              <p className="card-text">
                Reach out directly to discuss your store, your revenue goals, and
                whether the review is a good fit.
              </p>
              <p className="small-muted">
                Direct, simple contact. No complicated process — just a focused
                conversation about where revenue opportunities may exist.
              </p>

              <div className="contact-list">
                <div className="info-box">
                  <p className="mini-label">Phone</p>
                  <a href="tel:+14026152139" className="contact-link">
                    +1 (402) 615-2139
                  </a>
                </div>

                <div className="info-box">
                  <p className="mini-label">Email</p>
                  <a
                    href="mailto:veltrixgrowth.ai@gmail.com"
                    className="contact-link"
                  >
                    veltrixgrowth.ai@gmail.com
                  </a>
                </div>

                <div className="info-box">
                  <p className="mini-label">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/josecorreaai-1028c02/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    linkedin.com/in/josecorreaai-1028c02
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <p className="footer-brand">Veltrix</p>
            <p className="footer-text">
              AI revenue optimization for supplement brands through practical
              systems, focused reviews, and clear next-step recommendations.
            </p>
          </div>

          <div className="footer-links">
            <span>+1 (402) 615-2139</span>
            <span>veltrixgrowth.ai@gmail.com</span>
            <span>linkedin.com/in/josecorreaai-1028c02</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Veltrix. All rights reserved.</p>
          <p>Revenue Opportunity Review for Supplement Brands</p>
        </div>
      </footer>
    </div>
  );
}